import type { GalleryConfig } from "@/types/galleryConfig";

// 相册配置
export const galleryConfig: GalleryConfig = {
	// 相册列表
	albums: [
		{
			id: "default",
			title: "默认相册",
			// 照片路径（相对于站点根），使用 public 目录下的图片
			photos: [
				"/assets/images/site-logo.png",
				"/assets/images/huoji-logo.png",
			],
			// 可选：手动指定封面（默认使用第一张）
			cover: "/assets/images/site-logo.png",
		},
	],

	// 瀑布流最小列宽(px)，浏览器根据容器宽度自动计算列数，默认 240
	// 值越小列数越多，值越大列数越少
	columnWidth: 240,
};
