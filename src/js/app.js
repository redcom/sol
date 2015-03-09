/*
    Example a page component which renders some information
*/
define([
    'components/page',
], function(page) {
    var config;

    var showPage = function(data) {
        // instantiate a view and display it
        var pageView = new page.view({
            el: '#mainContent',
            model: data
        });
    };

    var getData = function() {
        $.getJSON(config.apiPath)
            .fail(failedDataReceived)
            .done(dataReceived);
    };

    var failedDataReceived = function(e) {
        // show an error message
        console.log('Error getting data', e);
    };

    var addPathToImages = function(images) {
        // embed the path into the url image
        images.map(function(img, idx) {
            img.full = config.imgPath + img.full;
            img.thumb = config.imgPath + img.thumb;
        });
    };

    var dataReceived = function(response) {
        if (_.isObject(response) && _.isArray(response.images)) {
            addPathToImages(response.images); 
            showPage(response);
        } else {
            console.log('Invalid response from API');
        }
    };

    return {
        initialize: function(apiConfig) {
            config = apiConfig;
            getData(config)
        }
    }
})
