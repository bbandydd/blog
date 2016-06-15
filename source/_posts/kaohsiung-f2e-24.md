title: 高雄前端社群#24 - 好的瀏覽器開發工具帶你上天堂
date: 2016-06-12 14:04:53
tags: [F2E, 高雄前端社群]
---

[活動網址](http://gonsakon-7655f2.kktix.cc/events/a5791ac5-f60f9c-cc9dec-eb381d-6b57e9-3a5710-61e623-17b85b-3ac7a7)

常常寫程式狂按F5更新網頁功能嗎？

你知道瀏覽器內建超強的開發除錯工具嗎？

一塊來揭開 chrome 的神秘面紗，極速提升你的開發效率！

[HackMD](https://hackmd.io/p/S1pZFrh4#/)

<!-- more -->

## CHROME Dev Tools(洧杰)

[簡報](https://hackmd.io/p/rkQ11GPE#/)

---

## Element

* color
* Scroll
* listeners
* Event
* transition
* Animation

----

### Color

- [範例](http://codepen.io/liao/full/ezJjaj/)
- 吸色器
- <img src="https://i.imgur.com/yWoe4eH.png" style="width: 300px; height: 200px"/>
- <img src="https://i.imgur.com/i8MKKdJ.png" style="width: 300px; height: 200px"/>

----

### Scroll

- [範例](http://codepen.io/liao/full/RRrYVG/)
- ctrl+f (可使用selector寫法)
- 右鍵 -> scroll into view

----

### Listener

- [範例](http://codepen.io/liao/full/pbgOwO/)
- 右鍵 -> Show function Definition
- <img src="https://i.imgur.com/8ozPCOT.png" style="width: 300px; height: 200px"/>

----

### 偽元素

- [範例](http://codepen.io/liao/full/ezJjaj/)
- :hov可以看hover樣式
- <img src="https://i.imgur.com/eVPxceU.png" style="width: 300px; height: 200px"/>

----

### Transition

- [transition範例](http://codepen.io/liao/full/PzZdob/)
- <img src="https://i.imgur.com/EBWxEqi.png" style="width: 300px; height: 200px"/>
- <img src="https://i.imgur.com/U5Ho9av.png" style="width: 300px; height: 200px"/>

---

## Network

- No throttling
- <img src="https://i.imgur.com/el4ZKnO.png" style="width: 300px; height: 100px"/>
- <img src="https://i.imgur.com/QNSUEDu.png" style="width: 300px; height: 200px"/>

---

## Chrome Extenstion

* Wappalyzer
* Dimensions
* Type Sample
* JQuery Cheat Sheet

----

### Wappalyzer

- [安裝](https://chrome.google.com/webstore/detail/wappalyzer/gppongmhjkpfnbhagpmjfkannfbllamg?utm_source=chrome-ntp-icon)
- 分析網站使用哪些技術
- <img src="https://i.imgur.com/1P77PLx.png" style="width: 300px; height: 500px"/>

----

### Dimensions

- [安裝](https://chrome.google.com/webstore/detail/dimensions/baocaagndhipibgklemoalmkljaimfdj?utm_source=chrome-ntp-icon)
- 量網頁尺寸的工具
- <img src="https://i.imgur.com/39osvEb.png" style="width: 300px; height: 200px"/>

----

### Type Sample

- [安裝](https://chrome.google.com/webstore/detail/type-sample/jobccjjaffckfoggljonehppmldgmkmh?utm_source=chrome-ntp-icon)
- 分析網站使用哪個字型
- <img src="https://i.imgur.com/xDvz7Ep.png" style="width: 400px; height: 200px"/>

----

### JQuery Cheat Sheet

- [網址](https://oscarotero.com/jquery/)
- 快速查詢jquery用法

---

## 進階實戰功能介紹（富棋）

---

### Network

- Preserver log
	- 保留之前紀錄

---

### Sources

* Snippet
* Format

----

### Snippet

- 可以儲存一些常用function的地方
- 右鍵 -> Run
- <img src="https://i.imgur.com/yW9i9d8.png" style="width: 400px; height: 200px"/>

----

### Format

- 一鍵美化 點擊下方{} 進行format
- <img src="https://i.imgur.com/ewVX5sm.png" style="width: 400px; height: 200px"/>

---

### Dev tool 內建小幫手

* $0~$4
* inspect
* $$
* dir
* console.time

----

### $0~$4

- 選取到的element
- <img src="https://i.imgur.com/Ip4OSVu.png" style="width: 1000px; height: 50px"/>
- <img src="https://i.imgur.com/fHp7XR3.png" style="width: 1000px; height: 200px"/>

----

### inspect

- 從console跳到element並選取element
```
inspect($0)
```

----

### $$

- 頁面未加入jquery可使用$$

----

### dir

- 印出物件的屬性
- <img src="https://i.imgur.com/THyS88I.png" style="width: 300px; height: 200px"/>
```
var arr = [1,2,3];
dir(arr)
```

----

### console.time

- 計算執行時間間隔
- <img src="https://i.imgur.com/1NZimkj.png" style="width: 300px; height: 200px"/>
