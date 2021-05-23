<!-- 组件说明 -->
<template>
	<div class="play">
		<div class="w">
			<div class="l-container">
				<div class="video-header">
					<!-- <h2 class="title">标题</h2> -->
					<h2 class="title">{{ videoInfo.title }}</h2>
					<div class="intro">
						<span class="love">{{ videoInfo.love }}喜爱</span>
						<span class="views">{{ videoInfo.views }}播放</span>
						<span class="time">{{ dateFormated }}</span>
					</div>
				</div>

				<div
					class="player-container"
					v-if="videoState"
					:class="{
						'full-page': isFullPage,
					}"
				>
					<vue-core-video-player
						:autoplay="false"
						:src="src"
						ref="videoPlay"
						controls
					></vue-core-video-player>
				</div>

				<!-- <div class="v-container">
					<video :src="src" controls="auto"></video>
					<div class="self-controls">...</div>
				</div> -->

				<div class="video-info">
					<!-- 功能栏 -->
					<div class="feature">
						<!-- 点赞按钮 -->
						<el-button type="primary" circle
							><span class="iconfont icon-good"></span
						></el-button>
						<!-- 喜爱按钮 -->
						<el-button
							type="danger"
							circle
							@click="showFavoriteDialog"
							><span class="iconfont icon-favorites"></span
						></el-button>
						<!-- 收藏按钮 -->
						<el-button
							type="warning"
							circle
							@click="showCollectionDialog"
							><span class="iconfont icon-collection"></span
						></el-button>
					</div>
					<!-- 视频介绍栏 -->
					<div
						class="description"
						:class="{
							close: !isOpen,
							open: isOpen,
						}"
						ref="description"
					>
						{{ videoInfo.description }}

						<!-- sdsdsdsd -->
					</div>
					<div class="des-btn" @click="desOpen" v-show="haveRoll">
						{{ isOpen ? "收起" : "展开更多" }}
					</div>
					<!-- 标签栏 -->
					<div class="categories">
						<el-tag v-for="item in categories" :key="item" closable>
							{{ item }}
						</el-tag>
					</div>
				</div>
			</div>
			<div class="r-container">
				<div class="producer-info">
					<div class="avatar">
						<el-avatar
							:size="50"
							src="http://127.0.0.1:8000/pic/avatar.webp"
						>
							<!-- <el-avatar
							:size="50"
							src="https://upload.jianshu.io/users/upload_avatars/16535515/650d8487-cdb2-49fe-a3b5-9e898bd057bb.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/90/h/90/format/webp"
						> -->
							<!-- <img src="../assets/pic/pic.webp" alt=""> -->
						</el-avatar>
					</div>
					<div class="producer-info-right">
						<div class="name">
							{{ videoInfo.producer }}
						</div>
						<div class="follow">
							<el-button size="mini" type="primary"
								>关注</el-button
							>
						</div>
					</div>
				</div>
				<div class="recom">推荐框</div>
			</div>

			<!-- 添加喜爱对话框 -->
			<el-dialog
				class="love"
				title="添加到喜爱"
				:visible.sync="favoriteDialogVisible"
				width="20rem"
				center
			>
				<div class="dialog-body">
					<el-row>
						<el-col
							v-for="count in 9"
							:key="count"
							@click.native="updateFavorite(count)"
							:class="{
								favorite_slected: favoriteLevel == count,
							}"
							>{{ "Favorite" + count }}</el-col
						>
					</el-row>
				</div>

				<span slot="footer" class="dialog-footer">
					<el-button @click="updateFavorite(0)" type="danger"
						>取消喜爱</el-button
					>
				</span>
			</el-dialog>

			<!-- 添加收藏对话框 -->
			<el-dialog
				class="collection"
				title="添加到收藏夹"
				:visible.sync="collectionDialogVisible"
				width="30rem"
				center
			>
				<el-checkbox-group
					v-for="item in playlist"
					:key="item.play_list_id"
					v-model="checkMyplaylist"
				>
					<el-checkbox
						:label="item.play_list_id"
						@change="
							(isChecked) => {
								return updateCollection(
									isChecked,
									item.play_list_id
								);
							}
						"
					>
						{{ item.play_list_name }}
					</el-checkbox>
					<el-button
						size="mini"
						@click="deleteCollection(item.play_list_id)"
						>删除</el-button
					>
				</el-checkbox-group>

				<span slot="footer" class="dialog-footer">
					<el-form :inline="true" class="demo-form-inline">
						<el-input
							v-model="collectionName"
							placeholder="请输入收藏夹名称"
						>
						</el-input>

						<el-button type="primary" @click="addCollection"
							>新建收藏夹</el-button
						>
					</el-form>
				</span>
			</el-dialog>
		</div>
	</div>
</template>

<script>
//import x from ''
export default {
	components: {},
	data () {
		return {
			videoInfo: {},
			categories: [],
			collectionDialogVisible: false,
			favoriteDialogVisible: false,
			playlist: [],
			checkMyplaylist: [],
			dirname: '',
			collectionName: '',
			favoriteLevel: '',
			dateFormated: '',
			isOpen: true,
			haveRoll: true,
			src: '',
			videoState: false,
			isFullPage: false,
		}
	},
	created () {
		this.getVideoInfo()
		this.getPlaylist()
		this.getMyCollectionList()
		this.getFavorite()
	},
	mounted () {
		// 描述文本处理
		// this.$nextTick()
		// this.jugeIsOpen()
	},
	watch: {
		videoInfo: function () {
			this.$nextTick(() => {
				let descriptionHeight = this.$refs.description.offsetHeight
				console.log(descriptionHeight)
				if (descriptionHeight <= 45) {
					this.isOpen = true
					this.haveRoll = false
				} else {
					this.isOpen = false
					this.haveRoll = true
				}
				console.log(this.isOpen)
			})
		},
		// 监视src动态变化
		src: function () {
			console.log('this.src', this.src)
			this.videoState = true
			console.log(this.$refs.videoPlay)
			this.$refs.videoPlay
			// this.$nextTick(() => {
			// 	// this.$refs.videoPlay
			// 	console.log('this.src', this.src)
			// 	this.videoState = true
			// 	console.log(this.$refs.videoPlay)
			// 	this.$refs.videoPlay

			// 	// console.log(this.$refs.videoPlay)
			// })
		},
	},
	// updated() {
	// 	// 描述文本处理
	// 	// this.$nextTick()
	// 	this.jugeIsOpen()
	// },
	computed: {},
	methods: {
		async getVideoInfo () {
			// const{data:res} = await this.$http.get(url)
			const paramsList = window.location.pathname.split('/')
			const dirname = paramsList[paramsList.length - 1]
			this.dirname = dirname
			const { data: res } = await this.$http.get(`/api/play/${dirname}`)
			console.log('------------VideoInfo------------', res)
			this.videoInfo = res.video
			this.categories = res.video.categories.split(',')
			// 格式化日期
			this.dateFormated = this.$moment(this.videoInfo.upload_time).format(
				'YYYY-MM-DD hh:mm:ss'
			)
			// 格式化视频源
			this.src = `http://127.0.0.1:8000/video/${dirname}/${res.filename}`
		},
		async getPlaylist () {
			const { data: res } = await this.$http.get('/api/playlist')
			console.log('------------playlist------------', res)
			this.playlist = res.playlist
		},
		showCollectionDialog () {
			this.collectionDialogVisible = true
		},
		showFavoriteDialog () {
			this.favoriteDialogVisible = true
		},

		// 获取我的收藏 列表 判断在哪个收藏夹
		async getMyCollectionList () {
			const dirname = this.dirname
			const { data: res } = await this.$http.get(
				`/api/play/${dirname}/list`
			)
			console.log(res)
			this.checkMyplaylist = res.list
		},

		// 更新我的收藏
		async updateCollection (isChecked, id) {
			const dirname = this.dirname
			const { data: res } = await this.$http.put(
				`/api/play/${dirname}/list/${id}/${isChecked}`
			)
			console.log(res)
		},

		async addCollection () {
			const { data: res } = await this.$http.put(
				`/api/play/list/${this.collectionName}`
			)
			this.getPlaylist()
			console.log(res)
		},

		async deleteCollection (id) {
			const dirname = this.dirname
			const { data: res } = await this.$http.delete(
				`/api/play/${dirname}/list/${id}`
			)
			this.getPlaylist()
			console.log(res)
		},

		// 喜爱功能
		async getFavorite () {
			const dirname = this.dirname
			const { data: res } = await this.$http.get(
				`/api/play/${dirname}/love`
			)
			this.favoriteLevel = res.loveLevel
			console.log('------------Favorite------------', res)
		},
		async updateFavorite (favoriteLevel) {
			const dirname = this.dirname
			const { data: res } = await this.$http.put(
				`/api/play/${dirname}/love/${favoriteLevel}`
			)
			this.favoriteLevel = favoriteLevel
			console.log(res)
		},
		// 视频描述展开收起
		desOpen () {
			this.isOpen = !this.isOpen
			this.openState = '收起'
		},

	},
}
</script>

<style lang='scss' scoped>
//@import url()

.play {
	height: 100%;
}
* {
	margin: 0;
	padding: 0;
}

// 版心

.w {
	width: 68.75rem;
	margin: 0 auto;
	height: 100%;
	background-color: #fff;
	display: flex;
	justify-content: space-between;

	// 容器左
	.l-container {
		width: 45rem;
		height: 100%;
		// background-color: #ccc;

		// 视频头部
		.video-header {
			text-align: left;
			height: 96px;
			background-color: #fff;
			overflow: hidden;
			h2 {
				margin: 20px 0 10px;
				font-weight: 500;
				padding-left: 0;
			}

			.intro {
				color: gray;
				span {
					margin-right: 10px;
				}
			}
		}
		video {
			width: 45rem;
			height: 30rem;
		}

		.video-info {
			// height: 12.5rem;
			background-color: #fff;
			text-align: left;
			overflow: hidden;
			.feature {
				margin-top: 1.25rem;
				span {
					font-size: 20px;
				}
			}
			.description {
				margin-top: 1.25rem;
			}
			.des-btn {
				margin: 0.625rem 0;
				&:hover {
					color: #00a1d6;
					cursor: pointer;
				}
			}
			.categories {
				.el-tag {
					margin-top: 1.25rem;
					margin-right: 10px;
					border-radius: 16px;
					background-color: #f4f4f4;
					border: none;
					color: #00a1d6;
				}
			}
		}
	}
	.r-container {
		width: 23rem;
		height: 100%;
		background-color: #555;
		.producer-info {
			text-align: left;
			height: 96px;
			background-color: #ccc;
			display: flex;
			justify-content: flex-start;

			.avatar {
				margin-top: 10px;
			}
			.producer-info-right {
				margin: 10px;
				.name {
					font-weight: 400;
					font-size: 16px;
				}
				.follow {
					margin-top: 20px;
				}
			}
		}
		.recom {
			height: 62.5rem;
			background-color: #eee;
		}
	}
}

// favorite选中效果

//描述文本展开与隐藏
.open {
	height: auto;
}

.close {
	height: 3.75rem;
	overflow: hidden;
}
</style>

<style lang="scss">
.play {
	// 弹出对话框样式
	.love {
		.el-dialog__header {
			border-bottom: 2px solid #e5e9ef;
		}
		.el-dialog__body {
			padding: 0 !important;
			.dialog-body {
				text-align: center;

				.el-col {
					padding: 5px 0;
					&:hover {
						font-size: 1.2em;
						background-color: pink;
					}
				}
			}
		}
		.el-dialog__footer {
			border-top: 2px solid #e5e9ef !important;
		}
		.favorite_slected {
			background-color: pink;
		}
	}

	.collection {
		.el-dialog__header {
			border-bottom: 2px solid #e5e9ef;
		}
		.el-dialog__body {
			padding: 5px 20px 0 !important;

			text-align: center;
			.el-checkbox-group {
				margin: 5px 0 0;
				.el-checkbox {
					width: 100%;
					text-align: left;
					line-height: 39px;
				}
				display: flex;
				justify-content: space-between;
				&:last-child {
					// float: right;
				}
				.el-button {
				}
			}
		}
		.el-dialog__footer {
			.el-form {
				// background-color: pink;
				margin-top: 10px;
				display: flex;
				justify-content: center;

				.el-input {
					// background-color: pink;
					border-right: none;
					border-radius: 3px 0 0 3px;
					input {
						border-radius: 3px 0 0 3px;
					}
				}
				.el-button {
					border-radius: 0 3px 3px 0;
				}
			}
		}
		.favorite_slected {
			background-color: pink;
		}
	}
}
</style>