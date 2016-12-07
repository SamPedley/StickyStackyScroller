import StickyElement from './StickyElement.js';
import $ from 'jquery';


export default class StickyCollection{
  constructor(jqueyArray){
    let elements = this._getElements(jqueyArray)
    elements = elements.sort(this._sortByOffset);
    this.list = this._assignBuffer(elements);
  }


  unbind(){
    for (let i = 0; i < this.list.length; i++) {
      this.list[i].makeNormal();
      this.list[i].$duplicate.remove();
    };
  }

  resize(){
    for (let i = 0; i < this.list.length; i++) {
      this.list[i].makeNormal();
      this.list[i].updateSize();
      this.list = this._assignBuffer(this.list);

    };
  }

  _getElements(list){
    var elements = [];
    for (var i = 0; i < list.length; i++) {
      elements = elements.concat( $(list[i]).get() );
    }
    return elements.map( (element) => new StickyElement(element) );
  }

  _sortByOffset(a,b){
    if(a.offset < b.offset)
    return -1;
    else if(a.offset > b.offset)
    return 1;
    return 0;
  }
  _assignBuffer(elements){
    for (let i = 0; i < elements.length; i++) {
      if(i === 0)
      elements[i].buffer = 0;
      else
      elements[i].buffer = this._calculateBuffer(elements, i - 1 );
    };
    return elements;
  }

  _calculateBuffer(elements, index){
    var foundZero = false;
    let total = 0;
    for(let i = index; i>= 0; i--){
      total += elements[i].height;
    };
    return total;
  }
}
