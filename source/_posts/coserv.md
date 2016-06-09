title: coServ Workshop 淺談Sass及RWD
date: 2015-05-21 22:57:26
tags: [NodeJS, coServ, Workshop]
---

RWD 目前在前端網頁已是不可或缺的角色，如何在製作時更有系統性的去規劃，
也是前端所需克服的問題

而 Sass 近期也常受到討論，被認為是加速開發 CSS 的良好工具
本次主題結合這兩個前端熱門議題，向大家分享如何應用
coServ 幫助開發者在RWD、Sass 上做更快速及系統性的開發！

<!-- more -->

## 1. JASS in coServ (JASS)

{% iframe http://www.slideshare.net/slideshow/embed_code/key/iwN6TvMs9CkRRr 600 400 %}

## nodeJS 原生 Css管理套件

- 與SASS類似
    - 變數、混用、擴充、巢狀
- 可快速修改網站中的CSS樣式
    - 例如客戶想改變顏色，僅需要修改變數中的顏色，即可修改整個站台

## 功能一 Variables(變數)

```
<%
  var fontStack = 'Helvetica, sans-serif',
    linkColor_1 = '#fff',
    linkColor_2 = '#0066ff',
    linkColor_3 = '#49CA2D',
    primaryColor = '#333',
    primarybg_1 = '#ddd',
    primarybg_2 = '#fff',
    li_hover_bg = '#ffddaa',
    primaryFontSize = '16px',
    boxPadding = '15px',
    imgPath = '../../jass_rwd/image/',
    content_minh = '700px',
    fontp = {'font-family': 'Helvetica, sans-serif', 'color': 'red'};
%>
h3{
  <%=jass.p(fontp)%>
}
.content a{
  color: <%=linkColor_3%>
}
.link a{
  color: <%=linkColor_2%>
}
.footer a{
  color: <%=linkColor_1%>
}
.footer{
  background: <%=primaryColor%>
  height: 80px
}
```

### 提醒:
- 使用JSON格式才需要使用jass.p()

## 功能二 Ｍixins(混用)

- JASS 中 mixins 是以函數處理，所以還可以在函數內做額外的運算（處理）。這是 SASS 做不到的。

```
<%
  function borderRadius(radius){
    return{
      '-webkit-border-radius': radius,
      '-moz-border-radius': radius,
      '-ms-border-radius': radius,
      'border-radius': radius
    };
  };
  function boxShadow(shadow){
    return{
      '-webkit-box-shadow': shadow,
      '-moz-box-shadow': shadow,
      'box-shadow': shadow
    };
  };
%>
.circleImg{
  width: 50px;
  height: 50px;
  <%=jass.p(borderRadius('50%'))%>
}
```

## 功能三 Extend(擴充)

```
<%
  var msgBox = {
    border: '1px solid #ccc',
    padding: '10px',
    color: '#333',
    width: '30%'
  };
%>
.message{
  <%=jass.p(msgBox)%>;
  <%=jass.p(boxShadow('0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)'))%>;
}
.fail{
  <%=jass.p(msgBox)%>;
  border-color: red;
  <%=jass.p(boxShadow('0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)'))%>;
}
```

## 巢狀疊套

- jass.r() 可以用來建立一條 CSS 規則
- 在下面的範例中，我們利用 jass.r() 建立了五條 CSS 規則，而且將其中 r_ul、 r_li、r_li_hover、r_a 四條規則附加到規則 rMenu 之下。最後再將 rMenu 印出，就能得到所要的結果。

```
<%
  var li_style = {
    display: 'inline-block',
    padding:boxPadding,
    'list-style': 'none'
  };
  var rMenu = jass.r('.menu'),
        r_ul = jass.r('ul', {'margin-bottom' :'10px', padding: 0}),
        r_li = jass.r('li', li_style),
        r_li_hover = jass.r('li:hover', {background:li_hover_bg}),
        r_a = jass.r('a', {color: linkColor_2, 'font-size': primaryFontSize});
  rMenu.add( [r_ul, r_li, r_a,r_li_hover] );

%>
<%= rMenu.toString(); %>
```

## 練習時間

- 利用JASS製作一個按鈕樣式
- 需使用的功能
    - Variables(變數)
    - Mixins(混用)
    - Extend(擴充)

### 注意

- 若發現站台CSS失效，代表jass有誤要仔細檢查哪裡錯誤，練習的過程常常發生CSS失效，往往是少了單引號、字打錯、使用未宣告的function或變數、換行錯誤等，只要一個地方錯，整個站台的CSS就會失效

## 2. RWD in coSev

{% iframe http://www.slideshare.net/slideshow/embed_code/key/G0f3ZWqogJvZRD 600 400 %}

## 傳統作法

```
@media only screen and (max-width:768px){
	/*螢幕寬度768載入*/
}
@media only screen and (max-width:600px){
	/*螢幕寬度600載入*/
}
@media only screen and (max-width:480px){
	/*螢幕寬度480載入*/
}
```

## coServ作法

- 在www/sites.json中設定樣板(方法1)
- 在Javascript裏動態載入指定的CSS(方法2)

## 方法1

更改sites.json檔案結構

```
{
	"127.0.0.1":{
		"theme":{
			"desktop": "desktop_theme",
			"tablet": "tablet_theme",
			"mobile": "mobile_theme"
		}
	}
}
```

### 注意

加入別人Theme記得要先改CSS讓他重新Loading, 例如加個顏色

有改site.json 記得要重啟server

## 方法2

- 在coServ中每個網頁都有區塊變數(bi)
- client:判斷子端屬於何種裝置
- 用Javascript去抓取bi.client.category來判斷裝置
- bi.client.category參數：
    - ‘desktop’
    - ‘tablet’
    - ‘mobile’

## 在js裡判定

```
ctrl.startup = function(){
  var bi = '<%=JSON.stringify(bi)%>';
  var bi_obj = JSON.parse(bi);
  var category = bi_obj.client.category;
  var title_label = ctrl.sel('#title-label');
  title_label.text(category);
  switch(category){
    case 'desktop':
      title_label.addClass("desktop-layout");
      break;
    case 'tablet':
      title_label.addClass("table-layout");
      break;
    case 'mobile':
      title_label.addClass("mobile-layout");
      break;
  }
}
```

## 直接在html裡面判定

```
<% if (bi.client.category === 'desktop') { %>
  <h2 class="desktop-layout">This is desktop</h2>
<% }else if (bi.client.category === 'tablet'){ %>
  <h2 class="tablet-layout">This is tablet</h2>
<% }else if (bi.client.category === 'mobile'){ %>
  <h2 class="mobile-layout">This is mobile</h2>
<% } %>
```
