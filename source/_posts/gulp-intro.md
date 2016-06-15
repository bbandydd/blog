title: Gulp入門
date: 2015-07-30 01:55:00
tags: [Gulp]
---

## Gulp
- Gulp 是基於 Node.js 的任務自動化管理工具，和 Grunt 同樣都是用來簡化人工的步驟，但兩者卻又有著本質上的差異，最主要就是 Gulp 使用了 streams ( 流 ) 的概念，一個任務一個任務的依序按照流程做完，相當的容易思考和理解，

<!-- more -->

## 安裝
- 安裝Node.js
- 安裝Gulp

```
sudo npm install -g gulp
```

## Gulp環境(專案資料夾)

## 必備檔案
- package.json：整理gulp plugin

```
npm init
```

- gulpfile.js：撰寫程式化流程
- 假如有別人也加入專案，需要這兩個檔案將環境建立好

## Gulp Plugin
- 當有寫 —save-dev 就會將plugin寫入package.json的devDependencies

```
npm install gulp gulp-coffee gulp-ruby-sass --save-dev
```

- gulp-coffee：編譯coffeeScript
- gulp-ruby-sass：編譯SASS
- gulp-autoprefixer：處理瀏覽器前綴
- gulp-minify-css：壓縮CSS
- gulp-jshint：js debug
- gulp-uglify：壓縮js
- gulp-imagemin：壓縮圖片
- gulp-rename：重新命名
- gulp-concat：合併
- gulp-notify：提示訊息
- gulp-cache：圖片暫存，只有圖片變換才更新
- gulp-livereload：提供livereload功能
- del：清除檔案

## Gulp起手式
- 定義任務名稱，指定任務工作內容

```
gulp.task('default', ['clean'], function() {
    gulp.start('styles', 'scripts', 'images', 'coffee', 'watch');
});
```

- 監看特定檔案是否變動

```
gulp.watch('sass/**/*.sass', ['styles']);
```

- gulpfile.js

```
/*
 * gulp
 * $ npm install gulp-coffee gulp-ruby-sass gulp-autoprefixer gulp-minify-css gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-livereload gulp-cache del --save-dev
 */
// Load plugins
var gulp = require('gulp'),
    coffee = require('gulp-coffee'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del');
// 定義路徑
var paths = {
    sass: 'sass/all.sass',
    js: 'js/**/*.js',
    images: 'images/**/*',
    coffee: 'coffee/**/*.coffee'
};
// Styles
gulp.task('styles', function() {
  return sass(paths.sass, { style: 'expanded' })
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('assets/css'))
    //.pipe(rename({ suffix: '.min' }))
    //.pipe(minifycss())
    //.pipe(gulp.dest('dist/styles'))
    .pipe(notify({ message: 'Styles task complete' }));
});
// Scripts
gulp.task('scripts', function() {
  return gulp.src(paths.js)
    //.pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('assets/js'))
    //.pipe(rename({ suffix: '.min' }))
    //.pipe(uglify())
    .pipe(notify({ message: 'Scripts task complete' }));
});
// Images
gulp.task('images', function() {
  return gulp.src(paths.images)
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('assets/images'))
    .pipe(notify({ message: 'Images task complete' }));
});
// Coffee
gulp.task('coffee', function() {
  gulp.src(paths.coffee)
    .pipe(coffee())
    .pipe(gulp.dest('assets/js'))
    .pipe(notify({ message: 'Coffee task complete' }));
});
// Clean
gulp.task('clean', function(cb) {
    del(['assets/assets/css', 'assets/assets/js', 'assets/assets/img'], cb)
});
// Default task
gulp.task('default', ['clean'], function() {
    gulp.start('styles', 'scripts', 'images', 'coffee', 'watch');
});
// Webserver
gulp.task('webserver', function() {
  connect.server({
      livereload: true
  });
});
// Watch
gulp.task('watch', function() {
  // Watch .scss files
  gulp.watch('sass/**/*.sass', ['styles']);
  // Watch .js files
  gulp.watch('js/**/*.js', ['scripts']);
  // Watch image files
  gulp.watch('images/**/*', ['images']);
  // Watch coffee files
  gulp.watch('coffee/**/**.coffee', ['coffee']);
  // Create LiveReload server
  livereload.listen();
  // Watch any files in dist/, reload on change
  gulp.watch(['assets/**']).on('change', livereload.changed);
});
```

## 執行Gulp

```
gulp
```
