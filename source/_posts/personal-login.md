title: 個人風格登入畫面
date: 2015-05-27 00:54:03
tags: [Mac]
---

按照下面步驟操作就可以換掉單調的登入畫面囉！

[拒絕無聊，創造個人風格化登入畫面](http://appleuser.com/2015/03/24/macwelcome/)

[Mac登入畫面截圖](https://www.kocpc.com.tw/archives/5999)

<!-- more -->

## 操作步驟

- 先選一張喜歡的圖片，建議尺寸為2560 x 1600左右，我選擇的是鋼鐵人照片
    = 存成 “com.apple.desktop.admin.png”
    - 無論是什麼格式，一律改成.png檔
    - 註：可用『預覽程式』輸出成png

![](https://googledrive.com/host/0B0pH-JgGVSTDT1dxV2lJd2RIZ2M)

- 點桌面任意空白處，再按熱鍵command + shift + g，叫出資料夾快速前往列，輸入路徑『/Library/caches』，點『前往』

- 將圖片拖進資料夾取代掉原來的檔案即可

- 登出或重新啟動，就會看到個人風格的登入畫面囉

![](https://googledrive.com/host/0B0pH-JgGVSTDbWpFUDIzUmNSUFU)

## 小技巧
- 登入畫面是無法截圖的，可以在終端機輸入下面語法，登入畫面就會出現，慢慢截圖吧!
- 如果要關閉的話使用 control + c

```
/System/Library/CoreServices/loginwindow.app/Contents/MacOS/loginwindow
```
