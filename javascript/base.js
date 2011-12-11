/**
 * You can write custom JavaScript here; this is also where Mulberry will add
 * any dependencies you introduce via `mulberry create component`.
 */
dojo.require('client.routes');

dojo.require('client.model.guardian');

dojo.require('client.components.Test');

var n = new client.model.guardian();
n.listing.add(client.model.guardian.prototype.sampledata);