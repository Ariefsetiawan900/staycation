import React, { Component } from "react";

import Header from "../parts/Header";
import PageDetailTitle from "../parts/PageDetailTitle";

import ItemDetails from "../json/itemDetails.json";

export default class DetailPage extends Component {
  componentDidMount() {
    window.title = "Details Page";
    window.scrollTo(0, 0);
  }
  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];
    return (
      <>
        <Header {...this.props}></Header>
        <PageDetailTitle
          breadcrumb={breadcrumb}
          data={ItemDetails}
        ></PageDetailTitle>
      </>
    );
  }
}
