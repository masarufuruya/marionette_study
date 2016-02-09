//別モジュールを読み込み
define([
  'jquery',
  'marionette'
], function($, Marionette) {
  var TabCollectionView = Marionette.CollectionView.extend({
    el: '#tabs' //既存のDOMを指定
  })
});
