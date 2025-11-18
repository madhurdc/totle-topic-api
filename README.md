# TOTLE Topic Retrieval API

A lightweight Node.js/Express API that simulates the behaviour of
TOTLE's `/api/catalogue/` endpoint by retrieving and filtering topics
stored inside a JSON file.

## 📌 Features

* GET `/api/topics?search=<query>`
* Case-insensitive search
* Optional sorting: name, category, default id
* Error handling for invalid queries and file errors
* Clean routes/controllers/utils structure

## 📂 Project Structure

```
totle-topic-api/
│── package.json
│── server.js
│── .env
│── /data
│   └── topics.json
│── /routes
│   └── topicsRoutes.js
│── /controllers
│   └── topicsController.js
│── /utils
│   └── fileReader.js
│── /node_modules
```




## ⚙️ Installation \& Setup

### Install dependencies

&nbsp;   npm install


### Environment variables

&nbsp;   PORT=5000
    FILE\_PATH=./data/topics.json


### Run server

&nbsp;   npm run dev


### GET /api/topics?search=`<query>`&sort=`<field>`

| Parameter | Required | Description                       |
|----------|----------|-----------------------------------|
| search   | Yes      | Keyword to search                 |
| sort     | No       | Sort by `name`, `category`, or id |


### Example Request

&nbsp;   GET /api/topics?search=node\&sort=name


### Example Response

``` json
{
    "message": "File searched",
    "searchTopics": [
        {
            "id": 17,
            "name": "Node.js Asynchronous Programming",
            "category": "Backend"
        },
        {
            "id": 16,
            "name": "Node.js Basics",
            "category": "Backend"
        },
        {
            "id": 18,
            "name": "Node.js Performance Optimization",
            "category": "Backend"
        }
    ]
}
```

## 🛑 Error Handling

| Code | Description              |
|------|---------------------------|
| 400  | Missing search query      |
| 500  | Server or file error      |
| 200  | Success                   |


## 🗂 Sample topics.json Preview

``` json
[
  { "id": 1, "name": "AI Fundamentals", "category": "Technology" },
  { "id": 2, "name": "Blockchain Basics", "category": "Technology" },
  { "id": 3, "name": "AI in Finance", "category": "Finance" }
]
```

## 🔗 GitHub Repository

https://github.com/madhurdc/totle-topic-api

## ✔️ Submission Checklist

- [✔] Source code  
- [✔] Folder structure  
- [✔] README  
- [✔] topics.json  
- [✔] Video  
- [✔] GitHub link

