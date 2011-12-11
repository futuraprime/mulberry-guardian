dojo.provide('client.model.guardian');

dojo.require('client.vendor.backbone.backbone');


dojo.declare('client.model.guardian', null, {

  guardian_api_key : "tmmz9wv5uhwy47tf6t6h6sb5",

  core : {

    article : Backbone.Model.extend({
      // stub
    }),

    listing : Backbone.Collection.extend({

      model: this.article,

      url: 'http://content.guardianapis.com/search?callback=?',

      parse: function(response) {
        return response.results;
      }

    }),

    router: Backbone.Router.extend({

      routes: {
        "listing" :                 "listing",
        "article/:articleid" :      "article"
      },

      listing: function() {
        // stub
      },

      article: function(id) {
        // stub
      }

    }),

      // the trailer is a null property that stays at the end and wraps up
      // the object so every other method or property has a trailing comma
    trailer: null

  },

  constructor: function() {

    this.listing = new this.core.listing();
    this.router = new this.core.router();

    Backbone.sync = function(method, model) {
      console.log(method + ": " + model.url);
    }

  },

  // just a dummy so we don't worry about syncing for now...
  sampledata : [
    {
      "id": "football/2011/dec/11/stoke-city-tottenham-hotspur-premier-league",
      "sectionId": "football",
      "sectionName": "Football",
      "webPublicationDate": "2011-12-11T17:37:14Z",
      "webTitle": "Stoke City v Tottenham Hotspur | Simon Burnton",
      "webUrl": "http://www.guardian.co.uk/football/2011/dec/11/stoke-city-tottenham-hotspur-premier-league",
      "apiUrl": "http://content.guardianapis.com/football/2011/dec/11/stoke-city-tottenham-hotspur-premier-league"
    },
    {
      "id": "world/2011/dec/11/newt-gingrich-palestinian-comments-criticised",
      "sectionId": "world",
      "sectionName": "World news",
      "webPublicationDate": "2011-12-11T17:33:00Z",
      "webTitle": "Newt Gingrich condemned for calling Palestinians 'terrorists'",
      "webUrl": "http://www.guardian.co.uk/world/2011/dec/11/newt-gingrich-palestinian-comments-criticised",
      "apiUrl": "http://content.guardianapis.com/world/2011/dec/11/newt-gingrich-palestinian-comments-criticised"
    },
    {
      "id": "science/grrlscientist/2011/dec/11/2",
      "sectionId": "science",
      "sectionName": "Science",
      "webPublicationDate": "2011-12-11T17:30:01Z",
      "webTitle": "Mystery bird: Hair-crested drongo, Dicrurus hottentottus | @GrrlScientist",
      "webUrl": "http://www.guardian.co.uk/science/grrlscientist/2011/dec/11/2",
      "apiUrl": "http://content.guardianapis.com/science/grrlscientist/2011/dec/11/2"
    },
    {
      "id": "world/2011/dec/11/medvedev-orders-inquiry-poll-violations",
      "sectionId": "world",
      "sectionName": "World news",
      "webPublicationDate": "2011-12-11T17:19:00Z",
      "webTitle": "Putin and Medvedev try to calm Russian election outcry",
      "webUrl": "http://www.guardian.co.uk/world/2011/dec/11/medvedev-orders-inquiry-poll-violations",
      "apiUrl": "http://content.guardianapis.com/world/2011/dec/11/medvedev-orders-inquiry-poll-violations"
    },
    {
      "id": "sport/2011/dec/11/bath-leinster-heineken-cup",
      "sectionId": "sport",
      "sectionName": "Sport",
      "webPublicationDate": "2011-12-11T17:17:14Z",
      "webTitle": "Bath 13-18 Leinster | Heineken Cup match report",
      "webUrl": "http://www.guardian.co.uk/sport/2011/dec/11/bath-leinster-heineken-cup",
      "apiUrl": "http://content.guardianapis.com/sport/2011/dec/11/bath-leinster-heineken-cup"
    },
    {
      "id": "uk/2011/jul/04/milly-dowler-voicemail-hacked-news-of-world",
      "sectionId": "uk",
      "sectionName": "UK news",
      "webPublicationDate": "2011-12-11T17:06:00Z",
      "webTitle": "Missing Milly Dowler's voicemail was hacked by News of the World",
      "webUrl": "http://www.guardian.co.uk/uk/2011/jul/04/milly-dowler-voicemail-hacked-news-of-world",
      "apiUrl": "http://content.guardianapis.com/uk/2011/jul/04/milly-dowler-voicemail-hacked-news-of-world"
    },
    {
      "id": "commentisfree/2011/dec/11/muff-march-porn-designer-vaginas",
      "sectionId": "commentisfree",
      "sectionName": "Comment is free",
      "webPublicationDate": "2011-12-11T17:00:00Z",
      "webTitle": "Is the Muff March such a cunning stunt? | Naomi McAuliffe",
      "webUrl": "http://www.guardian.co.uk/commentisfree/2011/dec/11/muff-march-porn-designer-vaginas",
      "apiUrl": "http://content.guardianapis.com/commentisfree/2011/dec/11/muff-march-porn-designer-vaginas"
    },
    {
      "id": "business/2011/dec/11/france-fears-credit-rating-cut",
      "sectionId": "business",
      "sectionName": "Business",
      "webPublicationDate": "2011-12-11T16:57:21Z",
      "webTitle": "France fears credit rating cut despite bid to ease eurozone crisis",
      "webUrl": "http://www.guardian.co.uk/business/2011/dec/11/france-fears-credit-rating-cut",
      "apiUrl": "http://content.guardianapis.com/business/2011/dec/11/france-fears-credit-rating-cut"
    },
    {
      "id": "politics/2011/dec/11/tory-mp-regrets-nazi-slogans",
      "sectionId": "politics",
      "sectionName": "Politics",
      "webPublicationDate": "2011-12-11T16:39:54Z",
      "webTitle": "Tory MP regrets stag party's Nazi toasts, SS costumes and waiter taunts",
      "webUrl": "http://www.guardian.co.uk/politics/2011/dec/11/tory-mp-regrets-nazi-slogans",
      "apiUrl": "http://content.guardianapis.com/politics/2011/dec/11/tory-mp-regrets-nazi-slogans"
    },
    {
      "id": "sport/2011/dec/11/hugh-robertson-olympics-budget",
      "sectionId": "sport",
      "sectionName": "Sport",
      "webPublicationDate": "2011-12-11T16:35:03Z",
      "webTitle": "Sports minister Hugh Robertson criticises Olympics budget 'gloom'",
      "webUrl": "http://www.guardian.co.uk/sport/2011/dec/11/hugh-robertson-olympics-budget",
      "apiUrl": "http://content.guardianapis.com/sport/2011/dec/11/hugh-robertson-olympics-budget"
    }
  ],


  trailer: null

});
