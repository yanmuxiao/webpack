
import React from 'react';
import styles from './Greeter.css';//导入


var config = require('./config.json');
module.exports = function() {
  var greet = document.createElement('div');
  greet.textContent = config.greetText;
  greet.className = styles.root;
  return greet;
};