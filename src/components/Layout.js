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
            gameDemoStats={this.props.gameDemoStats}
            buyFood={this.props.buyFood}
          />
        </div>
      </div>
    );
  }
}

export default Layout;
