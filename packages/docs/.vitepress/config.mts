import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "network-protocol",
  base: '/network-protocol/',
  themeConfig: {
    search: {
      provider: 'local'
    },
    outline: {
      level: [3, 4]
    },
    sidebar: [
      {
        text: 'Guide',
        link: '/guide',
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
