title: Vue.js + Firebase 動手做
date: 2016-06-08 09:22:16
tags: [VueJS, Firebase, Workshop]
---

<img src="http://softwareengineeringdaily.com/wp-content/uploads/2015/12/vuejs.jpg" style="border: 1px solid black; width: 640px;"/>

<img src="http://www.programwitherik.com/content/images/2015/06/Firebase.png" />

[hackmd](https://hackmd.io/p/HJbgb47N#/)

[hackpad](https://hackpad.com/Vue.js-Firebase--vLoj1BeTn8f)

<!-- more -->

## Init Setup

### 安裝 vue-cli, firebase-tools
```
npm install -g vue-cli firebase-tools
```

### 安裝 vue-devtools
- [下載](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)

### 安裝 firebase
```
npm install --save firebase
```

---

## 查看vue預設範本
```
vue list
```

## 建立 vue 專案
```
vue init webpack-simple vue-taken
cd vue-taken
npm install
npm run dev
```
- webpack-simple範本內含webpack設定
    - 分成dev和deploy兩種
    - babel-loader可編譯ES6

## 取得第三方 resource

### Firebase
- [Firebase](https://firebase.google.com)
```
1. 先到 Firebase Console 取得 API Key
2. 加入

<script>
import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBViACd0PRoj3M33fMxpVs7PegSdSz3ofg",
  authDomain: "fire-geo-bdc76.firebaseapp.com",
  databaseURL: "https://fire-geo-bdc76.firebaseio.com",
  storageBucket: "fire-geo-bdc76.appspot.com",
};

load('你的Google Map API Key')

firebase.initializeApp(config);

3. 如果寫進資料庫的權限不足 要到 firebase規則裡面改
{
  "rules": {
    ".read": "true",
    ".write": "true"
  }
}
```

### Google map api
- [取得 Google Map API 金鑰](https://developers.google.com/maps/documentation/javascript/get-api-key)

![](https://hackpad-attachments.imgix.net/hackpad.com_vLoj1BeTn8f_p.583909_1465300502003_螢幕快照%202016-06-07%20下午7.54.46.png?fit=max&w=882)

## 定位功能
- [MDN](https://developer.mozilla.org/zh-TW/docs/Using_geolocation)
```
Geolocation:
navigator.geolocation.watchPosition((position) =>  {
  do_something(position.coords.latitude, position.coords.longitude);
})
```

```
在script中加入：
data () {
  return {
    position: {
      lat: 0,
      lng: 0
    }
  }
},
ready () {
  navigator.geolocation.watchPosition((position) => {
    this.position.lat = position.coords.latitude
    this.position.lng = position.coords.longitude
    this.center = this. position
  })
}

template:
<p>目前位置：{{ position.lat }}, {{ position.lng }}</p>
```

## 安裝 vue-google-maps
```
npm install --save vue-google-maps
```

## App.vue Code

```
<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <button @click="setCenter">
      目前位置： {{ position.lat }}, {{ position.lng }}
    </button>
    g-map sdk上有
    <map
     :center.sync="center"
     :map-type-id.sync="terrian"
     :zoom.sync="18" >
      <marker
          v-for="m in markers"
          :position.sync="m.position">
      </marker>
    </map>
  </div>
</template>

<script>

import{ Map, Marker, load} from 'vue-google-maps'
import firebase from 'firebase'

// API key
load('你的 map api key');
var config = {
    apiKey: "xxxxxx",
    authDomain: "xxxxxx",
    databaseURL: "xxxxx",
    stroageBucket: "xxxxxx",
};
firebase.initializeApp(config);

export default {
  components: {
    Map, Marker
  },
  data () {
    return {
      msg: 'Hello ikea!',
      center: {
        lat: 0,
        lng: 0
      },
      // 位置data
      position: {
        lat: 0,
        lng: 0
      },
      mapId: '',
      userId: '',
      markers: []
    }
  },
  // ready:
  ready () {

    // get mapID    
    this.mapId = location.hash.slice(1)
    if (this.mapId === '') {
      this.mapId = firebase.database().ref('/maps/').push().key
      location.hash = this.mapId
    }

    // get userID
    this.userId = localStorage.getItem('fire-geo-userId')
    if (!this.userId) {
      localStorage.setItem('fire-geo-userId', this.userId)
      this.userId = firebase.database().ref('/maps/' + this.mapId).push().key
    }

    // bable 語法
    const ref = firebase.database().ref(`/maps/$(this.mapId)/`)

    ref.on('child_added', (data) => {
          const marker = data.val()
          this.markers.push({
              key: data.key,
              position: data.val().position
          })
    })

    ref.on('child_changed', (data) => {
          let marker = this.markers.find((m) => m.key === data.key)
          marker.position = data.val().position
    })


    navigator.geolocation.watchPosition((position) => {
      this.position.lat = position.coords.latitude
      this.position.lng = position.coords.longitude

      ref.child(this.userId).set({
          position: this.position  
      })

    })
  },
  methods:{
      setCenter(){
          this.center = this.position
      }
  }
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}

map {
  display: block;
  width: 100%;
  height: 500px;
}

</style>
```

## 佈署到firebase
```
npm run build
cp index.html ./dist
firebase login
firebase init
firebase deploy
```
- deploy結束會有網址，進去就是成品囉

## 附錄
```
node版本太舊要更新喔

Mac
    homebrew update
    brew upgrade node
    npm install -g npm
    (if mac os X + homebrew)
```

```
Vue editor plugin

Atom
    vue-snippets
    language-vue
Sublime
    Vuejs Snippets
    Vue Syntax Highlight
```

- [Firebase retrieve data](https://firebase.google.com/docs/database/web/retrieve-data#listen_for_events)
- [How does firebase work](https://www.quora.com/How-does-firebase-work)
