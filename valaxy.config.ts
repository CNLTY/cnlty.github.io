import { defineValaxyConfig } from 'valaxy'
import { addonLightGallery } from 'valaxy-addon-lightgallery'
import type { UserThemeConfig } from 'valaxy-theme-yun'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: '惟一的依',
      cloud: {
        enable: true,
      },
    },

    bg_image: {
      enable: true,
      // url: 'https://res.vsinger.com/images/f4f10b9b6f3ed076e68f1a1849481878.png',
      // dark: 'https://res.vsinger.com/images/f4f10b9b6f3ed076e68f1a1849481878.png',
      url: 'https://upload-bbs.miyoushe.com/upload/2024/03/21/162867316/553c623e38e0a6a65885570b8d3c20dd_7134508366031977457.png',
      dark: 'https://upload-bbs.miyoushe.com/upload/2024/03/21/162867316/553c623e38e0a6a65885570b8d3c20dd_7134508366031977457.png',
      opacity: 0.35
    },

    pages: [
      {
        name: '友人帐',
        url: '/links',
        icon: 'i-ri-user-star-line',
        color: 'dodgerblue',
      },
      {
        name: '铜雀台',
        url: '/girls',
        icon: 'i-ri-user-heart-line',
        color: 'hotpink',
      },
      {
        name: '相册',
        url: '/albums',
        icon: 'i-ri-gallery-line',
        color: '#6CF',
      },
    ],

    say: {
      enable: true,
      api: '/json/say.json',
      hitokoto: {
        enable: false,
        api: '',
      },
    },

    footer: {
      since: 2012,
      beian: {
        enable: false,
        icp: '',
      },
      icon: {
        title: '惟依',
        url: '/',
      }
    },
  },

  unocss: { safelist },
  
  addons: [
    addonLightGallery(),
  ],
})
