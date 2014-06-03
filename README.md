# Custom `<Markdown>` tag for HTML

Markdown.elem.js allows you to insert Markdown in-line with HTML that will be converted on the fly client-side.

To use this library, include the script into the head of your HTML:

```html
<script src="markdown.elem.js"></script>
```

If your browser does not support custom elements, you will also need to include [platform.js](https://github.com/Polymer/platform).

From there, simply include your Markdown inside of `<code-markdown>` tags:

```html
<code-markdown>
# Markdown test

We can make stuff **bold**, *italicized*, even put in [links](http://amussey.com)!

## Code Blocks

    def winning(self):
        try:
            self.name = 'Andrew'
        except Exception as e:
            print e

<code-markdown>
```

**Note**:  This library currently imports Showdown.js for the actual Markdown parsing.
