NextJS Section3

##Set UP

# **installation of Node**
> Must have node.js installed on the machine
>node.js // 18.13.0 
>npm is node package manager 
>npx is package runner //9.2.0

# Creation of the app
## Commands to be followed
*To create an app*
> npx create-next-app app_name

*To run the development*
>npm run dev 

*app running on local machine*
> <http://localhost:3000>

# Middleware 
*Middleware* 
> Enables you to use code over configuration. based on Usr => Incoming req. , we can modify the response by rewriting, redirecting, adding headers or even streaming HTML.


**To Add middleware file in project**
> inside pages directory => add _middleware.js

**Uses**
1 Authentication
2 Authorization
3 location based navigation etc 

## Create-Next-App Directory Structure 
>package.json 
>
>Node_modules
>
>pages
1 api
2 _app.js
3 index.js
>
>public
>
>styles
1 global.css 
2 home.module.css
>.next