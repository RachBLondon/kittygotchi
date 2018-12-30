import React, { Component } from "react";
import "./App.css";
import Web3 from "web3";
import Layout from './components/Layout'

class App extends Component {
  state = {
    metaMask: { notInstalled: true, installed: false, accounts: "" },
    web3: ""
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
    console.log("value :", this.state.web3.eth.getAccounts());
    if (window.ethereum) {
      const enable = await window.ethereum.enable().then(console.log);
      const accounts = await this.state.web3.eth.getAccounts();
      const isEmptyAccounstArray = accounts == false;
      this.setState({metaMask: { accounts, isEmptyAccounstArray }});
    }
  };

  render() {
    return (
      <div className="App">
        <Layout
          metaMask={this.state.metaMask}
          requestMetaMaskInfo={this.requestMetaMaskInfo}
          />
          <h1>Make your kitty your pet.</h1>
      </div>
    );
  }
}

export default App;
