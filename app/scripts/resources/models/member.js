/*global define, ghAccessToken*/
define(function (require) {
    'use strict';

    // External deps
    var Backbone = require('backbone');

    // Resource that access a GitHub user and makes them a member object
    var Member = Backbone.Model.extend({
        urlRoot: 'https://api.github.com/users',

        url: function () {
            return this.urlRoot + '/' + this.get('id') + '?access_token=' + ghAccessToken;
        }
    });

    return Member;
});
