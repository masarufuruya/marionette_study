//別モジュールを読み込み
define([
  'jquery',
  'marionette',
  'TabItemView'
], function($, Marionette, TabItemView) {
  var TabCollectionView = Marionette.CollectionView.extend({
    el: '#tabs', //既存のDOMを指定
    childView: TabItemView, //CollectionViewの子要素(ItemView)を指定
    events: {
      'click a': 'onClickActivateLink'
    },
    initialize: function(options) {
      var tabs = [
        { href: 'mypage', tabName: 'マイページ' },
        { href: 'account', tabName: 'アカウント編集' }
      ];
      //初期化でコレクションを紐付ける
      //new tabCollectionView(tabs)でも出来る
      this.collection = new Backbone.Collection(tabs);
    },
    onClickActivateLink: function(event) {
      event.preventDefault();
      var href = $(event.target).attr('href');
      var $targetContent = $(href);
      $(this.el).find('a').removeClass('is_active');
      $(event.target).addClass('is_active');
    }
  });

  return TabCollectionView;
});
