import React, { Component } from "react";
import Navbar from "../common/Navbar";
import Footer from "./Footer";
import Main from "./Main";
import MainFive from "./MainFive";
import MainFour from "./MainFour";
import MainSeven from "./MainSeven";
import MainSix from "./MainSix";
import MainThree from "./MainThree";
import MainTwo from "./MainTwo";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Navbar />
        <Main />
        <MainTwo />
        <MainThree />
        <MainFour />
        <MainFive />
        <MainSix />
        <MainSeven />
        <Footer />
      </div>
    );
  }
}

export default Home;
