title: RWD課程4 - Design patten
date: 2015-08-01 02:07:41
tags: [RWD]
---

## Week4 - Design patten
- transform、offcanvas Layout
- SMACSS、OOCSS、BEM
- Table、form、Button setting
- Mobile event (Focus、blur)

<!-- more -->

## css/sass 設計模式
- SMACSS/OOCSS/ CSS Guidelines
- 設計模式就像是如何有系統性地整理房間
- 不要使用ID，全部都使用class來設計
    - 瀏覽器 會優先處理 ID 但是肉眼分辨不出來
    - 數值優先寫 (w, h, fz..)

[SMACSS](https://smacss.com)
- 一定要使用 css reset
- 專案共通性的設定可以寫在 base 上
- class Name 重複的標籤獨立出來
- SMACSS – layout、module
    - 適用於 共用模組化 layout
- SMACSS – module
    - 適用於 tag 會因 SEO 隨時更改，因此可以不影響 layout
- 增加子模組，運用繼承，如bootstriap
    - btn 撰寫基礎樣式與適應各瀏覽器的code
    - btn-blue 撰寫獨立樣式如：顏色
- 狀態類 的className 會語意化
    - 如：.is-error{display: none; !important}
    - 加上 important 不希望被蓋掉
    - RWD 如：.mobile-fidden{display: none; !important}
    - 關於回應 Responses

## 設計模式切版練習
- [SMACSS className 範例（洧杰）](http://codepen.io/liao/pen/XbbbPm)

### 我寫的結構：

```
<div class="productList">
    <ul>
      <li class="product"></li>
      <li class="product"></li>
    </ul>
</div>
```

- HTML tag 結構建議：
    - 如果此模組是獨立的 li 可以不用加 className
    - 如果要加 className 建議： productList-product 模組化的命名法可以一眼看出相關性

### 小結：
- 別人看不看得懂你的 HTML 結構
- 只看 className 是否可以知道你的樣式

## 問題：SASS 如何寫 SMACSS 每次都要寫 className 嗎？

### CSS：

```
.productList-title {
  color: #00ff00;
}
.productList-title-img {
  padding: 10px;
}
```

### SASS 通常寫法：

```
.productList
  h3
    color: #00ff00
    img
      padding: 10px
```

### SASS + SMACSS 設計模式：
- SASS 小節：
    - & 用來繼承父名稱實現以上範例

```
.productList
  &-title
    color: #00ff00
    &-img
      padding: 10px
```

## OOCSS
- 結構和樣式抽離，一個 class 只做一件事情
- framework: bootstrap
- 經典範例：fackbook

## BEM
- 希望模組、樣式切開
- 區塊：__ 兩個下底線
- 樣式：-- 兩個中線
- 好處看 className 既可知道相關性與 class 作用
- 重點 develop 看 HTML 時就知道您在寫啥！

## Pure.css 練習
- 輕量型的 bootstrap css
- 有針對行動版
- 寫註解
- 適合新手閱讀
