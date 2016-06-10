title: Angular學習1:ng-app、ng-model、ng-controller
date: 2015-07-07 23:46:51
tags: [Angular]
---

- ng-app
- ng-model
- ng-controller

<!-- more -->

## 載入AngularJS
```
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.2/angular.min.js"></script>
</head>
```

## ng-app
- 用來宣告Angular的範圍，DOM載入後AngularJS會開始尋找ng-app，並將此範圍當成是AngularJS應用程式
- 若是全站使用AngularJS則放在body裡面
```
<body ng-app>
</body>
```

- 局部使用Angular則放在某個應用到AngularJS的html element裡面，如div
```
<div ng-app>
</div>
```

## ng-model
- ng-model為MVC概念中的Model部分，只要在element的屬性中加上ng-model即宣告了model，AngularJS將會自動綁定到element上
- 只要使用\{\{ 變數 \}\}可即時將model值印出來
```
<body ng-app>
    單價：<input type="text" ng-model="price">
    <br>
    數量：<input type="text" ng-model="number">
    <br>
    <p>總計：{{ (price || 100) * (number || 1) }}</p>
</body>
```
- 變數後面加上||的用處是：如果無法獲得變數值就會預先顯示後面的值

## ng-controller
- controller用來處理model和view的綁定
- model可以在controller中進行處理，有異動時也會反應到view中，達到AngularJS的雙向資料繫結
```
<body ng-app="myApp">
    <div ng-controller="myController">
        單價：<input type="text" ng-model="price">
        <br>
        數量：<input type="text" ng-model="number">
        <br>
        <p>總計：{{ price * number }}</p>
    </div>
</body>
```
```
var app = angular.module('myApp', [])
app.controller('myController', function myController($scope){
    $scope.price = 100;
    $scope.number = 1;
})
```

- 先指定element的controller，名稱必須和function名稱相同
- 使用自訂模組建立controller，第一個參數就是 ngController 控制器的名稱，第二個參數直接傳入剛剛我們先前範例的中出現的建構式
- 當你自訂了 myApp 模組，也代表著你所定義的 controller 只會存在於 myApp 模組裡
- 透過controller的屬性和view的ng-model即可達到雙向資料繫結，當view有異動時controller的屬性值也會變動，相同的是controller異動時view也會跟著變動
