/*global define*/

define(function (require) {
    'use strict';

    // External deps
    var Backbone = require('backbone');

    // Models for new members
    var NewMembers = Backbone.Collection.extend({

        initialize: function (options) {
            this.resourceCollection = options.members || null;
            this.resourceModel = options.member || null;
            this.listenTo(this, 'add', this.pushToMembers, this);
        },

        pushToMembers: function (model) {
            this.resourceCollection.add(model);
        }
    });

    return NewMembers;
});
