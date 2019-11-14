const merge = require('lodash/merge')

export default merge(require('@/lib/lang/ja').default, {
  common: {
    create: '作成',
    cancel: 'キャンセル',
    delete: '削除',
    failed: '失敗',
  },
  error: {
    unexpected: '予期しないエラーが発生しました。',
  },
  sw: {
    ready: 'アプリケーションは Service Worker によってキャッシュからサーブされています。詳細は https://goo.gl/AFskqB を参照ください。',
    registered: 'Service Worker は既に登録されています。',
    cached: 'オフライン用にコンテンツがキャッシュされました。',
    updatefound: '新しいコンテンツがダウンロード中です。',
    updated: '新しいコンテンツが利用可能になりました。',
    offline: 'インターネットの接続がみつかりません。アプリケーションはオフラインモードで実行しています。',
    error: 'Service Worker の登録でエラーが発生しました: {error}',
  },
  storage: {
    createFolder: 'フォルダを作成',
    uploadFiles: 'ファイルをアップロード',
    uploadFolder: 'フォルダをアップロード',
    folderName: 'フォルダ名',
    folderNameIsRequired: 'フォルダ名は必須です。',
    slashIsUnusable: '"/"は使用できません。',
    creationFolderFailed: 'フォルダの作成に失敗しました。',
    deletionItemsFailed: 'アイテムの削除に失敗しました。',
    deleteItems: 'アイテム削除',
    deleteItemQ: '"{name}"を削除してよろしいですか？',
    deleteFilesQ: '{fileNum}個のファイルを削除してよろしいですか？',
    deleteFoldersQ: '{folderNum}個のフォルダを削除してよろしいですか？',
    deleteFilesAndFoldersQ: '{fileNum}個のファイルと{folderNum}個のフォルダを削除してよろしいですか？',
    uploading: 'アップロード中',
  },
})
