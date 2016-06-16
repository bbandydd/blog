title: CoffeeScript 擴充類別
date: 2015-08-03 10:14:38
tags: [CoffeeScript]
---

## 擴充類別
- JavaScript原本就可以使用prototype將類別進行擴充方法
- CoffeeScript的用法是::將類別進行擴充

<!-- more -->

```
String::repeat = (n) ->
    Array(n + 1).join @
# aaaaaaaaaa
console.log "a".repeat 10
String::downcase = ->
    @toLowerCase()
# abcdefgh
console.log "ABCDEFGH".downcase()
String::upcase = ->
    @toUpperCase()
#ABCDEFGH
console.log "abcdefgh".upcase();
String::find = (str) ->
    @indexOf str
# 2
console.log "abcdefgh".find "c"
String::has = (str) ->
    (@indexOf str) > 0
# true
console.log "abcdefgh".has "c"
```

```
String.prototype.repeat = function(n) {
  return Array(n + 1).join(this);
};
console.log("a".repeat(10));
String.prototype.downcase = function() {
  return this.toLowerCase();
};
console.log("ABCDEFGH".downcase());
String.prototype.upcase = function() {
  return this.toUpperCase();
};
console.log("abcdefgh".upcase());
String.prototype.find = function(str) {
  return this.indexOf(str);
};
console.log("abcdefgh".find("c"));
String.prototype.has = function(str) {
  return (this.indexOf(str)) > 0;
};
console.log("abcdefgh".has("c"));
```
