/** @jsx React.DOM */

'use strict';

var utils = require('./utils');

module.exports = {
  update: function(to, from) {
    var items = this.props.items;
    items.splice(to, 0, items.splice(from, 1)[0]);
    this.props.onSortUpdate(items, to);
  },
  sortEnd: function() {
    this.props.onSortUpdate(this.props.items, undefined);
  },
  sortStart: function(e) {
    this.dragged = e.currentTarget.dataset.id;
    e.dataTransfer.effectAllowed = 'move';
  },
  move: function(over,append) {
    var to = +over.dataset.id;
    var from = this.props.dragging || +this.dragged;
    if(append) {
      to += 1;
    }
    if(from < to) {
      to -= 1;
    }
    this.update(to, from);
  },
  dragOver: function(e) {
    e.preventDefault();

    var over = e.currentTarget;
    var relY = utils.getRelativeCoordinates(e, over).y;
    var height = over.offsetHeight / 2;

    this.move(over, relY > height);
  },
  getClassName: function() {
    return (this.props.key === this.props.dragging) ? 'dragging' : '';
  }
};
