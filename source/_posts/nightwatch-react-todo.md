# Nightwatch + ReactJS todoMVC

---

## Nightwatch

![Nightwatch](https://i.imgur.com/549jK0V.png)

- [官網](http://nightwatchjs.org/)

<!-- more -->

---

## 資料夾結構

```
+ bin/
|
+ env/
|
+ node_modules/
|
+ reports/
|
+ test/
|
- nightwatch.conf.js
|
- package.json
|
- reporter.js
```

---

## 測試重點

- 測試案例彼此獨立
- 可重複被執行
- 驗證結果

---

## 測試案例

- [程式碼](https://github.com/bbandydd/nightwatch_example)
- 應顯示標題、todo元件
- 輸入待辦事項後應清空輸入框
- 建立新待辦事項後應該出現在列表
- 從api取得待辦事項後應該出現在列表
- 完成待辦事項後應標記為完成
- 可從列表刪除待辦事項
- 切換filter並驗證

---

## 小技巧

----

### chrome dev tool - copy selector

- #todo_list > li:nth-child(1) > span > span:nth-child(1)

![copy selector](https://i.imgur.com/wTRCiZB.png)

----

### package.json


```
--test： 指定執行js file
--testcase： 單獨執行test case
-e： 指定nightwatch環境變數設定擋，使用的account、url
-r ./reporter.js： 測試結束時於瀏覽器顯示報告
```

----

### before[Each] and after[Each]

- 每次測試執行前 / 後執行
- login, logout

```
beforeEach: function(browser) {
	browser
		.resizeWindow(1280, 1080)
		.url(browser.launchUrl)
		.perform(function(client, done) {
			checkLogin(client, done);
	});
},
after: logout
```

----

### execute

- 如同chrome-dev-tool console執行js

```
browser
	.execute('$(".btn").click()')
```

---

## 遇到的坑

----

### chrome driver版本問題<br>(mac, windows, linux)

----

#### 彈跳視窗 (mac)

- 解法
	- upgrade mac chrome driver
	- chrome args

----

#### RWD需放大視窗

- .windowMaximize('current') - for windows
- .resizeWindow(1920, 1080) - for windows and mac

----

#### acceptAlert not work in iframe (linux)

- 解法
	- browser.url()進入iframe網址在做後續動作

----

#### 驗證

- 測試案例結束需做驗證
