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
>*package.json* => scripts and project Dependencies
>
>*Node_modules* => All Dependencies
>
>*pages* ==>
1 api => Backend API
2 _app.js => Entry pt
3 index.js => Default Route 
>
>*public* => All Static Files
>
> *styles* ==>
1 global.css => applied throughout
2 home.module.css => applicable to home only
>
> *.next* => gets auto generated
>

## *folder _app.js* => 
>is an entry pt => provide wrapper to all / available in all pages

## *Pages Folder*
>has the ability to create the default routing for the pages created