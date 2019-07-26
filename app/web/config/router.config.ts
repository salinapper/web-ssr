export default [
  {
    path: '/share',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/share/blog/:id',
        component: './Blog/Share',
      }
    ]
  },
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['pages/Authorized'],
    routes: [
      { path: '/', redirect: '/dashboard' },
      { path: '/dashboard', redirect: '/blog/detail' },
      {
        path: '/blog',
        name: 'blog',
        hideInMenu: true,
        routes: [
          {
            name: 'list',
            path: 'list',
            component: './Blog/List',
          },
          {
            path: 'detail',
            component: './Blog',
          },
          {
            path: 'detail/:id',
            component: './Blog',
          }
        ]
      },
    ]
  }
]