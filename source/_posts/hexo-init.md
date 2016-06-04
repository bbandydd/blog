title: Hexo + Github 建立部落格
date: 2016-06-03 10:49:07
tags: [hexo, github]
---

![](http://i.v2ex.co/5bb7J7NT.png "Hexo")

[Hexo 官網](https://hexo.io/zh-tw/)

[Hexo 標記語法](https://wastemobile.gitbooks.io/gitbook-chinese/content/format/markdown.html)

<!-- more -->

___

## 什麼是Hexo?

Hexo 是一個快速、簡單且強大的網誌框架。Hexo 使用 Markdown（或其他渲染引擎）解析您的文章，並在幾秒鐘內，透過漂亮的主題產生靜態檔案。

## 1. 安裝需求

- [NodeJS](https://nodejs.org/en/)
- [Git](https://git-scm.com)

## 2. 安裝Hexo

### 建立Hexo存放資料夾

```
	mkdir hexo
```

### 移至Hexo資料夾

```
	cd hexo
```

### 安裝Hexo

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
	npm install hexo-renderer-marked@0.1 --save
	npm install hexo-renderer-stylus@0.1 --save

```

---

## 3. 建立Github repository

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

---

## 4. Hexo 常用指令

### 建立新文章

```
	hexo new "這是新文章"
```

- 每次建立新文章需先執行hexo new

### 啟動本地伺服器

```
	hexo server
```

- 可以預覽目前文章畫面

### 手動產生靜態檔案

```
	hexo generate
```

### 部署至github

```
	hexo deploy
```

- 建立先手動產生靜態檔案再部署至github
- deploy結束可以連Github網址觀看，如:http://bbandydd.github.io/blog

### 清除暫存文件及靜態檔案

```
	hexo clean
```

- 網站有異常時可以先清除

---

## 5. 修改主題

- 移動至themes資料夾

```
	cd themes
```

- 下載 [主題檔案](https://github.com/hexojs/hexo/wiki/Themes)

```
	git clone https://github.com/klugjo/hexo-theme-clean-blog.git
```

- 修改_config.yml

```
	themes: hexo-theme-clean-blog
```


