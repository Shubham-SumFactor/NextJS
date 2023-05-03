NextJS Section 4
## Routing in NEXT.JS

> File based router => based on the concept of pages. whatever file is created under the pages folder has a route based on filename. E.g aboutus.js => /aboutus. , hello.js => /hello
> Works on History API => has the browser session history which makes it easy to track back and forth accessed data.

## Next JS Routing 
> - Index Routes => DEfault root page => index.js 
> - Nested Routes => /coffee-store => here coffee store is the nested route for root/ 
> - Dynamic Routes => define brackets
/coffee-store/1234566 => here coffee store is the nested route for root/ 
and /12234566 is the nested route for the coffee-store

## 2 Rules Of Routing
> - PAges need to be a react Component => meaning returns JSX 
>- Component needs to be exported by default => export *Default* function Home ()

## Dynamic Routes
> Uses Bracket Syntax
> to read value from the URL => nextJS provide Hook "next/route"
>/coffee-store/abc => abc is the id => {router.query.id}
>import { useRouter } from "next/router";

## Link Component 
**Two Types OF Linking**
>
>- Non Dynamic/ known pages => < Link href="/">< /Link > basically changes route to another page without refresh 
>- Dynamic pages

## Exercise 
> non dynamic routing for courses/nextjs and dynamic routing for localhost:3000/
> use of Head Component