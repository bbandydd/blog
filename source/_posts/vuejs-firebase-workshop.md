title: vuejs+firebase-workshop
date: 2016-06-08 09:22:16
tags: [VueJS, Firebase, Workshop]
---

<img src="http://softwareengineeringdaily.com/wp-content/uploads/2015/12/vuejs.jpg" style="border: 1px solid black; width: 640px;"/>

<img src="http://www.programwitherik.com/content/images/2015/06/Firebase.png" />

[hackmd](https://hackmd.io/p/HJbgb47N#/)

[hackpad](https://hackpad.com/Vue.js-Firebase--vLoj1BeTn8f)

<!-- more -->

Vue.js + Firebase 動手做
完成品：
https://goo.gl/nP1ywh

DEMO：
https://fire-geo-bdc76.firebaseapp.com/

DEMO （有伴不孤單 (?）：
https://fire-geo-bdc76.firebaseapp.com/#-KJcti5zSbrD8cD8490T

完整原始碼：
https://github.com/ucfan/fire-geo

Init step
安裝 vue-cli, firebase-tools
npm install -g vue-cli firebase-tools

安裝 vue-devtools
https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd

Firebase
http://firebase.google.com/

安裝 firebase
npm install --save firebase

開 vue 專案
vue list
vue init webpack-simple vue-taken
cd vue-taken
npm install
npm run dev

取得第三方 resource
Firebase
Firebase
Google map api
取得 Google Map API 金鑰








Snippet

Geolocation:
navigator.geolocation.watchPosition((position) =>  {
  do_something(position.coords.latitude, position.coords.longitude);
})


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


安裝 vue-google-maps
npm install --save vue-google-maps



如果寫進資料庫的權限不足 要到 firebase規則裡面改

{
  "rules": {
    ".read": "true",
    ".write": "true"
  }
}



  const ref = db.ref(`/maps/${this.mapId}/`)
      ref.child(this.userId).set({
    position: this.position
      })

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

    template:

  <marker
        v-for="m in markers"
        :position.sync="m.position"
      ></marker>

佈署：

```
npm run build
cp index.html ./dist
firebase login
firebase init
firebase deploy
```

附錄
```
Update node
    Mac
        homebrew update
        brew upgrade node
        npm install -g npm
        (if mac os X + homebrew)
```

Vue editor plugin
    Atom
        vue-snippets
        language-vue
    Sublime
        Vuejs Snippets
        Vue Syntax Highlight

Firebase retrieve data
https://firebase.google.com/docs/database/web/retrieve-data#listen_for_events

How does firebase work
https://www.quora.com/How-does-firebase-work
