# Server Side Development

Examples of servers constructed with [node.js](www.nodejs.org) from scratch and with
the framework [express](http://expressjs.com/).

It consists of differents examples:

**server-1.js:**

Server constructed from scratch, it displays _Hello World_

**server-2.js:**

More elaborated server constructed from scratch which render html pages if exists, and
sends HTTP answers if it doesn't.

**server-3.js:**

Server constructed with _express_. It shows a _Hello World_ messege.

**server-4.js:**

Server constructed with _express_ which render the HTML pages stored in ./public
folder.

**server-5.js:**

Serves differenths methods like POST, GET, PUT, DELETE.

You can use the extension of _Chrome_: [__POSTMan__](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop)

**server-6.js:**

It is a improve of server-5.js using the Router object.

**server-7.js:**

Is the assignment1, where I implemented _rounting_ requiring it from the principal module.

**node-express-gen/:**

Is a server constructed with express-generator. It serves the same of server-7.js.

For building one run:

```
sudo npm install express-generator -g

express node-express-gen

npm install

npm start
```

**node-mongoDB/:**

* simpleServer/:

  Is a server using simple connection with [mongoDB](https://www.mongodb.com/).

### Running the server:

```
npm install express morgan body-parser

node server-number.js
```

* simpleServer2/:

  Server that inserts, modify and consults in a collection of a DB.

### Running the server:

```
npm install mongodb --save

npm install assert --save

```

______________________________________________________

See and learn more at:

https://www.coursera.org/learn/server-side-development/
