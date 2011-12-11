dojo.provide('client.components.Article');

mulberry.component('Article', {
  componentTemplate : dojo.cache('client.components', 'Article/Article.haml'),

  prep : function() {
    this.article = this.node ? this.node.resource.attributes : {};
  },

  init : function() {

  }
});
