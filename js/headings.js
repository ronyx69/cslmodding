(function(){
  'use strict';
  var headingNodes = [], results, link,
      tags = ['h2', 'h3', 'h4', 'h5', 'h6'];
  tags.forEach(function(tag){
    results = document.getElementsByTagName(tag);
    Array.prototype.push.apply(headingNodes, results);
  });
  headingNodes.forEach(function(node){
    link = document.createElement('a');
    link.className = 'deepLink';
    link.textContent = node.textContent;
    link.href = '#' + node.getAttribute('id');
    node.innerHTML = '<a href="' + link.href + '" title="Click to generate a direct link to this section in the browser&apos;s address bar for easy sharing."/>' + link.textContent + '</a>';
  });
})();