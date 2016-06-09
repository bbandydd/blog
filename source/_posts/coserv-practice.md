title: coServ - 簡易版練習
date: 2015-05-25 00:29:15
tags: [coServ, NodeJS]
---

這是coServ簡易版的練習，主要是有一個挖空的Simple-Practice，要將它填好。

簡易版：[COIMOTION範例](https://drive.google.com/file/d/0B7bg8P4NEh7kNGttQ0VQQmtNTTA/view?pli=1)內有2個資料夾，一個是範例(SIMPLE)、一個是把一些程式挖空的(SIMPLE_PRACTICE)。簡易版主要是知道整個架構如何使用，不會用到api，目標是出來的畫面要跟範例一模一樣

<!-- more -->

## 首頁

- 換Banner圖片
    - /blocks/views/coserv/banner/banner.html
    - 將img.png換成xs.png

```
<img src="../simple/img/xs.png" alt"coServ">
```

## 範例

- 顯示左邊功能選單下展示內容(首頁、整合跨網站資料)
    - <%=ph.mc1_1%>、<%=ph.mc1_1%>：選單內容，即是我們要修改的東西
    - <%=ph %>內的值宣告在/blocks/mainMenu/mainMenu.lang
    - 將mc1_1、mc1_2、mc2_1、mc2_2的內容補上即可
    - lang裏的en是英文內容、zh是繁中內容

```
<div id="mmenu1" class="panel-collapse collapse in">
  <div class="panel-body">
    <p><%=ph.mc1_1%></p>
    <p><%=ph.mc1_2%></p>
  </div>
</div>
<div id="mmenu2" class="panel-collapse collapse">
  <div class="panel-body">
      <p><%=ph.mc2_1%></p>
      <p><%=ph.mc2_2%></p>
  </div>
</div>
```

```
<ph id="mc1_1">
     <en>This page is served by a static block. That means contents are neither coming from a local module nor from a API service call.</en>
     <zh>這個範例的主要內容是由一個靜態的區塊所產生，意指內容既不是由程式、資料庫，也不是由所謂的 API 服務所提供，而只是單純的靜態網頁。</zh>
   </ph>
   <ph id="mc1_2">
     <en>The HTML source can be found in &lt;b>blocks/views/index/index.html&lt;/b></en>
     <zh>實際內容由 &lt;b>blocks/views/index/index.html&lt;/b> 這個檔案產出。</zh>
   </ph>
   <ph id="mc2_1">
     <en>In this example, contents are served by a local module (&lt;b>blocks/modules/co/rss.js&lt;/b>). That module loads a RSS feed from Yahoo, parses it
     and then sends it out as a JSON list for the template engine to compose the HTML output as you see it.</en>
     <zh>這個範例的內容是由一個本地模組 (&lt;b>blocks/modules/co/rss.js&lt;/b>) 所產出。這個模組會讀取 Yahoo 的 RSS 清單後將結果轉成一個 JSON 物件。
     這個 JSON 物件隨後會被送入 coServ 的樣板引擎，然後組合出你目前所看到的 HTML 畫面。</zh>
   </ph>
   <ph id="mc2_2">
     <en>The source file of the local module can be found in &lt;b>blocks/modules/co/rss.js&lt;/b>, and HTML source can be
     found in &lt;b>blocks/views/co/rss/rss.htlml&lt;/b>. There is also a rss.js file in the 'blocks/views/co/rss' directory.
     That js file will run on browsers. Do not confuse it with the rss.js node module.
     </en>
     <zh>Node 模組的原始檔為 &lt;b>blocks/modules/co/rss.js&lt;/b>，至於 HTML 樣板則為 &lt;b>blocks/views/co/rss/rss.htlml&lt;/b>。
     另外還有一個 rss.js 檔位於 'blocks/views/co/rss' 的目錄下。不過這是區塊的控制檔（controller），不要和 node 的模組搞混了。</zh>
   </ph>
```

- 修改顯示左邊功能選單第三個頁籤標題
    - /blocks/views/mainMenu/mainMenu.html
    - <%=ph.menuTitle1>%>：選單Title，如：首頁、整合跨網站資料
    - <%=ph %>內的值宣告在/blocks/mainMenu/mainMenu.lang
    - 將mc1_1、mc1_2、mc2_1、mc2_2的內容補上即可
    - lang裏的en是英文內容、zh是繁中內容

```
<div class="panel-heading">
  <h4 class="panel-title">
    <a data-toggle="collapse" data-parent="#rgLeftMenu" href="#mmenu3">
      <%=ph.menuTitle3%>
    </a>
  </h4>
</div>
```

```
<ph id="menuTitle3">
  <en>Block Reusing</en>
  <zh>區塊重複使用</zh>
</ph>
```

- 選單-區塊重複使用內抓出BBC News的資料
    - /blocks/views/reuse/reuse.html
    - 使用 /blocks/views/co/rss.js模組抓取RSS資料
    - 同上面抓取Yahoo RSS的一樣，只需修改url

```
<div id="rss2" class="fixH">
  		<% block('/co/rss', {params: {url: 'http://feeds.bbci.co.uk/news/rss.xmlre'}}); %>
</div>
```
