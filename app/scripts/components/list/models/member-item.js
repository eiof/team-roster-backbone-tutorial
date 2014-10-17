/*global define*/

define(function (require) {
    'use strict';

    // External deps
    var Backbone = require('backbone');

    // Internal deps
    var MemberItem = Backbone.Model.extend({
        defaults: {
            greatness: 'Extreme!' // All of the members are extremely great
        },
    });

    return MemberItem;
});
