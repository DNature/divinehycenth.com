import Author from "../../components/author";
import CodeWrapper from '../../components/codeWrapper'

# Handling File Uploads with Apollo Server 2.0

<Author/>

A comprehensive guide on how to upload files with Apollo-server 2.0 and Mongodb.

![How to minify file sizes with gulpjs](/images/blog/file-uploads-with-apolloserver-2/apollo-upload.jpg)

<div className="text-center text-sm -mt-3 mb-4 opacity-75">Photo credit: <a href="https://www.pexels.com/photo/macbook-pro-iphone-cup-desk-7974/">
Life of Pix</a> on <a href="https://www.pexels.com/@life-of-pix">Pexels</a></div>
<br/>

File Uploads have an interesting history in the Apollo ecosystem.

<br/>

With Apollo Server 2.0, you can perform file uploads right out of the box. Apollo Server ships with the ability to handle multipart requests that contain file data. This means you can send a mutation to Apollo Server containing a file, pipe it to the filesystem, or pipe it to a cloud storage provider instead.

<br/>

Depending on your problem domain and your use case, the way you set up file uploads may differ. Handling Multipart upload request in graphql can be a pain in the ass especially when your are coming from a **Rest** background like me. However, I'm going to show you how to upload files with **apollo-server 2.0 **

<br/>

One of the simplest ways of achieving file uploads in a single request is to base64-encode a file and send as a string variable in a mutation.

<br/>

## How it works

The upload functionality follows the GraphQL multipart form requests specification. Two parts are needed to make the upload work correctly. The server and the client:

- **The Client:** On the client, file objects are mapped into a mutation and sent to the server in a multipart request.

- **The Server:** The multipart request is received. The server processes it and provides an upload argument to a resolver. In the resolver function, the upload promise resolves an object.

<br/>

## Our project structure

```
├── images
│   └── 9A1ufNLv-bg-works.jpg
├── package.json
└── src
    ├── db.js
    ├── fileModel.js
    ├── index.js
    ├── resolvers.js
    └── typeDefs.js
```

<br/>

## Lets Begin 🚀

We will start off by initializing our project with npm, install the necessary packages and configure our server.

<br/>

<CodeWrapper lang="$~ bash" />

```bash
npm init -y

yarn add esm apollo-server graphql mongoose shortid

yarn add -D nodemon
```

<br/>

I'm going to explain what each package will handle shortly.

The next step is to setup our server with apollo and mongoose.
Create a **db.js** file in your **/src** directory and add the following configuration code to connect to your
**mongodb** database:
<br/>

<CodeWrapper lang="Javascript" />

```js
import mongoose from "mongoose";
const MONGO_CONNECTION = "mongodb://localhost:27017/fileUploads";

export default (async function connect() {
  try {
    await mongoose.connect(MONGO_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  } catch (err) {
    console.error(err);
  }
})();
```

<br/>

Now create an **index.js** file in your **/src** directory and paste the following code start off your server on [http://localhost:4000](http://localhost:4000):

<br/>

<CodeWrapper lang="Javascript" />

```js
import { ApolloServer } from "apollo-server";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";

// Import your database configuration
import connect from "./db";

export default (async function() {
  try {
    await connect.then(() => {
      console.log("Connected 🚀 To MongoDB Successfully");
    });

    const server = new ApolloServer({
      typeDefs,
      resolvers
    });

    server.listen(4000, () => {
      console.log(`🚀 server running @ http://localhost:4000`);
    });
  } catch (err) {
    console.error(err);
  }
})();
```

<br/>

Next we'll create our **resolvers** and **typeDefs** and put it in a separate file:

<br/>

<CodeWrapper lang="Javascript" />

```js
// ->  /src/typeDefs.js
import { gql } from "apollo-server";

export default gql`
  type Query {
    hello: String
  }
`;
```

<CodeWrapper lang="Javascript" />

```js
// -> /src/resolvers.js
export default {
  Query: {
    hello: () => "Hello world"
  }
};
```

Lol 😅 thats just a simple **Hello world** Query.

<br/>

Now add the following script to your **package.json** file to enable us start up our server.

You may be wondering why we've been using **ES6** syntax without configuring babel and thats because of the **[esm module](https://www.npmjs.com/package/esm)** we installed earlier.

<br/>

> **esm** is the world’s most advanced ECMAScript module loader. This fast, production ready, zero dependency loader is all you need to support ECMAScript modules in Node 6+.

<br/>

<CodeWrapper lang="Javascript" />

```json
// -> /package.json
{
  "name": "apollo-upload",
  "main": "src/index.js",
  "scripts": {
    "dev": "nodemon -r esm src/index.js" // we are requiring the esm module with [-r] flag to transpile our code
  },
  "dependencies": {
    "apollo-server": "^2.11.0",
    "graphql": "^14.6.0",
    "mongoose": "^5.9.4",
    "shortid": "^2.2.15"
  },
  "devDependencies": {
    "esm": "^3.2.25",
    "nodemon": "^2.0.2"
  }
}
```
