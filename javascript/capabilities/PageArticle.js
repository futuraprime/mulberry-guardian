dojo.provide('client.capabilities.PageArticle');

mulberry.capability('PageArticle', {
  requirements : {
    article: 'custom.Article'
  },

  connects : [
  ],

  init : function() {
    console.log(arguments, this, this.baseObj.params);
  }
});

