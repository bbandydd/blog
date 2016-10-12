title: React Starter Kit 新增component
date: 2016-10-13 01:51:36
tags: [React]
---

## 緣由

- 因為讀書會需要用到[React Starter Kit](https://github.com/kriasoft/react-starter-kit/tree/feature/react-intl)

- 但因為結構有些複雜，花了點時間研究

- 官方文件提到和redux結合可以參考src/components/LanguageSwitcher/LanguageSwitcher.js

- 下面講解如何加入一個新的Component並結合Redux

<!-- more -->

## 加入action

- 移動到src/actions新增test.js

- src/actions/test.js

- 設定'SET_TEST' action，並傳入payload

```
export function setTest({ name }) {
    return {
        type: 'SET_TEST',
        payload: {
            name
        }
    }
}
```

## 加入reducer

- 移動到src/reducers新增test.js

- src/reducers/test.js

- 初始化state為string 'andy'

- 若是'SET_TEST'則將回傳action.payload.name

```
const initialState = 'andy';

export default function test(state = initialState, action) {
    switch(action.type) {
        case 'SET_TEST':
            return action.payload.name
        default:
            return state;
    }
}
```

## 建立Component

- 移動到src/components新增Test資料夾及底下新增Test.js

- src/components/Test/Test.js

- 內含兩種宣告方式，個人比較習慣寫法1

- component包含h2及button

- h2呈現state傳來的name，button點擊後修改state的name

- 建立mapState及mapDispatch兩個function給connect用

- 於component中綁定connect以便redux使用

```
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setTest } from '../../actions/test';

// 寫法 1
class Test extends Component {
    render() {
        const { test } = this.props;

        return (
            <div>
                <h2>{ this.props.test }</h2>
                <button onClick={ this.handleChange.bind(this) }>change</button>
            </div>
        )
    }

    handleChange() {
        const { setTest } = this.props;

        setTest({
            name: 'Changed'
        })
    }
}

// 寫法 2
// function Test({ test }) {
//     return (
//         <div>
//             <h2>{ test }</h2>
//             <button>change</button>
//         </div>
//     )
// }

const mapState = (state) => ({
  test: state.test
});

const mapDispatch = {
  setTest
};

export default connect(mapState, mapDispatch)(Test);
```

## 加入Component至畫面

- 將Test component加入Layout Component顯示

- src/components/Layout/Layout.js

- 加入Test component

```
return (
  <div>
    <Test />
    <Header />
    {React.Children.only(children)}
    <Feedback />
    <Footer />
  </div>
);
```

- 原本呈現預設值'andy'

![](https://i.imgur.com/RQygRp0.png)

- 點擊按鈕後修改為'changed'

![](https://i.imgur.com/7T3e2Ey.png)
