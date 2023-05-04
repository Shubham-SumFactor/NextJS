NextJS Section 4
## STYLING in NEXT.JS

> styled the global.css file and home.module.css
> button wrapper also included

# Hero Image Genearator => ICons8

> large banner img use in a web page
>
> Adding hero component
>
> Adding Image Component in NEXTjs => lazy loads 
download content on demand
>
>hero image on home page
>
>import Image from 'next/image'

# Adding fonts in NextJs
> visit fonts.google.com
>
> download ibm plex sans or any font 
>
>create a folder fonts in the style and paste the font downloaded
>
> font optimization
>

## _Document.js
> allows direct access to the HTMl
> has access to entire body and Head Component whereas _app.js has no access to head Comp 
>
> global css the font is included  || or in Document.js it has to be mentioned
>

## Link tag in Document.js
> 
>                   <link rel = "preload"   // rel =relationship, preload => tells browser to preload the resource 
>                   href="/fonts/IBMPlexSans-Regular.tff"  // downloaded font location
>                 as = "font" // as => sets the necessary font header
>                crossOrigin="anonymous"></link> // tells the browser no need of credential
