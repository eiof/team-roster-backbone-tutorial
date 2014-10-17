/*global define*/

define(function (require) {
    'use strict';

    // External deps
    var Backbone = require('backbone');
    var _ = require('underscore');

    // Makes a data list out of a collection
    var CollectionDatalist = Backbone.View.extend({
        tagName: 'section',
        className: 'collection-datalist-widget',
        events: {
            'change input': 'onChange'
        },

        initialize: function (options) {
            this.render();
            this.collection = options.data || [];
            this.modelValue = options.modelValue || 'value';
            this.onChangeCallback = options.onChangeCallback || function () {
                console.log(this.cid + ' collection-datalist option changed!');
            };
            this.listenTo(this.collection, 'sync', this.rerenderDatalist);
        },

        // On input change (requires a blur unfortunately)
        onChange: function (event) {
            this.onChangeCallback(event.target.value);
        },

        // If the collection changes, rerender the datalist with new collection data
        rerenderDatalist: function () {
            var $datalist = this.$('datalist');
            $datalist.html(''); // clear datalist
            _.each(this.collection.models, function (model) {
                $datalist.append($('<option>').attr('value', model.get(this.modelValue))); // add options
            }, this);
        },

        // Build base elements for datalist
        render: function () {
            this.$el.append($('<input>').attr('list', this.cid).addClass('form-control').attr('placeholder', 'Search/Select from list'));
            this.$el.append($('<datalist>').attr('id', this.cid));
        }
    });

    return CollectionDatalist;
});
