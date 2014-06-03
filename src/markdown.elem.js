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

(function(window, document){
    var showdownjs = 'https://cdnjs.cloudflare.com/ajax/libs/showdown/0.3.1/showdown.min.js';
    var markdownBlockName = 'code-markdown';

    var hideMarkdownBlockCss = document.createElement("style");
    hideMarkdownBlockCss.innerText = markdownBlockName + "{ display:none; }";
    hideMarkdownBlockCss.id = 'markdown-block-hider';
    document.getElementsByTagName("head")[0].appendChild(hideMarkdownBlockCss);

    loadScript(showdownjs, bindMarkdownBlock);


    function loadScript(url, callback){
        var script = document.createElement("script")
        script.type = "text/javascript";

        if (script.readyState){  //IE
            script.onreadystatechange = function(){
                if (script.readyState == "loaded" ||
                        script.readyState == "complete"){
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else {  //Others
            script.onload = function(){
                callback();
            };
        }

        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script);
    }

    function bindMarkdownBlock() {
        var converter = new Showdown.converter();

        var MarkdownTagPrototype = Object.create(HTMLElement.prototype);
        MarkdownTagPrototype.createdCallback = function() {
            this.innerHTML = converter.makeHtml(this.textContent);
        };
        if (document.registerElement != undefined) {
            var MarkdownTag = document.registerElement(markdownBlockName, {
                prototype: MarkdownTagPrototype
            });
        } else if (document.register != undefined) {
            var MarkdownTag = document.register(markdownBlockName, {
                prototype: MarkdownTagPrototype
            });
        } else {
            console.log("This browser does not support custom tags.  Including platform.js (https://github.com/Polymer/platform) may fix this.");
        }
        document.getElementsByTagName("head")[0].removeChild(hideMarkdownBlockCss);
    }
}(window, document));
