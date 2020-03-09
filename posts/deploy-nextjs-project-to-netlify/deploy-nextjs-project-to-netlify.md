import Author from "../../components/author";

# Deploy Next.js project to Netlify

<Author/>

![https://www.pexels.com/photo/photo-of-man-pushing-hay-bale-2600312/](/images/blog/deploy-to-netlify/deploy-nextjs-netlify.jpg)

<div className="text-center text-sm -mt-3 mb-4 opacity-75">Photo credit: <a href="https://www.pexels.com/photo/photo-of-man-pushing-hay-bale-2600312/">Bongkarn thanyakij</a> on <a href="https://www.pexels.com/@chetanvlad">Pexels</a></div>

<br/>

## What is Netlify

> Netlify is a San Francisco-based cloud computing company that offers hosting and serverless backend services for static websites.
>
> Its features include continuous deployment from Git across Netlify Edge, the company's global application delivery network infrastructure, serverless form handling, support for AWS Lambda functions, and full integration with Let's Encrypt. It provides both free and paid plans.
>
> **Wikipedia**

<br/>

**Netlify** is a static page provider with Git deploy integration opportunity (GitHub, GitLab, Bitbucket) . Netlify has got very good performance, it provides https certification and we can use our own domain with the projects. So, we have got everything that we need for a starter project. Here comes a brief guide!

<br/>

On the other hand [**Nextjs**](https://nextjs.org) is a [Reactjs](https://reactjs.org) framework that provides **Server Side Rendering SSR** applications which means with Nextjs we can export our full application by pages so it behaves as a server-side rendered application without a server (Nodejs, PHP etc).

<br/>

You just need to add few scripts in your **package.json** file:

```json
{
   ...
  "scripts": {
    "dev": "next",
    "start": "next start",

    "build": "next build",
    "export": "next export", 😃
    "deploy": "npm run build && npm run export" 🚀
  }
}
```

The **build** script builds our project and saves it in a directory called **.next**. The **export** command exports all our files inside the **.next** directory into plain **html, css and javascript** files and the deploy script runs both the **build** and **export** script one at a time.

<br/>

The next thing is to deploy your project to git and i'm going to use github for this tutorial.

The project i am using is from [an article i wrote earlier](/blog/how-to-setup-tailwind-purgecss-and-nextjs)

- Code: [https://github.com/dnature/hello-next](https://github.com/dnature/hello-next)

<br/>

[First create an account with netlify.com](https://app.netlify.com/signup?_ga=2.58798317.1351806053.1583669087-991025437.1583669087)

Next Click on [New site from git](https://app.netlify.com/start)

![Select a new site from git](/images/blog/deploy-to-netlify/create.gif)

<br/>

Next step is to select Github and select your github repository you wish to deploy.

Next step is to select the git branch you wish to deploy. the default is _master_.

> **Note**: I created a new branch(_deploy_) for the purpose of this tutorial so i am going to select that branch instead of using the default **master** branch.

In the build command input field we have to tell netlify to run our deploy script by passing:

```bash
npm run deploy
```

<br/>

Our output directory is the default _out_ folder that nextjs provides when we run `npm run export`

![Deploy nextjs to netlify](/images/blog/deploy-to-netlify/deploy.gif)

<br/>

That's all! After these settings, Netlify will take care about hosting and build process on your selected branch.

<br/>

## Conclusion

Netlify is a very fantastic service for static sites but now we have learnt how to also deploy **server side rendered applications.**
