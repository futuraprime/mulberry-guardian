dojo.provide('client.capabilities.PageListing');

mulberry.capability('PageListing', {
  requirements : {
    pageNav     : 'PageNav'
  },

  connects : [
    [ 'pageNav', 'prepareData', '_setTitle' ]
  ],

  init: function() {
    // stub
  },

  _setTitle : function() {
    this.pageNav.title('Listing');
  }
});

