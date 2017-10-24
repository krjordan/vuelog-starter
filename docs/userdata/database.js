/* DO NOT CHANGE THE GLOBAL VARIABLE NAME */

window.VUELOG_DATABASE = {
  config: {
    // The name of your site, will be displayed in browser tab and site header.
    brand: { 'en-US': 'My first Vuelog' },

    // The image displayed in site header right beside the brand.
    logo: './static/employbl_logo.png',

    // Path to the domain root that serves your site, starts and ends with slash (`/`).
    // Set to `'/'` if your site is under domain root.
    // Change this for github pages web hosting
    base: '/vuelog-starter/',

    // The path to route to when you visit `/`.
    // Set to `/home`, `/blog` or a valid path at your need.
    homePath: '/home',

    // Whether footer is visible on `homePath` or not.
    homeFooter: false,

    // Vuelog interface language. Currently only support 'zh-CN' and 'en-US'.
    defaultLang: 'en-US',

    // Allow/disallow visitors to switch interface language.
    switchLang: false,

    // Available languages for switching. Must be a subset of supported languages, or leave empty.
    selectedLangs: [],

    // Number of posts listed in a blog/category view.
    postsCount: 10,

    // Fill in the shortname to integrate Disqus with your blog.
    disqusShortname: 'connor11528',

    // Fill in the account to integrate IntenseDebate with your blog.
    intenseDebateAccount: '',

    // Fill in the uid to integrate LiveRe with your blog.
    livereUid: '',

    // Options for marked, see https://github.com/chjj/marked#options-1 for detail
    markedOptions: {
      // heading(text, level) {
      //   return text;
      // }
    }
  },

  navigation: [
    {
      label: { 'en-US': 'Work' },
      type: 'page',
      path: '/page/work'
    },
    {
      label: { 'en-US': 'About' },
      type: 'page',
      path: '/page/about'
    },
    {
      label: { 'en-US': 'Blog' },
      type: 'category',
      path: '/blog'
    },
    {
      label: { 'en-US': 'Archive' },
      type: 'archive',
      path: '/archive'
    },
    {
      label: { 'en-US': 'Links' },
      type: 'dropdown',
      path: '', // (OPTIONAL) dropdown can be routable too if you set a valid route path
      children: [
        {
          label: { 'en-US': 'LinkedIn' },
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
      title: { 'en-US': 'Work' },
      slug: 'work', // corresponds to markdown file name
      exclude: true, // (OPTIONAL) `true` to exclude the page from archive view
      titleless: false, // (OPTIONAL) `true` to hide the title in page view
      commentless: true, // (OPTIONAL) `true` to disable comments for the page
      draft: false // (OPTIONAL) `true` to make the page temporarily inaccessible
    },
    {
      title: { 'en-US': 'About' },
      slug: 'about',
      exclude: true,
      titleless: false, // (OPTIONAL) `true` to hide the title in page view
      commentless: true // (OPTIONAL) `true` to disable comments for the page
    }
  ],

  categories: [
    {
      title: { 'en-US': 'Documentation' },
      slug: 'docs'
    },
    {
      title: { 'en-US': 'Showcase' },
      slug: 'showcase'
    }
  ],

  posts: [
    /* 2017 */
    {
      title: { 'en-US': 'This is a sample title' },
      slug: 'sample',
      category: 'docs',
      date: '2017-09-22'
    },
    {
      title: { 'en-US': 'Multiple languages support' },
      slug: 'multiple-languages-support',
      category: 'docs',
      date: '2017-01-24'
    },
    {
      title: { 'en-US': 'Use social commenting services' },
      slug: 'use-social-commenting-services',
      category: 'docs',
      date: '2017-01-19'
    },
    {
      title: { 'en-US': 'Insert code blocks with syntax highlight' },
      slug: 'insert-code-blocks-with-syntax-highlight',
      category: 'docs',
      date: '2017-01-18'
    },
    {
      title: { 'en-US': 'Author posts or pages' },
      slug: 'author-posts-or-pages',
      category: 'docs',
      date: '2017-01-13'
    },

    {
      title: { 'en-US': 'Add posts or pages' },
      slug: 'add-posts-or-pages',
      category: 'docs',
      date: '2017-01-12'
    },
    {
      title: { 'en-US': 'Customize navigation menu' },
      slug: 'customize-navigation-menu',
      category: 'docs',
      date: '2017-01-11'
    },
    {
      title: { 'en-US': 'Customize the site' },
      slug: 'customize-the-site',
      category: 'docs',
      date: '2017-01-10'
    },
    /* 2016 */
    {
      title: { 'en-US': 'File Structure of Vuelog' },
      slug: 'file-structure-of-vuelog',
      category: 'docs',
      date: '2016-10-20'
    },
    {
      title: { 'en-US': 'Style Examples' },
      slug: 'style-examples',
      category: 'docs',
      date: '2016-10-19'
    }
  ]
};
