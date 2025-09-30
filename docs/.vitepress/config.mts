import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/ChiseDocument/",
  title: "ChiseNote",
  description: "Chise's Document",
  themeConfig: {
    search: {
      provider: "local",
      options: {
        miniSearch: {
          options: {
            tokenize: (term) => {
              if (typeof term === "string") term = term.toLowerCase();
              const segmenter =
                Intl.Segmenter &&
                new Intl.Segmenter("ja-JP", { granularity: "word" });
              if (!segmenter) return [term];
              const tokens = [];
              for (const seg of segmenter.segment(term)) {
                // @ts-ignore
                // ignore spaces
                if (seg.segment.trim() !== "") tokens.push(seg.segment);
              }
              return tokens;
            },
          },
        },
      },
    },
    sidebar: [
      {
        text: "導入方法",
        link: "/ja_JP/install",
      },

      {
        text: "lilToon-DecalHeartRate",
        collapsed: false,
        items: [
          { text: "README", link: "/ja_JP/lildhr/dhr_index" },
          { text: "Number Decal", link: "/ja_JP/lildhr/dhr_number" },
          { text: "Texture Decal", link: "/ja_JP/lildhr/dhr_texture" },
        ],
      },
      {
        text: "DHR Installer",
        collapsed: false,
        items: [
          { text: "README", link: "/ja_JP/dhri/dhri_index" },
          { text: "使い方", link: "/ja_JP/dhri/dhri_usage" },
        ],
      },
      {
        text: "Font2Texture Generator",
        collapsed: false,
        items: [
          { text: "README", link: "/ja_JP/f2t/f2t_index" },
          { text: "セットアップ", link: "/ja_JP/f2t/f2t_setup" },
          { text: "Inspector設定", link: "/ja_JP/f2t/f2t_inspector" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/Chisenon" }],
  },
});
