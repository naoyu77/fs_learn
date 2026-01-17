# fs_learn

Node.js の `fs` モジュールを学習するためのプロジェクトです。

## セットアップ

```bash
npm install
```

## 実行

```bash
node app.js
```

## 学習内容

- ファイルの読み書き
- ファイルの追記
- ファイル・ディレクトリの存在確認
- ファイル情報の取得
- ディレクトリの作成・削除
- ファイルのコピー・リネーム・削除

## fs モジュール主要メソッド

| 操作 | 同期版 | 非同期版 |
|------|--------|----------|
| 書き込み | `writeFileSync()` | `writeFile()` |
| 読み込み | `readFileSync()` | `readFile()` |
| 追記 | `appendFileSync()` | `appendFile()` |
| 存在確認 | `existsSync()` | - |
| 情報取得 | `statSync()` | `stat()` |
| ディレクトリ作成 | `mkdirSync()` | `mkdir()` |
| ディレクトリ一覧 | `readdirSync()` | `readdir()` |
| コピー | `copyFileSync()` | `copyFile()` |
| リネーム | `renameSync()` | `rename()` |
| 削除 | `unlinkSync()` | `unlink()` |
