
import React, {Component} from 'react';
import config from './config.json';

var Mock = require('mockjs');
var data = Mock.mock({
	'list|1-10': [{
		'id|+1': 1
	}]
});

console.log(JSON.stringify(data, null, 4));

class Greeter extends Component{
  render() {
    return (
      <div>
        {config.greetText}
      </div>
    );
  }
}

export default Greeter
