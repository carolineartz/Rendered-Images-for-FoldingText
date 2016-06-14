define(function(require, exports, module) {
  'use strict';

  var Extensions = require('ft/core/extensions').Extensions;

  Extensions.addRenderNode(function(editor, node, nodeRenderer) {
    if (node.tags() && node.tags().hasOwnProperty('img')) {
      var matches = node.text().match(/(^|\s|-)\!\[(.+)\]\((.+)\)/);

      if (matches) {
        var image_widget, image;

        image_widget = document.createElement('span');
        image_widget.className = 'rendered-image';

        image = document.createElement("img");
        image.src = matches[3];
        image_widget.appendChild(image);

        nodeRenderer.renderLineWidget(image_widget);
      }
    }
  });
});
