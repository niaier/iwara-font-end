<!-- 组件说明 -->
<template>
	<div class="love">
		<el-container>
			<el-main>
				<!-- 筛选区域 -->
				<div class="filter-box">
					<el-menu class="el-menu-demo w" mode="horizontal">
						<el-menu-item
							index="all"
							@click="getSpecialFavorite('')"
						>
							ALL
						</el-menu-item>
						<el-menu-item
							@click="getSpecialFavorite(count)"
							v-for="count in 9"
							:key="count"
							:index="count.toString()"
							:data-id="count"
							>{{ "favorite" + count }}</el-menu-item
						>
					</el-menu>
				</div>

				<!-- 视频列表区域 -->
				<div class="w">
					<!-- 排序导航 -->
					<div class="sort">
						<div class="left-sort">
							<h2 @click="sortClick">
								<span
									class="iconfont icon-play"
									style="color: red"
								></span
								>SortBy:
								<el-link target="_blank" data-id="upload_time"
									>Date</el-link
								>
								<el-link target="_blank" data-id="love"
									>Love</el-link
								>
								<el-link target="_blank" data-id="views"
									>View</el-link
								>
							</h2>
						</div>
						<div class="right-order" @click="orderClick">
							<el-link data-id="asc">正序</el-link>
							<el-link data-id="desc">倒序</el-link>
						</div>
					</div>
					<!-- 视频区域 -->
					<el-row>
						<!-- 卡片单元盒子 -->
						<el-col
							:span="5"
							v-for="item in videoData"
							:key="item.id"
							><div class="grid-content bg-purple">
								<el-card
									:body-style="{
										padding: '0px',
										height: '100%',
									}"
								>
									<!-- 卡片上部 -->
									<div class="card-top">
										<!-- 统计信息 -->
										<div class="statistical-info">
											<div>
												<span
													class="iconfont icon-favorites"
												></span
												>{{ item.love }}
											</div>
											<div>
												<span
													class="iconfont icon-browse"
												>
												</span
												>{{ item.views }}
											</div>
										</div>
										<!-- 缩略图区域 -->
										<img
											src="../assets/pic/pic.webp"
											class="image"
										/>
									</div>
									<!-- 卡片下部 -->
									<div class="card-bottom">
										<!-- 视频信息上部 -->
										<div class="info-top">
											<div class="left-title">
												<el-link
													:underline="false"
													:href="`/play/${item.dirname}`"
												>
													<span>标题</span>
												</el-link>
												<!-- <span>{{ item.title }}</span> -->
											</div>
										</div>
										<!-- 视频信息下部 -->
										<div class="info-bottom clearfix">
											<span class="producer"
												><span
													class="iconfont icon-bussiness-man"
												></span
												>{{ item.producer }}</span
											>
											<time class="time"
												><span
													class="iconfont icon-ontimeshipment"
												></span
												>{{ item.upload_time }}</time
											>
										</div>
									</div>
								</el-card>
							</div></el-col
						>

						<!-- 解决flex最后一行排列问题 -->
						<el-col
							:span="5"
							v-for="count in 5"
							:key="'empty' + count.toString()"
						></el-col>
					</el-row>

					<!-- 分页功能 -->
					<div class="block">
						<!-- <span class="demonstration">完整功能</span> -->
						<!-- @size-change="handleSizeChange"
				@current-change="handleCurrentChange"
				:current-page="currentPage4" -->
						<el-pagination
							@size-change="handleSizeChange"
							@current-change="handleCurrentChange"
							:page-size="pageSize"
							:page-sizes="[20, 40, 80, 200]"
							:current-page="curPage"
							layout="total, sizes, prev, pager, next, jumper"
							:total="total"
						>
						</el-pagination>
					</div>
				</div>
			</el-main>
		</el-container>
	</div>
</template>

<script>
//import x from ''
import moment from 'moment'
export default {
	components: {},
	data () {
		return {
			videoData: [],
			total: 0,
			pageSize: 40,
			curPage: 1,
			sort: 'upload_time',
			desc: 'desc',
			loveLevel: '',
		}
	},
	created () {
		this.getVideoData()
	},
	computed: {},
	methods: {
		async getVideoData () {
			const { data: res } = await this.$http.get('/api/love', {
				params: {
					page: this.curPage,
					pagesize: this.pageSize,
					sort: this.sort,
					desc: this.desc,
					loveLevel: this.loveLevel,
				},
			})
			console.log(res.status)
			if (res.status) return (this.videoData = [])
			this.$router.push({
				path: '/love',
				query: {
					page: this.curPage,
					pagesize: this.pageSize,
					sort: this.sort,
					desc: this.desc,
				},
			})
			// 格式化时间
			res.loveData.forEach((item) => {
				item.upload_time = moment(item.upload_time).format(
					'YYYY-MM-DD HH:mm'
				)
			})
			this.videoData = res.loveData
			this.total = res.total
			// console.log(res.video[0].id)
		},
		async handleCurrentChange (val) {
			this.curPage = val
			this.getVideoData()
			console.log(`当前页: ${val}`)
		},
		async handleSizeChange (val) {
			this.pageSize = val
			this.getVideoData()
			console.log(`每页 ${val} 条`)
		},
		async sortClick (e) {
			this.sort = e.target.parentNode.dataset.id
			this.getVideoData()
			console.log(`根据${this.sort}排序`)
		},
		async orderClick (e) {
			this.desc = e.target.parentNode.dataset.id
			this.getVideoData()
			console.log(`根据${this.desc}排序`)
		},
		async getSpecialFavorite (count) {
			this.loveLevel = count
			this.getVideoData()
		},
	},
}
</script>

<style lang='scss' scoped>
//@import url()
* {
	padding: 0;
	margin: 0;
}
// 版心
.w {
	width: 68.75rem;
	margin: 0 auto;
	height: 100%;
}
.love {
	height: 100%;
}

.el-container {
	height: 100%;
}
.el-main {
	height: 100%;
}
.el-row:after {
	content: "";
	width: 220px;
}

// 排序部分
.sort {
	display: flex;
	justify-content: space-between;

	// 排序标题
	h2 {
		line-height: 53.6px;
		.icon-play {
			font-size: 1.75rem;
		}
	}

	.el-link {
		padding: 0 0.3em;
	}

	// 排序右边
	.right-order {
		.el-link {
			line-height: 4.5rem;
		}
	}
}

// 视频列表部分
// 排版布局
.el-row {
	width: 68.75rem;
	margin: 0 auto;
	margin-bottom: 20px;
	display: flex;
	// align-content: space-between;
	flex-wrap: wrap;
	justify-content: space-between;
	// height: 500px;
	&:last-child {
		margin-bottom: 0;
	}

	.el-col {
		.grid-content {
			// min-width: 15rem;
			height: 13.75rem;
			display: flex;
			justify-content: center;
			margin-bottom: 1.25rem;
			.el-card {
				border: 1px solid #ebeef5;
			}
		}
	}
}

// 卡片部分
// 单元盒子
.el-col-5 {
	width: 20%;
}
// 视频卡片区域

.el-card {
	position: relative;
	width: 12.5rem;
	border-radius: 0.25rem;
	// height: 112px;
}

.el-card__body {
	height: 1000px !important;
}
// 卡片上部

.card-top {
	position: relative;
	img {
		width: 12.5rem;
		height: 7rem;
	}

	// 统计信息
	.statistical-info {
		width: 100%;
		display: flex;
		justify-content: space-between;
		position: absolute;
		bottom: 0.625rem;
		padding: 0 0.625rem;
		box-sizing: border-box;
		color: #fff;
	}
}

// 卡片下部
.card-bottom {
	display: flex;
	flex-direction: column;
	padding-left: 0.625rem;
	justify-content: space-between;
	height: 6.25rem;
	// 信息上部

	.info-top {
		margin-bottom: 0.625rem;
		.left-title {
			margin-top: 0.3125rem;
			font-weight: 600;
			span {
				text-overflow: -o-ellipsis-lastline;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				line-clamp: 2;
				-webkit-box-orient: vertical;
			}
		}
	}

	.info-bottom {
		font-size: 0.75rem;
		margin-bottom: 0.5rem;
		.producer {
			display: block;
			margin-bottom: 0.625rem;
		}
	}
}

// .bg-purple-dark {
// 	background: #99a9bf;
// }
// .bg-purple {
// 	background: #d3dce6;
// }
// .bg-purple-light {
// 	background: #e5e9f2;
// }
</style>