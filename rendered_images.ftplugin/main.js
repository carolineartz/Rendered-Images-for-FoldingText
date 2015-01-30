define(function(require, exports, module) {
    'use strict';

    var Extensions = require('ft/core/extensions').Extensions;
    Extensions.addRenderNode(function(editor, node, nodeRenderer) {
        if (node.tags() && node.tags().hasOwnProperty('img')) {
            var image_widget = document.createElement('span');
            image_widget.className = 'rendered-image';
            var image = document.createElement("img");
            var matches = node.text().match(/(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?/);
            if (matches) {
                image.src = matches[0];
                image_widget.appendChild(image);
                nodeRenderer.renderLineWidget(image_widget);
            }
        }
    });

});
