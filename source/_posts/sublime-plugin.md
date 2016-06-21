title: SublimeText Plugin 提升Sass開發效率
date: 2016-05-26 00:40:20
tags: [Sass, SublimeText]
---

## 優點

- 有助於寫Sass、Scss上面可以快速找出想要的Code
- 提升寫HTML、CSS的效率
- 自動排版

{% iframe https://www.youtube.com/embed/GFzjOzwtcxA 600 400 %}

<!-- more -->

## SASS 、 SCSS

- SublimeText預設沒有支援Sass、Scss高亮效果，所以首要安裝這兩個Plugin

### 注意

- 是否發現裝完SASS後，SublimeText的高亮效果依然沒有出現？
- 注意看SublimeText的右下方，SublimeText將『Sass』誤認為『Ruby Haml』

### 如何修改呢？

- View -> Syntax -> Open all with current extension as
- 選擇 『Sass』

## Emmet

- 快速產生HTML、CSS
- [官網操作影片](http://docs.emmet.io)
- [官網字典](http://docs.emmet.io/cheat-sheet/)

## 上稿神器 Wrap with Abbreviation

- 貼稿時，常常會沒貼好
- Wrap with Abbreviation可以先把文案貼到html中
- 選取內容後使用control + w 再變成想要的格式
- 下面兩個影片顯示Wrap with Abbreviation效果

[影片1](https://www.youtube.com/watch?v=GFzjOzwtcxA#t=345)

[影片2](https://www.youtube.com/watch?v=zKjDFBeIS20)

```
<ul>
	<li>文案內容</li>
	<li></li>文案內容   //貼到外面
	<li><文案內容/li>   //貼到html tag內
</ul>
```

## AutoFileName

- [Plugin介紹連結](https://sublime.wbond.net/packages/AutoFileName)
- 當你在寫HTML的a、img、CSS的background時，自動幫你Load檔案的路徑出來，讓你不用再去找資料夾瀏覽圖片名稱再來載入

## Goto-CSS-Declaration

- [Plugin介紹連結](https://packagecontrol.io/packages/Goto-CSS-Declaration)
- 將游標移動到HTML的class上輸入command + ➡️，就會跑到對應的CSS

## HTML-CSS-JS Prettify

- [Plugin介紹連結](https://packagecontrol.io/packages/HTML-CSS-JS%20Prettify)
- 必須要裝Node.js
- 使用在HTML、CSS、JS自動排版
- 使用指令非熱鍵
- command + shift + p => HTMLPrettify

## SassBeautify

- [Plugin介紹連結](https://packagecontrol.io/packages/SassBeautify)
- 使用在Sass自動排版
- 使用指令非熱鍵
- command + shift + p => SassBeautify

## SideBarEnhancements

- [Plugin介紹連結](https://packagecontrol.io/packages/SideBarEnhancements)
- 增強左側資料夾功能，例如：開啟指定的資料夾位置、強化搜尋、複製檔名路徑等等

## 參考連結

http://ithelp.ithome.com.tw/question/10159247
