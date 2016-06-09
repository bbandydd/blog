title: Mac 終端機iTerm + zsh agonster主題優化
date: 2015-05-16 22:40:56
tags: [Mac]
---

## Install iterm2

- iTerm2 是社群開發出來取代 Mac OS X 內建的 Terminal(終端機) 的好用軟體。有興趣的朋友可以閱讀官網上的 Features 頁面，可以對 iTerm2 提供的功能有更多的了解。

- [官網](http://www.iterm2.com/#/section/home)

- 安裝方式︰下載後解壓縮，將解壓縮出來的檔案，放置到 /Applications 目錄下即可

<!-- more -->

## agonster主題優化

![](https://googledrive.com/host/0B0pH-JgGVSTDV25iM1p0N2Q2OVE)

## Install oh-my-zsh

```
curl -L https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh | sh
```
- 小提示：記得要輸入密碼，若無輸入密碼則會繼續安裝，但是安裝主題時會發生問題

## 更改主題

- 再開啟 ~/.zshrc， 這是一個隱藏檔案所以要先在 Finder 顯示隱藏檔。

## 顯示隱藏檔

```
defaults write com.apple.finder AppleShowAllFiles TRUE && killall Finder
```

## 不顯示隱藏檔

```
defaults write com.apple.finder AppleShowAllFiles FALSE && killall Finder
```

## zsh主題

[主題下載](https://github.com/robbyrussell/oh-my-zsh/wiki/themes)

這次修改的是agonster

ZSH_THEME=”agonster”

## 修改顏色

- [下載](http://ethanschoonover.com/solarized)

- 選Menlo for Powerline，點兩下之後點擊「安裝字體」

- iTerm -> Preferences -> Profiles -> Text ，裡面 Change Font 兩個都改成Menlo for Powerline

## Refereces

http://iphone4.tw/forums/showthread.php?t=206652
