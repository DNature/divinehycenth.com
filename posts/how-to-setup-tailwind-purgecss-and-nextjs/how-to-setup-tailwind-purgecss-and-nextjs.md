import Author from "../../components/author";

# Setup Tailwind, and PurgeCSS in Nextjs

<Author/>

## How to setup your Nextjs project with tailwindcss, purgecss, autoprefixer and postcss

![how-to-setup-tailwind-purgecss-and-nextjs](/images/blog/how-to-setup-tailwind-purgecss-and-nextjs/how-to-setup-tailwind-purgecss-and-nextjs.jpg)

## Prerequisites

- Basic knowledge of [nextjs](https://nextjs.org)
- Ensure you have [git](https://git-scm.com)
- Text Editor

<br/>

## [Tailwindcss](https://tailwindcss.com/)

_Tailwind_ css is a fantastic _CSS framework_ that provides set of utility classes like other framework.
One cool thing about tailwind css is its naming convention.

Setting up _Tailwind_ with a frontend framework like [React](https://reactjs.org), [Nextjs](https://nextjs.org), [Vuejs](https://vuejs.org) etc... can be tricky especially when you're trying to implement other libraries for optimization.

## Installation 👣

For this tutorial we are going to be using a simple hello next application i created. run the following to download the project:

```bash
git clone https://github.com/dnature/hello-next

cd hello-next

# install dependencies
npm install
```

Next i will open the project in my favorite text editor by running `code .`. _VS Code_

![Hello next](/images/blog/how-to-setup-tailwind-purgecss-and-nextjs/hello-next.png)

Now we are going to install tailwind css through the following command:

```bash
npm install tailwindcss
```

Next we will generate the default _tailwind.config.js_ in the root directory by running:

```bash
npx tailwind init
```

Create a new stylesheet and call it _tailwind.css_ then import the tailwind css library by adding the following lines of code

```css
/* tailwind.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Next we will generate the tailwind styles by running

```bash
npx tailwindcss build ./tailwind.css -o styles.css
```

> The `tailwindcss` command is comming from the package we installed. the build command takes all our css selectors including the default tailwind imports and generates a new file called styles.css with the `-o` flag.

Next is to create a _\app.js_ file in the pages directory and paste the following code to import _tailwind.css_ .

```js
import React from "react";
import "../styles.css";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

Lets use our tailwind css selectors in our app to make it more appealing by adding the follow lines code:

```js
// pages/index.js

import Link from "next/link";

export default function Index() {
  return (
    <div className="container mx-auto bg-gray-200 flex flex-col justify-center items-center h-screen">
      <p className="text-4xl">Hello Next.js</p>

      <Link href="/about">
        <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          About
        </a>
      </Link>
    </div>
  );
}
```

```js
// pages/about.js

import Link from "next/link";

export default function About() {
  return (
    <div className="container mx-auto bg-gray-200 flex flex-col justify-center items-center h-screen">
      <p className="text-2xl">This is the about page</p>

      <Link href="/">
        <a className="bg-yellow-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
          Home
        </a>
      </Link>
    </div>
  );
}
```
