title: CoffeeScript OOP
date: 2015-08-02 09:57:40
tags: [CoffeeScript]
---

## CoffeeScript OOP
- class
- 方法
- 繼承(extends)

<!-- more -->

## class
- 使用constructor建立class
    - @可以用來代表this
    - 也可以簡化在傳入參數中@name代表this.name

```
class Student
    constructor: (@name, score, gender) ->
        this.score = score
        @.gender = gender
student = new Student('Andy', 100, 'male')
console.log student
```

```
var Student, student;
  Student = (function() {
    function Student(name, score, gender) {
      this.name = name;
      this.score = score;
      this.gender = gender;
    }
    return Student;
  })();
  student = new Student('Andy', 100, 'male');
  console.log(student);
```

## 方法

```
class Student
    constructor: (@name, score, gender) ->
        this.score = score
        @.gender = gender
    speak: (word) ->
        console.log "Hello, #{word}"
student = new Student('Andy', 100, 'male')
student.speak("CoffeeScript")
console.log student
```

```
var Student, student;
  Student = (function() {
    function Student(name, score, gender) {
      this.name = name;
      this.score = score;
      this.gender = gender;
    }
    Student.prototype.speak = function(word) {
      return console.log("Hello, " + word);
    };
    return Student;
  })();
  student = new Student('Andy', 100, 'male');
  student.speak("CoffeeScript");
  console.log(student);
```

## 繼承(extends)

```
class Student
    constructor: (@name, score, gender) ->
        this.score = score
        @.gender = gender
    speak: (word) ->
        console.log "Hello, #{word}"
class Graduate extends Student
    congratulations: ->
        console.log "#{@name} graduate"
student = new Student('Andy', 100, 'male')
student.speak("CoffeeScript")
graduate = new Graduate('Candy', 97, 'female')
graduate.congratulations()
```

```
var Graduate, Student, graduate, student,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;
  Student = (function() {
    function Student(name, score, gender) {
      this.name = name;
      this.score = score;
      this.gender = gender;
    }
    Student.prototype.speak = function(word) {
      return console.log("Hello, " + word);
    };
    return Student;
  })();
  Graduate = (function(superClass) {
    extend(Graduate, superClass);
    function Graduate() {
      return Graduate.__super__.constructor.apply(this, arguments);
    }
    Graduate.prototype.congratulations = function() {
      return console.log(this.name + " graduate");
    };
    return Graduate;
  })(Student);
  student = new Student('Andy', 100, 'male');
  student.speak("CoffeeScript");
  graduate = new Graduate('Candy', 97, 'female');
  graduate.congratulations();
```
