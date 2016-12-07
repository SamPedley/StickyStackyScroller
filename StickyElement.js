import $ from 'jquery';

export default class StickyElement {
  constructor($element){
    $element = $($element);
    let dimensions = $element[0].getBoundingClientRect();
    let $duplicate = $element.clone().removeAttr( "data-reactid" ).insertAfter($element).hide();
    this.self = $element[0];
    this.$self= $element;
    this.$duplicate = $duplicate;
    this.height = dimensions.height;
    this.width = dimensions.width;
    this.isTable = !!$element.find('tr, table, thead').length;
    this.offset = $element.offset().top;
    this.buffer = 0;
    this.docked = false;
    this.toTop = function(){ return  this.offset - this.buffer}
  }

  makeSticky(){
    this.isDocked = true;
    this.$duplicate.show();
    this.self.style.top = this.buffer + 'px';
    this.self.style.width = this.width +'px';
    this.self.style.height = this.height + 'px';
    this.self.style.zIndex = 999;
    this.self.style.position = 'fixed';
    this.self.className += " activeSticky";
    if(this.isTable)
    this.makeTableSticky()
  }

  makeNormal(){
    this.isDocked = false;
    this.$duplicate.hide();
    this.self.removeAttribute('style');
    this.self.className = this.self.className.replace(" activeSticky","");
    if(this.isTable && this.ths)
    this._makeTableNormal();
  }

  _makeTableNormal(){
    for (var i = 0; i < this.ths.length; i++) {
      this.ths[i].self.removeAttribute('style');
    }
  }

  updateSize(){
    let dimensions = this.self.getBoundingClientRect();
    this.height = dimensions.height;
    this.width = dimensions.width;
    this.offset = this.$self.offset().top;
  }

  makeTableSticky(){
    if(!this.ths)
    this._getTableHeaderWidth();

    for (var i = 0; i < this.ths.length; i++) {
      this.ths[i].self.style.width = this.ths[i].percent + '%';
    }
  }

  _getTableHeaderWidth(){
    let ths = this.$self.find('th');
    let duplicate = this.$duplicate.find('th');

    for (var i = 0; i < ths.length; i++) {
      let percent = $(duplicate[i]).width() / this.width;
      ths[i] = {percent, self: ths[i]}
    }

    this.ths = ths;
  }

}
