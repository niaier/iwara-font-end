<!-- 组件说明 -->
<template>
	<div class="home">
		<div class="w">
			<el-card class="box-card">
				<h2>
					<span
						class="iconfont icon-hot-fill"
						style="color: red"
					></span
					>最近热门
				</h2>
				<!-- 视频区域 -->
				<el-row>
					<!-- 卡片单元盒子 -->
					<el-col
						:span="5"
						v-for="(item, index) in homeData.hotData"
						:key="index"
						><div class="grid-content bg-purple">
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
											></span>
										</div>
										<div>
											<span class="iconfont icon-browse">
											</span>
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
												:href="`/play/`"
											>
												<!-- <span>标题</span> -->
												<span>{{ item.title }}</span>
											</el-link>

											<!-- <span>{{ item.title }}</span> -->
										</div>
									</div>
									<!-- 视频信息下部 -->
									<div class="info-bottom clearfix">
										<span class="producer"
											><span
												class="iconfont icon-bussiness-man"
												>{{ item.producer }}</span
											></span
										>
										<time class="time"
											><span
												class="iconfont icon-ontimeshipment"
											></span
										></time>
									</div>
								</div>
							</el-card></div
					></el-col>

					<!-- 解决flex最后一行排列问题 -->
					<el-col
						:span="5"
						v-for="count in 5"
						:key="'empty' + count.toString()"
					></el-col>
				</el-row>
			</el-card>
			<el-card class="box-card videolist">
				<h2>
					<span
						class="iconfont icon-lights"
						style="color: orange"
					></span
					>最近更新
				</h2>
				<!-- 视频区域 -->
				<el-row>
					<!-- 卡片单元盒子 -->
					<el-col
						:span="5"
						v-for="(item, index) in homeData.updateData"
						:key="index"
						><div class="grid-content bg-purple">
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
											></span>
										</div>
										<div>
											<span class="iconfont icon-browse">
											</span>
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
												:href="`/play/`"
											>
												<!-- <span>标题</span> -->
												<span>{{ item.title }}</span>
											</el-link>
										</div>
									</div>
									<!-- 视频信息下部 -->
									<div class="info-bottom clearfix">
										<span class="producer"
											><span
												class="iconfont icon-bussiness-man"
												>{{ item.producer }}</span
											></span
										>
										<time class="time"
											><span
												class="iconfont icon-ontimeshipment"
											></span
										></time>
									</div>
								</div>
							</el-card></div
					></el-col>

					<!-- 解决flex最后一行排列问题 -->
					<el-col
						:span="5"
						v-for="count in 5"
						:key="'empty' + count.toString()"
					></el-col>
				</el-row>
			</el-card>
			<el-card class="box-card">
				<h2>
					<span
						class="iconfont icon-browse"
						style="color: skyblue"
					></span
					>我的关注
				</h2>
				<!-- 视频区域 -->
				<el-row>
					<!-- 卡片单元盒子 -->
					<el-col
						:span="5"
						v-for="(item, index) in homeData.myFocusData"
						:key="index"
						><div class="grid-content bg-purple">
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
											></span>
										</div>
										<div>
											<span class="iconfont icon-browse">
											</span>
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
												:href="`/play/`"
											>
												<!-- <span>标题</span> -->
												<span>{{ item.title }}</span>
											</el-link>
										</div>
									</div>
									<!-- 视频信息下部 -->
									<div class="info-bottom clearfix">
										<span class="producer"
											><span
												class="iconfont icon-bussiness-man"
												>{{ item.producer }}</span
											></span
										>
										<time class="time"
											><span
												class="iconfont icon-ontimeshipment"
											></span
										></time>
									</div>
								</div>
							</el-card></div
					></el-col>

					<!-- 解决flex最后一行排列问题 -->
					<el-col
						:span="5"
						v-for="count in 5"
						:key="'empty' + count.toString()"
					></el-col>
				</el-row>
			</el-card>
		</div>
	</div>
</template>

<script>
//import x from ''
export default {
	components: {},
	data () {
		return {
			homeData: ""
		}
	},
	created () {
		this.getHomeData()
	},
	computed: {},
	methods: {

		async getHomeData () {
			const { data: res } = await this.$http.get('/api/home')
			console.log(res);
			this.homeData = res
		}
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
}
.el-row {
	margin-bottom: 20px;
	display: flex;
	align-content: space-between;
	flex-wrap: wrap;
	justify-content: space-between;
	height: 400px;
	&:last-child {
		margin-bottom: 0;
	}
}
.el-col {
	background-color: darkcyan;
	// margin-top: 20px;
	// margin-bottom: 20px;
	// border-radius: 4px;
	// width: 400px;
	// height: 350px;
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
// .grid-content {
// 	min-width: 240px;
// 	min-height: 240px;
// 	display: flex;
// 	justify-content: center;
// 	.el-card {
// 		position: relative;
// 	}
// }
.row-bg {
	padding: 10px 0;
	background-color: #f9fafc;
}

.time {
	font-size: 12px;
	color: gray;
}

.bottom span {
	font-size: 12px;
	color: gray;
}

.icon-bussiness-man {
	font-size: 16px !important;
}

.video-info {
	display: flex;
	flex-direction: column;
	// justify-content:space-between;
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
	display: flex;
	justify-content: space-between;
	.producer {
		margin-left: -2px;
	}
	time {
		padding-right: 10px;
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

.el-card__body {
	h2 {
		.icon-play {
			font-size: 28px;
		}
	}
}

h2 {
	.icon-hot-fill,
	.icon-lights,
	.icon-browse {
		font-size: 28px;
	}
}
</style>