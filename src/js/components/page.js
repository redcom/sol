define([
    'jquery',
    'underscore',
    'backbone',
    '../../templates/compiled/page.handlebars',
], function($, _, Backbone, templates) {

    // define a view that renders once it is initialized
    var PageView = Backbone.View.extend({
        initialize: function() {
            var self = this;
            self.render();
        },
        render: function() {
            var self = this;
            self.$el.append(templates.page(self.model));
            return self;
        },
        events: {
            'click ul.thumbs': 'imgLogic',
            'mouseover ul.thumbs': 'imgLogic'
        },
        imgLogic: function(e) {
            if (e.target.nodeName.toLowerCase() === "img") {
                var currentImage = e.target.src;
                // change the full pictures only for when click or hover thumbs
                if (~currentImage.indexOf('thumb')) {
                    $('.page img.full').attr({
                        'src': currentImage.replace('-thumb', '')
                    });
                }
            }
            return false;
        }
    });

    var imgLogic = function(e) {};

    // return the exposed API of this module
    return {
        view: PageView
    };
})
