title: CoffeeScript Angular
date: 2015-08-04 10:16:07
tags: [CoffeeScript]
---

## 使用CoffeeScript編寫Angular
- module
- filter
- factory
- controller

<!-- more -->

### module

```
app = angular.module "app", []
```

```
var app;
  app = angular.module("app", []);
```

### filter

```
app.filter "peopleSearch", ["$filter", ($filter) ->
    (data, text) ->
        return [] if not text
        data = data.filter((item) ->
            item["姓名"].search(text) > -1 or
            item["收治單位"].search(text) > -1 or
            item["醫療檢傷"].search(text) > -1 or
            item["救護檢傷"].search(text) > -1
        )
        data
]
```

```
app.filter("peopleSearch", [
    "$filter", function($filter) {
      return function(data, text) {
        if (!text) {
          return [];
        }
        data = data.filter(function(item) {
          return item["姓名"].search(text) > -1
          || item["收治單位"].search(text) > -1
          || item["醫療檢傷"].search(text) > -1
          || item["救護檢傷"].search(text) > -1;
        });
        return data;
      };
    }
  ]);
```

### factory

```
app.factory "people", ["$http", people = ($http) ->
    $http.get('http:////tonyq.org/kptaipei/api-20150628.php')
        .success((data) ->
            data
        )
        .error((err) ->
            err
        )
]
```

```
var people;
  app.factory("people", [
    "$http", people = function($http) {
      return $http.get('http:////tonyq.org/kptaipei/api-20150628.php').success(function(data) {
        return data;
      }).error(function(err) {
        return err;
      });
    }
  ]);
```

### controller

```
app.controller "MainController", ["$scope", "people", ($scope, people) ->
    $scope.type = "hospital"
    people
        .success((data) ->
            $scope.peoplelist = data
        )
        .error((err) ->
            console.log "people-error: #{err}"
        )
]
```

```
app.controller("MainController", [
    "$scope", "people", function($scope, people) {
      $scope.type = "hospital";
      return people.success(function(data) {
        return $scope.peoplelist = data;
      }).error(function(err) {
        return console.log("people-error: " + err);
      });
    }
  ]);
```
