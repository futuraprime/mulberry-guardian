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

mulberry.route('/article/:articleid', function(params, route) {
  /**
   * You will probably want something like this here :)
   */

  var page = toura.app.PageFactory.createPage({
    pageController : 'article',
    params : params
  });

  toura.app.UI.showPage(page);
});


mulberry.route('listing', function(params, route) {
  /**
   * You will probably want something like this here :)
   */

  var page = toura.app.PageFactory.createPage({
    pageController : 'yourCustomPageController',
    params : params
  });

  toura.app.UI.showPage(page);
});

