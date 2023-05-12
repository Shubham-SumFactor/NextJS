# Section 7 Static coffee store pages 
## Project Component Architecture

= Banner 
= Heading 
= Card | Card | CArd 

## **Card Component Structure**
- create a folder as card.js and card.module.css in the dir component

> glass morphism 
> Card Component 
> card Component Styling 
> Grid Layput for card componenet 

## Rendering through static site generation
 
> -using getStaticProps
> Rules => can be only exported from a page file 
> meant for all routes 
> on code we pre-rendered on page i.e. we pre-rendered homepage
> We've set the getStaticProp  

## Static Props
=> pre-rendering dynamic route
=> Two rules
-
-can be exported from a page file only 
-meant for dynamic routes
-page must also implement getStaticProps


 ##Characteristics of getStaticPath

 => fallback key must be returned from getStaticPaths

 ## Fallback 
 > a fallback page is a special page that is dynamically generated at runtime for a specific route when that route doesn't have a corresponding pre-rendered page.

=> False => gives that error 404 page
=> true => checks that if route exist in getStaticPaths ==> if no then loads then reflect | downloaded on the go which is not pre-rendered || download then its cached => else undefined
==>useful when have a lot of static path

-    if (router.isFallback){
        return <div>Loading....</div>
    } needs a loading time to downloaded 

## REfactor   => destructor the prop

## Adding icons into the dynamic pages with place . rating and neighborhood mentioned 

## FourSquare and API
> Rate Limiting => limiting the number of API request a client/user can make.
> Fetch => allow invoke any url and get a response or error.{call server and retrieve}
> Env local and Env Next.config.js
> neighborhood not available added formatted_address in [id].js

> Unsplash => npm i --save unsplash-js
