import React, { Component } from "react";

export default class Toy extends Component {
  render() {
    return (
      <div className="toy-body">
        <div className="toy-container">
          <div className="loop" />
          <div className="egg">
            <div className="crack">
              <div className="display">
              </div>
            </div>
            <div className="toy-buttons">
              <div className="toy-button" />
              <div className="toy-button" />
              <div className="toy-button" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
