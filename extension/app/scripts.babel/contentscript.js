'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}

console.log(React.Component);
console.log('\'Allo \'Allo! Conteaant scriptsssssss!!!');
