# React Sortable

A React component and mixin for creating sortable interfaces
utilizing the HTML5 drag & drop API.

Check out http://webcloud.se/react-sortable or the index.html fie of this repository
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
  sort: function(items, dragging) {
    this.setState({
      items: items,
      dragging: dragging
    });
  },
  render: function() {
    var items = this.props.data.items.map(function(item, i) {
      return <SortableItem sort={this.sort} items={this.state.items} dragging={this.state.dragging} key={i} item={item} />
    }, this);
    return <ol>{items}</ol>
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


### Sort Method
It's your job to supply the SortableItem component with a sort method so you can control how you want to update the overall state of the application.

The sort method recieves two arguments, an array that explains the current order in a group of SortableItems, and the key/id of the node currently being dragged.

## SortableItem Properties

Apart from the sort method, there are a few other properties that can be passed to a SortableItem component:

### Required properties

- key (integer) | Used internally be react but also by react-sortable to maintain sorting order
- array (items) | The list of items to render
- dragging (number) | The index of the item currently being dragged
- item (object) | The value/label inside the component

### Optional properties

- tagName (string) | Default: LI, the HTML element the component will output
- className (string) | A string of one or multiple CSS classes
- style (object) | Inline styles

