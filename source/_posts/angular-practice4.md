title: Angular學習Day4:ng-switch、ng-change、ng-include、ng-src、ng-href
date: 2015-07-19 00:21:11
tags: [Angular]
---

- ng-switch
- ng-change
- ng-include
- ng-src
- ng-href

<!-- more -->

## ng-switch

- 可以根據ng-switch去篩選要選擇的內容。
- 通常會和ng-option的下拉選單一起搭配使用。

```
<body ng-app="myApp">
    <div ng-controller="myController">
        <select ng-model="selected" ng-options="product.name for product in products">
            <option value="">請選擇</option>
        </select>
        <div ng-switch on="selected.name">
            <p ng-switch-when="三明治">三明治</p>
            <p ng-switch-when="蛋糕">蛋糕</p>
            <p ng-switch-default>咖啡</p>
        </div>
    </div>
</body>
```

```
var app = angular.module('myApp', []);
app.controller('myController', function myController($scope){
    $scope.products = [
        { name: '咖啡', price: 150 },
        { name: '三明治', price: 80},
        { name: '蛋糕', price: 100}
    ];
});
```

## ng-change

- 當我們改變輸入的數值，就會執行ng-change裡的事情。

```
<body ng-app="myApp">
    <div ng-controller="myController">
        <input type="checkbox" ng-model="confirmed" ng-change="change()">
        <br>

        <br>

        <br><br><br>
        <select ng-model="selectItem" ng-options="item.counter for item in items" ng-change="update()">
            <option value="">請選擇</option>
        </select>
        <p>

        </p>
    </div>
</body>
```

```
var app = angular.module("myApp", []);
app.controller('myController', function myController($scope){
    $scope.confirmed = true;
    $scope.count = 0;
    $scope.change = function(){
        $scope.count++;
    }
    $scope.items = [
        {counter: 1},
        {counter: 2},
        {counter: 3}
    ];
    $scope.update = function (){
        angular.forEach($scope.items, function(value, index){
            value.counter *= 3;
        })
    }
});
```

## ng-include
- ng-include 是angular用來載入html的指令。

```
<body ng-app="myApp">
    <div ng-controller="myController">
        <select ng-model="selected" ng-options="html.name for html in htmls">
            <option value="">請選擇</option>
        </select>
        <div ng-include="selected.src">

        </div>
    </div>
</body>
```

```
var app = angular.module('myApp', []);
app.controller('myController', function myController($scope){
    $scope.htmls = [
        { name: 'template1', src: 'template1.html' },
        { name: 'template2', src: 'template2.html'}
    ]
});
```

## ng-src
- ng-src是用來取代html中 img 標籤裡的src屬性。
- 由於AngularJS是整個網站載完後才開始編譯，
- 使用ng-src可以解決還沒載入完html發生的錯誤。

```
<body ng-app="myApp">
    <div ng-controller="myController">
        <div ng-repeat="pic in pics">
                <img ng-src="{ { pic.src }}">
        </div>
    </div>
</body>
```

```
var app = angular.module('myApp', []);
app.controller('myController', function myController($scope){
    $scope.pics = [
        {name: 'pic1', src: 'facebook.png'},
        {name: 'pic2', src: 'rss.png'},
        {name: 'pic3', src: 'twitter.png'}
    ]
});
```

## ng-href
- ng-href是用來取代html中 a 標籤裡的href屬性。
- 如果Angular還沒載入或載入失敗，會直接讓href讀取到{ { }}的內容，
- 而a 標籤裡的href屬性無法辨識{ { }}，就會連結到404的錯誤頁面。

```
<body ng-app="myApp">
    <div ng-controller="myController">
        <div ng-repeat="video in videos">
            <a href="https://www.youtube.com/watch?v={ { video.src }}}">{ { video.name }}</a>
        </div>
    </div>
</body>
```

```
var app = angular.module('myApp', []);
app.controller('myController', function myController($scope){
    $scope.videos = [
        {name: 'video1', src: '8dttHnmtg4o'},
        {name: 'video2', src: 'rTGQZZgAK7U'}
    ]
});
```
