# 導入方法

## 📦 VPMでのインストール（推奨）

<div class="timeline">

<div class="timeline_part">
<div class="timeline_label">STEP 1</div>
<div class="timeline_title">VCC / ALCOMのインストール</div>
<div class="timeline_text">

VRChat Creator Companion（VCC）またはALCOMをインストールします

- [VRChat Creator Companion](https://vrchat.com/home/download)
- [ALCOM](https://vrc-get.anatawa12.com/ja/alcom/)

::: tip どちらを選ぶべき？
- **VRChat Creator Companion**：VRChat公式ツール
- **ALCOM**：とにかく軽量で使いやすい！(オススメ)
:::

</div>
</div>

<div class="timeline_part timeline_part_sub">
<div class="timeline_label">STEP 2</div>
<div class="timeline_title">VPMリポジトリの追加</div>
<div class="timeline_text">

下のボタンをクリックしてリポジトリを追加します

<a href="vcc://vpm/addRepo?url=https://chisenon.github.io/chisenote_vpm/index.json" style="display: inline-block; background: #42b883; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; margin: 8px 0;">🔗 VPMリポジトリを追加</a>

ボタンをクリックすると、VCC/ALCOM が開き、リポジトリが追加されます。

</div>
</div>

<div class="timeline_part timeline_part_sub">
<div class="timeline_label">STEP 3</div>
<div class="timeline_title">プロジェクトでのインストール</div>
<div class="timeline_text">

1. VCC/ALCOM でプロジェクトを開く
2. `Manage Project` をクリック
3. パッケージ一覧から必要な機能を選択
4. `Add` ボタンでインストール実行

</div>
</div>

</div>

## 📁 Unity Package でのインストール

<div class="timeline">

<div class="timeline_part">
<div class="timeline_label">STEP 1</div>
<div class="timeline_title">ファイルのダウンロード</div>
<div class="timeline_text">

BOOTHからツールをダウンロードします

1. [ショップページ](https://chisenote.booth.pm/)にアクセス
2. `.zip` ファイルをダウンロード
3. ダウンロードした ZIP ファイルを展開してください

</div>
</div>

<div class="timeline_part timeline_part_sub">
<div class="timeline_label">STEP 2</div>
<div class="timeline_title">Unity へのインポート</div>
<div class="timeline_text">

1. 展開したフォルダ内の `.unitypackage` ファイルを確認
2. Unity プロジェクトの Project ウィンドウにドラッグ&ドロップ
3. Import Unity Package ダイアログで `Import` をクリック

::: warning 依存関係について
Unity Package 形式では依存関係が自動でインストールされません。

必要なライブラリが不足している場合は手動で追加してください。
:::

</div>
</div>

</div>
