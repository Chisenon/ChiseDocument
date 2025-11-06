# ChiseNote - Document

「ChiseNote」のドキュメントサイト

## ドキュメントサイト

# https://chisenon.github.io/ChiseDocument/

## 概要

このリポジトリは、個人的にVRChat向けに開発したツールの技術ドキュメントを提供するWebサイトです。

[VitePress](https://vitepress.dev/)で構築しています。

## 掲載ツール

### lilToon-DecalHeartRate
lilToonベースの心拍数表示に特化したカスタムシェーダー

- 心拍数を数値テクスチャで表示（Number Decal）
- 心拍数をテクスチャで視覚的に表現（Texture Decal）
- OSC通信でリアルタイム心拍数表示に対応

### DHR Installer
lilToon-DecalHeartRate用の自動セットアップツール

- 非破壊でアバターに心拍数表示機能を追加
- Modular Avatar（NDMF）ベースの自動設定
- 複数のOSC心拍数ソフトウェアに対応
- GUIベースの簡単操作

### Font2Texture Generator
フォントから数値表示用テクスチャを生成するUnityエディタツール

- プロジェクト内のフォントから自動生成
- 0-9の数字スプライトテクスチャを作成
- フォントサイズ・色・間隔の調整可能
- lilToon-DecalHeartRateで使用可能

## ローカル開発

### 必要な環境
- Node.js 18以上

### セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run docs:dev

# ビルド
npm run docs:build

# ビルドのプレビュー
npm run docs:preview
```

### ディレクトリ構成

```
docs/
├── .vitepress/          # VitePress設定
│   └── config.mts       # サイト設定ファイル
├── ja_JP/               # 日本語ドキュメント
│   ├── lildhr/          # lilToon-DecalHeartRate
│   ├── dhri/            # DHR Installer
│   ├── f2t/             # Font2Texture Generator
│   └── install.md       # 導入方法
├── files/               # 画像などのアセット
└── index.md             # トップページ
```

## リンク

- VPMリポジトリ： https://chisenon.github.io/chisenote_vpm/
- GitHub Organization： https://github.com/Chisenon

