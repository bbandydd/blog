title: 在Hexo new 之後立即打開新建的MacDown檔案
date: 2015-05-24 17:12:38
tags: [hexo, markdown]
---

## 目標

在Hexo新增一篇文章非常簡單，只需要在Command Line輸入

```
hexo new "newTitle"
```

- 但是往往要到 [hexo 資料夾]/source/\_posts中開啟md檔才能繼續編輯，實在是非常不方便
- 使用以下方法即可在新建完文章後，自動開啟MacDown進行後續編輯

<!-- more -->

## 作法

- 在[hexo 資料夾]/scripts底下建立一個index.js檔(如果沒scripts資料夾，就可以建一個囉)
- 此方法是使用OS X下的open開啟MacDown，若在Windows中，需要改成start

```
    index.js

    var exec = require('child_process').exec;
    hexo.on('new', function(path){
      /*
        開啟SublimeText
        exec('open -a "/Applications/Sublime Text.app"' + path);
      */

      exec('open -a "/Applications/MacDown.app" ' + path);
    });
```
