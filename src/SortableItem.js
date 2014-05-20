/** @jsx React.DOM */

'use strict';

var throttle = require('lodash.throttle');
var React = require('react');
var SortableMixin = require('./SortableMixin');

var SortableItem = React.createClass({
  mixins: [SortableMixin],

  getDefaultProps: function() {
    return {
      tagName: 'li',
      style: {},
      className: '',
      throttle: 16
    };
  },

  render: function() {
    return this.transferPropsTo(
      React.DOM[this.props.tagName]({
        'data-id': this.props.key,
        className: this.props.className + ' ' + this.getClassName(),
        draggable: true,
        onDragEnd: this.sortEnd,
        onDragOver: throttle(this.dragOver, +this.props.throttle),
        onDragStart: this.sortStart
      }, this.props.item)
    );
  }
});

module.exports = SortableItem;
