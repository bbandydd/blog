title: Input field動態產生JSON
date: 2017-01-08 16:02:51
tags: [Javascript, ES6]
---

# 緣由

- 實務上常常需要取得input field輸入值，再將其組成JSON後發送給後端接收
- 但是每增加一個input field是否可以動態產生JSON，而不需修改Javascript組JSON程式碼

## 做法

- Array.from()：將jquery取得的$('input')組成array
- Array.reduce()：將初始值{}藉由每個reduce加入新的key / value

<!-- more -->

## HTML

```
<div>
  <input type="text" name="account" />
  <input type="text" name="password" />
  <button onclick="submit()">submit</button>
</div>
```


## Javascript

```
const submit = () => {
    const result = 
      Array.from($('input'))
        .reduce((before, after) => {
          const name = $(after).attr('name');
          const value = $(after).val();
          return {
            ...before,
            [name]: value
          }
        }, {}); 
  
    alert(JSON.stringify(result));
}
```

## Result

![](https://i.imgur.com/Y0ZrJmJ.png)


