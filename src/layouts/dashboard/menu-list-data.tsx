import { ICONS } from './config-navigation'

export const MenuListData = [
  {
    subheader: '集群资源',
    items: [
      { title: 'Dashboard', path: '/', icon: ICONS.dashboard },
      { title: 'Product', path: '/products', icon: ICONS.product },
      {
        title: 'Blog',
        path: '/blog',
        icon: ICONS.blog,
      },
      {
        title: 'login',
        path: '/login',
        icon: ICONS.lock,
      },
      {
        title: 'Not found',
        path: '/404',
        icon: ICONS.disabled,
      },
      {
        title: 'user',
        path: '/user',
        icon: ICONS.user,
      },
    ],
  },

  // MANAGEMENT
  // ----------------------------------------------------------------------
  {
    subheader: '应用管理',
    items: [
      {
        title: 'Application',
        path: '/app',
        icon: ICONS.user,
        children: [
          { title: 'Login', path: '/app/one' },
          { title: 'Not Found', path: '/app/two' },
        ],
      },
    ],
  },
]
