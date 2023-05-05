NextJS Section 4
## STYLING in NEXT.JS

> Hydration , SEO and other Rendering techniques

# What is SEO?
> techniques to optimize the search results, increase traffic on the site. Bots => crawl => Index => Rank
> **ways to improve SEO**
>> -*Semantics* => h1, h2, a , p
>
>> -*Meta tag* => title & Description for meta tags
>
>> -*Image Alt tag* => alt tag in images
>
>> *Stores analysis in DB* => then ranks 
> - Click thru rate 
> - Bounce rate 
> - Dwell time
# Pre-rendering in next JS?
> **Pre-Rendering** {Server TAkes care of the data rendered}
>- user makes a req
>
>- server sends Html w Data
>
>- Render HTML and Downloads JS
>
>- User Sees static  html page w Content // no interactivity
>
> **Hydration** : 
>- {JS loads}
>
>- User can interact now

# Plain React vs NExt JS app?
> Next JS pre-renders || React APP - complex strcture and JS is responsible and no pre-render.

# Different rendering techniques
>- SSG Static site Generation => Pre-downloaded content basically cached.. getStaticProps
>
>- ISR Incremental Site Regeneration=> getStaticProp with revalidate
>
>- Server-Side Rendering => new Html is generated for every every new request. get server side props 
>
# How pre-rendering helps with performance 
-> git push => app build start => app build complete {generated files} => Generated files are uploaded to a CDN Content delivery n/w...

# Static Site Generation => SSG => HTML generated at build time

# Incremental Static ReGeneration => ISG => HTML is generated at *specific interval* 

# Server Side Rendering => SSR => new HTML generated for every request
# Client Side Rendering CSR => plain react way => JS is responsible for rendering 
