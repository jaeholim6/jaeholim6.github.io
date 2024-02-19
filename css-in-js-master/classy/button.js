import React, {Component} from 'react';
import Classy from 'react-classy';

@Classy
class Button extends Component {

  static style = `
    .container {
      text-align: center;
    }
    .button {
      background-color: #ff0000;
      width: 320px;
      padding: 20px;
      border-radius: 5px;
      border: none;
      outline: none;
    }
    .button:hover {
      color: #fff;
    }
    .button:active {
      position: relative;
      top: 2px;
    }
    @media (max-width: 480px) {
      .button {
        width: 160px
      }
    }
  `;

  render() {
    return (
      <div className="container">
        <button className="button">Click me!</button>
      </div>
    );
  }

}

React.render(<Button />, document.getElementById('content'));
