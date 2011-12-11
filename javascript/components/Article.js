dojo.provide('client.components.Article');

mulberry.component('Article', {
  componentTemplate : dojo.cache('client.components', 'Article/Article.haml'),

  prep : function() {
    //console.log('ARTICLE: ',this.baseObj);
    this.article = this.node ? this.node.resource.attributes : {};
    console.log(this.article);
  },

  init : function() {

  }
});
