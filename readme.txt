
in this lift off series we will be using ui.shadcn.com as ui library
set up 
1. cd src/layout.ts 
set a tameplate 
npx shadcn-ui@latest init
its theme colour and many more for brand tameplate
2. use cn 
3. create component folder that have wrappper file
this wrapper will be passin the className and children 
4. use the MaxWidthWrapper in page.tsx
set up global.css
pick a theme and copy code to the first base in global css



start building with html structure for the foundation 

create a TODO: to not forget anything that we want to develop


create LANDING PAGE at page.tsx

- make headline use html like h1 span and customize it with className 
- routing page with Link and href

- npx shadcn-ui@latest add button
- add button

- yarn add lucide-react
- icon

- create an object that contain list 
- create html in section tag 

then close 

start building NAVBAR
 
start building navitems
and 
navitems

import { PRODUCT_CATEGORIES } from "@/config"
config 
/nav/ui-kits/mixed.jpg

list as a navbar menu 

user logic lading page - sign in , create account , sign up 

then close 

start building CART 

npx shadcn-ui@latest add sheet

npx shadcn-ui@latest add separator

start building cart with sheet ui library
add image for empty cart 

next step to integrate our backend

then close 

Start building express js for backend 

create server.js as a main gateaway 

yarn add express
yarn add -D @types/express
yarn add dotenv
yarn add payload
yarn add cross-env


create middle ware at lib utils 

install depedency
yarn add @payloadcms/richtext-slate @payloadcms/bundler-webpack @payloadcms/db-mongodb

"dev": "cross-env PAYLOAD_CONFIG_PATH=src/payload.config.ts nodemon",

add nodemon script json scrtip  nodemon.json

add tsconfig.server.json

set up mongodb

yarn dev

then close 

start building Auth
