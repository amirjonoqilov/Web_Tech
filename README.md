Travel Journal Web Appliation.

About the app

This app is web-based application that enables users to add their travel title experience, locationa, and images to the platform.

Users can upload their photos URL, also they can Update existing travel posts and delete travel posts

This applications is built using Node.js, Express and Pug as a template engine. And Json file is used as a database.

How to run the application locally.

Step 1: install requaired dependencies by writing "npm install" to a terminal

step 2: run the application by "npm start" command and the application will start at this http://localhost:3000 url


Application dependencies:

1. express - Node.js web framework
2. For rendering HTML pug template engine.
3. parsing request bodies body-parser
4. method-override middleware for supporting HTTP verps PUT and DELETE.
5. express-validator for  validating
6. nodemon tool for restarting automatically the server when file changes.

/controllers
   /api/travel/index. js --  API controller fro travel posts
   /web/home/index.js -- Web controller for rendering views

/data/mock_db.json Mock database for storing travel post informations.

/public/css/styles.css 
       / js/scripts.js Custom css and js

/routes
       /api/travel/index.js --> API routes
       /web/home/index.js --> web routes for rendering views

/validators/travel/index.js --> validation logic

/views/home/add_update.pug --> front-end form for adding and updating posts
           /index,pug --> homepage for showimg travel posts
      head.pug --> sheared style 

/app.js --> application file

/package.json --> Project metadata and dependencies
README.md --> documentaion of the application.


LINKS

github repository --> https://github.com/amirjonoqilov/Web_Tech

Hosted application 


