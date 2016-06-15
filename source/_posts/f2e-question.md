title: 前端工程師問題集
date: 2015-07-23 17:21:45
tags: [F2E]
---

## 目錄
- 常見問題
- HTML問題
- CSS問題
- JS問題

<!-- more -->

## 常見問題
- 描述開發一個網站的流程

```
User Story -> Functional Map -> UI Flow -> WireFrame -> Mockup -> Prototype
User Story
	客戶想要什麼功能？
	使用者可以在你的服務上操作什麼服務？
	以人力網來說：
		求職者可以在網站上張貼履歷
		求職者可以搜尋有哪些工作
		廠商可以張貼新工作
		求職者可以限制誰可以看到他的履歷
```

- 描述漸進漸強和優美退化的差異

```
漸進漸強：從基本功能開始開發，保證系統在各種環境都可以執行，再逐步增加功能及提升使用者體驗
優美退化：開發系統時，就針對最新最完善的環境來設計。而對於較舊的平台僅提供基本功能，而非完整功能
漸進漸強初期投入的成本較高，但以長遠來看是較為穩定的
優美退化初期僅針對某個環境進行開發，適合用於產品雛形開發
```

- 說出三種能加快網頁讀取速度的方法

```
將Javascript和Css瘦身：將不必要的程式碼拿掉
外部載入Javascript和Css：避免將Javascript和Css直接寫在頁面上
使用Css Sprites減少載入圖片載入次數
```

- 什麼是FOUC？如何避免FOUC？

```
Flash of Unstyled Content：瀏覽器加載網頁時會出現短暫的CSS失效畫面
瀏覽器會先加整個畫面的DOM，再載入外部的CSS，這中間的過渡期就會產生FOUC
解決方法：在<head>中加入<link>或<script>就可以了
```

- Css animation VS Javascript animation

```
簡單變化使用Css的transition和animation
而要求控制力高的時候就要使用Javascript animation
```

---

## HTML問題

- doctype用處

```
用來定義網頁編寫的HTML採用什麼版本
```

- standards mode 和 quirks mode 有什麼不同？

```
standards mode：有宣告doctype
quirks mode：沒有宣告doctype，使用較舊的瀏覽器模式
Box Model 定義不同
	standards mode： width代表內容寬
	quirks mode：width包含內容寬 + padding + border
```

- 使用XHTML有什麼限制

```
XHTML是結合XML和HTML的特性，是用來取代HTML
1. 元素必須正確的插入
	<b><i>This text is bold and italic</i></b>
2. 元素必須被關閉
	<p>This is a paragraph</p>
	An image: <img src="happy.gif" alt="Happy face" />
3. 元素必須使用小寫
	<body>
		<p>This is a paragraph</p>
	</body>
4. 所有元素必須放在html標籤內
	<html>
		<head> ... </head>
		<body> ... </body>
	</html>
```

- 如何做需要多語系的網站

```
使用i18n framework
```

- 使用data- 屬性的好處？

```
以往總是在標籤上添加自定義屬性來儲存和使用，但是不知道何時會被重置掉，且也不符合HTML規範
因此HTML5加入data屬性，data在頁面上是不顯示的，但卻可讀可寫
<div id="awesome"
     data-myid="3e4ae6c4e">Some awesome data</div>

var myid= jQuery("#awesome").data('myid');
```

- HTML5的 building blocks有哪些

```
語意標籤
video、audio
canvas
communication API
geolocation API
data storage
```

- cookies、sessionStorage、localStorage的差別

```
cookies：每個HTTP request都會送到伺服器端，拖慢載入速度和頻寬
sessionStorage、localStorage是HTML5新增的功能，儲存在本機
sessionStorage：生命週期僅存活到瀏覽器或頁面關閉
locationStorage：生命週期較長，要等到使用Javascript清空localStorage或清空cache才會消失
```

- script、script async、script defer差異

```
1. <script src="demo.js"></script>
	- webpage render會停止，等到demo.js載入完畢才會繼續render
2. <script src="demo.js" async></script>
	- wepage render不會停止，demo.js在背景載入
	- demo.js載入完畢，render停止，開始執行demo.js
	- demo.js執行完畢，render繼續
3. <script src="demo.js" defer></script>
	- webpage render不會停止，demo.js在背景載入
	- 等到webpage載入完畢才會執行demo.js
```

---

## CSS問題

- 描述”resetting”和”normalizing”的差異性

```
resetting：因為不同瀏覽器對於標籤預設樣式都不同，因此定義出一套可以覆蓋所有HTML標籤的CSS樣式表，使所有瀏覽器標準一致。
normalizing：相對於resetting將所有標籤的預設樣式都歸零，這類的樣式僅針對不同瀏覽器和版本不相容的標籤進行微調。
```

- box-model

```
margin：和其他元素的距離
boder：元素邊框
padding：內容和邊框距離
```

- box-sizing

```
box-sizing：元素在計算寬度及高度時，border及padding是內含還是外加
content-box：預設值為content-box，元素實際寬高等於CSS指定寬高加上border/padding(外加)
border-box：元素實際寬高等於CSS指定寬高減掉border/padding(內含)
```

- display種類

```
display: block
display: inline
display: inline-block
display: none
```

- inline、inline-block差別

```
inline：簡單來說就是兩個inline元素不會換行顯示，可以設定的CSS樣式僅有margin-left、margin-right、padding-left、padding-right
inline-block：裡面是inline，外面是block。兩個inline-block元素不會換行，CSS樣式皆可以設定
```

- position

```
static：預設值，按照瀏覽器預設的配置排版
relative：可以設定top、left、right、bottom，使元素相對調整原本該出現的位置，此調整不影響其他元素的位置
fixed：相對於瀏覽器視窗來定位，即使畫面捲動也會出現在固定的位置
absolute：相對於body來定位
```

---

## JS問題

- event delegation

```
可減少監聽器的數目，將click事件綁定在parent上，再加上filter來控制
<div class="parent">
    <div class="child" data-name="a"></div>
    <div class="child" data-name="b"></div>
    <div class="child" data-name="c"></div>
    <div class="subitem" data-name="d"></div>
</div>
$('.parent').on('click', '.child', function(){
    console.log($(this).data('name'));   
});
```

- 立即函式(IIFE)

```
立即函式是Javascript中可以立即執行的函式
(function(){
  // my special code
})();
很常被用來執行只用一次的程式碼，例如初始化動作
```

- null、undefined、undeclared

```
null：變數存在，指派null值
undefined：變數存在，未指派值
undeclared：變數不存在
```

- closure

```
閉包(closure)就是當在函式裡,函式的作用域(scope)和經由此函式宣告而可存取的變數,將仍是可被內部的函式所存取
function init() {
  var name = "Mozilla";
  function displayName() {
    alert(name);
  }
  displayName();
}
init();
```

- anonymous function典型使用時機

```
僅需執行一次的function
```

- 描述AJAX

```
Ajax是Asynchronous JavaScript and XML的縮寫，是一種不需要重新整理頁面，透過JavaScript來與伺服器交換資料、更新網頁內容的技術。目的在於改善使用者的操作介面，提昇流暢度。
```

- “attribute” 和 “property” 的不同？

```
attribute：DOM元素的特性，每個DOM元素都有對應的attribute
property：DOM元素的屬性，將DOM元素看成一個物件來使用
```

- == 和 === 有什麼不同？

```
===會多判斷型別，避免使用==造成未知的錯誤
```
