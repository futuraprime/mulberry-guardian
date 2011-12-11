dojo.provide('client.components.Listing');

mulberry.component('Listing', {
  componentTemplate : dojo.cache('client.components', 'Listing/Listing.haml'),

  prep : function() {
    this.list = this.node ? this.node.resource : {};
  },

  init : function() {

  }
});
