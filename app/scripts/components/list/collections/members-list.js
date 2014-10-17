/*global define*/

define(function (require) {
    'use strict';

    // External deps
    var Backbone = require('backbone');

    // Internal deps
    var MemberItem = require('../models/member-item');

    // List component's collection reference - contains members for a list
    var MembersList = Backbone.Collection.extend({
        model: MemberItem,

        initialize: function (options) {

            // Take members resource
            this.resourceCollection = options.members || null;

            // Listen to changes, and populate accordingly
            this.listenTo(this.resourceCollection, 'change', this.populate, this);
        },

        // Populates off of resource changes
        populate: function (model) {

            // Take the new model from resource and add it's attributes to component's model reference
            var newMember = new this.model( model.attributes );

            // Add to self!
            this.add(newMember);
        }
    });

    return MembersList;
});
