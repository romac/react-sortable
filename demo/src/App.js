/** @jsx React.DOM */

var React = require('react');
var SortableList = require('./SortableList');
var SortableGrid = require('./SortableGrid');
var StateView = require('./StateView');

var App = React.createClass({
  getInitialState: function() {
    return {data: this.props.data};
  },
  sort: function(colors, dragging) {
    var data = this.state.data;
    data.colors = colors;
    data.dragging = dragging;
    this.setState({data: data});
  },
  render: function() {
    return (
      <div id="app">
        <SortableList data={this.state.data} sort={this.sort}/>
        <SortableGrid data={this.state.data} sort={this.sort}/>
        <StateView data={this.state.data}/>
      </div>
    )
  }
});

module.exports = App;
