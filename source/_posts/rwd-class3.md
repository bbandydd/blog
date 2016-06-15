title: RWD課程3 - 產品規劃
date: 2015-07-16 14:29:25
tags: [Rwd]
---

## Week3 - RWD 產品規劃
- review homework
- user story > functional map > UI flow > wireframe > mockup > prototype
- 如何規劃 Responsive Layout
- :before、:after
- image editing、icon font

## PC舒適圈外會遇到的問題
- 螢幕解析度
- Mobile瀏覽器
- JS
- CSS
- HTML

## 特定解析度
- 320px 480px (35%)
- 768px (40%)
- 1024px (15%)
- 其他 (10%)

## 初次RWD導入建議
- 以熱門解析度進行客製化
    - 320px 480px
    - 768px 1024px
- IOS優先導入
- 不要用太多的CSS3、JS語法

## 檢查各瀏覽器Javascript、CSS是否支援
- [caniuse](http://caniuse.com)

## 後期設計成熟可開各載具規格
- 挑戰解析度區間
- 768px~979px
- 480px~767px
- Android熱門型號

## RWD先設計手機再變成PC範例
- [愛料理](https://icook.tw)

## User Story (使用者描述)
- 文言文：瞭解使用者需求，強調透過一份簡單的情境規格，具體的描述出軟體在「使用者」的手上，是怎麼樣被「操作」的。
- 白話文：
    - 客戶想要什麼功能？
    - 使用者可以在你的服務上操作什麼服務？
- 以人力網來說：
    - 求職者可以在網站上張貼履歷
    - 求職者可以搜尋有哪些工作
    - 廠商可以張貼新工作
    - 求職者可以限制誰可以看到他的履歷

## wireframe (線稿圖)
- [cacoo](https://cacoo.com/lang/zh_tw/)
- [Balsamiq](https://balsamiq.com)

## mockup
- 依照wireframe設計真實畫面
    - Photoshop、Illustrator
    - Sketch

## prototype
- 可以操作的畫面，模擬使用者介面的互動，具備中高的擬真性(middle to high fidelity)
    - [pop](https://popapp.in)
    - [axure](http://www.axure.com)
        - 可以匯出HTML檔案

## head
```
<link rel="shortcut icon" href="favicon.ico">
meta: og:title og:description og:type og:url og:image
	- Facebook發佈時下面出現的內容
<link rel="apple-touch-icon" href="images/icon.png">
	- 類似APPIcon加入
<meta http-equipv="X-UA-Compatible" content="IE=edge">
	- IE以何種版本執行
```

## CSS命名
- 以功能命名
- 使用’-‘或’\_’定義子模組

## 作業修改
- [作業](http://bbandydd.github.io/RWD_Practice1/)
- h2跟p可以合在一起
- nth:child

## Image 處理
- 出1x、2x圖片 ( [Slicy](http://macrabbit.com/slicy/) )
- 出1x、SVG圖片 ( [Sketch](http://www.sketchapp.com) )
- [IcoMoon](https://icomoon.io)
- 產生icon的css檔
- 依照當時的css去產生icon，可以自訂font-size、color等

## 舊版IE也可以使用border-radius
- [css3pie](http://css3pie.com)

## :before :after
- [那些 CSS 偽元素可以幫你做的 10 個效果](http://blog.mukispace.com/pseudo-elements-10-examples)
```
.box:before{
	content: '';
	display: block;
	height: 50px;
	width: 50px;
	background: pink;
}
```
