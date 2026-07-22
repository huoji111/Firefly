import type { MusicPlayerConfig } from "../types/musicConfig";

// 音乐播放器配置
export const musicPlayerConfig: MusicPlayerConfig = {
	// 是否在导航栏显示音乐播放器入口
	showInNavbar: true,

	// 是否在侧边栏显示音乐播放器组件
	showInSidebar: true,

	// 使用方式："meting" 使用 Meting API，"local" 使用本地音乐列表
	mode: "local",

	// 默认音量 (0-1)
	volume: 0.7,

	// 播放模式：'list'=列表循环, 'one'=单曲循环, 'random'=随机播放
	playMode: "list",

	// 是否显启用歌词
	showLyrics: true,

	// Meting API 配置
	meting: {
		// Meting API 地址
		// 默认使用官方 API，也可以使用自定义 API
		api: "https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r",
		// 音乐平台：netease=网易云音乐, tencent=QQ音乐, kugou=酷狗音乐, xiami=虾米音乐, baidu=百度音乐
		server: "netease",
		// 类型：song=单曲, playlist=歌单, album=专辑, search=搜索, artist=艺术家
		type: "artist",
		// 歌手/歌单/专辑 ID 或搜索关键词
		id: "1128",
		// 认证 token（可选）
		auth: "",
		// 备用 API 配置（当主 API 失败时使用）
		fallbackApis: [
			"https://api.injahow.cn/meting/?server=:server&type=:type&id=:id",
			"https://api.moeyao.cn/meting/?server=:server&type=:type&id=:id",
		],
	},

	// 本地音乐配置（当 mode 为 'local' 时使用）
	// 1. 支持传入歌词文件的路径
	// lrc: "/assets/music/lrc/使一颗心免于哀伤-哼唱.lrc",
	// 2. 或者直接填入歌词字符串内容
	// lrc: "[00:00.00]歌词内容...",
	// 示例：添加本地文件（请把对应文件放到 public/assets/music/）
	local: {
		playlist: [
			{
				name: "告白气球",
				artist: "周杰伦",
				url: "/assets/music/gaobaiqiu.mp3",
				cover: "/assets/music/cover/告白气球.jpg",
				lrc: "",
			},
			{
				name: "蒲公英的约定",
				artist: "周杰伦",
				url: "/assets/music/pugongying.mp3",
				cover: "/assets/music/cover/蒲公英的约定.jpg",
				lrc: "",
			},
			{
				name: "花海",
				artist: "周杰伦",
				url: "/assets/music/huahai.mp3",
				cover: "/assets/music/cover/huahai.jpg",
				lrc: "",
			},
			{
				name: "稻香",
				artist: "周杰伦",
				url: "/assets/music/daoxiang.mp3",
				cover: "/assets/music/cover/稻香.jpg",
				lrc: "",
			},
			{
				name: "青花瓷",
				artist: "周杰伦",
				url: "/assets/music/qinghuaci.mp3",
				cover: "/assets/music/cover/青花瓷.jpg",
				lrc: "",
			},
			{
				name: "晴天",
				artist: "周杰伦",
				url: "/assets/music/qingtian.mp3",
				cover: "/assets/music/cover/晴天.jpg",
				lrc: "",
			},
		],
	},
};
