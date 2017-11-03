/* DO NOT CHANGE THE GLOBAL VARIABLE NAME */

window.VUELOG_DATABASE = {
  config: {
    // The name of your site, will be displayed in browser tab and site header.
    brand: { 'en-US': 'My Coding Blog' },
    description: `This is where I post about what I've learned in my career as a web developer. I also post tutorials and other random, but hopefully useful things, which can benefit beginners and experts alike.`,

    // The image displayed in site header right beside the brand.
    logo: './static/mad_monster.svg',

    // Path to the domain root that serves your site, starts and ends with slash (`/`).
    // Set to `'/'` if your site is under domain root.
    // Change this for github pages web hosting
    base: '/',

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
    disqusShortname: 'ryanscodingblog',

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
      label: { 'en-US': 'About Me' },
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
          link: 'http://linkedin.com/in/ryan-jordan-86712a5'
        },
        {
          label: 'GitHub',
          type: 'outgoing',
          link: 'https://github.com/krjordan'
        },
        {
          label: 'Twitter',
          type: 'outgoing',
          link: 'https://twitter.com/ryanjordandev'
        },
        {
          label: 'Portfolio',
          type: 'outgoing',
          link: 'https://ryanjordan.me'
        }
      ]
    }
  ],

  pages: [
    {
      title: { 'en-US': 'About' },
      slug: 'about',
      exclude: false,
      titleless: false, // (OPTIONAL) `true` to hide the title in page view
      commentless: true // (OPTIONAL) `true` to disable comments for the page
    }
  ],

  categories: [
    {
      title: { 'en-US': 'Email' },
      slug: 'email'
    },
    {
      title: { 'en-US': 'Angular' },
      slug: 'angular'
    },
    {
      title: { 'en-US': 'Ghost' },
      slug: 'ghost'
    },
    {
      title: { 'en-US': 'Miscellaneous' },
      slug: 'misc'
    },
    {
      title: { 'en-US': 'Styling' },
      slug: 'styling'
    }
  ],

  posts: [
    /* 2017 */
    {
      title: { 'en-US': 'Pre-Render Your Angular App' },
      slug: 'pre-render-your-angular-app',
      category: 'angular',
      date: '2017-10-17'
    },
    {
      title: { 'en-US': 'Building an Angular & Material App Part I' },
      slug: 'building-an-angular-and-material-app-part-I',
      category: 'angular',
      date: '2017-03-08'
    },
    {
      title: { 'en-US': 'Moving to Hugo' },
      slug: 'moving-to-hugo',
      category: 'misc',
      date: '2017-02-09'
    },
    /* 2016 */
    {
      title: { 'en-US': 'Getting Started in Web Development' },
      slug: 'getting-started-in-web-development',
      category: 'misc',
      date: '2016-08-04'
    },
    {
      title: { 'en-US': 'Email Newsletter Adventure' },
      slug: 'email-newsletter-adventure',
      category: 'email',
      date: '2016-06-01'
    },
    /* 2015 */
    {
      title: { 'en-US': 'Ghost & Docker' },
      slug: 'ghost-docker',
      category: 'ghost',
      date: '2015-12-31'
    },
    {
      title: { 'en-US': 'Node Email Templates' },
      slug: 'node-email-templates',
      category: 'email',
      date: '2015-12-29'
    },
    {
      title: { 'en-US': 'Random Quote Part II' },
      slug: 'random-quote-part-II',
      category: 'misc',
      date: '2015-11-30'
    },
    {
      title: { 'en-US': 'Random Quote Part I' },
      slug: 'random-quote-part-I',
      category: 'misc',
      date: '2015-10-20'
    },
    {
      title: { 'en-US': 'Navigation Header with Flexbox' },
      slug: 'navigation-header-with-flexbox',
      category: 'styling',
      date: '2015-10-02'
    },
    {
      title: { 'en-US': 'Discovering Flexbox' },
      slug: 'discovering-flexbox',
      category: 'styling',
      date: '2015-09-15'
    },
    {
      title: { 'en-US': 'My First Post with Ghost' },
      slug: 'my-first-post-with-ghost',
      category: 'ghost',
      date: '2015-09-05'
    },
    {
      title: { 'en-US': 'Up & Running with Ghost and Digital Ocean' },
      slug: 'up-and-running-with-ghost-and-digital-ocean',
      category: 'ghost',
      date: '2015-09-05'
    }
  ]
};
