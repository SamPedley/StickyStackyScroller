StickyStackyScrollr
===================

[![Build Status](https://travis-ci.org/SamPedley/StickyStackyScroller.svg?branch=master)](https://travis-ci.org/SamPedley/StickyStackyScroller) [![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

An old project that allowed stacking up any kind of html element as the user scrolled.  Kind of handy for small little projects but very basic.  Might think about cleaning it up and turning it into something useful one day.

[A CodePen example can be found here!](http://codepen.io/SamPedley/full/jbWGyJ)
[And a live example here!](http://sampedley.com/StickyStackyScroller/)

```javascript

// Pass in an array of elements you want to stack and the parent container
// if it's not the window
const Scroll = new StickyStackyScrollr(['.class','#id', 'element'], '.parent');

// Remove all listeners if necessary
$('.removeScrolling').click( () => Scroll.unbind() );

```


### TODO:
- [ ] Remove dependency on jQuery.
- [ ] Create build for npm version.
- [ ] Create Browser unminified and minified versions.
- [ ] Write some Tests n stuff.
