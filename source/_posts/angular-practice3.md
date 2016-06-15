title: Angular學習Day3:ng-init、ng-repeat、input、ng-options
date: 2015-07-18 15:58:11
tags: [Angular]
---

- ng-init
- ng-repeat
- input
- ng-options

<!-- more -->

## ng-init

### 使用ng-init，將初始值寫在html

```
<div ng-controller="myController" ng-init="product='咖啡'; price='30' ">
    { { product }}
    { { price }}
</div>
```

### 未使用ng-init，將初始值寫在js中

```
var app = angular.module('myApp', []);
app.controller('myController', function myController($scope){
    $scope.product2 = '三明治';
    $scope.price2 = '50';
})
```

### ng-repeat

```
<body ng-app="myApp">
    <div ng-controller="myController">
        <ul>
            <li ng-repeat = "product in products">
                { { $index +1 }} .
                { { product.name }} :
                { { product.price }} 元
            </li>
        </ul>
        <p>
            共有 { { products.length }} 樣產品
        </p>
    </div>
</body>
```

```
var app = angular.module('myApp',[]);
app.controller('myController', function myController($scope){
    $scope.products = [
        { name: '咖啡', price: 150 },
        { name: '三明治', price: 80},
        { name: '蛋糕', price: 100}
    ];
});
```

## input

### input 屬性

```
name 名稱
ng-model 綁定的資料
required 限制是否必填
ng-required 限制是否必填
ng-minlength 限制最小長度
ng-maxlength 限制最大長度
ng-pattern 限制RegExp格式
ng-change 當input的值發生變化的時候執行
```

```
<body ng-app="myApp">
    <div ng-controller="myController">
        Value1:
        <input type="checkbox" ng-model="value1">
        <br>
        Value2:
        <input type="checkbox" ng-model="value2" ng-true-value="'YES'" ng-false-value="'NO'"> <br/>
        <p>value1: { { value1 }} </p>
        <p>value2: { { value2 }}</p>
    </div>
</body>
```

```
var app = angular.module('myApp', []);
app.controller('myController', function myController($scope){
    $scope.value1 = true;
    $scope.value2 = 'YES';
});
```

## ng-options

```
<body ng-app="myApp">
    <div ng-controller="myController">
        <select ng-model="selected" ng-options="product.name for product in products">
            <option value="">-- 請選擇 --</option>
        </select>
        <p>單價： { { selected.price }} 元</p>
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
})
```
