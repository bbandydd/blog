title: Nightwatch JS - Introduction
date: 2016-08-08 16:49:26
tags: [E2E, Nightwatch]
---

# Nightwatch JS

![Nightwatch](https://i.imgur.com/549jK0V.png)

[API Reference](http://nightwatchjs.org/api)

<!-- more -->

---

## Outline

- nightwatch.conf.js 設定
- package.json 設定
- 資料夾結構
- nightwatch指令
- special case

---

## nightwatch.conf.js 設定

----

### config結構

```
var config = {
    "src_folders"  // 指定測試程式碼資料夾
    "output_folder" // 測試報告
    "selenium" // selenium基本設定
    "test_settings" // nightwatch環境變數

    // selenium custom setting
    "custom_commands_path"
    "custom_assertions_path"
};
```

----

### 基本設定

```

"src_folders": [
        "test"
    ],
"output_folder": "./reports",
"selenium": {
        "start_process": true,
        "server_path": "./bin/selenium-server.jar",
        "host": "127.0.0.1",
        "port": 4444,
        "cli_args": {
            "webdriver.chrome.driver": "nightwatch",
            "webdriver.firefox.profile" : "nightwatch"
        }
    },
```

----

### 環境變數設定


```
"test_settings": {
        "wkh_teacher": {
            "screenshots": {
		// if you want to keep screenshots
                "enabled": false,
		// save screenshots here
                "path": './screenshots'
            },
            "globals": {
		// sometimes internet is slow so wait.
                "waitForConditionTimeout": 6000,
                "account": account_wkh,
                "url": url_wkh
            },
	    // use Chrome as the default browser for tests
            "desiredCapabilities": {
                "browserName": "chrome"
            },
            "launch_url": url_wkh.index,
            "skip_testcases_on_fail": false
        }
        "chrome": {
            "desiredCapabilities": {
                "browserName": "chrome",
                "javascriptEnabled": true
            }
        },
        "firefox": {
            "desiredCapabilities": {
                "browserName": "firefox",
                "javascriptEnabled": true
            }
        }
    }
```

----

### 將設定獨立成function，傳入globals所需參數

```
"test_settings": {
        "wkh_teacher": setting(account_wkh.teacher, url_wkh),
        "chrome": {
            "desiredCapabilities": {
                "browserName": "chrome",
                "javascriptEnabled": true // set to false to test progressive enhancement
            }
        },
        "firefox": {
            "desiredCapabilities": {
                "browserName": "firefox",
                "javascriptEnabled": true // set to false to test progressive enhancement
            }
        }
    }
```

----

```
function setting(_account, _url) {

    var globals =  {
        "waitForConditionTimeout": 6000
    };

    if (_account != null) {
        globals['account'] = _account;
    }
    if (_url != null) {
        globals['url'] = _url;
    }

    return {
        "screenshots": {
            "enabled": false, // if you want to keep screenshots
            "path": './screenshots' // save screenshots here
        },
        "globals": globals,
        "desiredCapabilities": { // use Chrome as the default browser for tests
            "browserName": "chrome"
        },
        "launch_url": _url.index,
        "skip_testcases_on_fail": false
    }
}
```

----

### 依照作業系統使用對應chrome driver

```
// condition os type
var os_type = os.type().toLowerCase();
var selenium_cli = config.selenium.cli_args;
if (os_type.indexOf('windows') > -1) {
    selenium_cli['webdriver.chrome.driver'] = 'bin/chromedriver_windows.exe';
} else if (os_type.indexOf('darwin') > -1) {
    selenium_cli['webdriver.chrome.driver'] = 'bin/chromedriver_mac';
} else {
    selenium_cli['webdriver.chrome.driver'] = 'bin/chromedriver_linux64';
}

module.exports = config;
```

---

## package.json 設定

----

```
"scripts": {
    "wkh_teacher": "nightwatch --test test/main/main_teacher.js
	    -e wkh_teacher -r ./reporter.js",

    "special": "nightwatch --test test/main/main_special.js
	    -e wkh_teacher -r ./reporter.js",
    "addCourse": "nightwatch --test test/main/main_special.js
	    -e wkh_teacher --testcase addCourse",
    "reviewHomework": "nightwatch --test test/main/main_special.js
	    -e wkh_teacher --testcase reviewHomework",
    "urlParse": "nightwatch --test test/main/main_special.js
	    -e wkh_teacher --testcase urlParse",
    "advancedSearch": "nightwatch --test test/main/main_special.js
	    -e wkh_teacher --testcase advancedSearch",
    "ajaxWait": "nightwatch --test test/main/main_special.js
	    -e wkh_teacher --testcase ajaxWait"
  }
```

----

### nightwatch 參數

```
--test： 指定執行js file
--testcase： 單獨執行test case
-e： 指定nightwatch環境變數設定擋，使用的account、url
-r ./reporter.js： 測試結束時於瀏覽器顯示報告
```

---

## 資料夾結構

----

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
- nightwatch.js
|
- package.json
|
- reporter.js
```

----

- chrome driver和selenium執行擋

```
+ bin/
|
+--chromedriver_linux64
|
+--chromedriver_mac
|
+--chromedriver_windows.exe
|
+--selenium-server.jar
```

----

### 環境變數設定，包含url和account

```
+ env/
|
+-+ base/
| |
| +-- url.js
| |
+-+ default/
| |
| +-- account.js
| |
+-+ wkh/
| |
| +-- account.js
```

----

### 參數設定、環境設定

```
- nightwatch.conf.js
|
- package.json
```

----

### 測試程式碼

```
+ test/
|
+-+ comm/          // 共用模組
| |
| +-- login.js
| |
+-+ images/        //測試上傳圖片
|
+-+ main/          //主要模組，組合各組件
| |
| +-- main_special.js
| |
| +-- main_teacher.js
| |
+-+ teacher/       //組件
| |
| +-- irs.js
| |
| +-- special.js  

```

----

### 測試報告

```
+ reports/
|
+-+ main/
| |
+-- report.html
| |
- reporter.js
```

---

## nightwatch指令

----

## **windowMaximize(*function callback*)**

- 將目前視窗最大化
- mac和windows最大化不同
- [api](http://nightwatchjs.org/api/maximizeWindow.html)

```
browser
    .maximizeWindow();
```

----

### **ResizeWindow**

- 設定瀏覽器尺寸，尺寸可能導致dom element隱藏造成測試失敗
- [api](http://nightwatchjs.org/api/resizeWindow.html)

```
browser
    .resizeWindow(1280, 1080)
```

----

### **Asynchronous before[Each] and after[Each]**

- 每次測試執行前 / 後執行
- login, logout
- 在非同步操作完成後必須呼叫done()，否則會有timeout error
- [api](http://nightwatchjs.org/guide#asynchronous-before-each-and-after-each-)

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

### **perform(*function callback*)**

- 執行簡單指令去介接API的callback function
- [api](http://nightwatchjs.org/api/perform.html)

```
browser
     .perform(function(client, done) {
         checkLogin(client, done);
     })

```

----

### **end(*function callback*)**

- 關閉瀏覽器
- 結束session (使用session protocol command)
- [api](http://nightwatchjs.org/api/end.html)

```
browser
    .end()
```

----

### **url(*string|function url*)**

- 測試時需先導頁
- 導向參數設定的URL(未設定則到當前頁面)
- [api](http://nightwatchjs.org/api/url.html)
- [doc](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidurl)

```
browser
    .url(browser.launchUrl)
```

----

### **click(*string selector*)**

- DOM元素的click事件
- [api](http://nightwatchjs.org/api/click.html)

```
browser
    .click('#advancedBtn')
```

----

### **execute(*string|function body, Array args*)**

- 如同使用chrome dev-tools執行javascript或jquery
- 注入Javascript執行
- [api](http://nightwatchjs.org/api/execute.html)

```
browser
    .execute('$("button.aui_state_highlight").click()')
```

----

### **pause(*number ms*)**

- 以毫秒為單位做時間暫停
- [api](http://nightwatchjs.org/api/pause.html)

```
browser
    .pause(200)
```

----

### **waitForElementPresent(*string selector, number time*)**

- 等待元素生成
- [api](http://nightwatchjs.org/api/waitForElementPresent.html)

### **waitForElementNotPresent**

- [api](http://nightwatchjs.org/api/waitForElementNotPresent.html)

```
browser
    .waitForElementPresent('img.login')
```

----

### **waitForElementVisible(*string selector, number time*)**

- 等待元素可見
- [api](http://nightwatchjs.org/api/waitForElementVisible.html)

### waitForElementNotVisible
- [api](http://nightwatchjs.org/api/waitForElementNotVisible.html)

```
browser
    .waitForElementVisible('img.login')
```

----

### **moveToElement(*string selector, number xoffset, number yoffset*)**

- 移動滑鼠游標
- [api](http://nightwatchjs.org/api/moveToElement.html)
- *execute jQuery的寫法： $(element).trigger("mouseenter")*

----

### **clearValue(*string selector*)**

- 清除textarea 或 text input的值
- [api](http://nightwatchjs.org/api/clearValue.html)

```
browser
    .clearValue('input[type=text]')
```

----

### **setValue(*string selector, string|array value*)**

- 設定元素的值
- [api](http://nightwatchjs.org/api/setValue.html)

```
browser
    .setValue('input[type=text]', 'nightwatch');
```

----

### **frame(*string|number|null frameId*)**

- 控制iframe
- 更改focus到另一個頁面框架，如果frameId遺失或設定為null，則會轉回到預設的頁面
- [api](http://nightwatchjs.org/api/frame.html)
- [doc](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidframe)

```
browser
    .frame(0)
    .pause(200)
    .click('button.btn')
```

----

### **element(*string using, string value*)**

- 在頁面上搜尋元素
- [api](http://nightwatchjs.org/api/element.html)
- [doc](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelement)

```
//class name, css selector, id, name, link text,
  partial link text, tag name, xpath

browser
    .element('css selector', '.rolemenu', function(elem) {
    }
```

----

### **getAttribute(*string selector, string attribute*)**

- 取得DOM元素上的屬性
- [api](http://nightwatchjs.org/api/getAttribute.html)

```
browser
    .getAttribute('#main ul li a.first', 'href',, function(elem) {
    }
```

---

## Demo - special case

- 上傳單個檔案
- 上傳多個檔案
- 抓取jQuery String
- 點擊submit按鈕
- 判斷ajax completed

----

### 上傳單個檔案

```
'addCourse': function(browser) {
        browser
            .url(browser.globals.url.addCourse)
            .pause(200)
            .setValue('#uploadPicture_class input[type="file"]', require('path').resolve('test/images/mushroom.jpg'))
            .pause(200)
            .setValue('.green_block input[type="file"]', require('path').resolve('test/images/mushroom.jpg'))
            .pause(2000)
            .frame(0)
                .pause(200)
                .click('button.btn')
                .pause(200)
                .frame(null)
            .execute('doCreate()')
    }
```

----

### 上傳多個檔案

```
'reviewHomework': function(browser) {
        browser
            .url(browser.globals.url.reviewHomework)
            .pause(200)
            .click('#listContent button.btn_preview:first-child')
            .pause(200)
            .click('#listContent button.btn_preview:first-child')
            .pause(200)
            .execute('upload()')
            .frame(0)
                .pause(200)
                .setValue('#uploader input[type="file"]', require('path').resolve('test/images/mushroom.jpg'))
                .pause(1000)
                .setValue('#uploader input[type="file"]', require('path').resolve('test/images/mario.jpg'))
                .pause(1000)
                .execute('goSave()')
                .frame(null)
            .pause(1000)
            .execute('$("button.aui_state_highlight").click()')
    }
```

----

### 抓取Query String

```
'urlParse': function(browser) {
        browser
            .url(browser.globals.url.addCourse + '?query1=aaaa&query2=bbb')
            .url(function(result) {
                var url = require('url');
                var url_parts = url.parse(result.value, true);
                var query = url_parts.query;

                this.assert.equal(query.query1, 'aaaa', 'query1 is aaaa');
                this.assert.equal(query.query2, 'bbb', 'query2 is bbb');
            })
    }
```

----

### 點擊submit按鈕

```
"advancedSearch": function(browser) {
        browser
            .url(browser.globals.url.questionList)
            .pause(200)
            .click('#advancedBtn')
            .execute('goQuery()')
            .pause(200)
            .waitForElementPresent('#showlist')

        console.log("Submit Completed")
    }
```

----

### 判斷ajax completed

- github找到的第三方元件，效果不確定
- 每0.1秒偵測是否有ajax completed event

```
"ajaxWait": function(browser) {
        browser
            .url(browser.globals.url.index)
            .pause(200)
            .waitForJqueryAjaxRequest()

        console.log("AJAX Completed")
    }
```
