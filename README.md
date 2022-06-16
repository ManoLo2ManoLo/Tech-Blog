# Tech-Blog
<p align="center">
    <img align="center" src="https://img.shields.io/badge/-JavaScript-000000?style=for-the-badge&logo=JavaScript" alt="JavaScript" />
    <img align="center" src="https://img.shields.io/badge/-CSS3-000000?style=for-the-badge&logo=CSS3" alt="CSS3" />
    <img align="center" src="https://img.shields.io/badge/-Handlebars-000000?style=for-the-badge&logo=handlebars.js" alt="Handlebars" />
    <img align="center" src="https://img.shields.io/badge/-Bootstrap-000000?style=for-the-badge&logo=bootstrap" alt="Bootstrap" />
    <img align="center" src="https://img.shields.io/badge/-Font%20Awesome-000000?style=for-the-badge&logo=font%20awesome" alt="Font Awesome" />
</p>

## Link(s)
Link to Application: https://manolo-tech-blog.herokuapp.com/dashboard

## Table of Contents
* [Features](#features)
* [User Story](#user-story)
* [Screenshot](#screenshot)
* [Credits](#credits)
* [License](#license)

## Features
    1. User can create an account or login.
    2. User can create a post, or comment on their/other's post.
    3. User can edit a short description of themselves on their dashboard.
    4. User can view other's profile.
    5. User can delete/edit past posts that they created.

## User Story
As a user looking for a social media forum that is tech related. With little option for social media platform, tech blog is perfect for all tech conversation needs. This application is an a social media type application. When a user first loads up the application, they are presented with past blog posts. If they try to click on a user's profile or view post's comments, they are redirected to the log in page. While a user is not logged in there is a home button that will take you to the post list, there are also login and sign up button. When you are in the log in page, you have to login with the email and password you provided when you signed up. If not you can create an account with you first name, last name, username, email, password, and verify the password. When you create an account or successfully sign in, you are redirected into the homepage as a logged in user. Meaning the navbar changed from home, login, and sign up to home dashboard and log out.

As a logged in user, you are able to click on a user's name to view their page, where you can see their a short intro to themselves, as well as past blog posts. If the user choose to press to view a post's comments, they are able to post a comment as well as see other users comment. If the user clicks on dashboard, they are redirected to their page where they can edit their about me, and intrerest. They are also able to make a blog post, and view, delete or edit their past post. Lastly if the user wanted to, they can just log out where they will need to sign in to have access to most features of the application.

## Clone Repository
* git clone https://github.com/ManoLo2ManoLo/Tech-Blog.git

## Install Dependencies
* All NPM packages required for this application (bcrypt, connect-session-sequelize, dotenv, express, express-handlebars, express-session, mysql2, sequelize) are already listed as dependencies in the package.json file. Run the
command 'npm i' command in your terminal at the root directory level to install the packages.
* Ensure you have Node.js installed on your machine. The budget tracker application will be invoked by entering node server.js in the command line.

## Start Application
* You will see the App running on port 3001! in the console. You can then view the app on http://localhost:3001/.

## Screenshot
In this image, you can see what a user sees when they first log in. A list of all the previous post that were made. You are viewing this as a first time viewer, who has yet to make an account.
![Screenshot (488)](https://user-images.githubusercontent.com/88364269/146678793-122207dd-faeb-4f3f-ac58-252c51ee3661.png)

In this image, you can see the login page.
![Screenshot (480)](https://user-images.githubusercontent.com/88364269/146678794-7e43b7cc-7031-4232-915a-a08815e7744f.png)

In this image, you can see the create an account page.
![Screenshot (481)](https://user-images.githubusercontent.com/88364269/146678796-7e227737-6030-4ac1-83cb-c2bf50f31749.png)

In this image, you can see the user's dashboard where they can edit their about me and interest, as well as make a post. In the list of post you can delete it if you click on the trashcan icon, or edit the post.
![Screenshot (484)](https://user-images.githubusercontent.com/88364269/146678800-02ff462e-23ce-498b-8d80-8d887f6b457e.png)

In this image, you can see how the user is able to edit the post.
![Screenshot (486)](https://user-images.githubusercontent.com/88364269/146678803-682df406-2beb-4c35-b947-71e745ec1e19.png)

And if a logged in user decide to leave a comment, the user can view comments.
![Screenshot (487)](https://user-images.githubusercontent.com/88364269/146678804-d6a20ef0-080b-47e1-b8a0-a395a2cf0a79.png)

## Credit
This application was typed and revised Manuel Canas-Menendez (ManoLo2ManoLo). <br />

* [Github](https://github.com/ManoLo2ManoLo)
* [Portfolio](https://manolo2manolo.github.io/React-Portfolio/)
* [LinkedIn](https://www.linkedin.com/in/manuel-canas-menendez-33354b21b/)

## License
<p align="center">
    <img align="center" src="https://img.shields.io/github/license/ManoLo2ManoLo/Tech-Blog?style=for-the-badge" alt="license" />
</p>