import React from "react";
import { render } from "react-dom";
import Header from "./components/header/Header"
import Content from "./components/content/Content"
import Date from "./components/content/Date"
import Footer from "./components/footer/Footer"

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Date />
        <Footer />
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));
