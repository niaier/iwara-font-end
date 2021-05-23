<!-- 组件说明 -->
<template>
	<div class="home">
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
						<el-link target="_blank" data-id="love">Love</el-link>
						<el-link target="_blank" data-id="views">View</el-link>
					</h2>
				</div>
				<div class="right-order" @click="orderClick">
					<el-link data-id="asc">正序</el-link>
					<el-link data-id="desc">倒序</el-link>
				</div>
			</div>
			<!-- 视频区域 -->
			<el-row :gutter="10">
				<!-- 卡片单元盒子 -->
				<el-col
					:xs="12"
					:sm="12"
					:md="6"
					:lg="6"
					v-for="item in videoData"
					:key="item.id"
					><div class="grid-content bg-purple">
						<el-card :body-style="{ padding: '0px' }">
							<!-- 卡片上部 -->
							<div class="top-card">
								<!-- 统计信息 -->
								<div class="statistical-info">
									<div>
										<span
											class="iconfont icon-favorites"
										></span
										>{{ item.love }}
									</div>
									<div>
										<span class="iconfont icon-browse">
										</span
										>{{ item.views }}
									</div>
								</div>
								<!-- 缩略图区域 -->
								<img
									src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
									class="image"
									width="240px"
									height="180px"
								/>
							</div>
							<!-- 信息区域 -->
							<div
								class="video-info"
								style="padding: 10px 0 0 10px"
							>
								<!-- 视频信息上部 -->
								<div class="top">
									<div class="left-title">
										<span>标题</span>
										<!-- <span>{{ item.title }}</span> -->
									</div>
								</div>
								<!-- 视频信息下部 -->
								<div class="bottom clearfix">
									<span class="producer"
										><span
											class="iconfont icon-bussiness-man"
										></span
										>{{ item.producer }}</span
									>
									<time class="time">{{
										item.upload_time
									}}</time>
								</div>
							</div>
						</el-card>
					</div></el-col
				>
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
	</div>
</template>

<script>
import moment from 'moment'
export default {
	components: {},
	data() {
		return {
			videoData: [],
			total: 0,
			pageSize: 40,
			curPage: 1,
			sort: 'upload_time',
			desc: 'desc',
		}
	},
	created() {
		this.getVideoData()
	},
	mounted() {},
	computed: {},
	methods: {
		async getVideoData() {
			const { data: res } = await this.$http.get('/api/video', {
				params: {
					page: this.curPage,
					pagesize: this.pageSize,
					sort: this.sort,
					desc: this.desc,
				},
			})
			this.$router.push({
				path: '/video',
				query: {
					page: this.curPage,
					pagesize: this.pageSize,
					sort: this.sort,
					desc: this.desc,
				},
			})
			// 格式化时间
			res.video.forEach((item) => {
				item.upload_time = moment(item.upload_time).format(
					'YYYY-MM-DD HH:mm'
				)
			})
			this.videoData = res.video
			this.total = res.total
			// console.log(res.video[0].id)
		},
		async handleCurrentChange(val) {
			this.curPage = val
			this.getVideoData()
			console.log(`当前页: ${val}`)
		},
		async handleSizeChange(val) {
			this.pageSize = val
			this.getVideoData()
			console.log(`每页 ${val} 条`)
		},
		async sortClick(e) {
			this.sort = e.target.parentNode.dataset.id
			this.getVideoData()
			console.log(`根据${this.sort}排序`)
		},
		async orderClick(e) {
			this.desc = e.target.parentNode.dataset.id
			this.getVideoData()
			console.log(`根据${this.desc}排序`)
		},
	},
}
</script>

<style lang='scss' scoped>
//@import url()

// 版心
.w {
	width: 80%;
	margin: 0 auto;
}

// 排序部分
.sort {
	display: flex;
	justify-content: space-between;

	// 排序标题
	h2 {
		.icon-play {
			font-size: 28px;
		}
	}

	.el-link {
		padding: 0 0.3em;
	}

	// 排序右边
	.right-order {
		.el-link {
			line-height: 72px;
		}
	}
}

// 视频列表部分
.el-row {
	margin-bottom: 20px;
	display: flex;
	align-content: space-between;
	flex-wrap: wrap;
	justify-content: space-between;
	// height: 500px;
	&:last-child {
		margin-bottom: 0;
	}

	.el-col {
		// background-color: darkcyan;
		// margin-top: 20px;
		// margin-bottom: 20px;
		// border-radius: 4px;
		// width: 400px;
		// height: 350px;

		// 网格部分
		.grid-content {
			min-width: 240px;
			min-height: 240px;
			display: flex;
			justify-content: center;
			margin-bottom: 20px;
			// 视频卡片区域
			.el-card {
				position: relative;
				width: 240px;
			}
		}
	}
}

.row-bg {
	padding: 10px 0;
	background-color: #f9fafc;
}

// 卡片信息部分

// 卡片上部

// 卡片下部

.video-info {
	height: 75px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	// justify-content:space-between;

	.time {
		font-size: 12px;
		color: gray;
	}
}

.bottom span {
	font-size: 12px;
	color: gray;
}

.icon-bussiness-man {
	font-size: 16px !important;
}

.top {
	// display: flex;
	// justify-content:space-between;
	// .right-info {
	// 	padding-right: 10px;
	// }
}
.bottom {
	margin-top: 5px;
	margin-bottom: 5px;
	display: flex;
	justify-content: space-between;
	line-height: 18.4px;

	.producer {
		margin-left: -2px;
	}
	.time {
		display: inline-block;
		padding-top: 2px;
		padding-right: 10px;
		vertical-align: bottom;
	}
}

// 视频统计信息
.statistical-info {
	width: 100%;
	display: flex;
	justify-content: space-between;
	position: absolute;
	top: 150px;
	color: #fff;
	div:first-child {
		margin-left: 4px;
	}
	div:last-child {
		margin-right: 6px;
	}
}

.top {
	.left-title {
		span {
			width: 220px;
			// overflow: hidden;
			// text-overflow: ellipsis;
			// white-space: nowrap;
			overflow: hidden;

			text-overflow: ellipsis;

			display: -webkit-box;

			-webkit-box-orient: vertical;

			-webkit-line-clamp: 2;
		}
	}
}

.bg-purple-dark {
	background: #99a9bf;
}
.bg-purple {
	background: #d3dce6;
}
.bg-purple-light {
	background: #e5e9f2;
}
</style>