import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Homepage from "./Components/Homepage/Homepage";
import About from "./Components/About/About";
import Academics from  "./Components/Academics/Academics";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <BrowserRouter>
            <Route path="/" exact component={Homepage} />
            <Route path="/about" exact component={About} />
            <Route path="/academics" exact component={Academics} />
          </BrowserRouter>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
