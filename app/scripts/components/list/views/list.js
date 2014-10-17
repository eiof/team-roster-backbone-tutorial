/*global define*/

define(function (require) {
    'use strict';

    // External Deps
    var Backbone = require('backbone');

    // Internal Deps
    var MembersList = require('../collections/members-list');

    // Component that puts member data into a table
    var List = Backbone.View.extend({
        tagName: 'tbody',

        initialize: function (options) {
            // Defines the component level collection, giving it the resource

            this.collection = new MembersList({
                members: options.membersResource
            });

            // Render each added item
            this.listenTo(this.collection, 'add', this.renderItem, this);

            // You could add more listeners to handle other events, like the removal of members
        },

        // Print out member information
        renderItem: function (model) {
            this.$el.append('<tr><td>' + model.get('name') + '</td><td><a href="' + model.get('html_url') + '">' + model.get('login') + '</a></td></tr>');
        }
    });

    return List;
});
