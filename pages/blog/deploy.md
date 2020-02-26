import { withRouter } from 'next/router'
import BlogPost from '../../components/layouts/blog-post'

export const meta = {
published: true,
publishedAt: '2019-10-21',
title: 'How to Deploy Static Next.js App to Netlify',
summary:
"Next.js is a React framework for building universal web applications. In this tutorial, you'll learn how to build a static generated site and deploy to Netlify."
}

export default withRouter(({ children, router }) => (
<BlogPost path={router.pathname} meta={meta}>
{children}
</BlogPost>
))

## Introduction

[Next.js](https://nextjs.org) is a React framework for building universal web applications. It supports server-side rendering, SPAs and static generated sites. With all these options, you can build from simple to complex web applications easily. In this tutorial, we'll learn how to build and deploy a portfolio website and deploy to Netlify within minutes. You can follow along or find the entire codebase in this [repository](https://github.com/francisudeji/next.js-portfolio-site).

## Scaffolding a New Next.js App

In order to scaffold a new Next.js app, we need to have node and npm installed on your our machines. To verify, open up a terminal and type the following:

```bash
npm --version
```

If you get back a version number then you're all setup. If not, then download node from the [official website](https://nodejs.org) and then try again.

Next, create a new app by running the following snipper in your terminal:

```bash
npx create-next-app porfolio-website
```

With this snippet, a new Next.js app will be created on your machine and all the necessary dependencies should start installing. This may take a couple of minutes depending on your internet connection.

## Project Structure

Next.js is an opinionated React framework, meaning there are a set of standard and rules you must follow in order to work with it. Here's a quick overview of the different folders and their functions.

- `/pages`: Next.js uses static routing for its pages. It's like PHP where every filename ending with `.php` is automatically a page. In Next.js you can have as many pages as possible in your `pages` directory, with each file ending with a `.js` or `.ts` extension. Subsequently, you can have subfolders with the same conventions.
- `/static`:
