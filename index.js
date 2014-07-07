(function() {

  // Main function that listens for clicks to the selector and opens the
  // href of the element in the iframe modal.
  //
  // @param {String} selector DOM query selector e.g. 'ul.list-items a'

  var scrollFrame = function(selector) {
    document.addEventListener('click', function(e) {

      console.log('moo');

      // Ignore if the element doesnt match our selector
      var els = document.querySelectorAll(selector);
      var elMatchesSelector = Array.prototype.filter.call(els, function(el) {
        return el.contains(e.target);
      }).length > 0
      if (!elMatchesSelector) return;

      // Get the href & open the iframe on that url
      var href = e.target.href || e.target.parentNode.href;
      if (href) {
        e.preventDefault();
        openIframe(href);
      }
    });
  }

  // Change pushState and open the iframe modal pointing to this url.
  //
  // @param {String} url

  var openIframe = function(url) {

    // Change the history
    history.pushState({}, '', url);

    // Create the iframe modal
    var body = document.getElementsByTagName('body')[0];
    var iframe = document.createElement("iframe");
    iframe.className = 'scroll-frame-iframe'
    iframe.setAttribute('src', url);
    iframe.setAttribute('style', [
      'position: fixed', 'top: 0', 'left: 0', 'width: 100%', 'height: 100%',
      'z-index: 10', 'background-color: white'
    ].join(';'));

    // Add a class to the body while the iframe loads then append it
    body.className += ' scroll-frame-loading';
    iframe.onload = function() {
      body.className = body.className.replace(' scroll-frame-loading', '');
    }
    body.appendChild(iframe);

    // On back-button remove the iframe
    var onPopState = function() {
      body.removeChild(iframe);
      removeEventListener('popstate', onPopState);
    }
    addEventListener('popstate', onPopState);
  }

  // Export for CommonJS & window global
  if (typeof module != 'undefined') {
    module.exports = scrollFrame;
  } else {
    window.scrollFrame = scrollFrame;
  }
})();