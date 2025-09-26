# Inspector 設定

Font2Texture Generator の Inspector 設定項目の詳細解説

## 機能概要

**Inspector 設定** では、Font2Texture Generator のコンポーネントで利用できる各種パラメータを調整できます。

フォントの選択からテクスチャの出力まで、すべての設定を Inspector から行えます。

## 基本設定

### Font Settings (フォント設定)

| Inspector 表示 | 説明 | 設定範囲 | Parameter |
|---------------|------|----------|-----------|
| Target Font | 使用するフォントアセット（Inspector 表示名） | Font | `fontAsset` |
| Font Path | フォントファイルのパス（Font Asset 未設定時に使用） | Assets/... | `fontPath` |
| Font Size | 生成する数字のフォントサイズ | 8-512 | `fontSize` |
| Text Color | 数字の色 | Color | `textColor` |
| Background Color | 背景の色（透明推奨） | Color | `backgroundColor` |

### Spacing Settings (間隔設定)

| Inspector 表示 | 説明 | 設定範囲 | Parameter |
|---------------|------|----------|-----------|
| Character Spacing (px) | 各数字間のスペース（ピクセル） | 0-100 | `characterSpacing` |

### Texture Settings (テクスチャ設定)

| Inspector 表示 | 説明 | 設定範囲 | Parameter |
|---------------|------|----------|-----------|
| Width | ベースとなるテクスチャ幅（Inspector 表示名） | 128-4096 | `baseTextureWidth` |
| Height | テクスチャの高さ（Inspector 表示名） | 32-2048 | `textureHeight` |

## 出力設定

### Output Settings (出力設定)

| Inspector 表示 | 説明 | 設定範囲 | Parameter |
|---------------|------|----------|-----------|
| Output Folder | 出力先フォルダ（DefaultAsset） | Folder 選択 | `outputFolder` |
| Full Output Path | 出力先パス（Inspector で表示されるフルパス） | 表示のみ | `outputFolderPath` + `outputFileName` |
| File Name | 出力ファイル名（拡張子なし、Inspector 表示名） | 文字列 | `outputFileName` |

### Preview (プレビュー)

| Inspector 表示 | 説明 | 設定範囲 | Parameter |
|---------------|------|----------|-----------|
| Generated Texture | 生成されたテクスチャのプレビュー | 表示のみ | `generatedTexture` |

### 生成ボタン

| Inspector 表示 | 説明 | 動作 | 実行条件 |
|---------------|------|------|----------|
| [Generate Number Texture] | Number Texture を生成・保存（Inspector のボタン） | ボタンクリックで実行 | Unity Editor 環境のみ |

::: tip パラメータの推奨設定
- **Font Size**: 128 (標準的なサイズ、拡大縮小に対応)
- **Character Spacing**: 0 (font によって変わるため調整推奨)
- **Base Texture Width**: 1280 (10文字 × 128px)
:::
