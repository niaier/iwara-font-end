<!-- 组件说明 -->
<template>
	<div class="video">
		
		<el-card class="box-card">
			<el-row :gutter="10">
				<el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6"
					><div class="grid-content bg-purple"></div
				></el-col>
				<el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6"
					><div class="grid-content bg-purple"></div
				></el-col>
				<el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6"
					><div class="grid-content bg-purple"></div
				></el-col>
				<el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6"
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
.video {
	height: 100%;
}
.box-card {
	height: 100%;
}

.el-row {
	margin-bottom: 20px;
	&:last-child {
		margin-bottom: 0;
	}
}
.el-col {
	margin-top: 20px;
	border-radius: 4px;
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
	border-radius: 4px;
	min-height: 36px;
}
.row-bg {
	padding: 10px 0;
	background-color: #f9fafc;
}
</style>