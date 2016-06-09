title: Rails Bridge - 初探Rails 加分題
date: 2015-05-24 00:18:09
tags: [Rails]
---

這是我Ruby on Rails的第一個程式，是在[RailsBridge](http://railsbridge-docs-zh-tw.herokuapp.com/docs/)上面跟著步驟手把手教學做的，後面有加分題，紀錄一下怎麼做出來的。

傳統的 RailsBridge 課程（稱為 Suggestotron）。帶你一步一步蓋一個 Rails 應用程式、執行一條條指令、使用像是 rails generate scaffold 之類的輔助工具，並且部署（deploy）到網路上。

[初探Rails](http://railsbridge-docs-zh-tw.herokuapp.com/初探-rails/)

<!-- more -->

## 加分題1 - 加一個「扣分」按鈕，做的事跟加分按鈕相反

- 先做一個扣分的function
    - controllers/topics_controller.rb加入minusVote
    - function使用destroy去-1

```
def minusVote
  @topic = Topic.find(params[:id])
  @topic.votes.first.destroy
  redirect_to(topics_path)
end
```

- 將minusVote加入config/routes.rb

```
resources :topics do
    member do
      post 'upvote'
      post 'minusVote'
    end
  end
```

- 加入扣分按鈕並執行minusVote
    - views/index.html.erb加入按鈕

```

<td><%= button_to '-1', minusVote_topic_path(topic), method: :post %></td>
```

## 加分題2 - 根據投票分數排序 topics

- 做法：加入新的欄位紀錄投票數，取出時使用排序

- 產生migration檔案
    - Command Line輸入下面語法，[add_vote_count_to_topic]為檔名
    - 產生檔案在db/migration底下 [時間]_[檔名].rb

```
rails generate migration add_vote_count_to_topic
```

- 宣告欄位
    - 進入[時間]_[檔名].rb中宣告新增的欄位
    - add_column :[資料表], :[欄位名稱], :[欄位類型]

```
class AddVoteCountToTopics < ActiveRecord::Migration
  def change
    add_column :topics, :count, :integer
  end
end
```

- 資料庫綁定
    - Command Line輸入下面語法進行綁定

```
rake db:migrate
```

- 加分扣分時寫入目前投票數
    - controllers/topic_controller.rb中找到upvote(加分)和minusVote(扣分)
    - 加入@topic.update_attributes(count: @topic.votes.count)更新投票數

```
def upvote
  @topic = Topic.find(params[:id])
  @topic.votes.create
  @topic.update_attributes(count: @topic.votes.count)
  redirect_to(topics_path)
end
def minusVote
  @topic = Topic.find(params[:id])
  @topic.votes.first.destroy
  @topic.update_attributes(count: @topic.votes.count)
  redirect_to(topics_path)
end
```

- 取資料時排序
    - controllers/topic_controller.rb中找到index
    - 使用.order排序

```
def index
  @topics = Topic.all.order('count desc')
end
```
