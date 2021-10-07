import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Homepage from './Components/Homepage/Homepage'
import About from './Components/About/About';


class App extends Component {

  render(){
    return(
      <div>
        <div>
          <BrowserRouter>
            <Route path="/" exact component={Homepage}/>
            <Route path = "/about" exact component={About} />
          </BrowserRouter>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
      
    )
  }
}

export default App;
