# Json-Server
 Simple JSON Server with data rendering in html and JS with Blog content
 
 Use npm i -g json-server  to install JSON-server package available in --> https://www.npmjs.com/package/json-server
 
 Create a db.json for loading data in a folder called data with the below contents
 
 {
    "posts": [
        {
            "id":1,
            "title": "Welcome to the new blog",
            "body": "This is my first blog for the first time",
            "likes": 30
        },
        {
            "id":2,
            "title": "Welcome to the second blog",
            "body": "This is my second blog for the second time",
            "likes": 20
        },
        {
            "id":3,
            "title": "Welcome to the third blog",
            "body": "This is my third blog for the third time",
            "likes": 50
        },
        {
            "id":4,
            "title": "Welcome to the fourth blog",
            "body": "This is my fourth blog for the fourth time",
            "likes": 15
        }
    ],
    "polls" : [{
        "id":1,
        "question": "Do you like Angular or React",
        "answerA": "Angular",
        "answerB": "React" 
    }]
}

Start Json server with the following command --> json-server --watch data/db.json
and this should be the O/P

 Resources
  http://localhost:3000/posts
  http://localhost:3000/comments
  http://localhost:3000/profile

  Home
  http://localhost:3000
  
  
  ![image](https://user-images.githubusercontent.com/10427100/136961070-8d85c916-feb9-4802-9898-d67de29dd46c.png)

  
  ![image](https://user-images.githubusercontent.com/10427100/136960597-5e56a3e4-adbf-4a04-a9a9-35916981f140.png)
  
  
 ![image](https://user-images.githubusercontent.com/10427100/136960900-3c04614a-ff52-4657-b3d5-8e95ee1bc45f.png)


