title: Google Map - Static Map & Navigation
date: 2017-02-04 18:01:00
tags: [Google Map]
---

## 目的

1. 使用Google Map URL傳入參數就可以實現路線規劃功能，也可抓取目前位置進行規劃
2. [Google Static Map](https://developers.google.com/maps/documentation/static-maps/intro?hl=zh-tw)可以取得地圖影像

![](https://i.imgur.com/ZJRs2fV.png)

<!-- more -->

## 路徑規劃

- 參數
    - saddr: 起點位置
    - daddr: 終點位置
- 位置皆可使用 [地址] 或 [經緯度]
- [Current+Location]可抓取目前位置

```
http://maps.google.com/maps?saddr=Current+Location&daddr=高雄夢時代
or
http://maps.google.com/maps?saddr=Current+Location&daddr=22.5961822,120.3062948
```

## Google Static Map

- 參數
    - center: 定義地圖中心
    - markers: 地圖標記
        - color:red|label:D|22.5961822,120.3062948

```
https://maps.googleapis.com/maps/api/staticmap?center=22.5961822,120.3062948&markers=color:red|label:D|22.5961822,120.3062948&zoom=16&size=600x300&maptype=roadmap
```

## 完整程式碼

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Google Map</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
</head>
<body>
    <script>
        const navigation = (url) => window.open(encodeURI(url), '_blank');
        const getStaticMap = () => {
            const destination = '高雄夢時代' // `22.5961822,120.3062948`;
            const destination_mark = `color:red|label:D|${destination}`;
            const src = `https://maps.googleapis.com/maps/api/staticmap?center=${destination}&markers=${destination_mark}&zoom=16&size=600x300&maptype=roadmap`;
            $('#img1').attr('src', encodeURI(src));
        };
    </script>

    <div>
        <button onClick="navigation(`http://maps.google.com/maps?saddr=Current+Location&daddr=高雄夢時代`)">
            URL1
        </button>
        <button onClick="navigation(`http://maps.google.com/maps?saddr=Current+Location&daddr=22.5961822,120.3062948`)">
            URL2
        </button>
    </div>
    <div>
        <button onClick="getStaticMap()">
            Google Static Map
        </button>
        <img id="img1" src="" alt="Google Static Map">
    </div>
</body>
</html>
```
