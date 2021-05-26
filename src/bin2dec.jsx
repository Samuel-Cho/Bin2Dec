import React from 'react';
import ReactDOM from 'react-dom';

export default class Bin2Dec extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      binary: 0
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ binary: event.target.value })
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <h1 className="converter-name">Binary to Decimal Converter</h1>
        </div>
        <div className="text-container">
          <p className="text">Enter Binary Code Below.</p>
        </div>
        <div className="input-container">
          <input type="text" id="converter-input" name="converter-input" onChange={this.handleChange}></input>
        </div>
        <div className="decimal-container">
          <p className="decimal-value"></p>
        </div>
      </div>
    );
  }
}
