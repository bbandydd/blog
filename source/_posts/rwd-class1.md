title: RWD課程1 - 基礎建立
date: 2015-07-04 23:15:37
tags: [Rwd]
---

## Week1 基礎建立
- [參考連結](https://liao-talk.hackpad.com/Week1--ozgcvAjtWE5)
- [相關檔案下載](https://drive.google.com/folderview?id=0B2jVbbD2WJGIfmFIVTBDOExsYklkZmZ3ck8tYWdpV3YzX0pXcURBZUxNaGs5Nll2MXBEWUk&usp=drive_web)
- Basic HTML、CSS
- HTML5、CSS3 media query
- Viewport setting
- mobile meta setting
- IE Browser support

<!-- more -->

## nav
```
一個網站只會有一個nav，讓Google搜尋語意化
```

## h1
```
商品內容頁，h1應該放在商品名稱，頁面最重要的內容，公司形象頁才需要用在公司名稱上
```

## address
```
地址欄位，點了會連結到地圖
```

## 有語意的區塊，讓搜尋引擎或爬蟲爬到
```
<article>
    <section>
        <h3></h3>
    </section>
</article>

取代

<ul>
    <li></li>
    <li></li>
</ul>
```

## 沒有語意的區塊
```
<div></div>
```

## 行內(inline)標籤
```
a、em
```

## 塊狀(block)標籤
```
div、p、h1
```

## CSS reset
- meyerweb.css (比較乾淨的版本，工程師較常用)
- normalize.css (設計師較常用)
- RWD-img reset css
```
img{
    max-width: 100%;
    height: auto;
}
```

## CSS選擇權重
```
!important > #box > .box div > .box > div

先看權重再看順序

html-tag: 1分
class: 10分
id: 100分
inline-style: 1000分
important: 10000分

少用id，多用class，id權重太高
```

## box-sizing
```
預設 content-box

*{
    box-sizing: border-box
}
```

## 文字水平置中
```
text-align: center
```

## 塊狀元素水平置中
```
margin: 0 auto
```

## position
```
relative: 設定element為基準點
absolute: 看parent有沒有設relative，若無則以瀏覽器為基準
```

## CSS-sprite
```
可使用compass製作，會自動產生class
```

## max-width
```
可維持原本樣式，RWD常用，最大不超過max-width
```

## 背景透明圖片格式
```
png8 (256色)
png24
gif(256色)
```

## css計算
```
em = 100%，依照element的尺寸而定

font-size: 預設16px
.wrap{
    width: 60em;  == width: 960px
}
```

## 建立RWD環境
- 無強制使用HTML5+CSS3
- 仍以傳統CSS2.1為主
- 使用DIV非TABLE

## 清除行動裝置瀏覽器預設解析度

## CSS3 media query
```
@media only screen and (max-width: 768px) {
div{
	color : blue; }
}
```

## CSS覆蓋特性
```
div{color : red;}
@media only screen and (max-width: 768px) {
div{ color : blue; } }
@media only screen and (max-width: 400px) {
div{ color : yellow; } }
```
- 320px: yellow
- 800px: blue
