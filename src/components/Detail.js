import React, { Component } from "react";
import "./styles/style.scss";
import Navbar from "./Navbar";
import Default from "./Default";
import Footer from "./Footer";
import Detper from "./Detper";

class Detail extends Component {
  render() {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const type = params.get("id");
          

    return (
      <React.Fragment>
        <Navbar />
       
          {type == null ? <Default /> : <Detper />}
         
        <Footer />
      </React.Fragment>
    );
  }
}


export default Detail;
