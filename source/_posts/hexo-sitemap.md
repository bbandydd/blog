title: Hexo sitemap 提交至 Google 網站管理員
date: 2015-05-28 16:44:47
tags: [hexo, sitemap]
---

# sitemap

![sitemap](https://googledrive.com/host/0B0pH-JgGVSTDTDQ2TUtIR1FCVE0 "sitemap")

<!-- more -->

## 安裝sitemap plugin

```
	npm uninstall hexo-generator-sitemap
	npm install hexo-generator-sitemap@0.2.0 --save

```

## 修改_config.yml

```
	sitemap:
		path: sitemap.xml
```

## 測試加入sitemap是否成功

- 網址後加入sitemap檢查是否有資料
```
    http://bbandydd.github.io/blog/sitemap
```

## Google  網站管理員 - 新增網站

- [Google 網站管理員](https://www.google.com/webmasters/tools/home?hl=zh-TW&pli=1)
- 按照步驟上傳驗證的xml檔，完成驗證

## 提交sitemap

![sitemap](https://googledrive.com/host/0B0pH-JgGVSTDWGFoUmY0ZXJkZWM "sitemap")
