<!-- 组件说明 -->
<template>
	<div class="home">
		<el-card class="box-card">
			<h2>
				<span class="iconfont icon-hot-fill" style="color: red"></span
				>最近热门
			</h2>
			<el-row :gutter="10">
				<el-col :xs="12" :sm="12" :md="6" :lg="6"
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
										>喜爱
									</div>
									<div>
										<span class="iconfont icon-browse">
										</span
										>播放
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
										<span>视频标题</span>
									</div>
								</div>
								<!-- 视频信息下部 -->
								<div class="bottom clearfix">
									<span class="producer"
										><span
											class="iconfont icon-bussiness-man"
										></span
										>视频作者</span
									>
									<time class="time">2018-02-10</time>
								</div>
							</div>
						</el-card>
					</div></el-col
				>
				<el-col :xs="12" :sm="12" :md="6" :lg="6"
					><div class="grid-content bg-purple"></div
				></el-col>
				<el-col :xs="12" :sm="12" :md="6" :lg="6"
					><div class="grid-content bg-purple"></div
				></el-col>
				<el-col :xs="12" :sm="12" :md="6" :lg="6"
					><div class="grid-content bg-purple"></div
				></el-col>
			</el-row>
		</el-card>
		<el-card class="box-card">
			<h2>
				<span class="iconfont icon-lights" style="color: orange"></span
				>最近更新
			</h2>
			<el-row :gutter="10">
				<el-col :xs="12" :sm="12" :md="6" :lg="6"
					><div class="grid-content bg-purple"></div
				></el-col>
				<el-col :xs="12" :sm="12" :md="6" :lg="6"
					><div class="grid-content bg-purple"></div
				></el-col>
				<el-col :xs="12" :sm="12" :md="6" :lg="6"
					><div class="grid-content bg-purple"></div
				></el-col>
				<el-col :xs="12" :sm="12" :md="6" :lg="6"
					><div class="grid-content bg-purple"></div
				></el-col>
			</el-row>
		</el-card>
		<el-card class="box-card">
			<h2>
				<span class="iconfont icon-browse" style="color: skyblue"></span
				>我的关注
			</h2>
			<el-row :gutter="10">
				<el-col :xs="12" :sm="12" :md="6" :lg="6"
					><div class="grid-content bg-purple"></div
				></el-col>
				<el-col :xs="12" :sm="12" :md="6" :lg="6"
					><div class="grid-content bg-purple"></div
				></el-col>
				<el-col :xs="12" :sm="12" :md="6" :lg="6"
					><div class="grid-content bg-purple"></div
				></el-col>
				<el-col :xs="12" :sm="12" :md="6" :lg="6"
					><div class="grid-content bg-purple"></div
				></el-col>
			</el-row>
		</el-card>
	</div>
</template>

<script>
//import x from ''
export default {
	components: {},
	data() {
		return {}
	},
	computed: {},
	methods: {},
}
</script>

<style lang='scss' scoped>
//@import url()

.el-row {
	margin-bottom: 20px;
	display: flex;
	align-content: space-between;
	flex-wrap: wrap;
	justify-content: space-between;
	height: 500px;
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
.bg-purple-dark {
	background: #99a9bf;
}
.bg-purple {
	background: #d3dce6;
}
.bg-purple-light {
	background: #e5e9f2;
}
.grid-content {
	min-width: 240px;
	min-height: 240px;
	display: flex;
	justify-content: center;
	.el-card {
		position: relative;
	}
}
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