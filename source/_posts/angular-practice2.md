title: Angular學習2:ng-click、ng-show
date: 2015-07-08 23:56:01
tags: [Angular]
---

- ng-click
- ng-show

## ng-click
- 透過ng-click去觸發事件
- 下面透過ng-click去觸發 changeProduct()
```
<body ng-app="myApp">
    <div ng-controller="myController">
        品項：{ { product }}
        <br>
        單價：<input type="text" ng-model="price">
        <br>
        數量：<input type="text" ng-model="number">
        <br>
        <p>總計：{ { price * number }}</p>
        <br>
        <button ng-click="changeProduct()">更換商品</button>
    </div>
</body>
```
```
var app = angular.module('myApp', []);
app.controller('myController', function myController($scope){
    $scope.product = '咖啡';
    $scope.price = 100;
    $scope.number = 1;
    $scope.total = 0;
    $scope.changeProduct = function(){
        $scope.product = '可樂';
        $scope.price = 30;
        $scope.number = 1;
        $scope.total = 0;
    };
});
```

---

## ng-show
- 在想要顯示 / 隱藏的element上加入ng-show / ng-hide就可以產生效果
- 顯示：欲顯示文字
- 隱藏：欲隱藏文字
```
<div>
       show / hide <input type="checkbox" ng-model="checked1"><br>
       show: <span ng-show="checked1">I show up when your checkbox is checked.</span><br>
       hide: <span ng-hide="checked1">I hide when your checkbox is checked.</span>
</div>
```
- 完成展開效果
```
<div>
   展開中文說明 <input type="checkbox" ng-model="checked2"><br>
   <div>英文：John is at the tailor's ordering a suit.</div>
   <div ng-show="checked2">中文：約翰在裁縫店訂一套西裝。</div>
   <div>英文：John is at the tailor's for a fitting.</div>
   <div ng-show="checked2">中文：約翰正在裁縫店試衣。</div>
</div>
```
- 透過判斷式實現下拉選單，顯示不同內容
```
<div>
   選擇英文例句
   <select ng-model="selection">
       <option value="content1">Tailored Suit 訂做西裝</option>
       <option value="content2">Altering Suit 修改西裝</option>
   </select>
   <article ng-show="selection == 'content1'">
       <h2>Tailored Suit 訂做西裝</h2>
       <p>John is at the tailor's ordering a suit.</p>
       <p>約翰在裁縫店訂一套西裝。</p>
   </article>
   <article ng-show="selection == 'content2'">
       <h2>Altering Suit 修改西裝</h2>
       <p>John is at the tailor's for a fitting.</p>
       <p>約翰正在裁縫店試衣。</p>
   </article>
</div>
```
