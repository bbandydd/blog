title: CoffeeScript 基本使用
date: 2015-08-02 09:33:20
tags: [CoffeeScript]
---

- 註解
- 變數宣告
- Function
- 陣列
- 物件
- 邏輯判斷

<!-- more -->

## 註解
- 跟Ruby一樣使用#來做註解
- 單行註解使用#：不會出現在js檔中
- 多行註解使用三個###：會以/ /出現在js檔中

```
# 單行註解
###
這裏
是多行註解
###
```

```
/*
這裏
是多行註解
 */
```

## 變數宣告
- 不用特別宣告，直接使用

```
price = 30
name = 'coffee'
```

```
var name, price;
price = 30;
name = 'coffee';
```

- 組合字串除了使用+外，也可以使用Ruby的string interpolation
- 注意：需要用雙引號

```
total = "總價為 #{price}"
```

```
total = "總價為 " + price;
```

- string interpolation可以放完整的expression

```
total = "總價為 #{
    if name
        name
    else
        'cake'
}"
```

```
total = "總價為 " + (name ? name : 'cake');
```

## Function
- 像Ruby一樣，預設回傳最後一個執行結果
- 若需特別指定也可以自己加上return

```
helloworld = ->
    alert('Hello World')
helloworld()
```

```
var helloworld;
helloworld = function() {
  return alert('Hello World');
};
helloworld();
```

- 傳參數進去Function

```
helloworld = (name) ->
    if name
        alert("Hello #{name}")
    else
        alert("Hello World")
console.log helloworld()
console.log helloworld('Coffee')
console.log helloworld 'Coffee'
```

```
helloworld = function(name) {
  if (name) {
    return alert("Hello " + name);
  } else {
    return alert("Hello World");
  }
};
console.log(helloworld());
console.log(helloworld('Coffee'));
console.log(helloworld('Coffee'));
```

- 讓傳入參數有預設值

```
helloworld = (name = 'Coffee') ->
    alert("Hello #{name}")
```

```
helloworld = function(name) {
  if (name == null) {
    name = 'Coffee';
  }
  return alert("Hello " + name);
};
```

- splat：傳入參數後面加...使用
- 代表是可有可無而且可以不定數量的變數
- 將傳入參數轉變成陣列，若無傳入參數則會變成空陣列
- 一個function只能有一個splat

```
say_hello = (name, others...) ->
    if others.length > 0
        "Hello, #{name} and #{others}"
    else
        "Hello, #{name}"
#Hello, Andy
console.log say_hello "Andy"
#Hello, Andy and Ben
console.log say_hello "Andy", "Ben"
#Hello, Andy and Ben,Candy
console.log say_hello "Andy", "Ben", "Candy"
```

```
var say_hello,
  slice = [].slice;
say_hello = function() {
  var name, others;
  name = arguments[0], others = 2 <= arguments.length ? slice.call(arguments, 1) : [];
  if (others.length > 0) {
    return "Hello, " + name + " and " + others;
  } else {
    return "Hello, " + name;
  }
};
console.log(say_hello("Andy"));
console.log(say_hello("Andy", "Ben"));
console.log(say_hello("Andy", "Ben", "Candy"));
```

## 交換

```
x = 1
y = 10
[x, y] = [y, x]
# 10
console.log x
# 1
console.log y
```

```
var ref, x, y;
  x = 1;
  y = 10;
  ref = [y, x], x = ref[0], y = ref[1];
  console.log(x);
  console.log(y);
```

## 陣列
- 可以用多行表示，逗點也可以省略

```
products = [
    "coffee"
    "cake"
    "toast"
    "black tea"
]
```

```
var products;
products = ["coffee", "cake", "toast", "black tea"];
```

- 從Ruby借來的Range
- 當陣列數量超過一定量時，自動改以迴圈建構

```
a = [1..10]
b = [1..100]
```

```
var a, b, i, results;
a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
b = (function() {
  results = [];
  for (i = 1; i <= 100; i++){ results.push(i); }
  return results;
}).apply(this);
```

- slice replace insert

```
a = [1..10]
# [2, 3]
console.log a[1..2]
# replace
a[1..2] = [99, 100]
# [1, 99, 100, 4, 5, 6, 7, 8, 9, 10]
console.log a
#insert
a[11..13] = [11..13]
# [1, 99, 100, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log a
```

```
var a, ref, ref1;
a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(a.slice(1, 3));
[].splice.apply(a, [1, 2].concat(ref = [99, 100])), ref;
console.log(a);
[].splice.apply(a, [11, 3].concat(ref1 = [11, 12, 13])), ref1;
console.log(a);
```

## 物件
- 也可以使用巢狀的物件結構

```
andy =
    name: "Andy Tsai"
    age: "27"
    city: "Kaohsiung"
    contact:
        mail: "andy@gmail.com"
        phone: "0987654321"
```

```
var andy;
  andy = {
    name: "Andy Tsai",
    age: "27",
    city: "Kaohsiung",
    contact: {
      mail: "andy@gmail.com",
      phone: "0987654321"
    }
  };
```

## 邏輯判斷
- 若if只使用一行的話要加上then
- 如果只有一行的話，可以像英文敘述句一樣，放到最後面

```
age = 20
if age > 18
    console.log "成年囉"
if age > 18 then console.log "成年囉"
console.log "成年囉" if age > 18
```

```
var age;
  age = 20;
  if (age > 18) {
    console.log("成年囉");
  }
  if (age > 18) {
    console.log("成年囉");
  }
```

- 比大小時，可以直接使用大於小於比

```
age = 20
young_man = 18 < age < 30
# true
console.log young_man
```

```
var age, young_man;
age = 20;
young_man = (18 < age && age < 30);
console.log(young_man);
```

- switch

```
product = 'coffee'
switch product
    when 'coffee'
        console.log "price: 100"
    when 'cake'
        console.log "price: 50"
    else console.log "This is default"
```

```
var product;
product = 'coffee';
switch (product) {
  case 'coffee':
    console.log("price: 100");
    break;
  case 'cake':
    console.log("price: 50");
    break;
  default:
    console.log("This is default");
}
```

## 迴圈
- for

```
# 1,2,3,4,5,6,7,8,9,10
console.log i for i in [1..10]
# 2,4,6,8,10
console.log i for i in [1..10] when i % 2 == 0
# 一次加2
# 1,3,5,7,9
console.log i for i in [1..10] by 2
```

```
var i, j, k, l;
for (i = j = 1; j <= 10; i = ++j) {
  console.log(i);
}
for (i = k = 1; k <= 10; i = ++k) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
for (i = l = 1; l <= 10; i = l += 2) {
  console.log(i);
}
```

- map

```
array = ['a','b','c']
# a,b,c
array.map (i) -> console.log i
```

```
var array;
array = ['a', 'b', 'c'];
array.map(function(i) {
  return console.log(i);
});
```

- alias

```
on   =>  true
off  =>  false
yes  =>  true
no   =>  false
is   =>  ===
isnt =>  !==
and  =>  &&
or   =>  ||
not  =>  !
```

```
if name is on
    console.log "true"
if name is off
    console.log "false"
if name is yes
    console.log "true"
if name is no
    console.log "false"
if name isnt ('Andy' or 'Candy')
    console.log "You're not Andy or Candy"
```

```
if (name === true) {
  console.log("true");
}
if (name === false) {
  console.log("false");
}
if (name === true) {
  console.log("true");
}
if (name === false) {
  console.log("false");
}
if (name !== ('Andy' || 'Candy')) {
  console.log("You're not Andy or Candy");
}
```

- ？
- 判斷變數是否存在

```
name ? name = 'Andy'
# Andy
console.log name
name = 'Candy'
# Candy
console.log name
```

```
var name;
if (typeof name !== "undefined" && name !== null) {
  name;
} else {
  name = 'Andy';
};
console.log(name);
name = 'Candy';
console.log(name);
```
