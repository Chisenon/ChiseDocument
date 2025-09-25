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
          { text: 'Readme', link: '/ja_JP/lildhr/dhr_index' },
          { text: 'Decal Number', link: '/ja_JP/lildhr/dhr_number' },
          { text: 'Decal Texture', link: '/ja_JP/lildhr/dhr_texture' }
        ]
      },
      {
        text: 'DHR_Installer',
        collapsed: false,
        items:[
          { text: '概要', link: '/ja_JP/dhri/dhri_index' },
          { text: '使い方', link: '/ja_JP/dhri/dhri_usage' }
        ]
      },
      {
        text: 'Font2Texture Generator',
        collapsed: false,
        items: [
          { text: 'Readme', link: '/ja_JP/f2t/f2t_index' },
          { text: 'セットアップ', link: '/ja_JP/f2t/f2t_setup' },
          { text: 'Inspector設定', link: '/ja_JP/f2t/f2t_inspector' }
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
