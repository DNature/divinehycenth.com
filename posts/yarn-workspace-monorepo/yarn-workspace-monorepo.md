import Author from "../../components/author";
import CustomLink from "../../components/CustomLink.tsx";
import RelatedArticles from "../../components/articles/relatedArticles.tsx";

# Monorepo Typescript setup with Yarn workspaces in 2020

<Author/>

How to setup Yarn workspace for React web, and React-Native(expo) with Typescript

![https://www.pexels.com/photo/macbook-pro-on-white-table-3740745/](/images/blog/yarn-workspace/yarn-workspace.jpg)

<div className="text-center text-sm -mt-3 mb-4 opacity-75">Photo credit: <a href="https://www.pexels.com/@bongkarn-thanyakij-683719">Bongkarn thanyakij</a> on <a href="https://www.pexels.com/photo/macbook-pro-on-white-table-3740745/">Pexels</a></div>

## Prerequisites

- You must have **Typescript** installed on your system and some basic knowledge of it.

- Basic knowledge of **React** and **React Native**

Recently i started working on a Full stack Airbnb clone project from [@benawad on Youtube](https://www.youtube.com/watch?v=kuswGIH-Xj8&list=PLN3n1USn4xlnfJIQBa6bBjjiECnk6zL6s) that consists of a _Nodejs + Graphql server_, _React_, and _React Native_ but i couldn't get it to work because of the resent changes in package versions.

<br/>

## [Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/#toc-why-would-you-want-to-do-this)

> _Workspaces are a new way to setup your package architecture that’s available by default starting from Yarn 1.0. It allows you to setup multiple packages in such a way that you only need to run yarn install once to install all of them in a single pass_.
>
> Your dependencies can be linked together, which means that your workspaces can depend on one another while always using the most up-to-date code available. This is also a better mechanism than yarn link since it only affects your workspace tree rather than your whole system.

<br/>

## Our repo structure

<!--
```bash
.
├── larna.json
├── package.json
├── packages
│   ├── app
│   │   ├── app.json
│   │   ├── App.tsx
│   │   ├── ...
│   ├── common
│   │   ├── package.json
│   │   ├── src
│   │   │   └── index.ts
│   │   │   tsconfig.json
│   │   └── ...
│   └── web
│       ├── package.json
│       ├── src
│       │   ├── App.css
│       │   ├── ...
├── tsconfig.json
├── .prettierrc.js
├── .eslintrc.js
├── .eslintignore
├── .gitignore
└── yarn.lock
``` -->

- **Yarn** handles the dependencies.

- One folder per package inside packages directory.

- All packages share the same structure.

- Each package defines only its runtime dependencies.

- All the tooling, dependencies and devDependencies are shared and live in its own package.

- Each package contains the required configuration files for the tooling. Each file extends a common base configuration (we use Babel, Jest and ESlint + Prettier to compile, test and lint/prettify the code).

- Each package symlinks a common task script that defines how the different tools must be invoked.

- There is a “hub” package. It depends on all the other packages and allows easy usage of the framework (a single awesome dependency).

- All packages share the version number.

- Publication is handled by a custom publish script that will be used by the CI environment.

Let’s see each part in greater detail.

<br/>

## Monorepo base: Yarn

The base **package.json** file looks like:

```json
{
  "private": true,
  "workspaces": ["packages/*"],
  "name": "expo-yarn-workspace-demo"
}
```

- **workspaces** an array of directories

- The build script tells lerna to run all the build commands in our **/packages** directory.

<br/>

## [Expo with Typescript](https://docs.expo.io/versions/latest/guides/typescript/)

We will initialize our **EXPO** by running the following commands.

```bash
# Install the command line tools
npm install --global expo-cli
cd packages
expo init app
```

Use your arrow key to select **blank (Typescript)** for a typescript project and complete the steps you're prompted with.

![expo init app](/images/blog/yarn-workspace/expo-init.png)

If you follow the above steps correctly its going to create an **/packages/app** folder in the packages directory and install all the necessary dependencies.

> If you run into issues while generating your **expo** boilerplate then try to generate it in a folder and move it into your **/packages** folder.

<br/>

## [React with Typescript](https://create-react-app.dev/docs/adding-typescript/#installation)

Now we are going to generate our React-typescript boilerplate by running the following commands:

```bash
yarn create react-app web --template typescript
```

The above command will generate a typescript boilerplate of react and install all the necessary dependencies.

If you startup your expo project by running `yarn start` your app is going to crash because yarn is **hoisting** some expo packages which we can prevent by telling yarn not to do so. [Read more about yarn workspace hoisting](https://classic.yarnpkg.com/blog/2018/02/15/nohoist/).

Add the following piece of code in the root **package.json** file.

```json {2,5}
// package.json
{
  "private": true,
  "workspaces": ["packages/*"],
  "name": "expo-yarn-workspace-demo",
  "scripts": {
    "build": "lerna run build"
  },
  "devDependencies": {
    "lerna": "^3.20.2"
  },
  "nohoist": ["**/react-native", "**/react-native/**", "**/expo", "**/expo/**", "**/@babel/core", "**/@babel/core/**"]
}
```

<br/>

The root **tsconfig.json** should look like:

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "lib": ["dom", "ES2015", "dom.iterable", "ES6", "ES2017", "ESNext.AsyncIterable", "ESNext"],
    "sourceMap": true,
    "removeComments": true,
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "noImplicitThis": true,
    "alwaysStrict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

<br/>

Your **packages/web/tsconfig.json** file should look like:

```json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react"
  },
  "include": ["src"]
}
```

<br/>

Your **packages/app/tsconfig.json** file should look like:

```json
{
  "compilerOptions": {
    "allowSyntheticDefaultImports": true,
    "jsx": "react-native",
    "lib": ["dom", "esnext"],
    "moduleResolution": "node",
    "noEmit": true,
    "skipLibCheck": true,
    "resolveJsonModule": true
  }
}
```

<br/>

Next thing is to configure babel in our **packages/app** folder.

create a file in your **packages/app** and call it `babel.config.js` and add the following piece of code:

```js
// babel.config.js
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"]
  };
};
```

The **babel-preset-expo** plugin extends the default React Native preset (metro-react-native-babel-preset) and adds support for decorators, tree-shaking web packages, and loading font icons with optional native dependencies if they're installed.

Create a **metro.config.js** file in your **packages/app** directory and paste the following configuration:

```js
const { createMetroConfiguration } = require("expo-yarn-workspaces");
module.exports = createMetroConfiguration(__dirname);
```

<br/>

🚀 Now you can run `yarn start` in your packages/app folder or packages/web and everything will work fine.

- One great thing about _yarn workspaces_ is we can create a local package and share it across our **web, app** or even a custom folder (server)

Let me show you how it works with **Typescript**.

Create a folder in your **packages** directory and call it **common** then create a **package.json** file with the default setup by running:

```bash
npm init -y
```

your **packages/common/package.json** file should look like:

```json
{
  "name": "@expoYarn/common",
  "version": "1.0.0",
  "description": "",
  "main": "dist/index.js",
  "typings": "dist/index.d.ts",
  "devDependencies": {
    "@types/node": "^10.3.2",
    "typescript": "^2.9.1"
  },
  "scripts": {
    "build": "tsc",
    "build:watch": "tsc --watch"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

> Note the **name** property is set to **@expoYarn/common** where **common** is the name of this current package.

Next create in the **common** directory and call it **src/**

<br/>

We are going to add a simple code snippet that is going to be accessible across our application.

Create a file in the **src** directory, call it **index.ts** then paste the following code that accepts two parameters which are numbers and returns a sum of the two numbers:

```js
export const add = (a: number, b: number): number => a + b;
```

We are going to build our project by running `tsc` in our common directory to build our code into a dist folder.

<br/>

To be able to access this module in our **web** directory we are going to add it manually to our our **package.json** int the **web** directory:

```json
{
  ...
  "dependencies": {
    ...
    "@expoYarn/common": "1.0.0"
  }
}
```

run `yarn install` to link the newly added package then we will test it out by using it in our **App.tsx** to log the sum of two numbers. Your **App.tsx** should look like:

```js
import React from "react";
import logo from "./logo.svg";
import { add } from "@expoYarn/common";
import "./App.css";

const App = () => {
  // Testing out our add function
  const result = add(10, 20);
  console.log(result); // => Returns [30]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
```

You can now see how handy **yarn workspaces** can be because it saves allot of code which means we are following the **Don't Repeat Your Self (DRY)** principle of **Object Oriented Programming (OOP)** although there was allot of setup but **_No Pain No Gain_**.

<br/>

## Limitations & Caveats

- The package layout will be different between your workspace and what your users will get (the workspace dependencies will be hoisted higher into the filesystem hierarchy). Making assumptions about this layout was already hazardous since the hoisting process is not standardized, so theoretically nothing new here. If you encounter issues, try using [the nohoist option](https://classic.yarnpkg.com/blog/2018/02/15/nohoist/)

- In the example above, if _web_ depends on a different version than the one referenced in _app_ package.json, the dependency will be installed from npm rather than linked from your local filesystem. This is because some packages actually need to use the previous versions in order to build the new ones (Babel is one of them).

- Workspaces must be descendants of the workspace root in terms of folder hierarchy. You cannot and must not reference a workspace that is located outside of this filesystem hierarchy.

- Nested workspaces are not supported at this time.

<br/>

## Learn more

<div className="md:flex lg:flex">
<RelatedArticles name="how-to-setup-tailwind-purgecss-and-nextjs"/> 
<RelatedArticles name="react-progressive-web-app-(pwa)"/>
</div>
