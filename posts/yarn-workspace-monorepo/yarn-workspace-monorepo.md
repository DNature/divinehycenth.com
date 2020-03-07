# Monorepo Typescript setup with Lerna and Yarn workspaces in 2020

How to setup Yarn workspace for React web, and React-Native(expo) with Typescript

![https://www.pexels.com/photo/macbook-pro-on-white-table-3740745/](/images/blog/yarn-workspace/yarn-workspace.jpg)

<div className="text-center text-sm -mt-3 mb-4 opacity-75">Photo credit: <a href="https://www.pexels.com/@bongkarn-thanyakij-683719">Bongkarn thanyakij</a> on <a href="https://www.pexels.com/photo/macbook-pro-on-white-table-3740745/">Pexels</a></div>

## Prerequisites

- lkasjdf

Recently i started working on a Full stack Airbnb clone project from [@benawad on Youtube](https://www.youtube.com/watch?v=kuswGIH-Xj8&list=PLN3n1USn4xlnfJIQBa6bBjjiECnk6zL6s) that consists of a _Nodejs + Graphql server_, _React_, and _React Native_ but i couldn't get it to work because of the resent changes in package versions.

<br/>

## [Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/#toc-why-would-you-want-to-do-this)

> _Workspaces are a new way to setup your package architecture that’s available by default starting from Yarn 1.0. It allows you to setup multiple packages in such a way that you only need to run yarn install once to install all of them in a single pass_.
>
> Your dependencies can be linked together, which means that your workspaces can depend on one another while always using the most up-to-date code available. This is also a better mechanism than yarn link since it only affects your workspace tree rather than your whole system.

<br/>

## Our repo structure

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
```

- **Yarn** handles the dependencies.

- **Lerna** handles tasks that affect multiple packages (compile/test/lint/build in all modules).

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

## Monorepo base: Yarn and Lerna

The base _package.json_ file looks like:

```json
{
  "private": true,
  "workspaces": ["packages/*"],
  "name": "expo-yarn-workspace-demo",
  "scripts": {
    "build": "lerna run build"
  },
  "devDependencies": {
    "lerna": "^3.20.2"
  }
}
```

- **workspaces** an array of directories

- The build script tells lerna to run all the build commands in our _/packages_ directory.

create a _lerna.json_ file and add the following piece of code:

```json
{
  "lerna": "2.11.0",
  "packages": ["packages/*"],
  "version": "0.0.0",
  "npmClient": "yarn",
  "useWorkspaces": true
}
```

Next thing is to install lerna as a development dependency by running

```bash
yarn add -D lerna
```

<br/>

## [Expo with Typescript](https://docs.expo.io/versions/latest/guides/typescript/)

We will initialize our _EXPO_ by running the following commands.

```bash
# Install the command line tools
npm install --global expo-cli
cd packages
expo init app
```

Use your arrow key to select _blank (Typescript)_ for a typescript project and complete the steps you're prompted with.

![expo init app](/images/blog/yarn-workspace/expo-init.png)

If you follow the above steps correctly its going to create an _/packages/app_ folder in the packages directory and install all the necessary dependencies.

> If you run into issues while generating your _expo_ boilerplate then try to generate it in a folder and move it into your _/packages_ folder.

<br/>

## [React with Typescript](https://create-react-app.dev/docs/adding-typescript/#installation)

Now we are going to generate our React-typescript boilerplate by running the following commands:

```bash
yarn create react-app web --template typescript
```

The above command will generate a typescript boilerplate of react and install all the necessary dependencies.

If you startup your expo project by running `yarn start` your app is going to crash because yarn is _hoisting_ some expo packages which we can prevent by telling yarn not to do so. [Read more about yarn workspace hoisting](https://classic.yarnpkg.com/blog/2018/02/15/nohoist/).

Add the following piece of code in the root _package.json_ file.

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

The root _tsconfig.json_ should look like:

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

Your _packages/web/tsconfig.json_ file should look like:

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

Your _packages/app/tsconfig.json_ file should look like:

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

Next thing is to configure babel in our _packages/app_ folder.

create a file in your _packages/app_ and call it `babel.config.js` and add the following piece of code:

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

Create a _metro.config.js_ file in your _packages/app_ directory and paste the following configuration:

```js
const { createMetroConfiguration } = require("expo-yarn-workspaces");
module.exports = createMetroConfiguration(__dirname);
```

<br/>

🚀 Now you can run `yarn start` in your _packages/app_ folder or _packages/web_ and everything will work fine.

> One great thing about _yarn workspaces_ is we can create a local package and share it across our _web, app_ or even a custom folder (server)

Let me show you how it works with _Typescript_.

Create a folder in your _packages_ directory and call it _common_
