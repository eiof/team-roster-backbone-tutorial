/*global define, teamName*/

define(function (require) {
    'use strict';

    // External deps
    var Backbone = require('backbone');

    // Internal deps
    var List = require('components/list/views/list');
    var FindCandidate = require('components/new-candidate/views/find-candidate');
    var Members = require('resources/collections/members');
    var Member = require('resources/models/member');

    // Module that contains components about members
    var MembersControl = Backbone.View.extend({

        initialize: function () {
            this.render();
        },

        // Pull in all the components
        render: function () {

            // Insert team name
            $('#team-name').html(teamName);

            // New up a List component, handing it it's resources
            var list = new List({ membersResource: Members });
            $('#members-list').append(list.$el);

            // New up a FindCandidate component, handing it it's resources
            var find = new FindCandidate({
                membersResource: Members,
                memberResource: Member
            });
            $('#find-candidate').append(find.$el);
        }
    });

    return MembersControl;
});
