title: Hexo常用指令
date: 2015-05-14 16:40:55
tags: [Hexo]
---

## 目標

本篇將會介紹Hexo使用時的常用指令

<!-- more -->

## 建立新文章

```
	hexo new "這是新文章"
```

- 每次建立新文章需先執行hexo new

## 啟動本地伺服器

```
	hexo server
	or
	hexo s
```

- 可以預覽目前文章畫面

## 手動產生靜態檔案

```
	hexo generate
	or
	hexo g
```

## 部署至github

```
	hexo deploy
	or
	hexo d
```

- 建立先手動產生靜態檔案再部署至github
- deploy結束可以連Github網址觀看，如:http://bbandydd.github.io/blog

## 清除暫存文件及靜態檔案

```
	hexo clean
```

- 網站有異常時可以先清除

## 觀看時CSS, Image路徑錯誤

發生此情形是因為Hexo是當作[github-id].github.io的虛擬目錄，因此URL參照位置有誤

```
	_config.yml:

		url: http://[github-id].github.io/
		root: /[repositoryName]
```
