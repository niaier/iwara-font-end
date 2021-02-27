<!-- 组件说明 -->
<template>
	<div id="app">
		<el-container>
			<!-- 顶部导航栏 -->
			<el-header>
				<div class="left-nav">
					<el-menu
						:default-active="activeIndex"
						class="el-menu-demo"
						mode="horizontal"
						background-color="#545c64"
						text-color="#fff"
						active-text-color="#ffd04b"
						:router="true"
					>
						<el-menu-item index="/home">Home</el-menu-item>
						<el-menu-item index="/video">Video</el-menu-item>
						<el-menu-item index="/Love">Love</el-menu-item>
						<el-menu-item index="/Playlist">Playlist</el-menu-item>
					</el-menu>
				</div>

				<div class="right-login">
					<el-button>登录</el-button>
					<el-button>注册</el-button>
				</div>
			</el-header>
			<!-- 主体内容 -->
			<el-main>
				<router-view></router-view>
			</el-main>
		</el-container>
	</div>
</template>

<script>
//import x from ''
export default {
	components: {},
	data() {
		return {
			activeIndex: '1',
			activeIndex2: '1',
		}
	},
	computed: {},
	methods: {},
}
</script>

<style lang='scss' scoped>
//@import url()
#app {
	height: 100%;
	min-width: 0!important;
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
	// line-height: 160px;
	padding: 0;

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

.el-header {
	padding-left: 0;
	display: flex;
	justify-content: space-between;
	background-color: rgb(84, 92, 100);
}
</style>