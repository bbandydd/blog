title: 網路爬蟲 - Nightwatch + Cheerio = 神鵰俠侶
date: 2016-10-20 17:33:22
tags: [Nightwatch, Cheerio, Crawler]
---

## 前言

- 之前發表過兩篇Nightwatch文章 [Nightwatch JS - Introduction](http://bbandydd.github.io/blog/2016/08/08/nightwatch-intro/) [Nightwatch + ReactJS todoMVC](http://bbandydd.github.io/blog/2016/10/03/nightwatch-react-todo/)
- Nightwatch主要做End-to-End測試，模擬使用者操作網頁行為
- [本篇程式碼](https://github.com/bbandydd/crawler_nightwatch_cheerio)

## 緣由

- 最近在玩NodeJS搭配cheerio做網路爬蟲
- 針對有些頁面需要post參數才能擷取到網頁內容有些苦惱
- 使用Nightwatch將網頁操作至所需頁面再使用cheerio爬網頁資訊實在是太威了
    - 例如：需輸入時間區間進行查詢、輸入使用者帳密後進入的網頁等等

<!-- more -->

## 抓取立榮航空資訊

### nightwatch

1. 連至網頁
2. 點選航班訊息
3. 設定啟程地、目的地、飛航日期
4. 點擊搜尋
5. 取得網頁html string

### cheerio

1. 取得.info-table tbody tr底下html
2. 擷取班機號碼、每週班次、起飛時間、抵達時間、機型

```
'抓取立榮航空資訊': (browser) => {

    const departure = "KHH"
    const destination = "MZG"
    const month = '11'
    const day = '20'

    browser
        .url('https://www.uniair.com.tw/uniweb/index.aspx')
        .waitForElementPresent('body')
        // 選擇航班訊息
        .click('.tabs a:nth-child(2)')
        .pause(500)
        // 高雄 <--> 馬公
        .click(`#CPH_Body_ddl_Timetable_F option[value="${departure}"]`)
        .waitForElementPresent(`#CPH_Body_ddl_Timetable_T option[value="${destination}"]`)
        .click(`#CPH_Body_ddl_Timetable_T option[value="${destination}"]`)
        // 航班時間
        .execute(`$('#txt_Timetable_m').val(${month})`)
        .pause(500)
        .execute(`$('#txt_Timetable_d').val(${day})`)
        // 查詢
        .click('#CPH_Body_btn_Timetable_submit')
        .waitForElementPresent('#form1')
        .waitForElementPresent('.info-table')
        .source((result) => {
            const cheerio = require("cheerio")
            const $ = cheerio.load(result.value)

            const flights = []
            const titleList = ['flightNo', 'frequency', 'departure', 'arrival', 'aircraft']

            $('.info-table tbody tr').map((f_idx, flight) => {
                let object = {}

                $(flight).find('td').map((i_idx, info) => {
                    object[titleList[i_idx]] = $(info).text()
                })
                
                flights.push(object)
            })

            console.log(flights)
        })
        .end()
}
```

## 抓取高雄威秀資訊

### nightwatch

1. 連至網頁
2. 選擇電影院
3. 取得網頁html string

### cheerio

1. 取得.PrintShowTimesFilm 底下html
2. 擷取電影資訊 - 日期、場次時間

```
'抓取高雄威秀資訊': (browser) => {

    const theater = 'KS'

    browser
        .url('http://www.vscinemas.com.tw/CinemaSessions.aspx?Lang=2')
        .waitForElementPresent('body')
        // 選擇高雄威秀
        .waitForElementPresent(`select[name="ddlCinema"] option[value="${theater}"]`)
        .click(`select[name="ddlCinema"] option[value="${theater}"]`)
        .waitForElementPresent('body')
        .source((result) => {
            const cheerio = require("cheerio")
            const $ = cheerio.load(result.value)

            const films = []

            $('.PrintShowTimesFilm').map((idx, film) => {
                const times = []
                let target = $(film).parent().next()

                while($(target).find('.PrintShowTimesDay').html() != null) {
                    times.push({
                        timesDay: $(target).find('.PrintShowTimesDay').text(),
                        timesSession: $(target).find('.PrintShowTimesSession').text()
                    })
                    target = $(target).next()
                }

                films.push({
                    name: $(film).text(),
                    times: JSON.stringify(times)
                })
            })

            console.log(films)
        })
        .end()
}
```

## Reference

- https://gist.github.com/tpai/2356257ce73dce0701f0
