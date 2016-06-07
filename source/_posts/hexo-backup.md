title: Hexo + Github - 備份與發布
date: 2016-06-05 03:58:47
tags: [hexo, github]
---

# 緣由

1. 電腦內Hexo檔案消失
2. Github只有產生完成的靜態檔案
3. 2015年寫的40篇文章消失
4. 中間經歷換工作及適應環境
5. 2016/6 決定重啟Hexo
6. 所以這次最重要的是 <font size="3" color="red">備份</font>  <font size="5" color="red">備份</font> <font size="7" color="red">備份</font>
7. 因此這篇將會介紹如何使用同一個Repository備份及發佈Hexo

--

2016/06/06更新：
- 由於之前hexo有加入sitemap，因此網頁上還可以找到文章，慢慢手動將它補回來

<!-- more -->

## 作法

- Github建立Repository，並建立gh-pages分支
- Hexo deploy至gh-pages
- 檔案備份至Master

## Hexo Depoly設定

```
	_config.yml修改

	deploy:
	  type: github
	  repository: https://github.com/bbandydd/blog.git
	  branch: gh-pages
```

## 備份至Master

- Hexo自己會產生.gitignore檔案
	- 排除.git/，node_modules/，public/，.deploy_git/等檔案
	- 因此push至master即可

## 取得備份

```
	git clone https://github.com/bbandydd/blog.git
```

--

這次一定要好好備份，文章消失好心疼，希望大家都要好好備份喔！
