import React, { Component } from "react";
import "./App.css";
import Web3 from "web3";
import Layout from "./components/Layout";

class App extends Component {
  state = {
    metaMask: { notInstalled: true, installed: false, accounts: "" },
    web3: "",
    feedingKitty: { started: false, shakeFood: true },
    kittyPosition: 0
  };

  componentDidMount() {
    if (window.ethereum || window.web3) {
      this.setState({
        metaMask: { notInstalled: false, installed: true },
        web3: new Web3(window.web3.currentProvider)
      });
    }
  }

  requestMetaMaskInfo = async event => {
    if (window.ethereum) {
      const enable = await window.ethereum.enable().then(console.log);
      const accounts = await this.state.web3.eth.getAccounts();
      const isEmptyAccounstArray = accounts == false;
      this.setState({ metaMask: { accounts, isEmptyAccounstArray } });
    }
  };

  feedKitty = () => {
    this.setState({ feedingKitty: { started: true } });
    setTimeout(
      () => this.setState({ feedingKitty: { pourFood: true, started: true } }),
      1000
    );

    setTimeout(() => this.setState({ feedingKitty: {} }), 2500);
  };

  moveKittyLeft = () => {
    this.setState({
      kittyPosition:
        this.state.kittyPosition < 5
          ? this.state.kittyPosition + 1
          : this.state.kittyPosition
    });
  };

  moveKittyRight = () => {
    this.setState({
      kittyPosition:
        this.state.kittyPosition > -9
          ? this.state.kittyPosition - 1
          : this.state.kittyPosition
    });
  };

  render() {
    return (
      <div className="App">
        <Layout
          metaMask={this.state.metaMask}
          requestMetaMaskInfo={this.requestMetaMaskInfo}
          feedKitty={this.feedKitty}
          feedingKitty={this.state.feedingKitty}
          moveKittyLeft={this.moveKittyLeft}
          moveKittyRight={this.moveKittyRight}
          kittyPosition={this.state.kittyPosition}
        />
        <h1>Make your kitty your pet.</h1>
      </div>
    );
  }
}

export default App;
