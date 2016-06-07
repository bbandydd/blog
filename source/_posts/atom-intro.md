title: atom-intro
date: 2016-06-05 21:26:37
tags: [atom]
---

<img src = "http://media02.hongkiat.com/atom-code-editor/atom-logo.jpg"/>

<!-- more -->

package 有gui
資料夾顏色代表git狀態
  灰色-ignore
  黃色-修改過但未簽入git
  綠色-新增檔案，未加入git commit
  白色-已簽入未修改

command + n 新增檔案
command + d 選取相同名稱的字元
  需先反白要選取的字元
command + l 選取整行
command + f 搜尋檔案內字元
command + ctrl + m 快速選取大括號內的所有字元
command + p 快速尋找
  ignore檔案無法被尋找
  如果要搜尋ignore檔案，則必須至Preferences -> Settings -> Exclude VCS Ignored Paths 取消勾選
command + 數字(1、2、3) 快速切換頁籤
View -> Panes -> Split Right 切割視窗
command + , 開啟設定視窗

Preferences -> Settings
1. Exclude VCS Ignored Paths
  讓ignore檔案內容可以被搜尋
2. Show IndentGuide
  顯示縮排的線
3. Show Invisibles
  顯示隱藏字元，如空白或Tab縮排
