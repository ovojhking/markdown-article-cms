# Markdown Article CMS

利用markdown寫的文章管理系統，稍微調整一下也可以改成部落格。

Heroku首次開啟時間稍慢，需花些時間等候:

[Demo](https://markdown-article-cms.herokuapp.com/) 

**專案目標：**

1. 使用localstorage模擬後端的資料儲存，並設計RESTful api，方便之後改用後端api
1. 管理文章頁面： 此頁面需連結至瀏覽文章頁面與新增文章頁面。
1. 新增文章頁面： 此頁面需可使用markdown撰寫，並需有個預覽按鈕，用以預覽markdown的執行結果。
1. 瀏覽文章頁面： 此頁需可檢視markdown的執行結果，並需有個編輯按鈕，用以進入編輯文章頁面。
1. 編輯文章頁面： 此頁需可編輯舊有的文章，並需有個預覽按鈕，用以預覽markdown的執行結果。

**本專案包含以下內容：**

1. 自製 localStorageRequest 來模擬與後端請求api的動作。
1. 當想改用資料庫儲存時，只需將ApiArticles裡的localStorageRequest改成axios即可。（例如：localStorageRequest.get(`article/${id}`); 改成axios.get(`article/${id}`)）
1. 有稍微調整rwd頁面，可在手機上瀏覽。
1. 使用oocss的css設計模式規劃bootstrap與scss的使用
1. 驗證格式的hoc，可以加入符合格式的各種元件，且可自由新增、刪減驗證規則，耦合性極低。
1. 封面圖片的網址輸入欄有加上filterXSS，可以防止簡易的xss攻擊。
1. 將third party library ( codemirror ) 改寫成react component。
1. 使用redux-saga管理異步的action，提高維護性。

## 安裝與使用

下載完後，安裝、執行即可開啟網頁。

```
$ npm install
$ npm start
```

## 資料夾結構

1. js
    * apis:  
        *  放置api
    * components: 
        * react的部分主要寫在components裡面。
        * content放會產生出頁面的部分，common放共用以及被引入的部分。
    * configs
        * 配置相關的寫這邊，比如：驗證規則、domainName。
    * libs
        * 純js的小工具放這邊（如果允許使用外部的lib，也會放這裡）。
    * router
        * react router
    * saga
        * redux-saga
    * seeds
        * 假資料的種子存放區
    * store
        * redux的reducer跟action
    
2. styles

    根據bootstrap改寫的scss
    * base
        * html tag相關的預設定，從這邊改寫
    * components
        * 以元件為單位的css放這邊
    * helps
        * 可以套用在任意css上的小工具或參數設定，比如border-radius
    * layouts
        * 以頁面排版為單位的css放這邊，比如header,container
