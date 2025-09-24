# lilToon-DecalHeartRate

lilToonベースの心拍数表示に特化したDecalShader

## 概要

**lilToon-DecalHeartRate**は、心拍数として送られた任意の数値を表示する機能を持ったlilToonベースのカスタムシェーダーです。OSC通信などを利用してShaderを適応したMaterialを制御することで、リアルタイムに心拍数を表示することも可能です。

| 機能 | 説明 |
|------|------|
| **心拍数表示** | 数値テクスチャ（NumberTexture.png）を使用して心拍数を表示 |
| **デカール機能** | 既存のMaterial設定に重ねてテクスチャを重ねて表示 |
| **エミッション制御** | 指定された心拍数(BPM)に応じてエミッションの強度を動的に変更 |
| **スケール制御** | 指定された心拍数(BPM)に応じてテクスチャのスケールを動的に変更 |

## 主な機能

### [Decal Number](/ja_JP/lildhr/dhr_number) - 心拍数を数字で表現
- `_FloatHeartRateC`から受け取った心拍数値をNumberTextureで表示
- 数値の配置設定（`_TexPositionXVector`, `_TexPositionYVector`）
- スケール・回転調整（`_TexScaleXVector`, `_TexScaleYVector`, `_NumTexRotation`）
- 表示形式設定（桁数、文字間隔、整列方法）

### [Decal Texture](/ja_JP/lildhr/dhr_texture) - 心拍数をテクスチャで表現
- カスタムテクスチャ（`_DecalTexture`）による心拍数の視覚表現
- 心拍数連動エミッション制御（`_UseHeartRateEmission`）
- 心拍数連動スケール制御（`_UseHeartRateScaleTexture`）
- 位置・回転・スケール調整（`_DecalPositionXVector`等）

## セットアップ手順

| ステップ | 作業内容 | 詳細 |
|----------|----------|------|
| **1** | VPMからlilToon-DecalHeartRateをインストール | [VPMリポジトリ](https://chisenon.github.io/chisenote_vpm/)を追加 |
| **2** | マテリアルのシェーダーを「ChiseNote/DecalHeartRate」に変更 | Unity Inspectorでシェーダー選択 |
| **3** | Number/Texture Decalを有効化 | `_ActiveDecalNumber` / `_ActiveDecalTexture` をON |
| **4** | PositionやScaleなど、各種設定を行う | スライダーだけでなく数値の直接入力での微調整にも対応 |

::: tip OSC設定
VRChatでの動的制御にはOSCで心拍数を送り、Materialの`_FloatHeartRateC`パラメータを操作する必要があります。
:::

## 注意事項

- lilToon v2.0.0以降が必要です

::: warning ⚠️
liltoonのバージョンによっては正常に動作しない場合があります。必ず最新バージョンをご利用ください。
:::