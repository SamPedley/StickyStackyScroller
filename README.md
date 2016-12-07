StickyStackyScrollr
===================

An old project that allowed stacking up any kind of html element as the user scrolled.  Kind of handy for small little projects but very basic.  Might think about cleaning it up and turning it into something useful one day... if I get bored enough.

[A working example can be found Here!](http://codepen.io/SamPedley/full/jbWGyJ)

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
