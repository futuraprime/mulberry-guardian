/**
 * You can write custom JavaScript here; this is also where Mulberry will add
 * any dependencies you introduce via `mulberry create component`.
 */
dojo.require('client.routes');

// data modeling
dojo.require('client.models.guardian');

var n = new client.models.guardian();
n.listing.fetch();

//n.listing.add(client.models.guardian.prototype.sampledata);

dojo.require('client.capabilities.PageArticle');
dojo.require('client.capabilities.PageListing');
dojo.require('client.components.Listing');
dojo.require('client.components.Article');
dojo.require('client.capabilities.PageHome');
dojo.require('client.components.ListingLink');
