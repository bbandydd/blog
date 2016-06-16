title: CoffeeScript 全域變數
date: 2015-08-03 10:12:37
tags: [CoffeeScript]
---

## 全域變數
- CoffeeScript中寫的變數及function，都是以區域變數包在裡面
- 優點：不會影響到別的js

```
(function() {
}).call(this);
```

<!-- more -->

- 如果一定要寫全域變數的話，可以將變數及function寫在window

```
window.name = 'Andy'
window.say = ->
    alert "Hello I am #{@name}"
window.say()
```

```
window.name = 'Andy';
window.say = function() {
    return alert("Hello I am " + this.name);
};
window.say();
```

- JavaScript 盡量避免使用全域變數
