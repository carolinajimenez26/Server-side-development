# Server Side Development

Examples of servers constructed with [node.js](www.nodejs.org) from scratch and with
the framework [express](http://expressjs.com/).

It consists of differents examples:

## [server-1.js](https://github.com/carolinajimenez26/Server-side-development/blob/master/server-1.js):

Server constructed from scratch, it displays _Hello World_

## [server-2.js](https://github.com/carolinajimenez26/Server-side-development/blob/master/server-2.js):

More elaborated server constructed from scratch which render html pages if exists, and
sends HTTP answers if it doesn't.

## [server-3.js](https://github.com/carolinajimenez26/Server-side-development/blob/master/server-3.js):

Server constructed with _express_. It shows a _Hello World_ messege.

## [server-4.js](https://github.com/carolinajimenez26/Server-side-development/blob/master/server-4.js):

Server constructed with _express_ which render the HTML pages stored in ./public
folder.

## [server-5.js](https://github.com/carolinajimenez26/Server-side-development/blob/master/server-5.js):

Serves differenths methods like POST, GET, PUT, DELETE.

You can use the extension of _Chrome_: [__POSTMan__](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop)

## [server-6.js](https://github.com/carolinajimenez26/Server-side-development/blob/master/server-6.js):

It is a improve of server-5.js using the Router object.

## [server-7.js](https://github.com/carolinajimenez26/Server-side-development/blob/master/server-7.js):

Is the assignment1, where I implemented _rounting_ requiring it from the principal module.

### To run the previous ones servers:

```
node <name of the server>
```

## [node-express-gen/](https://github.com/carolinajimenez26/Server-side-development/tree/master/node-express-gen):

Is a server constructed with express-generator. It serves the same of server-7.js.

### To build one:

```
sudo npm install express-generator -g

express node-express-gen

npm install

npm start
```

## [node-mongoDB/simpleServer/](https://github.com/carolinajimenez26/Server-side-development/tree/master/node-mongoDB/simpleServer):

  Is a server using simple connection with [mongoDB](https://www.mongodb.com/).

### Running the server:

```
npm install express morgan body-parser

node server-number.js
```

## [node-mongoDB/simpleServer2/](https://github.com/carolinajimenez26/Server-side-development/tree/master/node-mongoDB/simpleServer2):

  Server that inserts, modify and consults in a collection of a DB.

### Running the server:

```
npm install mongodb --save

npm install assert --save

node server-number.js

```

## [node-mongoose](https://github.com/carolinajimenez26/Server-side-development/tree/master/node-mongoose):

  Starting with mongoose and the definitions of Schemas mongodb.
  server1.js and server2.js do the same with different methods.
  server3.js uses an document inside another with Schemas.

### Running the server:

```
npm install

node server-number.js

```

## [rest-server](https://github.com/carolinajimenez26/Server-side-development/tree/master/rest-server):

  Server that handles some operations with users, using mongoose.

### Running the server:

```
npm install

npm run start

```

## [basic-auth/server-1](https://github.com/carolinajimenez26/Server-side-development/tree/master/basic-auth/server-1.js):

  Basic authorization to access to the server.

### Running the server:

```
npm install

node server-1.js

```

## [basic-auth/server-2](https://github.com/carolinajimenez26/Server-side-development/tree/master/basic-auth/server-2.js):

  Basic authorization to access to the server and quick start with [cookies and signed cookies](https://github.com/expressjs/cookie-parser).

### Running the server:

```
npm install

node server-2.js

```

## [basic-auth/server-3](https://github.com/carolinajimenez26/Server-side-development/tree/master/basic-auth/server-3.js):

  Basic authorization to access to the server using [express sessions](https://github.com/expressjs/session).

### Running the server:

```
npm install

node server-3.js

```

## [rest-server-passport](https://github.com/carolinajimenez26/Server-side-development/tree/master/rest-server-passport):

  Authentication using [passport](http://passportjs.org/) and [JSON Web Tokens (JWB)](https://jwt.io/).

### Running the server:

```
npm install

npm run start

```

## [mongoose-population](https://github.com/carolinajimenez26/Server-side-development/tree/master/mongoose-population):

  Here you can see how to reference documents with [mongoose population](http://mongoosejs.com/docs/populate.html). This server has users authentication.

### Running the server:

```
npm install

npm run start

```

## [https-server](https://github.com/carolinajimenez26/Server-side-development/tree/master/https-server):

  Example of a server that uses _https_ and redirects the traffic to it.

### Running the server:

```
npm install

npm run start

```

### Creating secret key and a certificate:

```
openssl genrsa 1024 > private.key
openssl req -new -key private.key -out cert.csr
openssl x509 -req -in cert.csr -signkey private.key -out certificate.pem
```

See an example [here](http://blog.ayanray.com/2015/06/adding-https-ssl-to-express-4-x-applications/).


## [OAuth-server](https://github.com/carolinajimenez26/Server-side-development/tree/master/OAuth-server):

  Authenticating users with [Facebook](https://www.facebook.com/) using [OAuth](https://oauth.net/) and
  [passport-facebook](https://github.com/jaredhanson/passport-facebook).

  You have to register your app in [facebook developers](https://developers.facebook.com/apps) and update the _clientID_
  with the identification of the app and the _clientSecret_ for the secret application password provided by Facebook in
  [our server](https://github.com/carolinajimenez26/Server-side-development/tree/master/OAuth-server/config.js) and  
  to run the server.
  You also need to indicate in the configuration of the app in facebook the [callbackURL](https://github.com/carolinajimenez26/Server-side-development/tree/master/OAuth-server/config.js)
  that you are using when the user login successfuly with the app.

### Running the server:

```
npm install

npm run start

```

See another example [here](https://scotch.io/tutorials/easy-node-authentication-facebook) and [here](http://mherman.org/blog/2013/11/10/social-authentication-with-passport-dot-js/#.WVZznbO4s_N).

You can also make authentications with [Twitter](https://twitter.com/) using [passport-twitter](https://github.com/jaredhanson/passport-twitter),
with [Google](https://www.google.com.co/) using [passport-google-oauth](https://github.com/jaredhanson/passport-google-oauth).


## [loopback-server](https://github.com/carolinajimenez26/Server-side-development/tree/master/loopback-server):

  Server using [LoopBack](http://loopback.io).

### Running the server:

```
npm install

node .

```


## Notes:

In the servers that uses [mongoDB](https://www.mongodb.com/) remember to run the mongo daemon before running the server.
You can check it [here](https://docs.mongodb.com/manual/tutorial/manage-mongodb-processes/).
______________________________________________________

See and learn more at:

https://www.coursera.org/learn/server-side-development/
