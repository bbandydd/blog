title: 切版練習1
date: 2015-06-09 22:10:48
tags: [Css]
---

[DEMO](http://bbandydd.github.io/layout_practice1/)

第一次切版的作業指導，有許多要改進的地方。

洧杰提出10個修改點，先將這次問題改進，下次版型為電子商務。

<!-- more -->

## 修改
- 下CSS RESET
    - 每個網頁必備的
- 外圍新增一個 wrap
    - 由wrap去控制寬度，裡面的div就不需要設定寬度，裡面使用margin、padding控制
- logo 外圍加上 a
- 全部該加上a連結都要加上
    - img們應該都用a包住
- 排版全改成Float
    - 全都使用float:left float:right 搭配padding、margin控制位置，寬度要是注意原本寬度加上padding、margin，若超過寬度會掉下去
- 推擠一致都用margin-bottom去作推擠
    - 設計師應都用margin-bottom去推，第一個元素使用padding-top推
- 全部都要設計hover過後的效果
    - 若沒有圖就使用透明度去呈現
- 權重設計好
    - 一個網頁只能有一個h1
- 主題式列表都改為 ul li
    - 新聞列表應使用ul、li切版
- head上面下meta
    - meta看一個前端工程師是否有深度，可以填的都填滿

## 學習
- [學習 CSS 版面配置](https://doggy8088.github.io/csslayoutsite/)

## 推薦工具
- [Markman](http://www.getmarkman.com)
    - 它可以很輕鬆的在圖片上完成標註，而且也可以測量圖片上各物件的尺寸大小或間距。
