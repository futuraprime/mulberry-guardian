dojo.provide('client.models.guardian');

dojo.require('client.vendor.backbone.backbone');

(function() {

  // Guardian is defined outside the declare statement so its various
  // extensions of Backbone classes can refer to themselves correctly
  var Guardian = {
    api_key: "tmmz9wv5uhwy47tf6t6h6sb5"
  }

  Guardian.article = Backbone.Model.extend({

    url: function() {
      return this.get('apiUrl');
    },

    // we have to parse the ids not to have slashes, as they're
    // going into a URL, and the router will choke on 'em if we
    // use them straight
    initialize: function(attributes) {
      var remslash_id = attributes.id.replace(/\//g, '_');
      this.set({id: remslash_id});
      dojo.publish('/content/update');
      console.log("Fired /content/update.");
    },

  });

  Guardian.listing = Backbone.Collection.extend({

    model: Guardian.article,

    url: 'http://content.guardianapis.com/search?show-fields=body&api-key='+Guardian.api_key+'&callback=?',

    parse: function(response) {
      return response.response.results;
    }

  });

  dojo.declare('client.models.guardian', null, {

    core : Guardian,

    constructor: function() {

      this.listing = new this.core.listing();

      // Backbone.sync = function(method, model) {
      //         console.log(method + ": " + model.url);
      //       }

    },

    trailer: null

  });
}).call(this);
