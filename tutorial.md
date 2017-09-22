Article Title: Build a static blog with Vue.js and Vuelog
Description:
In this tutorial, we will build a blogging application with Vue.js and Vuelog. Vuelog is a static site generator that parses markdown files to render our blog posts on the client side. In this way, we can build a feature complete blogging application while harnessing the power of markdown and Vue.js client-side interactivity.

Ideas to Present in Article:
- Overview of the application, what we will build and links to source code + demo
- Introduction to the Vuelog and how static site generators work
- Generate the application and add posts
- Deploy blog to Github Pages
- Conclusion 

# Build a static blog with Vue.js and Vuelog

In this tutorial we are going to go through building a static blogging application with [Vuelog](https://vuelog.js.org/#/home). Vuelog is built out of Vue.js and uses the [marked](https://github.com/chjj/marked) markdown parser and compiler under the hood. This means that we get the full reactivity power of Vue 2 and Vuex and the simplicity of writing our posts in markdown format. Vuelog was created in China and takes internationalization very seriously. If you have readers that speak different languages Vuelog is an especially good static blogging choice. Under the hood Vuelog uses [vue-i18n](https://github.com/kazupon/vue-i18n) to render different language content based on the user's preferences.

## The application 

A static blogging application means that all of our content is hosted on the client side. We do not need a server to handle incoming requests or a database like MySQL or MongoDB to store our content. Instead our application will be made up entirely of HTML, CSS and Javascript. This decreases our hosting costs, can increase performance and simplify our application.

This blog application will feature pages for our portfolio work, an about page and a blog. Additionally, we will have an archive of posts grouped by year and category as well as social links. The application will be hosted live using Github Pages. The source code for the application and a demo are featured below.

Demo: http://connorleech.info/vuelog-starter/

Source code: https://github.com/connor11528/vuelog-starter

## Alternatives

There are many other solutions for static blogging out there. One to keep an eye on for the Vue.js community is called [Nuxt]
(https://github.com/nuxt/nuxt.js). It is very powerful and includes many additional features. However, it is not stable and has not yet released the 1.0 release yet. Additionally, the added features can introduce uncessary complexity into our application.

[Hexo.js](https://github.com/hexojs/hexo), [gatsby](https://github.com/gatsbyjs/gatsby) and [jekyll](https://jekyllrb.com/) are alternative static blogging engines that do not use Vue.js.

## Get started building 

To start building a new Vuelog project you must fork or clone the Vuelog repository, install dependencies and then run the development server using the steps below:

```
$ git clone https://github.com/myst729/Vuelog.git my-repo-name
$ cd my-repo-name && npm install 
$ npm run dev 
```

The application will run on `localhost:8080`.

![Vuelog starting point](https://i.imgur.com/VwIAid6.png)

## Customize our blog

The starting point for a new Vuelog project comes with a lot of boilerplate code. In order to get our own blog up and running we'll have to delete and refactor.

Most of the configuration happens in **userdata/database.js** and the **userdata** folder also holds our markdown posts. 

The two sections to pay attention to are `navigation` and `pages`. We will update these values to reflect our custom blog structure:

```
// The image displayed in site header right beside the brand.
logo: './static/employbl_logo.png',

...


navigation: [
    {
      label: {'en-US': 'Work' },
      type: 'page',
      path: '/page/work'
    },
    {
      label: {'en-US': 'About' },
      type: 'page',
      path: '/page/about'
    },
    {
      label: {'en-US': 'Blog' },
      type: 'category',
      path: '/blog'
    },
    {
      label: {'en-US': 'Archive' },
      type: 'archive',
      path: '/archive'
    },
    {
      label: {'en-US': 'Links' },
      type: 'dropdown',
      path: '', // (OPTIONAL) dropdown can be routable too if you set a valid route path
      children: [
        {
          label: {'en-US': 'LinkedIn' },
          type: 'outgoing', // A plain link can redirect to an in-site route or an out-going URL
          link: 'http://linkedin.com/in/connorleech'
        },
        {
          label: 'GitHub',
          type: 'outgoing',
          link: 'https://github.com/connor11528'
        },
        {
          label: 'Twitter',
          type: 'outgoing',
          link: 'https://stackoverflow.com/users/1032492'
        }
      ]
    }
  ],

  pages: [
    {
      title: {'en-US': 'Work'},
      slug: 'work', // corresponds to markdown file name
      exclude: true,      // (OPTIONAL) `true` to exclude the page from archive view
      titleless: false,   // (OPTIONAL) `true` to hide the title in page view
      commentless: true, // (OPTIONAL) `true` to disable comments for the page
      draft: false        // (OPTIONAL) `true` to make the page temporarily inaccessible
    },
    {
      title: {'en-US': 'About'},
      slug: 'about',
      exclude: true,
      titleless: false,   // (OPTIONAL) `true` to hide the title in page view
      commentless: true, // (OPTIONAL) `true` to disable comments for the page
    }
  ],
```

The value for `slug` in the pages array maps to the title of the markdown file we define in **userdata/pages/**. This configuration file serves as a source of truth for defining the structure of our blog application. We can also dynamically define our navigation menu and update the header image. Static assets are stored in the **static/** directory.

## Create an example post 

Now that we have defined the pages and navigation we'd like in out application we can create a new post called **userdata/posts/2017/sample.md**:

```
title: This is a sample title
category: docs
date: 2017-09-22
------------------------------------
Welcome to the **sample** post written in *markdown*!

<!-- zh-CN:+ -->  
This will show if the language is set to Mandarin

<!-- zh-CN:- -->
```

Including the metadata in the post title itself is optional but can be helpful down the line.

We then add that post to our array of posts in **userdata/database.js**:

```
  posts: [
    /* 2017 */
    {
      title: {'en-US': 'This is a sample title'},
      slug: 'sample',
      category: 'docs',
      date: '2017-09-22'
    },
    ...
```

## Deploy to Github Pages 

Create a github repo for your project and set the base path in **userdata/database.js** to the name of your github repo:

```
base: '/name-of-github-repo/',
```

In order to deploy our application we first have to compile all of our vue files and assets. This command is defined in our **package.json** file and can be invoked by running: `npm run build` in the terminal. This generates our production application code into the **docs** folder.

Initialize a git repository for the project and commit all changes:

```
$ git init 
$ git add -A 
$ git commit -m 'initial commit'
$ git remote add orgin YOUR_GITHUB_HTTPS_OR_SSH_URL 
$ git push origin master 
```

Once we have built out our code we're going to reformat for production and push to the `gh-pages` branch.

```
$ git checkout -b gh-pages 
```

If we make changes to our master branch and would like to redploy we can delete the gh-pages branch with the below command and deploy again according to the above process.

```
$ git push -d origin gh-pages
$ git branch -d gh-pages
$ git branch
```


