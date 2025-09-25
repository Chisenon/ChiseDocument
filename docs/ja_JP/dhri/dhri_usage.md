# DHR_Installer 使い方

DHR_Installerを使用したlilToon-DecalHeartRateの自動セットアップガイド

## 使用手順

<div class="timeline">

<div class="timeline_part">
<div class="timeline_label">STEP 1</div>
<div class="timeline_title">前提条件の確認</div>
<div class="timeline_text">

DHR_Installerを使用する前に、以下のパッケージがインストールされていることを確認してください

**必須パッケージ**
- lilToon v2.0.0以降
- lilToon-DecalHeartRate
- Modular Avatar v1.8.0以降

**心拍数をOSCで送信できる環境**
- [BluetoothHeartRateOSC](https://github.com/AkaiMage/BluetoothHeartRateOSC)
- [HRtoVRChat_OSC](https://github.com/200Tigersbloxed/HRtoVRChat_OSC)
- [VrcOscMibandHrm](https://github.com/vard88508/vrc-osc-miband-hrm)

</div>
</div>

<div class="timeline_part">
<div class="timeline_label">STEP 2</div>
<div class="timeline_title">DHR_Installerコンポーネントの追加</div>
<div class="timeline_text">

アバターのルートにset upされたPrefabを配置

1. Project または Packages の中から以下のPrefabを探します

```sh
Assets/ChiseNote/DHR_Installer/DHR_Installer.prefab
```

2. 上記の `DHR_Installer.prefab` を Hierarchy のアバターの中にドラッグ&ドロップします！

::: tip 
prefabのScriptの一番上にアバターが自動的に検出され表示されれば成功です！
:::

</div>
</div>

<div class="timeline_part">
<div class="timeline_label">STEP 3</div>
<div class="timeline_title">OSC設定</div>
<div class="timeline_text">

使用するOSCソフトウェアに応じてパラメーターを設定します

**OSC Software Type**から選択
- **BluetoothHeartRateOSC** (`HeartRateBPM`)
- **HRtoVRChat_OSC** (`HeartRateBPM`)
- **VrcOscMibandHrm** (`MiBandHR`)
- **Other** (カスタム設定)

::: warning パラメーター名の注意
**Other** を選択した場合、**Custom Parameter Name**に送信ソフトウェアで使用しているパラメーター名を正確に入力してください。
:::

::: danger 注意
送信されるOSCParameterはINT型のみ対応しています。
:::

</div>
</div>

<div class="timeline_part">
<div class="timeline_label">STEP 4</div>
<div class="timeline_title">マテリアル選択</div>
<div class="timeline_text">

心拍数を表示したいマテリアルを選択・設定します

1. **Material Selection**セクションで **[Add Material]** ボタンをクリック
2. リストから編集したいMeshを選択
3. 心拍数を表示したいMaterialを選択しリストに追加


::: tip マテリアル設定について
Materialを設定すると、編集しやすいように自動でMaterialが置換されます。

リストからマテリアルを削除したり、TargetAvatarが変更されると元のMaterialに戻されます。
:::

</div>
</div>

<div class="timeline_part">
<div class="timeline_label">STEP 5</div>
<div class="timeline_title">ビルドとテスト</div>
<div class="timeline_text">

設定完了後、アバターをビルドしてテストします

1. Unityの再生ボタンや、**VRChat SDK** > **Build & Publish** でアバタービルド
2. **VRChat**でアバターをテスト
3. **OSCソフトウェア**を起動して心拍数送信を開始
4. アバターに心拍数が表示されることを確認

::: warning ビルド後の動作
**DHR_Installer** はNDMFを使用して作成されているため、ビルド時にAvatarに統合され自動でアバターのAnimatorに設定されます。
:::

</div>
</div>

</div>

## よくある質問

### Q： 心拍数が表示されない

**A：** 以下を確認してください

1. **OSCパラメーター名**が送信ソフトウェアと一致しているか
2. **マテリアル設定**が正しく適用されているか
3. **VRChatのOSC機能**が有効になっているか
4. **OSCソフトウェア**が正常に動作しているか

### Q： ビルド時にエラーが発生する

**A：** 以下を確認してください

1. **必須パッケージ**がすべてインストールされているか
2. **NDMF**が正常に動作しているか
3. **Modular Avatar**のバージョンが対応しているか

## 関連ドキュメント

- [lilToon-DecalHeartRate概要](/ja_JP/lildhr/dhr_index)
- [Decal Number設定](/ja_JP/lildhr/dhr_number)
- [Decal Texture設定](/ja_JP/lildhr/dhr_texture)