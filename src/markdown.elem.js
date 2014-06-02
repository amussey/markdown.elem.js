//
// markdown.elem.js -- A markdown element creator for HTML5
//
// Copyright (c) 2014 Andrew Mussey
//
// Redistributable under a BSD license.
// See LICENSE.md for more information.
//
// Markdown.elem.js is a library that allows for insertion of
// Markdown in-line with HTML that will be converted on the
// fly client-side.
// 
// More information is available at http://amussey.com.
//

markdownBlockName = 'code-markdown';

var converter = new Showdown.converter();

var XMarkdownPrototype = Object.create(HTMLElement.prototype);
XMarkdownPrototype.createdCallback = function() {
  this.innerHTML = converter.makeHtml(this.textContent);
};
var XMarkdown = document.registerElement(markdownBlockName, {
  prototype: XMarkdownPrototype
});
