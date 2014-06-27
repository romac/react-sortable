# React Sortable

A React component and mixin for creating sortable interfaces
utilizing the HTML5 drag & drop API.

Check out http://webcloud.se/react-sortable or the demo/ folder of this repository
for an example implementation.


## Basic Usage

Here's a basic example of sortable list implementation using the **SortableItem** component.

```js
/** @jsx React.DOM */

var React = require('react');
var SortableItem = require('react-sortable').SortableItem;

var SortableList = React.createClass({
  getInitialState: function() {
    return {
      items: this.props.data.items,
      dragging: this.props.data.dragging
    };
  },
  
  onSortUpdate: function(items, dragging) {
    this.setState({
      items: items,
      dragging: dragging
    });
  },

  render: function() {
    var items = this.props.data.items.map(function(item, i) {
      return <SortableItem onSortUpdate={this.onSortUpdate}
                          items={this.state.items}
                          dragging={this.state.dragging}
                          key={i}
                          item={item} />;
    }, this);
    return <ol>{items}</ol>;
  }
});

```
Here's some example data and a render call to the above component

```js
/** @jsx React.DOM */
var data = {
  items: [
    "Gold",
    "Crimson",
    "Hotpink",
    "Blueviolet",
    "Cornflowerblue",
    "Skyblue",
    "Lightblue",
    "Aquamarine",
    "Burlywood"
  ]
};
React.renderComponent(
  <SortableList data={data} />,
  document.body
);
```


### OnSortUpdate Method
It's your job to supply the SortableItem component with an `onSortUpdate` method so you can control how you want to update the overall state of the application.

The `onSortUpdate` method recieves two arguments, an array that explains the current order in a group of SortableItems, and the key/id of the node currently being dragged.

## SortableItem Properties

Apart from the `onSortUpdate` method, there are a few other properties that can be passed to a SortableItem component:

### Required properties

| Name | Type | Description
| -----|------|------------
| key | `integer` | Used internally be react but also by react-sortable to maintain sorting order
| items | `array` | The list of items to render
| item | `object` | The value/label inside the component

### Optional properties

| Name | Type | Description
| -----|------|------------
| dragging | `number` | The key/id of the node currently being dragged
| tagName | `string` | Default: LI, the HTML element the component will output
| className | `string` | A string of one or multiple CSS classes
| style | `object` | Inline styles

