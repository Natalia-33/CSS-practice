// Підключаємо технологію express для back-end сервера
const express = require('express')
// Створюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/p-1', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з container
  res.render('p-1', {
    layout: 'p-1',
  })
  //                  ↑↑ сюди вводимо JSON дані
})
module.exports = router
// ================================================================
// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/template-3', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('template-3', {
    page: {
      title: 'Example Page',
    },
    layout: 'template-3',

    header: [
      {
        text: 'Features',
        url: 'https://example.com/home',
      },
      {
        text: 'Enterprise',
        url: 'https://example.com/about',
      },
      {
        text: 'Support',
        url: 'https://example.com/services',
      },
    ],

    hero: {
      title:
        'First featurette heading. It’ll blow your mind.',
      text: 'Some great placeholder content for the first featurette here. Imagine some exciting prose here.',
      photo: 'https://picsum.photos/500/500',
    },

    blog: [
      {
        title: 'Latest post',
        text: 'This is a wider card with supporting text below as a natural lead-in to additional content',
        button: 'View details',
        href: 'https://example.com/',
        img: 'https://picsum.photos/140/140',
      },
      {
        title: 'Featured story',
        text: 'This is a wider card with supporting text below as a natural lead-in to additional content',
        button: 'View details',
        href: 'https://example.com/',
        img: 'https://picsum.photos/140/140',
      },
      {
        title: 'Popular post',
        text: 'This is a wider card with supporting text below as a natural lead-in to additional content',
        button: 'View details',
        href: 'https://example.com/',
        img: 'https://picsum.photos/140/140',
      },
    ],

    form: {
      title: 'Sign up form',
      info: 'Some placeholder content in a paragraph below the heading and date.',
      button: 'Sign up',
      href: 'https://example.com/',
    },

    footer: [
      {
        title: 'Features',
        links: [
          {
            text: 'Cool stuff',
            url: 'https://example.com/cool-stuff',
          },
          {
            text: 'Random feature',
            url: 'https://example.com/random-feature',
          },
          {
            text: 'Team feature',
            url: 'https://example.com/team-feature',
          },
          {
            text: 'Stuff for developers',
            url: 'https://example.com/stuff-for-developers',
          },
        ],
      },
      {
        title: 'Resources',
        links: [
          {
            text: 'Resource name',
            url: 'https://example.com/resource-name',
          },
          {
            text: 'Another resource',
            url: 'https://example.com/another-resource',
          },
          {
            text: 'Final resource',
            url: 'https://example.com/final-resource',
          },
        ],
      },
      {
        title: 'About',
        links: [
          {
            text: 'Team',
            url: 'https://example.com/team',
          },
          {
            text: 'Locations',
            url: 'https://example.com/locations',
          },
          {
            text: 'Privacy',
            url: 'https://example.com/privacy',
          },
          {
            text: 'Terms',
            url: 'https://example.com/terms',
          },
        ],
      },
    ],
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/template-4', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('template-4', {
    page: {
      title: 'Example Page',
    },
    layout: 'template-4',

    header: [
      {
        text: 'Features',
        url: 'https://example.com/home',
      },
      {
        text: 'Enterprise',
        url: 'https://example.com/about',
      },
      {
        text: 'Support',
        url: 'https://example.com/services',
      },
    ],

    main: {
      heading: 'Oh yeah, it’s that good. See for yourself.',
      descriotion:
        'Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.',
      image: 'https://picsum.photos/500/500',
      button: 'View details',
      href: 'https://example.com/',
    },

    featured: [
      {
        heading: 'Featured title',
        info: "Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.",
        linkText: 'Call to action',
        linkUrl: 'https://example.com/',
        photo: 'https://picsum.photos/64/64',
      },
      {
        heading: 'Featured title',
        info: 'This is a wider card with supporting text below as a natural lead-in to additional content',
        linkText: 'Call to action',
        linkUrl: 'https://example.com/',
        photo: 'https://picsum.photos/64/64',
      },
      {
        heading: 'Featured title',
        info: 'This is a wider card with supporting text below as a natural lead-in to additional content',
        linkText: 'Call to action',
        linkUrl: 'https://example.com/',
        photo: 'https://picsum.photos/64/64',
      },
    ],

    actions: [
      {
        heading: 'Checkout form',
        text: 'Checkout',
        url: 'https://example.com/',
      },
      {
        heading: 'Login form',
        text: 'Login',
        url: 'https://example.com/',
      },
      {
        heading: 'Sign up form',
        text: 'Sign up',
        url: 'https://example.com/',
      },
    ],

    footer: [
      {
        title: 'Features',
        links: [
          {
            text: 'Cool stuff',
            url: 'https://example.com/cool-stuff',
          },
          {
            text: 'Random feature',
            url: 'https://example.com/random-feature',
          },
          {
            text: 'Team feature',
            url: 'https://example.com/team-feature',
          },
          {
            text: 'Stuff for developers',
            url: 'https://example.com/stuff-for-developers',
          },
        ],
      },
      {
        title: 'Resources',
        links: [
          {
            text: 'Resource name',
            url: 'https://example.com/resource-name',
          },
          {
            text: 'Another resource',
            url: 'https://example.com/another-resource',
          },
          {
            text: 'Final resource',
            url: 'https://example.com/final-resource',
          },
        ],
      },
      {
        title: 'About',
        links: [
          {
            text: 'Team',
            url: 'https://example.com/team',
          },
          {
            text: 'Locations',
            url: 'https://example.com/locations',
          },
          {
            text: 'Privacy',
            url: 'https://example.com/privacy',
          },
          {
            text: 'Terms',
            url: 'https://example.com/terms',
          },
        ],
      },
    ],
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/template-5', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('template-5', {
    layout: 'template-5',
    page: {
      title: 'Example Page',
    },

    header: [
      {
        text: 'Features',
        url: 'https://example.com/home',
      },
      {
        text: 'Enterprise',
        url: 'https://example.com/about',
      },
      {
        text: 'Support',
        url: 'https://example.com/services',
      },
    ],

    form: {
      title: 'Please sign in',

      inputs: [
        {
          id: 1,
          name: 'emailAddress',
          placeholder: 'Email address',
          type: 'email',
        },
        {
          id: 2,
          name: 'userPassword',
          placeholder: 'Password',
          type: 'password',
        },
      ],

      checkbox: {
        label: 'Remember me',
        name: 'remember',
      },

      button: 'Sign in',

      info: 'Stay updated on new releases and features, guides, and case studies.',
    },

    messages: {
      title: 'List groups',
      list: [
        {
          name: 'Tom',
          message:
            'I just got back from a trip to Europe. It was amazing!...',
          day: 'Tue',
        },
        {
          name: 'Emily',
          message:
            "I can't wait for the weekend. I'm planning to go hiking with some friends...",
          day: 'Wed',
        },
      ],
    },

    advantages: [
      {
        title: '24/7 Availability',
        text: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the.',
      },
      {
        title: '10 Years of Expertise',
        text: 'Fill out all required fields using real data on the checkout page.',
      },
      {
        title: 'Loyalty Program',
        text: 'While you were paying, we had already prepared access to our Member Area, where you can read more about the status of your order.',
      },
    ],

    footer: [
      {
        title: 'Features',
        links: [
          {
            text: 'Cool stuff',
            url: 'https://example.com/cool-stuff',
          },
          {
            text: 'Random feature',
            url: 'https://example.com/random-feature',
          },
          {
            text: 'Team feature',
            url: 'https://example.com/team-feature',
          },
          {
            text: 'Stuff for developers',
            url: 'https://example.com/stuff-for-developers',
          },
        ],
      },
      {
        title: 'Resources',
        links: [
          {
            text: 'Resource name',
            url: 'https://example.com/resource-name',
          },
          {
            text: 'Another resource',
            url: 'https://example.com/another-resource',
          },
          {
            text: 'Final resource',
            url: 'https://example.com/final-resource',
          },
        ],
      },
      {
        title: 'About',
        links: [
          {
            text: 'Team',
            url: 'https://example.com/team',
          },
          {
            text: 'Locations',
            url: 'https://example.com/locations',
          },
          {
            text: 'Privacy',
            url: 'https://example.com/privacy',
          },
          {
            text: 'Terms',
            url: 'https://example.com/terms',
          },
        ],
      },
    ],
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================
