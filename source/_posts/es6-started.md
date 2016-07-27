title: ECMAScript 6 入門
date: 2016-07-02 20:44:37
tags: [ES6]
---

Javascript標準制定者計劃每年發佈一次，使用年份作為標準的版本。

ES6在2015年發布的，因此又稱ECMAScript2015。

---

<!-- more -->

## let

- let和var的差別在於，let只在所在程式區塊作用。

```
{
    let a = 10;
    var b = 1;
}

a  // a is not defined
b  // 1
```

```
var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function() {
        console.log(i);
    }
}

a[6]();  // 10
```

- var是全域的，所以每次循環，新的i都會覆蓋舊的，最後輸出10。

```
var a = [];
for (let i = 0; i < 10; i++) {
    a[i] = function() {
        console.log(i);
    }
}

a[6]();  // 6
```

- let只在區塊作用，所以輸出6。

---

## const

- const宣告一個唯讀的變數。一旦宣告，變數得值就不能改變。

```
const PI = 3.1415;

PI // 3.1415

PI = 3; // "PI" is read-only
```

- const和let一樣，只在所在程式區塊作用。

```
{
    const MAX = 5;
}

MAX //  MAX is not defined
```

---

## Destructuring 解構

- 從陣列中按照對應位置，對變數給值。

```
var [a, b, c] = [1, 2, 3];

a // 1
b // 2
c // 3
```

- 如果解構不成功就等於undefined

```
let [x, y, ...z] = ['a'];

x // a
y // undefined
z // []
```

- 也可以從物件解構，變數必須跟屬性同名，沒有順序性

```
var { bar, foo } = { foo: 'aaa', bar: 'bbb' };

foo // aaa
bar // bbb
```

---

## String extension

----

### includes(), startsWith(), endsWith

```

includes(): 回傳boolean，是否找到變數字串
startsWith(): 回傳boolean，變數字串是否在開頭
endsWith(): 回傳boolean，變數字串是否在結尾

var s = 'Hello world!';

s.startsWith('Hello'); // true
s.endsWith('!'); // true
s.includes('o'); // true
```

----

### repeat()

- 將原字串重複n次

```
'x'.repeat(5); // xxxxx
```

----

### padStart(), padEnd()

```
padStart(): 開頭補滿字元
padEnd(): 結尾補滿字元

'x'.padStart(5, 'ab'); // ababx
'x'.padEnd(5, 'ab'); // xabab
```

----

### template String

- 更簡潔美觀的在字串中賦予值
- 使用\`標示，可以定義多行字串，並使用${ 變數 }串接字串

```
var str = 'book';
console.log(
`This
is
a
${str}!`);
```

---

## Math extension

----

### Math.trunc()

- 去除小數部分，回傳整數

```
Math.trunc(4.11); //4

非數字會先將它轉成數字
Math.trunc('4.11'); //4
```

----

### Math.sign()

- 判斷正數、負數或是零

```
Math.sign(-5) // -1
Math.sign(5) // 1
Math.sign(0) // 0
Math.sign('str') // NaN
```

---

## Array extension

----

### Array.from()

- 把物件轉成陣列

```
let arrayLike = {
    '0': 'a',
    '2': 'c',
    '1': 'b',
    length: 5
}

Array.from(arrayLike) // ["a", "b", "c", undefined, undefined]
```

- 還可以接受第二個參數，類似map對於每個元素作處理後放回原陣列

```
Array.from([1, 2, 3], (x) => x * x); // [1, 4, 9]
```

----

### includes()

- 陣列是否包含給定的值

```
[1, 2, 3].includes(2) // true
[1, 2, 3].includes(4) // false
```

---

## function extension

---

### 預設值

```
function log(x, y = 'World') {
    console.log(x, y);
}

log('Hello') // Hello world
log('Hello', 'Taiwan') // Hello Taiwan
log('Hello', '') // Hello
```

----

### rest

- 形式為"...變數"，取得函式

```
function push(array, ...items) {
    items.forEach(function(item) {
        array.push(item);
    })
}

var a = [];
push(a, 1, 2, 3); // [1, 2, 3]
```

----

### 將陣列加入另一陣列結尾

```
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1.push(...arr2); // [0, 1, 2, 3, 4, 5]
```

----

### 箭頭函數

- 無須輸入function, return, 括號及分號
- 如要傳入多個參數，必須用小括號包住

```
var sum = (num1, num2) => num1 + num2;

等於

function sum(num1, num2) {
    return num1 + num2;
}
```

```
[1, 2, 3].map(x => x * x);

等於

[1, 2, 3].map(function(x) {
    return x * x;
})
```

```
$('#div').click(event => 'click')

等於

$('#div').click(function(event) {
        return 'click'
})

```

---

## object extension

----

### 簡潔表示法

```
var f = (x, y) => {
    return {x, y};
};

f(1, 2); //{x:1, y:2}
```

```
var o = {
    method(){
        return "Hello!";
    }
}

等於

var o = {
    method: function() {
        return "Hello!";
    }
}
```

----

#### Object.assign()

- 用於物件的合併

```
var target = {a: 1};
var source1 = {b: 2};
var source2 = {c: 3};

Object.assign(target, source1, source2)
target // {a: 1, b: 2, c: 3}
```

- 複製物件

```
var a = {x: 1, y: 2}
var clone = (origin) => Object.assign({}, origin);

var b = clone(a); // {x: 1, y: 2}
```

---

## for-of

- 與forEach()不同的是可以使用break, continue, return

```
var array = [1, 2, 3];

for (var value of array) {
    if (value == 2) continue;
    console.log(value);  // 1, 3
}
```

- 可以使用解構(Destrucuring)

```
var people = [
  {
    name: "Mike Smith",
    family: {
      mother: "Jane Smith",
      father: "Harry Smith",
      sister: "Samantha Smith"
    },
    age: 35
  },
  {
    name: "Tom Jones",
    family: {
      mother: "Norah Jones",
      father: "Richard Jones",
      brother: "Howard Jones"
    },
    age: 25
  }
];

for (var {name, family: { father } } of people) {
  console.log("Name: " + name + ", Father: " + father);
}
```

---

## Generators

- 有類似return的語法: yield
- function僅能return一次，而Generators可以yield多次
- Generators執行過程中，遇到yield會暫停，之後可恢復執行狀態

```
function* quips(name) {
    yield "哈囉 " + name;
    yield "今天過得如何";
    yield "再見";
}

var user = quips('andy');

user.next(); // {value: "哈囉 andy", done: false}
user.next(); // {value: "今天過得如何", done: false}
user.next(); // {value: "再見", done: false}
user.next(); // {value: undefined, done: true}
```

----

## next()

- next也可以傳入參數

```
function* speak(first) {
    var second = yield console.log(`This is ${first}`);
    yield console.log(`This is ${second}`);
}

var a = speak('first word');
a.next(); // This is first word
a.next('second word'); // This is second word
```

---

## import

- 載入被導入的模組

```
import {detectCats, Kittydar} from 'Kittydar.js'
```

---

## export

- ES6中所有模組都是私有的，如果要給其他模組使用，必須export

```
function v1() { ... }
function v2() { ... }

export {
    v1,
    v2
}
```
