title: RWD課程2 - Mobile RWD
date: 2015-07-11 14:20:30
tags: [Rwd]
---

## Week2 - Mobile RWD

- [參考連結](https://liao-talk.hackpad.com/Week2-Mobile-RWD-xeGvrOEDAn8)
- mobile、desktop first
- chrome dev tools mobile testing
- box-sizing、css3 selector
- homework： Basic Responsive Layout

## Chrome 開發工具課程

- [Code School](http://discover-devtools.codeschool.com)

## 前端設計
- 針對動畫部分做處理搭配Git、Github

## 前端工程
- 前端工程針對Javascript、Ajax、NodeJS

## 處理API工具
- PostMan

## RWD核心 @media
- @media only screen and (max-width:768px)
- 可以縮寫成 @media(max-width:768px)
- 初學先從解析度大到小寫
- Ipad 768 * 1024
- Iphone 5橫式 320 * 569
- 常見手機橫式 320 * 480

## chrome mobile dev setting
- 測試畫面在手機上的顯示

## DIV特性
- DIV是塊狀元素
- DIV並排需要用到float

## 推間隔習慣
- 第一個元素用padding-top
- 第二個元素開始用margin-bottom
- 方便以後檢查間距
- margin-top較常有Bug(少用)

## 單欄雙欄呈現
- Div使用float: left/none 及 width: 50%/100% 切換
- float一定要給寬度才會呈現

```
<div class="wrap">
  <div class="sidebar"></div>
  <div class="content"></div>
</div>
```

```
.wrap{
  width: 300px;
  height: 100px;
  margin: 0 auto;
}
.sidebar{
  width: 40%;
  height: 20px;
  float: left;
  background-color: pink;
}
.content{
  width: 60%;
  height: 20px;
  float: left;
  background-color: yellow;
}
@media(max-width: 768px){
  .sidebar, .content{
    float: none;
    width: 100%;
  }
}
```

## img RWD reset

```
img{
	max-width: 100%;
	height: auto;
}
```

## Mobile設計要點
- 互動按鈕是否夠大足以讓手指瞄準該按鈕 (height: 44px 比較好點選)
    - 可以利用 a -> display: block，讓整個都可以點選
- mobile沒有hover事件，所以需要使用active、focus事件

```
a:hover,a:active,a:focus{
    background:#fff;
    color:#000
}
```

- 不要太多資訊佔滿版面
- 選單改用漢堡選單

## 瀏覽器市佔率查詢
- [statcounter](http://gs.statcounter.com)

## RWD LOGO設計
- 藉由修改h1的background-image達到手機上看到較小的LOGO圖片

## RWD小技巧
- border: none
- height: auto

## 設計與規劃 Mobile Web 使用者介面
- [資訊流動線規劃(MediaQueries)](http://mediaqueri.es)
- 培養Sense
- 搭配[responsive inspector](https://chrome.google.com/webstore/detail/responsive-inspector/memcdolmmnmnleeiodllgpibdjlkbpim)服用
- 斷點(Breakpoint)規劃 (一行文字僅能看20~40字)
- 隱藏影響瀏覽動線資訊
