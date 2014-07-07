# scrollFrame

Retain your scroll position between pages using an iframe. Especially helpful for infinite scrolling views.

![](http://www.explainxkcd.com/wiki/images/5/56/infinite_scrolling.png)

## Example

````javascript
scrollFrame('ul.infinite-scroll-list a');
// Now clicking on any <a>s will use HTML5 pushState to open the link in an iframe that floats on top of your viewport so you don't lose your scroll position.
````

For a working example check out the [example folder](https://github.com/artsy/scroll-frame/tree/master/example) which you can [visit live here](http://artsy.github.io/scroll-frame) or run yourself by cloning the project and running `npm run example`.

## How it Works

scrollFrame will hijack the user's click for elements that match the query selector you pass in and instead of reloading the page it will append a modal-like iframe that sits on top of your viewport and points to the element's href. It then uses Html5 history APIs to make the back-button function as expected.

## Caveats

scrollFrame will only open the next immediate page in an iframe (solving the simple use case of opening a detail page from an infinite scrolling list without losing your position). After clicking on a link inside the iframe the page refreshes to avoid going down a rabbit hole of stacked iframe modals.

# License

MIT