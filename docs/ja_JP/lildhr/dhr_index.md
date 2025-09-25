# lilToon-DecalHeartRate

lilToonベースの心拍数表示に特化したDecalShader

## 概要

**lilToon-DecalHeartRate**は、心拍数として送られた任意の数値を表示する機能を持ったlilToonベースのカスタムシェーダーです。OSC通信などを利用してShaderを適応したMaterialを制御することで、リアルタイムに心拍数を表示することも可能です。

| 機能 | 説明 |
|------|------|
| **心拍数表示** | 数値テクスチャ（`NumberTexture.png`）を使用して心拍数を表示 |
| **デカール機能** | 既存のMaterial設定に重ねてテクスチャを重ねて表示 |
| **エミッション制御** | 指定された心拍数(`Heart Rate (OSC)`)に応じてエミッションの強度を動的に変更 |
| **スケール制御** | 指定された心拍数(`Heart Rate (OSC)`)に応じてテクスチャのスケールを動的に変更 |

## 主な機能

### [Decal Number](/ja_JP/lildhr/dhr_number) - 心拍数を数字で表現
- `Heart Rate (OSC)`で受け取った心拍数値をNumberTextureで表示
- 数値の配置設定（`Position X` , `Position Y`）
- スケール・回転調整（`Sync Scale X/Y` , `Scale X` , `Scale Y`,`Rotation`）
- 表示形式設定（`Display Length	` , `Alignment` , `Character Offset` , `Digit Spacing`）

### [Decal Texture](/ja_JP/lildhr/dhr_texture) - 心拍数をテクスチャで表現
- テクスチャ（`DecalTexture`）による心拍数の視覚表現
- 位置・回転・スケール調整（`Position` , `Rotation` , `Scale`）
- 心拍数連動エミッション制御（`HeartRateEmission`）
- 心拍数連動スケール制御（`HeartRateScale`）

## セットアップ手順

<div class="timeline">

<div class="timeline_part">
<div class="timeline_label">STEP 1</div>
<div class="timeline_title">lilToon-DecalHeartRateのインストール</div>
<div class="timeline_text">

VPMからlilToon-DecalHeartRateをインストールします

1. [VPMリポジトリ](vcc://vpm/addRepo?url=https://chisenon.github.io/chisenote_vpm/index.json)をクリックしてリポジトリを追加
2. VCC/ALCOMでプロジェクトを開く
3. パッケージ一覧から`lilToon-DecalHeartRate`を選択してインストール

::: info 前提条件
lilToon v2.0.0以降が事前にインストールされている必要があります。
:::

</div>
</div>

<div class="timeline_part timeline_part_sub">
<div class="timeline_label">STEP 2</div>
<div class="timeline_title">シェーダーの変更</div>
<div class="timeline_text">

マテリアルのシェーダーを変更します

1. Unity Inspectorでマテリアルを選択
2. Shader欄を`ChiseNote/DecalHeartRate/lilToon`に変更
3. カスタムインスペクターが表示されることを確認

</div>
</div>

<div class="timeline_part timeline_part_sub">
<div class="timeline_label">STEP 3</div>
<div class="timeline_title">Decal機能の有効化</div>
<div class="timeline_text">

必要な機能を有効にします

- **心拍数を数字で表示**： [`DecalNumber`](./dhr_number)のチェックボックスをON
- **心拍数をテクスチャで表示**： [`DecalTexture`](./dhr_texture)のチェックボックスをON

用途に応じてどちらか、または両方を有効にできます。

</div>
</div>

<div class="timeline_part timeline_part_sub">
<div class="timeline_label">STEP 4</div>
<div class="timeline_title">表示設定の調整</div>
<div class="timeline_text">

各種設定をスライダーや数値入力で調整します

- **Position**： 表示位置の調整（X, Y座標）
- **Scale**： サイズの調整
- **Rotation**： 回転角度の設定
- **Display Length**： 表示桁数の設定（数字表示の場合）

::: tip OSC設定
VRChatでの動的制御には、OSCで心拍数を送信し`Heart Rate (OSC)`パラメータを操作します。
:::

</div>
</div>

</div>

## 注意事項

- lilToon v2.0.0以降が必要です

::: warning バージョンの注意
liltoonのバージョンによっては正常に動作しない場合があります。

必ず最新バージョンをご利用ください。
:::