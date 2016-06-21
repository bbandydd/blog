title: Webpack 模組整合工具 - React + ES6
date: 2016-06-18 17:04:07
tags: [Webpack, React, ES6]
---

![](https://webpack.github.io/assets/what-is-webpack.png)

- 這篇會做出開發React + ES6的Webpack設定
- [Sample](https://github.com/bbandydd/webpack_sample)

## Webpack

Webpack 是德國開發者 Tobias Koppers 開發的模組整合工具。它的核心功能如下:

* 轉換 JSX, Coffee Script, TypeScript, ES6 等
* 分散封裝專案使用的程式碼，使載入頁面時只需載入當頁所需的程式碼以加速載入速度
* 整合樣式表 (css, sass, less 等)
* 處理圖片與字型
* 建置 production-ready 的程式碼 (壓縮)
* 豐富的模組物件

<!-- more -->

## 檔案結構

```
 project
 |--app
    |--assets
        |--images  (圖片)
        |--styles  (CSS)
    |--index.html  (初始頁面)
    |--src (React程式碼)
        |--actions
        |--components
        |--dispatcher
        |--stores
        |--main.js
 |--node_modules
 |--package.json  (npm設定檔)
 |--webpack.json.js  (webpack設定檔)
 |--webpack-deploy.config.js  (deploy設定)
 |--webpack-dev-server.config.js  (devlopment設定)
```

---

## 安裝Webpack及webpack-dev-server

- webpack-dev-server 可以即時產生一個 server 方便看執行結果。

```
npm install webpack webpack-dev-server --save-dev
```

---

## package.json設定

- 分成dev及deploy兩種設定

```
"scripts": {
    "dev": "webpack-dev-server --config webpack-dev-server.config.js --port 8888 --hot --devtool eval --progress --colors --content-base app",
    "deploy": "webpack -p --config webpack-deploy.config.js --progress --colors"
  },
```

```
執行：

npm run dev
or
npm run deploy
```

* --config webpack-dev-server.config.js: 指定config設定
* --port 8888: 使用8888 port, http://localhost:8888
* --hot: 檔案有變化就reload畫面
* --devtool eval: 將把 source 加到我的 cod.
* --progress 與 --color: 反應現在程序執行到哪邊
* --content-base app: 將會把 app裡的 index.html 作為你的啟始網頁

---

## webpack-dev-server.config.js

- 載入webpack-config設定
- 輸出位置為所在目錄
- 目前狀態為dev

```
module.exports = require('./webpack-config')({
    outputpath: __dirname,
    status: 'dev'
});
```

---

## webpack-deploy.config.js

- 載入webpack-config設定
- 輸入位置為dist資料夾
- 目前狀態為dev

```
module.exports = require('./webpack-config')({
    outputpath: './dist',
    status: 'deploy'
});
```

---

## webpack-config.js

- 下面會針對每個屬性設定做介紹
- entry:
- output:
- module:
- postcss:
- resolve:
- plugins:

```
var webpack = require('webpack'),
    path = require('path'),
    autoprefixer = require('autoprefixer'),
    csswring = require('csswring'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(options){

    var outputpath = options.outputpath,
        entry = {
            bundle: null
        },
        loaders = [],
        resolve = {
            alias: {},
            extensions: ['', '.css', '.scss', '.js']
        },
        plugins = [
            new webpack.HotModuleReplacementPlugin()
        ];

    switch (options.status){
        case 'dev':

            entry.bundle = [
                'webpack-dev-server/client?http://localhost:8888',
                'webpack/hot/only-dev-server',
                './app/src/main'
            ];

            loaders.push(
                { test : /\.scss$/, loader:'style!css!postcss!sass?includePaths[]=' + path.resolve(__dirname, './node_modules/compass-mixins/lib') },
                { test : /\.css$/, loader:'style!css' },
                { test : /\.(jpg|png|gif)$/, loader: 'url-loader' },
                { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader" },
                { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader" },
                { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader" },
                { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader" },
                { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader" },
                { test: /\.(js|jsx)$/, loader: 'babel', include: path.join(__dirname, 'app/src'),  query:{presets:['es2015','react']}}
            );

            break;
        case 'deploy':

            entry.bundle = './app/src/main';

            loaders.push(
                { test : /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!postcss!sass?includePaths[]=' + path.resolve(__dirname, './node_modules/compass-mixins/lib')) },
                { test : /\.css$/, loader: ExtractTextPlugin.extract('style', 'css') },
                { test : /\.(jpg|png|gif)$/, loader: 'url-loader' },
                { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader" },
                { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader" },
                { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader" },
                { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader" },
                { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader" },
                { test: /\.(js|jsx)$/, loader: 'babel', include: path.join(__dirname, 'app/src'),  query:{presets:['es2015','react']}}
            );

            plugins.push(
                new HtmlWebpackPlugin({
                    filename : 'index.html',
                    template : 'app/index.html'
                }),
                new ExtractTextPlugin('assets/styles/[name].css'),
                new webpack.optimize.UglifyJsPlugin(),
                new webpack.optimize.DedupePlugin(),
                new webpack.NoErrorsPlugin()
            )

            break;
    }


    return {
        entry: entry,
        output: {
            path: outputpath,
            filename: 'js/[name].js',
        },
        module: {
            loaders: loaders
        },
        postcss: [autoprefixer, csswring],
        resolve: resolve,
        plugins: plugins
    }
}
```

---

## entry
- webpack主要是處理js文件，因此必須設置程式入口路徑
- 此程式進入點為app/src/main.js

```
entry.bundle = './app/src/main';
```

- 若使用webpack-dev-server進行開發，則必須修改為：

```
entry.bundle = [
    'webpack-dev-server/client?http://localhost:8888',
    'webpack/hot/only-dev-server',
    './app/src/main'
];
```

---

## output
- 定義打包後的位置及檔名

```
outputpath = options.outputpath

output: {
    path: outputpath,
    filename: 'js/[name].js',
}
```

- 還記得嗎，webpack-dev-server.config.js及webpack-deploy.config.js分別設定了不同的outputpath
- [name]，依照entry定義的名稱所命名
    - 此配置中name = bundle

---

## postcss
- 利用JS插件實現用来改變CSS的工具.這些插件能夠支援變數和混合語法

```
postcss: [autoprefixer, csswring]
```

### autoprefixer
- 自動幫各瀏覽器加入前綴的插件

```
before:

a {
    display: flex
}

after:

a {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex
}
```
### csswring
- 壓縮css插件

---

## resolve

### alias
- 定義路徑別名給require使用

```
alias: {
    react: 'app/src/components'
}

require('react/app.jsx')
等於
require('app/src/components/app.jsx')
```

### extensions
- 定義使用require()時不需加入哪些副檔名

```
extensions: ['', '.css', '.scss', '.js']

設定後只需要寫 require('index') 而不用寫成 require('index.js')
```

---

## plugins
- webpack提供許多插件用來滿足不同需求，定義於此

```
plugins.push(
    new HtmlWebpackPlugin({
        filename : 'index.html',
        template : 'app/index.html'
    }),
    new ExtractTextPlugin('assets/styles/[name].css'),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.NoErrorsPlugin()
)
```

### HtmlWebpackPlugin
- 動態產生 index.html 並支援 Extract Text Plugin 自動將打包完後的 js 與 css 檔加入
- filename: 產生的文件
- template: 模組文件
- 可以設定多個HtmlWebpackPlugin產生多個文件

```
new HtmlWebpackPlugin({
    filename : 'index.html',
    template : 'app/index.html'
})
```

### ExtractTextPlugin
- 會把css抽離出来作為單獨的css文件進行打包
- 如果不使用該插件，會把css打包到js中，然後以style標籤的形式，把css作為內嵌樣式使用。

### webpack.optimize.UglifyJsPlugin
- 會把js進行壓縮

### webpack.optimize.DedupePlugin
- 會把相同模組進行合併，不過最好是自己控制不要發生這種情況，避免潛在Bug出現

### webpack.NoErrorsPlugin
- 主要的功能是當更改完的程式碼有語法錯誤時不要重新整理
- 當錯誤修好後，畫面會自動重新整理

---

## loader
- webpack僅能處理Javascript所以需要一些Loader來幫忙
- loader需要另外從npm安裝，參考package.json

```
loaders.push(

    //.scss文件使用 style-loader, css-loader, postcss-loader, sass-loader 來處理
    { test : /\.scss$/, loader:'style!css!postcss!sass?includePaths[]=' + path.resolve(__dirname, './node_modules/compass-mixins/lib') },

    //.css 文件使用 style-loader 和 css-loader 來處理
    { test : /\.css$/, loader:'style!css' },

    //.jpg, .png, .gif, .woff, .woff2, .ttf, .eot, .svg 文件使用 url-loader 來處理
    { test : /\.(jpg|png|gif)$/, loader: 'url-loader' },
    { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader" },
    { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader" },
    { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader" },
    { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader" },
    { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader" },

    //.js 和 .jsx 文件使用 babel-loader 來處理
    { test: /\.(js|jsx)$/, loader: 'babel', include: path.join(__dirname, 'app/src'),
    query:{presets:['es2015','react']}}
);
```

### style-loader
- 將css嵌入html中的style標籤中

### css-loader
- 允許在js中引用css

### sass-loader
- 編譯sass、scss成css

### url-loader
- 打包圖片，並可另外設定使用base64 URL

```
{ test : /. (png|jpg)$/ , loader : 'url-loader?limit=8192' }

當圖片大小小於8k時使用base64 URL，其餘使用直接連接到圖片URL
```

### babel-loader
- 將jsx和es6檔案編譯成js
