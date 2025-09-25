# Font2Texture Generator

UnityでProject内のフォントファイルから、専用のSpriteTextureを生成するツール

## 概要

**Font2Texture Generator**は、Unityのプロジェクトでフォントファイルから数値表示用のスプライトテクスチャを自動生成するツールです。

[`lilToon-DecalHeartRate`](../lildhr/dhr_index)などの数値表示シェーダーで使用する「NumberTexture」を、任意のフォントから簡単に作成するためのツールです

## セットアップ
### [詳しいセットアップ方法はこちら](../f2t/f2t_setup)

## 主な機能

### Font2Texture Generator
- UnityProject内の任意のフォントファイルから数値テクスチャを自動生成
- 0-9の数字を横一列に配置したスプライトテクスチャ形式
- フォントサイズ、文字色、背景色、文字間隔の調整が可能
- 出力先フォルダとファイル名の指定

## 注意事項

- Unity Editor環境でのみ動作します
- 生成されるテクスチャは0-9の数字のみです
- フォントファイルはProject内に配置されている必要があります

::: warning 重要
Font2Texture GeneratorはEditor専用ツールなので、**ビルドには含まれません**。

Hierarchy に含めた状態でビルドしても問題ありません！
:::