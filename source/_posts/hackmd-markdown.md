title: HackMD + Markdown 常用語法
date: 2016-06-11 19:22:42
tags: [HackMD, Markdown]
---

HackMD是即時的共同協作筆記

它可以讓您用Markdown語法

無痛的協作文件與討論

同時支援手機、平板與電腦！

[HackMD官網](https://hackmd.io)

[簡報](https://hackmd.io/p/Hy-AOuKN#/11)

[原始檔](https://hackmd.io/EYRgbAhsBMDsAmBaMBjAHAVkQFgyYiAnGBkibAGYAMEAzPIbAKYVA===)

<!-- more -->

---

## 1. HackMD 語法

---

## 換頁符號

按鍵  |  語法
---- | -------
→    |   ---
↓    |   ----


<p style="text-align: center;">
這頁可以往下喔
</p>

```
換頁符號顏色

正常：藍色
錯誤：橘色

若看到橘色請多加一個enter換行
換頁解析錯誤的話檢查換頁符號前後是否有空白
```

----

## 這是往下的頁面

---

## 更換投影片背景顏色

<!-- .slide: data-background="#CC0000" -->

背景顏色換成#CC0000囉

```
<!-- .slide: data-background="#CC0000" -->
```

---

## 內容加上淡出動畫

```
<!-- .element: class="fragment" data-fragment-index="1" -->
```

- data-fragment-index: 出場順序

```
- 淡出1 <!-- .element: class="fragment" data-fragment-index="1" -->
- 淡出2 <!-- .element: class="fragment" data-fragment-index="1" -->
- 淡出3 <!-- .element: class="fragment" data-fragment-index="3" -->
- 淡出4 <!-- .element: class="fragment" data-fragment-index="4" -->
```

- 淡出1 <!-- .element: class="fragment" data-fragment-index="1" -->
- 淡出2 <!-- .element: class="fragment" data-fragment-index="2" -->
- 淡出3 <!-- .element: class="fragment" data-fragment-index="3" -->
- 淡出4 <!-- .element: class="fragment" data-fragment-index="4" -->

---

<!-- .slide: data-transition="zoom" -->
## 轉場動畫

```
<!-- .slide: data-transition="zoom" -->
```

```
轉場效果共有

fade / slide / convex / concave / zoom
```

----

<!-- .slide: data-transition="fade" -->
## fade

```
<!-- .slide: data-transition="fade" -->
```

----

<!-- .slide: data-transition="slide" -->
## slide

```
<!-- .slide: data-transition="slide" -->
```

----

<!-- .slide: data-transition="convex" -->
## convex

```
<!-- .slide: data-transition="convex" -->
```

----

<!-- .slide: data-transition="concave" -->
## concave

```
<!-- .slide: data-transition="concave" -->
```

----

<!-- .slide: data-transition="zoom" -->
## zoom

```
<!-- .slide: data-transition="zoom" -->
```

----

<!-- .slide: data-transition="fade-in convex-out" -->
## 設定不同的進入及離開效果

```
<!-- .slide: data-transition="fade-in convex-out" -->
```

```
結尾可設定不同的進入及離開
進場：-in
離開：-out
```

----

## 以上就是所有轉場動畫進入及離開的效果

---

## 自訂轉場的速度

<!-- .slide: data-transition-speed="fast" -->

```
<!-- .slide: data-transition-speed="fast" -->
```

你可以使用：
default / fast / slow

----

## default

<!-- .slide: data-transition-speed="default" -->

```
<!-- .slide: data-transition-speed="default" -->
```

----

## fast

<!-- .slide: data-transition-speed="fast" -->

```
<!-- .slide: data-transition-speed="fast" -->
```

----

## slow

<!-- .slide: data-transition-speed="slow" -->

```
<!-- .slide: data-transition-speed="slow" -->
```

----

## 以上就是所有轉場動畫速度設定的效果

---

## 2. Markdown 語法

---

## 標題-效果

# H1
## H2
### H3
#### H4
##### H5
###### H6

----

## 標題-語法

```
# H1
## H2
### H3
#### H4
##### H5
###### H6
```

---

## 清單-效果

1. 第一則列表項目
2. 另一個項目
  * 無序的次清單。
1. 數字本身是否排序並不重要，通通使用相同的數字也可以。
  1. 排序的次清單。
4. 另一個項目

----

## 清單-語法

```
1. 第一則列表項目
2. 另一個項目
  * 無序的次清單。
1. 數字本身是否排序並不重要，通通使用相同的數字也可以。
  1. 排序的次清單。
4. 另一個項目


* 可以使用星號建立無序清單
- 或是短橫線（負號）
+ 使用半形加號也可以
```

---

## 強調語法-效果

強調，例如義大利斜體，可以使用 *asterisks* 或 _underscores_。

加重語氣的強調，例如粗體，可以用 **asterisks** 或 __underscores__。

你還可以混用這兩種 **asterisks and _underscores_**。

替文字加上刪除線，像這樣 ~~Scratch this.~~

----

## 強調語法-語法

```
強調，例如義大利斜體，可以使用 *asterisks* 或 _underscores_。

加重語氣的強調，例如粗體，可以用 **asterisks** 或 __underscores__。

你還可以混用這兩種 **asterisks and _underscores_**。

替文字加上刪除線，像這樣 ~~Scratch this.~~
```

---

## 連結設定-效果

[這是一個行內連結](https://www.google.com)

[這是一個帶有標題的行內連結](https://www.google.com "Google's Homepage")

[這是一個參考連結][Arbitrary case-insensitive reference text]

[這是一個對應到 Git 倉儲檔案的相對參考連結](../blob/master/LICENSE)

[參考標的物也可以使用數字][1]

直接使用文字對應也可以 [這段文字連到參考項目]

參考項目可以寫在文檔的最後，有點像書內的註解（註腳）。

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[這段文字連到參考項目]: http://www.reddit.com

----

## 連結設定-語法

```
[這是一個行內連結](https://www.google.com)

[這是一個帶有標題的行內連結](https://www.google.com "Google's Homepage")

[這是一個參考連結][Arbitrary case-insensitive reference text]

[這是一個對應到 Git 倉儲檔案的相對參考連結](../blob/master/LICENSE)

[參考標的物也可以使用數字][1]

直接使用文字對應也可以 [這段文字連到參考項目]

參考項目可以寫在文檔的最後，有點像書內的註解（註腳）。

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[這段文字連到參考項目]: http://www.reddit.com
```

---

## 圖片-效果

這是我們的 logo （將滑鼠移到圖片上會顯示圖片標題）：

行內格式：
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo 標題文字範例一")

參考連結格式：
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo 標題文字範例二"

----

## 圖片-語法

```
這是我們的 logo （將滑鼠移到圖片上會顯示圖片標題）：

行內格式：
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo 標題文字範例一")

參考連結格式：
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo 標題文字範例二"
```

---

## 程式代碼與語法高亮標示-效果

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

```python
s = "Python syntax highlighting"
print s
```

```
No language indicated, so no syntax highlighting.
But let's throw in a <b>tag</b>.
```

----

## 程式代碼與語法高亮標示-語法

![](https://i.imgur.com/4NYYevK.png)

---

## 表格-效果

- table1

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

- table2

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3

----

## 表格-語法

```
冒號（Colons）是用來對齊的（擺左齊左、擺右齊右，都擺就置中）。

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

最外圍的豎線（|）不是絕對需要，在原始文檔中你可以不要太在意美觀，實際轉成網頁或電子書時會呈現得很好。你也可以在表格內使用行內格式。

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3
```

---

## 水平分隔線

```
三個或三個以上的符號，必須在獨立的一行，前後不能有其他文字。

---

短橫線（Hyphens）

***

半形星號（Asterisks）

___

下底線（Underscores）
```

---

## iframe

```
{% iframe url width height %}
```
