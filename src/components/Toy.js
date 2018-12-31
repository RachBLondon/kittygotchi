import React, { Component } from "react";

export default class Toy extends Component {
  render() {
    return (
      <div className="toy-body">
        <div className="toy-container">
          <div className="loop" />
          <div className="egg">
            <div className="crack">
              <div className="display" />
            </div>
            <div className="toy-buttons">
              <div className="toy-button" onClick={this.props.moveKittyLeft}/>
              <div className="toy-button" onClick={this.props.feedKitty}/>
              <div className="toy-button" onClick={this.props.moveKittyRight} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
