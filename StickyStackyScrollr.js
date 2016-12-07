import StickyCollection from './StickyCollection.js';
import $ from 'jquery';


export default class StickyStackyScrollr {
  constructor(elements, scrollToListen = window) {

    this.scrollToListen = scrollToListen;
    this.elements = new StickyCollection(elements);

    this.scrollToListen.addEventListener('scroll',this.onScroll.bind(this));
    window.addEventListener('resize',this.resize.bind(this));
  }

  onScroll(){
    for (let i = 0; i < this.elements.list.length; i++) {
      const scrollTop = this.scrollToListen.pageYOffset;
      if (!this.elements.list[i].isDocked && this.elements.list[i].toTop() - scrollTop < 0){
        this.elements.list[i].makeSticky();
      } else if (this.elements.list[i].isDocked && scrollTop <= this.elements.list[i].toTop()){
        this.elements.list[i].makeNormal();
      }
    };
  }

  resize(){
    this.elements.resize()
    this.onScroll();
  }

  unbind() {
    $(this.scrollToListen).unbind('.scrollSSS');
    $(window).unbind('.resizeSSS');
    this.elements.unbind();
  }

}
