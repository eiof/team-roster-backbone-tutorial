/*global define, ghOrg, ghAccessToken */

define(function (require) {
    'use strict';

    // External deps
    var Backbone = require('backbone');

    // All of a GitHub org's members
    var OrgMembers = Backbone.Collection.extend({
        url: 'https://api.github.com/orgs/' + ghOrg + '/members?access_token=' + ghAccessToken,

        // On initialize, fetch the org members list
        initialize: function () {
            this.fetch();
        }
    });

    // Return singleton
    return new OrgMembers();
});
