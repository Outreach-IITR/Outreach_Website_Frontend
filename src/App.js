import React from 'react';
import Footer from './Components/Footer/Footer';
import Homepage from './Components/Homepage/Homepage'
import Navbar from './Components/Navbar/Navbar'
import Updates from './Components/Homepage/Updates';
import Blog from './Components/Homepage/Blog';



function App() {
  return (
    <div>
      <Navbar />
      <Homepage />
      <Updates />
      <Blog />
      <Footer/>
    </div>
  );
}

export default App;
