const fs = require('fs');

// ================================
// Node.js fs モジュール 基本学習
// ================================

// --- 1. ファイルの書き込み (同期) ---
fs.writeFileSync('test.txt', 'Hello, Node.js fs module!\n');
console.log('1. ファイルを作成しました: test.txt');

// --- 2. ファイルの読み込み (同期) ---
const content = fs.readFileSync('test.txt', 'utf8');
console.log('2. ファイルの内容:', content);

// --- 3. ファイルに追記 ---
fs.appendFileSync('test.txt', '追記した行です\n');
console.log('3. ファイルに追記しました');

// --- 4. ファイルの存在確認 ---
const exists = fs.existsSync('test.txt');
console.log('4. ファイルが存在するか:', exists);

// --- 5. ファイル情報の取得 ---
const stats = fs.statSync('test.txt');
console.log('5. ファイル情報:');
console.log('   - サイズ:', stats.size, 'bytes');
console.log('   - 作成日:', stats.birthtime);
console.log('   - ディレクトリか:', stats.isDirectory());
console.log('   - ファイルか:', stats.isFile());

// --- 6. ディレクトリの作成 ---
if (!fs.existsSync('testdir')) {
  fs.mkdirSync('testdir');
  console.log('6. ディレクトリを作成しました: testdir');
} else {
  console.log('6. ディレクトリは既に存在します: testdir');
}

// --- 7. ディレクトリの内容一覧 ---
const files = fs.readdirSync('.');
console.log('7. カレントディレクトリの内容:', files);

// --- 8. ファイルのコピー ---
fs.copyFileSync('test.txt', 'test_copy.txt');
console.log('8. ファイルをコピーしました: test.txt -> test_copy.txt');

// --- 9. ファイル名の変更 ---
fs.renameSync('test_copy.txt', 'test_renamed.txt');
console.log('9. ファイル名を変更しました: test_copy.txt -> test_renamed.txt');

// --- 10. ファイルの削除 ---
fs.unlinkSync('test_renamed.txt');
console.log('10. ファイルを削除しました: test_renamed.txt');

// --- 11. ディレクトリの削除 ---
fs.rmdirSync('testdir');
console.log('11. ディレクトリを削除しました: testdir');

console.log('\n=== 学習完了 ===');
