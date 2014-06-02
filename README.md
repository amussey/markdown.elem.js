# Custom <Markdown> tag for HTML

Markdown.elem.js allows you to insert Markdown in-line with HTML that will be converted on the fly client-side.

To use this library, include these two script tags into the head of your HTML:

```html
<script src="//cdnjs.cloudflare.com/ajax/libs/showdown/0.3.1/showdown.min.js"></script>
<script src="markdown.elem.js"></script>
```

Then, simply include your Markdown inside of `<code-markdown>` tags:

```html
<code-markdown>
# Markdown test

We can make stuff **bold**, *italicized*, even put in [links](http://amussey.com)!

```
def winning(self):
    try:
        self.name = 'Andrew'
    except Exception as e:
        print e
```
<code-markdown>
```



**Note**:  This library currently requires Showdown.js for the actual Markdown parsing.  

