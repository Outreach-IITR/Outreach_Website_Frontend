import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Homepage from "./Components/Homepage/Homepage";
import About from "./Components/About/About";
import Academics from "./Components/Academics/Academics";
import Achievements from "./Components/Achievements/Achievements";
import Life from "./Components/LifeAtIITR/Life";
import Placements from "./Components/Placements/Placements";
import Loader from "./Components/Loader/Loader";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    window.addEventListener("load", () => {
      setTimeout(() => {
        this.setState({ isLoading: false });
      }, 2000);
    });
  }

  render() {
    return (
      <>
        {this.state.isLoading && <Loader />}
        <div style={this.state.isLoading ? { display: "none" } : {}}>
          <div>
            <BrowserRouter>
              <Route path="/" exact component={Homepage} />
              <Route path="/about" exact component={About} />
              <Route path="/academics" exact component={Academics} />
              <Route path="/achievements" exact component={Achievements} />
              <Route path="/lifeatiitr" exact component={Life} />
              <Route path="/placements" exact component={Placements} />
            </BrowserRouter>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

export default App;
