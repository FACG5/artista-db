# artista-db

### **[artista-db Link](https://artista-db.herokuapp.com/)**

## **Why**

* To learn how to make a database and connect it with the backend.


## **What**

Art website, where the user can browse thepanting from the website database, and can add a panting if he like or can delete it, also the user can view the painters in the database.
___

## **User Journey**

> As a user I want to view the website paintaing.

> As a user I want to view the painter in the website.

> As a user I can add a painting.

> As a user I can delete a painting.

___

## **Architecture**

* public
  * html
    * adding.html
    * painters.html
    * paintings.html
  * css
    * styles.css
    * adding.css
    * error404.css
    * media.css
    * painters.css
    * paintings.css
  * img
  * js
    * dom-index.js
    * dom-adding.js
    * dom-painters.js
    * dom-painintings.js
    * fetch
  * index.html
  * error404.html
* src
    * handler.js
    * router.js
    * server.js
    * database
        * db_build.js
        * db_build.sql
        * db_connections.js
    * queries
        * addData.js
        * deleteData.js
        * getData.js
* test 
    * test.js
* README.md
* .gitignore 
* package-lock.json
* package-.json
  

---------
## Database Schema

![ALt](https://files.gitter.im/SalwaMugh/ubVn/schema.png)
---------

## **How to use**

Run this project on your Local Machine

1. Clone the repo:

```sh
git clone https://github.com/FACG5/artista-db.git
```
```sh
cd artista-db
```

   

```sh
npm install
```

2- create your own ```config.env``` 

inside of it put :

```DB_URL = postgres://[user-name]:[password]@localhost:5432/[database]```


-----
> By Ali Asala Othman Salwa :smile:
