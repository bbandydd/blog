title: Sass、Compass 環境安裝流程教學
date: 2015-05-26 00:34:42
tags: [Sass, Compass]
---

Compass是支援Sass的強大工具，這裏將會講解如何在Mac安裝Sass、Compass。

Windows環境安裝影片

{% iframe https://www.youtube.com/embed/2rM5KP5X_UI 600 400 %}

<!-- more -->

## 安裝Sass、Compass

- Command Line輸入下面語法

```
gem install compass
```

## 開啟一個Compass專案
- 需要新增一個資料夾放Compass專案
- 我在根目錄底下新增一個Compass資料夾
- Command Line輸入下面語法即在Compass資料夾新增一個名為coffee的專案

```
compass create coffee
```

- 當你希望sass檔案更新時，系統就會直接編譯成CSS的話
    - 需輸入以下字元進行監控動作
    - 要停止監控(watch)的話，則使用 control + c
    - 註：後面的coffee則看你的專案資料夾而有所修改

```
compass watch coffee
```

## config.rb設定
- 如果你希望sass編譯出來的css不要有註解，則打開專案資料夾的config.rb
    - 將 #line_comments = false 前面的#號拿掉就不會產生出註解
- 裡面會有四行以下的預設設定碼
    - 如果你放CSS的資料夾名稱為CSS，便把stylesheets的名稱改為CSS
    - 這樣Sass編譯出來的CSS就會在CSS資料夾，而不會在stylesheets裏
    - 註:當修改config設定後，要重新在Command Line中watch資料夾一次，設定才會生效

```
css_dir = "stylesheets"
sass_dir = "sass"
images_dir = "images"
javascripts_dir = "javascripts"
```

## 參考連結
http://ithelp.ithome.com.tw/question/10128634
