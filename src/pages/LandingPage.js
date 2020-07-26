import React, { Component } from "react";

// import Button from '../elements/Button'
import Header from "../parts/Header";
import Hero from "../parts/Hero";
import MostPicked from "../parts/MostPicked";

import landingPage from "../json/landingPage.json";

export default class LandingPage extends Component {
  constructor(props){
    super(props)
    this.refMostPicked = React.createRef()
  }
  render() {
    console.log(this.props);
    return (
      <>
        <Header {...this.props}></Header>
        <Hero refMostPicked={this.refMostPicked} data={landingPage.hero} />
        <MostPicked
        refMostPicked={this.refMostPicked}
        data={landingPage.mostPicked} />
      </>
    );
  }
}
