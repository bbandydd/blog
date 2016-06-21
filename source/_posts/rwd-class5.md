title: RWD課程5 - Mobile 進階開發細節
date: 2015-08-01 02:16:12
tags: [RWD]
---

## Week5 - Mobile 進階開發細節
- [Vertical rhyth(文字垂直韻律)](http://www.slideshare.net/sfismy/vertical-rhythm)、[範例](http://codepen.io/liao/pen/pHyhg)
- [schema](https://schema.org)、[線上檢測工具](https://developers.google.com/structured-data/testing-tool/)
- [schema sample](http://codepen.io/liao/pen/waaamx?editors=101)
- review RWD
    - 以數據分析來設計資訊流
    - 規劃圖片策略，瀏覽器技術(是否可支援border-box，IE9以上)
    - 使用chrome dev tools Debug
    - [組件化模組](https://myerstone.hackpad.com/W-home-style-gec9DKCX8H3)
- [前端開發流程分享](https://docs.google.com/presentation/d/10h6iyl3o4TL_bZToHDC9If0wTz4MetZVLfXawXGkoBg/edit?pli=1#slide=id.p12)
- HTML5、網頁語意化技巧
- 行動版測試友善度、page speed、chrome plugin to pagespeed
- 設定關鍵字種類：itemscope itemtype=”http://schema.org/Product“
- 設定名稱：itemprop=”name”
- 設定圖片：itemprop=”image”
- 設定描述：itemprop=”description”

<!-- more -->

## Vertical rhyth (文字垂直韻律)
- 使用Vertical rhyth排出友善的圖文排版
- 例如寫英文有格線的觀念
- 文字高度來自『行距』，非文字大小
- 文字垂直置中於行距
    - line-height: 24px, font-size: 16px
    - 文字佔16px, 上下空白留4px

## 練習
- font-size:15px, line-height: 25px 圖文並排語法

```
<img src="http://placehold.it/250x100">
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate doloremque amet repellat inventore numquam voluptatibus ipsa nisi ex quaerat iure repellendus suscipit expedita voluptatum pariatur magnam. Facilis et sed similique esse aliquam fuga saepe consectetur facere eveniet reprehenderit ab molestias eius repellendus doloremque modi odit corrupti quaerat veniam officia itaque. Sit nesciunt nam reiciendis quasi incidunt quos asperiores rem atque nobis optio quia eveniet? Odit in accusamus voluptates eum harum optio sit repellendus fuga sed eaque omnis nesciunt tenetur explicabo magni neque! Et odio commodi quis amet veritatis repudiandae nobis cupiditate fugit velit est ipsa rerum placeat voluptates adipisci voluptatum repellat ea laudantium excepturi delectus accusamus deleniti debitis quas tempora. Repudiandae placeat tempore pariatur laudantium quia fugit explicabo reiciendis beatae repellat perferendis expedita molestias excepturi commodi iste aperiam. Illo in commodi accusamus voluptate distinctio quam ab minus repellat iste maxime laudantium at neque repudiandae esse consequatur illum quia? Similique voluptatibus natus sint laboriosam odio facere recusandae eius necessitatibus quasi! Numquam architecto vel quam quidem praesentium maiores aut corporis tempore magni delectus ullam facilis quas omnis laborum molestiae cumque voluptatum placeat corrupti nemo deleniti porro impedit dolores quia possimus facere! Tempore quibusdam quia omnis at repellendus sint vero consequuntur in fugit.
</p>
```

```
p{
  font-size: 15px;
  line-height: 25px;
}
img{
  float: left;
  margin: 0 15px 0 0;
}
```

## 優化SEO
- 加入Schema
    - itemscope, itemtype, itemprop

```
<div itemscope itemtype="http://schema.org/Product">
  <img itemprop="image" id="ContentPlaceHolder_imgCover" src="http://www.hamaebook.com/Upload/eBook/3816/UploadImage/UploadImage.jpg" style="height:270px;width:210px;">
  <h1 itemprop="name">銑床切削加工之面銑削</h1>
  <p itemprop="description">銑床切削加工之面銑削 銑床切削加工之面銑削 銑床切削加工之面銑削 銑床切削加工之面銑削</p>
</div>
```

- 每個商品頁title都要修改
- Google網站管理員

## 以數據分析來設計資訊流
- 先導入Google Analysis
    - 判斷哪些頁面是客戶感興趣的
    - 再針對那些頁面進行設計

## 元件組件化    
- 不是以頁面去設計，先將所有組件完成再放到頁面
- 建置子模組，方便擴增及維護
    - class = “btn btn-default”
    - class = “btn btn-primary”

## Chrome 插件
- Dimensions：檢測間距
- HTML5 Outliner：檢測HTML結構
- Type Sample：顯示網頁上字體
- Responsive Inspector：查看RWD斷點
- PageSpeed：進行網頁速度分析
- Native Todolist
- URL Shortener
- Evernote Web Clipper：螢幕繪圖截圖工具

## 軟體輔助
- Tomato Clock：蕃茄時間管理法
- Asana：專案紀錄
- Trello：專案管理
- hackpad：協同追蹤紀錄

## 前端開版流程
- Cacoo：畫wireframe
- Markman：標示軟體
- slicy：圖像處理，最近開始投入sketch3
