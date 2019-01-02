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
        <div>
          <Game
            feedKitty={this.props.feedKitty}
            feedingKitty={this.props.feedingKitty}
            moveKittyLeft={this.props.moveKittyLeft}
            moveKittyRight={this.props.moveKittyRight}
            kittyPosition={this.props.kittyPosition}
          />

          {/* {this.props.metaMask.notInstalled && <h1>Please Install MetaMask</h1>}
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
          )} */}
        </div>
        {/* <h1 className="tagline">Turn your cryptokitty in your digital pet</h1> */}
      </div>
    );
  }
}

export default Layout;
