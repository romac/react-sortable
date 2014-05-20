/** @jsx React.DOM */

'use strict';

var React = require('react');
var SortableItem = require('../..').SortableItem;

var SortableGrid = React.createClass({

  render: function() {

    var gridItems = this.props.data.colors.map(function(item, i) {
      return (
        <SortableItem tagName="div"
                      style={{background: item}}
                      onSortUpdate={this.props.onSortUpdate}
                      items={this.props.data.colors}
                      dragging={this.props.data.dragging}
                      key={i}
                      item={item} />
      );
    }, this);

    return (
      <div id="grid">{gridItems}</div>
    )
  }
});

module.exports = SortableGrid;
