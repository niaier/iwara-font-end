<!-- 组件说明 -->
<template>
	<div class="home">
		<el-container>
			<!-- 顶部导航栏 -->
			<el-header>
				<el-menu
					:default-active="activeIndex2"
					class="el-menu-demo"
					mode="horizontal"
					@select="handleSelect"
					background-color="#545c64"
					text-color="#fff"
					active-text-color="#ffd04b"
				>
					<el-menu-item index="1">Home</el-menu-item>
					<el-menu-item index="2">Video</el-menu-item>
					<el-menu-item index="3">Home</el-menu-item>
				</el-menu>
			</el-header>
			<el-main>Main</el-main>
			<el-footer>Footer</el-footer>
		</el-container>
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
.home {
	height: 100%;
}

.el-container {
	height: 100%;
}

.el-header,
.el-footer {
	background-color: #b3c0d1;
	color: #333;
	text-align: center;
	line-height: 60px;
}

.el-aside {
	background-color: #d3dce6;
	color: #333;
	text-align: center;
	line-height: 200px;
}

.el-main {
	background-color: #e9eef3;
	color: #333;
	text-align: center;
	line-height: 160px;
}

body > .el-container {
	margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
	line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
	line-height: 320px;
}
</style>