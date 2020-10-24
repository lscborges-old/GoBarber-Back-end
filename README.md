<h1 align="center">Welcome to GoBarber API :barber:</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

## Preview

> API developed to a scheduling application for barbershops. This application allows barbers to manage their schedules and clients to search for an available barber

## Others repositories of this project :books:
* <a href="https://github.com/lscborges1/GoBarber-Mobile">Web Front-end</a>
* <a href="https://github.com/lscborges1/GoBarber-Front-end">Mobile Front-end</a> : 

## Technologies Used
* <a href="https://nodejs.org/en/" >Node.js<a>
* <a href="https://www.typescriptlang.org/" >Typescript<a>
* <a href="https://www.postgresql.org" > Postgres <a>
* <a href="https://github.com/mongodb/node-mongodb-native" > Mongodb <a>
* <a href="https://github.com/NodeRedis/node-redis" > Redis <a>
* <a href="https://github.com/aws/aws-sdk-js" >AWS SDK<a>
* <a href="https://nodemailer.com/about/" > Nodemailer <a>
* <a href="https://github.com/dcodeIO/bcrypt.js#readme" > Bcrypt.js <a>
* <a href="http://expressjs.com/" > Express <a>
* <a href="https://handlebarsjs.com/" > Handlebars <a>
* <a href="https://github.com/auth0/node-jsonwebtoken#readme" > JWT <a>
* <a href="https://github.com/expressjs/multer#readme" > Multer <a>
* <a href="https://github.com/Microsoft/tsyringe#readme" > Tsyringe <a>
* <a href="https://github.com/typeorm/typeorm#readme" > Typeorm <a>
  
## Install
> Installing dependencies
```sh
yarn install
```
> Running migrations
```sh
yarn typeorm migration:run
```
> Create a .env file and 
fill it following the .env.example file
```sh
cp .env.example .env
```

## Usage

> To start the server in development mode 
```sh
yarn dev:server
```
> *** Instancies of MongoDB, Redis ,and PostgresSQL must be running

## Run tests

```sh
yarn run test
```

## Author

👤 **Lucas Borges**

* Github: [@lscborges1](https://github.com/lscborges1)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
