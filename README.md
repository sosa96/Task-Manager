# Task-Manager

Task Manager App is built as a part of Andrew Mead's [The Complete Node.js Developer Course (3rd Edition)](https://www.udemy.com/course/the-complete-nodejs-developer-course-2/?utm_source=adwords&utm_medium=udemyads&utm_campaign=LongTail-New_la.EN_cc.ROWMTA-B&utm_content=deal4584&utm_term=_._ag_98771201205_._ad_533999956744_._kw__._de_c_._dm__._pl__._ti_aud-396940771613%3Adsa-1007766171312_._li_20412_._pd__._&matchtype=b&gclid=CjwKCAjwyIKJBhBPEiwAu7zllwGXWgh7Za9XqVhdYKW9ez2KATNmgIuoYiswu2JWyZujVY6CsWfZRBoC3_wQAvD_BwE).

## Getting started

In this project I used a free, open-source MongoDB GUI viewer called [Robo 3T](https://robomongo.org/download) for managing my MongoDB database and the data it contains.

To start a new database instance run the following command:

```
{path-to-mongod-file} --dbpath={path-to-data-storage}

// In my case:

"d:\Program Files\MongoDB\Server\4.4\bin\mongod.exe" --dbpath="d:\Program Files\mongodb-data"
```

The connection URL would be: mongodb://127.0.0.1:27017

Create ``.env`` file and add the following keys
```
PORT = port value
SENDGRID_API_KEY = api key for mail service
MONGODB_URL = mongodb connection url
JWT_SECRET = jwt secret
```

Install all dependencies using ```npm install``` and then run the application with ```npm run dev``` script.
