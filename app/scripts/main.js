/*global define*/

define(function (require) {
    'use strict';

    // External modules
    var Backbone = require('backbone');

    // The only router of this application
    var ModuleRouter = Backbone.Router.extend({
        routes: {
            '': 'membersControl'
        },

        // Boot up a MembersControl module
        membersControl: function () {
            var MembersControl = require('modules/members-control/members-control');
            this.view = new MembersControl(); // Save the view for future use if needed
        }
    });

    // Once the document is ready, start up the router
    $(document).ready(function () {
        new ModuleRouter();
        Backbone.history.start(); // Allow routers perform route operations
    });
});
