import React, { Component } from "react";
import NavBar from "./NavBar";
import Game from "./Game";

class Layout extends Component {
  render() {
    return (
      <div>
        <NavBar
          metaMask={this.props.metaMask}
          requestMetaMaskInfo={this.props.requestMetaMaskInfo}
        />
        <div style={{height : '78vh'}}>
          <Game
          />
        </div>
        <div style={{textAlign : 'center'}}>
          {/* TODO fix so automatically detects metamask */}
          <button type="button" class="btn btn-primary">Connect MetaMask* to play for real</button>
          <p>* whats MetaMask?</p>
        </div>
      </div>
    );
  }
}

export default Layout;
