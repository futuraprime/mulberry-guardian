dojo.provide('client.components.Vomit');

mulberry.component('Vomit', {
  componentTemplate : dojo.cache('client.components', 'Vomit/Vomit.haml'),

  prep : function() {
    this.vomitText = n.listing.length
  },

  init : function() {

  }
});
