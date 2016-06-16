title: CoffeeScript jQuery
date: 2015-08-03 10:01:29
tags: [CoffeeScript]
---

## 使用CoffeeScript編寫jQuery

<!-- more -->

### 取得某個元素

```
toolbar = $('#toolbar')
```

```
var toolbar;
toolbar = $('#toolbar');
```

### document.ready

#### 寫法1

```
$().ready = ->
    alert "Hello CoffeeScript"
```

```
$().ready = function() {
    return alert("Hello CoffeeScript");
  };
```

#### 寫法2

```
$ ->
    alert "Hello CoffeeScript"
```

```
$(function() {
    return alert("Hello CoffeeScript");
  });
```

#### click

```
$ ->
    $('p').click ->
        $(@).html "clicked"
```

```
$(function() {
    return $('p').click(function() {
      return $(this).html("clicked");
    });
  });
```

#### 擴充jQuery

```
$.fn.extend
    min: (a, b) ->
        if a > b then b else a
    max: (a, b) ->
        if a > b then a else b
# 2
console.log $(window).min 2,5
# 5
console.log $(window).max 2,5
```

```
$.fn.extend({
    min: function(a, b) {
      if (a > b) {
        return b;
      } else {
        return a;
      }
    },
    max: function(a, b) {
      if (a > b) {
        return a;
      } else {
        return b;
      }
    }
  });
  console.log($(window).min(2, 5));
  console.log($(window).max(2, 5));
```
