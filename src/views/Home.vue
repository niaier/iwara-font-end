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
							<img
								src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
								class="image"
								width="240px"
								height="180px"
							/>
							<div style="padding: 10px 0 0 10px">
								<span>视频标题</span>

								<div class="bottom clearfix">
									<span>视频作者</span>
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
</style>