/** @jsx React.DOM */

var React = require('react');
var SortableList = require('./SortableList');
var SortableGrid = require('./SortableGrid');
var StateView = require('./StateView');

var App = React.createClass({
  getInitialState: function() {
    return {data: this.props.data};
  },
  onSortUpdate: function(colors, dragging) {
    var data = this.state.data;
    data.colors = colors;
    data.dragging = dragging;
    this.setState({data: data});
  },
  render: function() {
    return (
      <div id="app">
        <SortableList data={this.state.data} onSortUpdate={this.onSortUpdate}/>
        <SortableGrid data={this.state.data} onSortUpdate={this.onSortUpdate}/>
        <StateView data={this.state.data}/>
      </div>
    )
  }
});

module.exports = App;
