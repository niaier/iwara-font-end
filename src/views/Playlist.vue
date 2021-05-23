<!-- 组件说明 -->
<template>
	<div class="playlist">
		<el-container>
			<el-aside :width="isCollapse ? '64px' : '200px'">
				<div @click="toggleCollapse">|||</div>
				<!-- @open="handleOpen"
					@close="handleClose" -->
				<el-menu
					class="el-menu-vertical-demo"
					@open="handleOpen"
					@close="handleClose"
					background-color="#545c64"
					text-color="#fff"
					active-text-color="#ffd04b"
					:default-openeds="openeds"
					:collapse="isCollapse"
					:collapse-transition="false"
				>
					<!-- 一级菜单 -->
					<el-submenu index="playlist">
						<template slot="title">
							<i class="el-icon-menu"></i>
							<span>播放列表</span>
						</template>
						<el-menu-item
							:index="index.toString()"
							v-for="(item, index) in playlist"
							:key="item.play_list_id"
							@click="handleList(item.play_list_id)"
						>
							<span class="iconfont icon-video"></span>
							{{ item.play_list_name }}
						</el-menu-item>
					</el-submenu>
				</el-menu>
			</el-aside>
			<el-main>
				<!-- 视频区域 -->
				<el-row>
					<!-- 卡片单元盒子 -->
					<el-col
						:span="5"
						class="unit-box"
						v-for="(item, index) in videoData"
						:key="index"
					>
						<div class="grid-content bg-purple">
							<el-card
								:body-style="{ padding: '0px', height: '100%' }"
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
											<span class="iconfont icon-browse">
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
						</div>
					</el-col>
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
			</el-main>
		</el-container>
	</div>
</template>

<script>
import moment from 'moment'
export default {
	components: {},
	data () {
		return {
			playlist: [],
			videoData: [],
			openeds: ['playlist'],
			total: 0,
			pageSize: 40,
			curPage: 1,
			sort: 'upload_time',
			desc: 'desc',
			isCollapse: false,
		}
	},
	created () {
		this.getPlaylist(), this.getVideoData(), this.getPointData()
	},
	computed: {},
	methods: {
		async getPlaylist () {
			const { data: res } = await this.$http.get('/api/playlist')
			console.log(res)
			this.playlist = res.playlist
		},
		handleOpen (key, keyPath) {
			console.log(key, keyPath)
		},
		handleClose (key, keyPath) {
			console.log(key, keyPath)
		},
		async getVideoData () {
			const { data: res } = await this.$http.get('/api/playlist/all', {
				params: {
					page: this.curPage,
					pagesize: this.pageSize,
					sort: this.sort,
					desc: this.desc,
				},
			})

			console.log(res)
			this.$router.push({
				path: '/playlist',
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
		async getPointData () { },
		async handleList (id) {
			const { data: res } = await this.$http.get(`/api/playlist/${id}`)
			console.log(res)
			this.videoData = res.playlistData
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
		toggleCollapse () {
			this.isCollapse = !this.isCollapse
		},
	},
}
</script>

<style lang='scss' scoped>
//@import url()

.playlist {
	height: 100%;
	.el-container {
		height: 100%;
	}
	.el-aside {
		background-color: gray;

		.el-submenu {
			text-align: left;

			.el-menu-item {
				span:first-child {
					font-size: 22px;
				}
				span {
					vertical-align: bottom;
				}
			}
		}
	}
	.el-main {
		height: 100%;
		.el-row {
			height: 100%;
		}
	}
}

.el-row {
	width: 68.75rem;
	margin: 0 auto;
	margin-bottom: 20px;
	// display: flex;
	// flex-wrap: wrap;
	// justify-content: space-between;
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

// 视频卡片区域
.el-col-5 {
	width: 20%;
}
.el-card {
	position: relative;
	width: 12.5rem;
	border-radius: 0.25rem;
	// height: 7rem;
}

.el-card__body {
	height: 62.5rem !important;
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