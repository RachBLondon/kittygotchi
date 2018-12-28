import React, { Component } from "react";

class Layout extends Component {
  render() {
    return (
      <div>
        {this.props.metaMask.notInstalled && <h1>Please Install MetaMask</h1>}
        {this.props.metaMask.installed && (
          <h1>
            Has Meta Mask
            <button onClick={this.props.requestMetaMaskInfo}>Click</button>
          </h1>
        )}
        {this.props.metaMask.accounts && (
          <h2>{this.props.metaMask.accounts}</h2>
        )}
        {this.props.metaMask.isEmptyAccounstArray && (
          <p>You might need to login to MetaMask and try again</p>
        )}
      </div>
    );
  }
}

export default Layout;
