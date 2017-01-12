---
title: nazr.in ガイドブック
date: 2012-10-19 00:00:00 Z
categories:
- 雑記
---

去年の11月から公開を始め、今月で9ヶ月目となるURL短縮サービス『nazr.in』について分散していた情報をまとめてみました。

## そもそもnazr.inとは
[nazr.in](http://nazr.in>)(読み方: ナズーリン)

「ナズーリン好きのための短縮URLサービス」です。ナズーリン好きでない方もナズーリンが好きになること請け合いです。

## nazr.inのこんな機能

### 1. ジャンプ先の変更/削除

nazr.inにサインインした状態でURLを短縮すると短縮されたURLに対して後から変更を加えることが出来ます！
サインインした状態で<http://nazr.in/urls>にアクセスすると短縮したURL一覧が表示されます。
その画面でジャンプ先を変更したいURLの「修正」リンクからジャンプ先の変更をすることが出来ます。

これを使えば…

- 名刺にnazr.inのURLを印刷しておけば、後からホームページのURLが変わっても名刺を作り直す必要が無くなる
- 期間限定のダウンロードリンクを作れる
- URLを一つ渡せば配布資料が変更になっても簡単な変更で済む

他にも様々な使い道があるかもです…!

### 2. 簡単なクリック解析

nazr.inで短縮されたURLの末尾に"+a"を付け加える(例:<http://nazr.in/c+a>)と、そのURLが何回クリックされたかを見ることが出来ます！

### 3. ページ内にナズーリンを呼び出してツイートボタンを設置する

nazr.inで短縮されたURLの末尾に"+s"を付け加える(例:<http://nazr.in/c+s>)と、ジャンプ先のページにナズーリンが現れます。
さらに、ナズーリンはツイートボタンを持っており、簡単にそのページのURLを呟くことが出来るようになります！
ツイートボタンを置くほどでもないページに簡単なツイートボタンを置きたいという場合に最適です！

### 4. nazr.in API

nazr.inにはURL短縮のためのAPIが用意されています。

```
http://nazr.in/shorten?url=%@
```

%@を短縮したいURLに置き換えてGETメソッドでリクエストするとプレインテキストで短縮されたURLが返ってきます。　
カスタムURLに対応しているTwitterクライアントで上記のURLを指定することでデフォルトでnazr.inをご使用頂けます！

#### カスタムURLに対応しているクライアント(動作確認済み)

- [夜フクロウ](https://sites.google.com/site/yorufukurou/)
- [Tweetbot for iPhone](http://tapbots.com/software/tweetbot/)
- [ぬえちゃんのちんこ](https://play.google.com/store/apps/details?id=inujini_.nuechin#?t=W251bGwsMSwyLDIxMiwiaW51amluaV8ubnVlY2hpbiJd)
- [twicca](http://twicca.r246.jp/)

> 現在、nazr.inに対応して頂けるクライアントを募集中です！

nazr.inをTwitterクライアントに設定するためのビジュアル解説も作りました！

- [twicca](http://cl.ly/image/3L1n3f352Q15/o)
- [夜フクロウ](http://cl.ly/image/1N243z0r1G2i/o)
- [TweetBot](http://cl.ly/image/1G0q0S2f2z0h/o)

### 5. Google Chromeでnazr.in

Chromeでもnazr.inをお使い頂けるよう拡張機能を作りました！
<https://chrome.google.com/webstore/detail/mkfdkonmbeiffjhnimddllajlokncple?hl=ja>

URLを入力せずに短縮ボタンを押すと今見ているページを短縮することが出来ます。

※Firefox版はリジェクトされました。誰か作ってください；

### 6. nazr.in Coda plug-in

誰得感しか漂ってこないCodaでnazr.inを使えるプラグインを作ってみました。Coda 2で動作確認済みです。短縮するだけでなく短縮URLを展開する機能もついてます。

ダウンロード: [Nazrin.codaplugin](http://cl.ly/2R1d1e3S0F1g2Z2i043W)

## 今後の予定

相互フォロワーのみジャンプ出来る機能など、Twitter連携の機能を増やすことが出来ればと主言っています。
nazr.inはただの個人運営のサービスですが、なるべく長く安定して続けていけるよう頑張ります！
もっと色んな人に使ってほしいな…!
