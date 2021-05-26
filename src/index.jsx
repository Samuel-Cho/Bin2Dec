import React from 'react';
import ReactDOM from 'react-dom';
import Bin2Dec from './bin2dec';

class Converter extends React.Component {
  render() {
    return <Bin2Dec />
  }
}

ReactDOM.render(<Converter />, document.querySelector('#root'));
