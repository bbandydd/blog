title: Hexo + Github 建立部落格
date: 2015-05-14 10:49:07
tags: [hexo, github]
---

![hexo](http://i.v2ex.co/5bb7J7NT.png "Hexo")

[Hexo 官網](https://hexo.io/zh-tw/)

[Hexo 標記語法](https://wastemobile.gitbooks.io/gitbook-chinese/content/format/markdown.html)

<!-- more -->

___

## 什麼是Hexo?

Hexo 是一個快速、簡單且強大的網誌框架。Hexo 使用 Markdown（或其他渲染引擎）解析您的文章，並在幾秒鐘內，透過漂亮的主題產生靜態檔案。

## Why Hexo ?
使用 Hexo 建立 Blog 的好處有以下：

- 文章裡面可以放上 Coge 並加上 highlight 高亮語法顯示。
- 使用 macdown 語言快速編輯，筆記、Blog 一次搞定。
- 可建立於 GitHub
- 使用 Node.js 建立

## 安裝需求

- [NodeJS](https://nodejs.org/en/)
- [Git](https://git-scm.com)

## 安裝hexo2.8.3版本

個人安裝時最新版本是3.0, 但是問題很多所以還是建議安裝2.8.3版

如果安裝過程出現權限錯誤，須在命令前加上sudo

### 建置hexo存放資料夾

```
	mkdir [filename]
	cd [filename]
```

### 安裝2.8.3版本

```
	sudo npm install hexo@v2.8.3 -g

```

### 初始化Hexo

```
	hexo init
	npm install
```

### 安裝Hexo Plugin

```
	sudo npm install hexo-renderer-marked@0.1 --save
	sudo npm install hexo-renderer-stylus@0.1 --save

```

---

## 建立Github repository

### Github建立一個給Hexo用的Repository

```
	複製github https網址
	如：https://github.com/bbandydd/blog.git
```

### 修改Hexo資料夾的_config.yml

```
	url: http://bbandydd.github.io/blog/

	deploy:
		type: github
		repository: https://github.com/bbandydd/blog.git
		branch: gh-pages
```

- 冒號後要有空白
- url最後要加 / ，否則deploy後css路徑會錯誤
