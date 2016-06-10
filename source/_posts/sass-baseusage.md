title: sass-基本用法
date: 2015-07-04 23:39:11
tags: [Sass]
---

## Sass-基本用法
- 變數
- 計算
- @import
- @Mixin
- @extend

<!-- more -->

## 變數
首先模擬一些寫純CSS容易會遇到的情境

- 一個網站內有四組文字連結顏色樣式，總CSS程式碼有5000行，有文字連結顏色的設定共98行。當客戶想要改某一個文字顏色樣式時，就必須花時間逐行去修改。
- 要修改全域設定的網頁樣式時，時常必須用滾輪或肉眼從數百行中找出你要改的程式碼，像字型樣式、網站總體寬度等等。

```
$text-size: 32px
$text-color1: white
$text-color2: black
$img-url: '../img'
.header
    background-color: red
    a
        font-size: $text-size
        color: $text-color1
.menu
    background-color: yellow
    a
        font-size: $text-size
        color: $text-color2
.li1
    background: url('#{$img-url}/dribble.png') no-repeat
.li2
    background: url('#{$img-url}/facebook.png') no-repeat
```

- 打『$』字號，後面則是變數名稱
- 使用#{}可以抓出字串使用

---

## 計算
- Sass支援加減乘除的計算
- 當原本選單寬度600，目前只有三個選單可以整櫥，某天臨時又要增加四個，就必須拿計算機來算寬度

```
$font-size: 30px
$nav-width: 600px
$nav-count: 3
.font-big
    font-size: $font-size * 1.2
.font-middle
    font-size: $font-size - 3px
.font-small
    font-size: $font-size / 3
ul
    width: $nav-width
    display: inline-block
    background-color: pink
    li
        float: left
        list-style: none
        width: $nav-width / $nav-count
```

若使用不同單位會出錯，例如使用px和em進行計算。

## @import
- 在以往寫CSS時，
動輒數百、數千行，
寫多了就會很難找各CSS片段的位置，
且滾輪都必須滾很久才會找到對應的程式碼，
所以在以往都會在CSS寫註解，
至少用搜尋或找位置時都比較方便，
- 但使用了Sass的@import功能，
就可以把CSS程式碼切成好幾份來做檔案管理，
最後編譯出來合併成一個CSS檔案，
在管理上自然方便得多。

```
@import "reset.sass"
@import "variable.sass"
@import "extend.sass"
@import "mixin.sass"
@import "index.sass"
@import "page.sass"
```

## mixin
- 在以前寫CSS的時候，
我們時常會遇到以下的情境，

- 在開發多種CSS樣式時，會講第一次寫的程式碼複製貼上後，
再進行修改，但當樣式整個大修時(例：圓形改方形)，
則又必須將所有CSS重新修正，頗不方便。

```
@mixin btn($color1, $color2)
    -webkit-border-radius: 10px
    -moz-border-radius: 10px
    border-radius: 10px
    color: purple
    font-size: 26px
    background-image: linear-gradient(to top, $color1 40%, $color2 60% )
.btn1
    +btn(green, black)
    width: 100px
    height: 100px
.btn2
    +btn(yellow, green)
    width: 90px
    height: 90px
```

---

## extend
- 有的時候我們為了不要讓CSS太龐大，所以有class用到相同樣式時，都會將其合併起來，如下CSS碼：

```
/* 第200行位置 */
.div1, .div2, .div3, .div4 {
  width: 100px;
  height: 100px;
  margin-bottom: 50px;
  -moz-box-shadow: 0 0 30px #777777;
  -webkit-box-shadow: 0 0 30px #777777;
  box-shadow: 0 0 30px #777777;
}
/* 第1000行位置 */
.div1 {
  background-color: blue;
}
/* 第4000行位置 */
.div2 {
  background-color: red;
}
```

- 但這樣子會有個麻煩的地方是，
假設合併樣式程式碼的位置在第200行，
而我目前所在位置是在4640行，
當我又需要合併樣式時，
就又必須用滾輪會調卷軸到第200行來合併class樣式，
所以當程式碼越變變多時，
要集中相同樣式的工作流程相對也會變得更加繁瑣，

- 所幸Sass ＠extend可以解決這樣的問題。
如果是用Sass來寫的話，
則就會變成這樣子：

```
%div-init
    width: 100px
    height: 100px
    margin-bottom: 50px
    -moz-box-shadow: 0 0 30px #777777
    -webkit-box-shadow: 0 0 30px #777777
    box-shadow: 0 0 30px #777777
.div1
    background-color: blue
    @extend %div-init
.div2
    background-color: red
    @extend %div-init
```

- 究竟Mixin與extend的使用時機該如何抉擇？
基本上來說，
@mixin是將程式碼帶入到對應的class去，同時可帶入變數。
@extend則是藉由class合併，並吃到共通樣式，但沒辦法帶入變數。

- 所以如果你的樣式都固定不變的，
不會需要用參數帶進去改變樣式的話，
那就用@extend，程式碼會比較少些。

- 但如果你的程式碼需要帶入多個變數進行運算時，
那用@mixin則較適合。

---

## 參考資料：

[Sass & Susy教學手冊](http://sam0512.blogspot.tw/2013/10/sass.html)
