# Decal Number機能

数値テクスチャを使用して心拍数を表示するDecal Number機能の詳細解説

## 機能概要

**Decal Number**は、`Heart Rate (OSC)`で取得した数値を、専用の数値テクスチャ（NumberTexture.png）を使用してアバターに表示する機能です。
デカール処理で描画しているため、既存のテクスチャの上に数値を重ね合わせて表示します。

## 簡単なセットアップ手順

```shell
┌  シェーダーの設定
│  # マテリアルのShaderを「ChiseNote/DecalHeartRate」に変更
│
◇  機能の有効化
│  # Number Decal チェックボックスを On に設定
│
◇  数値テクスチャの設定
│  # NumberTexture に Texture を設定
│
◇  テクスチャカラーの調整
│  # 必要あれば色を変更（デフォルト: 白）
│
◇  ブレンドモードの選択
│  # Blend Mode を Normal または Multiply に設定
│
◇  表示位置の調整
│  # Transform の PositionX / Y で位置を調整
│
◇  サイズの調整
│  # Transform の ScaleX / Y でサイズを調整
│
◇  回転の調整
│  # Transform の Rotation で回転を調整（-180° ～ 180°）
│
◇  表示桁数の設定
│  # Display の Display Length で表示したい桁数を設定（1-6桁）
│

```


## 基本設定

### メイン設定

| Inspector表示 | 説明 | 設定範囲 | Parameter |
|---------------|------|----------|-----------------|
| Number Decal | 数値表示の有効/無効 | On/Off | `_ActiveDecalNumber` |
| Number Texture | 数値用テクスチャ | Texture | `_SpriteNumberTexture` |
| Blend Mode | ブレンドモードの選択 | Normal / Multiply | `_NumberTextureBlendMode` |

### 拡張機能の呼び出し

| Inspector表示 | 説明 | 設定/挙動 | Parameter |
|---------------|------|----------|----------|
| Set Sample Texture (Button) | NumberTextureをマテリアルに自動で割り当てます。サンプルが見つからない場合はボタンが無効化されます。 | ボタン操作（クリックで割当） |  |
| Spawn Texture Generator (Button) | `Font2Tex` プレハブをHierarchyに生成して、任意のフォントから数値テクスチャを作成する補助ツールを追加します。 | ボタン操作（HierarchyにPrefab追加または既存選択） |  |

---

::: tip 拡張機能の使い方
- 「Set Sample Texture」ボタンで素早くサンプルを割り当てられます。
見つからない場合は手動で `NumberTexture` を指定してください。
- 「Spawn Texture Generator」はフォントから自動で`NumberTexture`を作るための補助ツールです。
すでに存在する場合はそれを選択します。
:::

### 位置・スケール設定

| Inspector表示 | 説明 | 設定範囲 | Parameter |
|---------------|------|----------|-----------------|
| Position X / Position Y  | 表示位置のX/Yをスライダーで調整 | -1.0 ～ 1.0 | `_TexPositionXVector` / `_TexPositionYVector` |
| Sync Scale X/Y & Scale X / Scale Y  | スケールを同期する or 個別に調整 | 0.0 ～ 2.0 | `_SyncDecalNumberTextureScale` / `_TexScaleXVector` / `_TexScaleYVector` |
| Rotation | 回転角度 | -180° ～ 180° | `_NumTexRotation` |

## 表示形式設定

### 数値表示設定

| Inspector表示 | 説明 | 設定値 | Parameter |
|---------------|------|--------|-----------------|
| Display Length | 表示桁数を指定 | 1 ～ 6桁 | `_NumTexDisplaylength` |
| Alignment | 整列方法を選択 | ZERO FILL / SHIFT RIGHT / SHIFT LEFT | `_NumTexAlignment` |
| Character Offset | 文字単位のオフセット（X方向） | -1.0 ～ 1.0 | `_NumTexCharacterOffset` |
| Digit Spacing | 桁ごとの間隔（スケール） | 0.1 ～ 2.0 | `_NumTexDigitSpacing` |

## エミッション設定

| Inspector表示 | 説明 | 設定範囲 | Parameter |
|---------------|------|----------|-----------------|
| Color / Mask (Texture + Color) | エミッション用のマスクと色を設定 | Texture / Color | `_DecalNumberEmissionMask` / `_DecalNumberEmissionColor` |
| Basic Emission Power | Defaultのエミッション強度 | 0 ～ 100 | `_DecalNumberEmissionStrength` |

## 心拍連動エミッション

| Inspector表示 | 説明 | 設定範囲 | Parameter |
|---------------|------|----------|-----------------|
| Heart Rate Emission | 心拍連動エミッションを有効化 | On/Off | `_UseHeartRateEmission` |
| Min Intensity / Max Intensity | 心拍連動時の最小・最大エミッション強度 | 0 ～ 100 | `_HeartRateEmissionMin` / `_HeartRateEmissionMax` |

::: tip エミッション制御の効果
心拍数が高いほどエミッションが強くなる効果です。数値が高いほどエミッションが強くなります。
:::
