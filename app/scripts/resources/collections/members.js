/*global define, foundingMemberUsernames*/

define(function (require) {
    'use strict';

    // External deps
    var Backbone = require('backbone');
    var _ = require('underscore');

    // Internal deps
    var Member = require('resources/models/member');

    // Collection of Oberd org memebers
    var Members = Backbone.Collection.extend({
        model: Member,

        initialize: function () {

            // Upon adding a member, fetch data about the member
            this.listenTo(this, 'add', this.fetchAdded, this);

            // Add each member from the memberUsernames
            _.each(foundingMemberUsernames, function(username) {
                this.add([{ id: username }]);
            }, this);
        },

        // Go get the member's data from the model added
        fetchAdded: function (model) {
            model.fetch();
        }
    });

    // Return singleton
    return new Members();
});
