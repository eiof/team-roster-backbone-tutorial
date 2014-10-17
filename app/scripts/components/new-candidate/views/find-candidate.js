/*global define*/

define(function (require) {
    'use strict';

    // External deps
    var Backbone = require('backbone');

    // Internal deps
    var CollectionDatalist = require('widgets/collection-datalist/collection-datalist');
    var OrgMembers = require('resources/collections/org-members');
    var NewMembers = require('../collections/new-members');

    // Component for searching for a new candidate to add to the members resource
    var FindCandidate = Backbone.View.extend({
        tagName: 'section',
        className: 'find-candidate-component',

        initialize: function (options) {
            this.collection = new NewMembers({
                members: options.membersResource,
                member: options.memberResource
            });
            this.render();
        },

        render: function () {
            var $candidateMessage = $('<span id="candidate-message" class="text-success">Oooh! Good pick!</span>').hide();
            var _self = this;
            this.datalist = new CollectionDatalist({
                data: OrgMembers,
                modelValue: 'login',
                onChangeCallback: function (value) {
                    $candidateMessage.show();
                    _self.collection.add({ id: value });
                }
            });
            this.$el.append(this.datalist.$el);
            this.$el.append($candidateMessage);
        }
    });

    return FindCandidate;
});
