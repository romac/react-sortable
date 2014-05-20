/** @jsx React.DOM */

'use strict';

var React = require('react');
var App = require('./src/App');

var data = {
  colors: [
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
  <App data={data} />,
  document.body
);
