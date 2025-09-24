# Decal Texture機能

テクスチャを使用して心拍数を表示するDecal Texture機能の詳細解説

## 機能概要

**Decal Texture**は、`_FloatHeartRateC`から取得した心拍数値に応じて、指定されたテクスチャを表示・制御する機能です。ハートマークや抽象的なデザインなど、数値以外の視覚的な方法で心拍数を表現できます。デカール処理で描画しているため、既存のテクスチャの上にテクスチャを重ね合わせて表示します。

## 簡単なセットアップ手順

```shell
┌  シェーダーの設定
│  # マテリアルのShaderを「ChiseNote/DecalHeartRate」に変更
│
◇  機能の有効化
│  # Texture Decal チェックボックスを On に設定
│
◇  デカールテクスチャの設定
│  # Decal Texture に任意のテクスチャを設定
│
◇  テクスチャカラーの調整
│  # 必要あれば色を変更（デフォルト: 白）
│
◇  ブレンドモードの選択
│  # Blend Mode を Normal または Multiply に設定
│
◇  表示位置の調整
│  # Transform の Position X / Y で位置を調整
│
◇  サイズの調整
│  # Transform の Scale X / Y でサイズを調整
│
◇  回転の調整
│  # Transform の Rotation Angle で回転を調整（0° ～ 360°）
│
◇  心拍連動効果の設定
│  # Emission や Heart Rate Scale で動的効果を設定
│
```

## 基本設定

### メイン設定

| Inspector表示 | 説明 | 設定範囲 | Parameter |
|---------------|------|----------|----------|
| Texture Decal | テクスチャ表示の有効/無効 | On/Off | `_ActiveDecalTexture` |
| Decal Texture | デカール用のカスタムテクスチャ | Texture | `_DecalTexture` |
| Color | テクスチャの色調整 | HDRカラー | `_DecalTextureColor` |
| Blend Mode | ブレンドモードの選択 | Normal(0) / Multiply(3) | `_DecalTextureBlendMode` |

### 位置・スケール設定 (Inspector表示と対応パラメータ)

| Inspector表示 | 説明 | 設定範囲 | Parameter |
|---------------|------|----------|----------|
| Position X / Position Y | 表示位置のX/Yをスライダーで調整 | -1.0 ～ 1.0 | `_DecalPositionXVector` / `_DecalPositionYVector` |
| Sync Scale X/Y & Scale X / Scale Y | スケールを同期するか個別に調整 | 0.0 ～ 2.0 | `_SyncDecalTextureScale` / `_DecalScaleXVector` / `_DecalScaleYVector` |
| Rotation Angle | 回転角度 | -180° ～ 180° | `_DecalRotation` |

## エミッション設定

| Inspector表示 | 説明 | 設定範囲 | Parameter |
|---------------|------|----------|----------|
| Color / Mask (Texture + Color) | エミッション用のマスクと色を設定 | Texture / Color | `_DecalTextureEmissionMask` / `_DecalTextureEmissionColor` |
| Basic Emission Power | ベーシックなエミッション強度 | 0 ～ 100 | `_DecalTextureEmissionStrength` |


## 心拍連動エミッション
| Inspector表示 | 説明 | 設定範囲 | Parameter |
|---------------|------|----------|----------|
| Heart Rate Emission | 心拍連動エミッションを有効化 | On/Off | `_UseHeartRateEmissionTexture` |
| Min Intensity / Max Intensity | 心拍連動時の最小・最大エミッション強度 | 0 ～ 100 | `_HeartRateEmissionMinTexture` / `_HeartRateEmissionMaxTexture` |

::: tip エミッション制御の効果
心拍数が高いほどエミッションが強くなる効果です。数値が高いほどエミッションが強くなります。
:::

## 心拍連動スケール制御
| Inspector表示 | 説明 | 設定範囲 | Parameter |
|---------------|------|----------|----------|
| Enable Heart Rate Scale (チェック) | 心拍連動スケール機能を有効化 | On/Off | `_UseHeartRateScaleTexture` |
| Heart Rate Scale (スライダー) | スケール変動の強度（Inspector表示は1.0-2.0、内部は0.0-1.0） | 1.0 ～ 2.0 | `_HeartRateScaleIntensity` |

::: tip スケール制御の効果
心拍数が高いほどテクスチャが大きく表示される効果です。ハートマークなどで使用すると、心臓の鼓動を表現できます。
:::

::: tip 心拍連動機能の活用
- **エミッション制御**: 心拍数が高いほどテクスチャが明るく光ります
- **スケール制御**: 心拍数に応じてテクスチャが脈動するように大小に変化します
- **組み合わせ効果**: 両方を有効にすると、より動的で印象的な表現が可能です
:::
