dojo.provide('client.routes');

/**
 * You can define custom routes here. To add a new route, run:
 *
 *    mulberry create route <path matcher>
 *
 * For example:
 *
 *    mulberry create route '/foo/:bar'
 *
 */

dojo.subscribe('/routes/loaded', function() {

  mulberry.route('/article/:articleid', function(params, route) {
    /**
     * You will probably want something like this here :)
     */

    var data = n.listing.get(params.articleid);

    var page = toura.app.PageFactory.createPage({
      pageController : 'article',
      params : params,
      resource : data,
      name : data.attributes.webTitle
    });

    toura.app.UI.showPage(page);
  });


  mulberry.route('/home', function(params, route) {
    /**
     * You will probably want something like this here :)
     */

    var data = n.listing.models;

    var page = toura.app.PageFactory.createPage({
      pageController : 'listing',
      params : params,
      resource: data,
      name: "Listing"
    });

    // dojo.subscribe('/content/update', function(message) {
    //   console.log("UPDATE RECIEVED");
    //   toura.app.UI.showPage(page);
    // });

    toura.app.UI.showPage(page);
  }, true);

});

