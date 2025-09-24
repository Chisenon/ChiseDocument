import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ChiseNote",
  description: "Test",
  themeConfig: {

    sidebar: [
      {
        text: '導入方法',
        link: '/ja_JP/install'
      },

      {
        text: 'lilToon-DecalHeartRate',
        collapsed: false,
        items: [
          { text: 'DHR_Overview', link: '/ja_JP/lildhr/dhr_index' },
          { text: 'Decal Number', link: '/ja_JP/lildhr/dhr_number' },
          { text: 'Decal Texture', link: '/ja_JP/lildhr/dhr_texture' }
        ]
      },
      
      {
        text: 'Examples',
        collapsed: false,
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Vue Examples', link: '/vue-examples' }
        ]
      },
      
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/guide/introduction' },
          { text: 'Getting Started', link: '/guide/getting-started' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Chisenon' }
    ]
  }
})
