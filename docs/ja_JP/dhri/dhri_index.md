# DHR_Installer

lilToon-DecalHeartRate用の自動セットアップツール

## 概要

**DHR_Installer**は、Avatarに非破壊で心拍数表示機能を追加するためのNDMF(Modular Avatar)製コンポーネントです。

lilToon-DecalHeartRateシェーダーを使用したマテリアルの自動セットアップと、AvatarのOSC関連のAnimationを簡単に導入できます！

複雑な手動設定を排除し、GUIベースの簡単操作で心拍数表示システムを構築できます！

## 主な機能

| 機能 | 説明 |
|------|------|
| **マテリアル自動設定** | 選択されたマテリアルにlilToon-DecalHeartRateシェーダーを適用 |
| **OSC パラメーター連携** | 心拍数OSCソフトウェアとの自動パラメーター設定 |
| **アニメーター統合** | Modular Avatarを利用した自動アニメーター設定 |
| **ビルド時処理** | アバタービルド時の自動マテリアル置換とプロパティ設定 |

::: info 前提条件
- Unity 2019.4.31f1以降
- VRChat SDK3 - Avatars
- lilToon v2.0.0以降
- Modular Avatar v1.8.0以降
- lilToon-DecalHeartRate

:::

## 対応OSCソフトウェア

DHR_Installerは以下のOSC心拍数送信ソフトウェアに対応しています：

- **BluetoothHeartRateOSC** (デフォルト)
- **HRtoVRChat_OSC**
- **VrcOscMibandHrm**
- **Other** (カスタム設定)

## セットアップ方法

詳細なセットアップ手順は [使い方](/ja_JP/dhri/dhri_usage) ページをご覧ください。
