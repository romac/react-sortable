/** @jsx React.DOM */

'use strict';

var React = require('react');
var SortableItem = require('../..').SortableItem;

var SortableList = React.createClass({

  render: function() {

    var listItems = this.props.data.colors.map(function(item, i) {
      return (
        <SortableItem tagName="li"
                      className="item"
                      onSortUpdate={this.props.onSortUpdate}
                      items={this.props.data.colors}
                      dragging={this.props.data.dragging}
                      key={i}
                      item={item} />
      );
    }, this);

    return (
      <ul>{listItems}</ul>
    )
  }
});

module.exports = SortableList;
