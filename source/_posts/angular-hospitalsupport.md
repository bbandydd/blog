title: Angular實作 - 八仙塵爆傷者開放資料查詢
date: 2015-07-09 00:00:06
tags: [Angular, Github]
---

- 這次的練習是使用Angular來開發八仙塵爆傷者開放資料查詢頁面，主要是透過OpenSource來呈現資訊給使用者
使用到的Angular技術有ng-repeat、$http、filter
- [Github](https://github.com/kaohsiung-frontend/HospitalSupport)
- [成果](http://kaohsiung-frontend.github.io/HospitalSupport/)

<!-- more -->

## 家屬尋人
- ng-show
- ng-model
- ng-repeat
- custom filter
- angular.factory

## 搜尋輸入框
```
<input type="text" ng-show="type=='people'" class="form-control" ng-model="MainCtrl.query" placeholder="請輸入搜尋的條件（ex. 姓名、檢傷、收治單位）" />
```

## 呈現資料
```
<tbody>
	<tr ng-repeat="people in peopleList.data |  peopleSearch: MainCtrl.query">
		<td>
			<p>{ { people["編號"] }}</p>
			<p><a href="https://www.google.com/maps?q={ { people['縣市別'] }} { { people['收治單位'] }}">{ { people["縣市別"] }} <br> { { people["收治單位"] }}</a> </p>
		</td>
        <td>
            <p>{ { people["姓名"] }}</p>
            <p class="label label-default">{ { people["性別"] }} { { people["年齡"] }}</p>
            <br>
            <p class="label label-default">{ { people["國籍"] }}</p>
        </td>
        <td>
            <p class="label label-default">醫療檢傷：{ { people["醫療檢傷"] }}</p>
            <br>
            <p class="label label-default">救護檢傷：{ { people["救護檢傷"] }}</p>
            <br>
            <p class="label label-default">檢傷編號：{ { people["檢傷編號"] }}</p>
            <br>
            <p class="label label-default">轉診要求：{ { people["轉診要求"] }}</p>
            <br>
            <p class="label label-default">刪除註記：{ { people["刪除註記"] }}</p>
            <br>
            <br>
            <p class="label label-success">即時動向：{ { people["即時動向"] }}</p>
        </td>
    </tr>
</tbody>
```

## 將JSON取得資料塞給$scope.peopleList
```
app.controller('MainController',['$scope', 'blood', 'people', function ($scope, blood, people) {
    $scope.type = 'blood';

    blood
       	.success(function(data) {
          	$scope.bloodList = data;
        })
        .error(function (err) {
        	console.log('blood-error:' + err);
        });
    people
        .success(function(data){
            $scope.peopleList = data;
        })
        .error(function(err){
            console.log('people-error:' + err);
        });
}]);
```

## 取得JSON資料
```
app.factory('people', ['$http', function people($http){
    return $http.get('http:////tonyq.org/kptaipei/api-20150628.php')
        .success(function(data){
            return data;
        })
        .error(function(err){
            return err;
        });
}]);
```

## 自訂filter
```
app.filter('peopleSearch', ['$filter', function($filter){
	return function(data, text){
		if (!text) return [];
		data = data.filter(function(item){
			return item["姓名"].search(text) > -1
				|| item["收治單位"].search(text) > -1
				|| item["醫療檢傷"].search(text) > -1
				|| item["救護檢傷"].search(text) > -1;
		})
		return data;
	}
}]);
```

---

## 醫院概況
- ng-show
- ng-model
- ng-repeat
- filter
- orderBy
    - +:由小到大
    - -:由大到小

## 搜尋輸入框
```
<input type="text" ng-show="type=='hospital'" class="form-control" ng-model="MainCtrl.hospital" placeholder="請輸入搜尋醫院" />
```

## 呈現資料
```
<tbody>
	<tr ng-repeat="hospital in hospitalList | filter: MainCtrl.hospital | orderBy: '-sum'">
		<td>
			<p>{ { hospital["收治單位"] }}</p>
			<p>傷者總數：{ { hospital["sum"] }}</p>
		</td>
		<td>
			<p class="label label-danger">重傷：{ { hospital["重傷"] }}</p>
			<p class="label label-warning">中傷：{ { hospital["中傷"] }}</p>
			<p class="label label-success">輕傷：{ { hospital["輕傷"] }}</p>
			<br>
			<br>
			<div class="progress">
				<div class="progress-bar progress-bar-danger" style="width: { { hospital['重傷'] / hospital['sum'] * 100}}%">
                    <span class="sr-only">{ { hospital['重傷'] / hospital['傷者總數'] * 100}}% Complete (danger)</span>
				</div>
				<div class="progress-bar progress-bar-warning progress-bar-striped" style="width: { { hospital['中傷'] / hospital['sum'] * 100}}%">
                    <span class="sr-only">{ { hospital['中傷'] / hospital['傷者總數'] * 100}}% Complete (warning)</span>
				</div>
				<div class="progress-bar progress-bar-success" style="width: { { hospital['輕傷'] / hospital['sum'] * 100}}%">
                    <span class="sr-only">{ { hospital['輕傷'] / hospital['傷者總數'] * 100}}% Complete (success)</span>
                </div>
            </div>
            <br>
            <p class="label label-default">加護病房：{ { hospital['加護病房'] }}</p>
            <p class="label label-default">一般病房：{ { hospital['一般病房'] }}</p>
            <p class="label label-default">其他：{ { hospital['其他'] }}</p>
        </td>
    </tr>
</tbody>
```

## 將數量設定給$scope變數
```
people
.success(function(data){
    $scope.peopleList = data;
    $scope.inHospitalCount = 0; //未出院
    $scope.sickRoomCount = 0;   //一般病房
    $scope.icuCount = 0;        //加護病房
    $scope.seriousInjuredCount = 0; //重傷
    $scope.mediumInjuredCount = 0;  //中傷
    $scope.slightInjuredCount = 0;  //輕傷
    $scope.sum = data.data.length; //總人數
    $scope.hospitalList = [];
    angular.forEach(data.data, function(obj) {
        var hospital = {"收治單位": "", "重傷": 0
            , "中傷": 0, "輕傷": 0,"加護病房": 0,
            "一般病房": 0, "其他": 0, "sum": 0};
        var addHospital = true;
        for (var i=0;i<$scope.hospitalList.length;i++){
            if ($scope.hospitalList[i]["收治單位"] == obj["收治單位"]){
                addHospital = false;
                break;
            }
        }
        if (addHospital == true) {
            hospital["收治單位"] = obj["收治單位"];
            $scope.hospitalList.push(hospital);
        }
        var currentHospital;
        for (var i=0;i<$scope.hospitalList.length;i++){
            if ($scope.hospitalList[i]["收治單位"] == obj["收治單位"]){
                currentHospital = $scope.hospitalList[i];
            }
        }
        switch(obj["即時動向"]){
            case '出院':
                break;
            case '一般病房':
                $scope.inHospitalCount++;
                $scope.sickRoomCount++;
                currentHospital["一般病房"]++;
                break;
            case '自動出院(AAD)':
                break;
            case '加護病房':
                $scope.inHospitalCount++;
                $scope.icuCount++;
                currentHospital["加護病房"]++;
                break;
            case '其他':
                $scope.inHospitalCount++;
                currentHospital["其他"]++;
                break;
            case '死亡':
                $scope.inHospitalCount++;
                break;
            case '轉院':
                $scope.inHospitalCount++;
                break;
        }
        switch(obj["救護檢傷"]){
            case '重傷':
                $scope.seriousInjuredCount++;
                currentHospital["重傷"]++;
                currentHospital["sum"]++;
                $scope.count1++;
                break;
            case '中傷':
                $scope.mediumInjuredCount++;
                currentHospital["中傷"]++;
                currentHospital["sum"]++;
                $scope.count2++;
                break;
            case '輕傷':
                $scope.slightInjuredCount++;
                currentHospital["輕傷"]++;
                currentHospital["sum"]++;
                $scope.count3++;
                break;
        }
    });
})
.error(function(err){
    console.log('people-error:' + err);
});
```
