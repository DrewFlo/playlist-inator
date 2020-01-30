import React, {Component} from 'react';
import './App.css';
import Chartlistdd from './chartlistdd'

//const getChart  = require('billboard-top-100.js');

class App extends Component {
  state = {} 

  charlistdd_callback (value) {
    console.log("charlistdd_callback: ", value)
  }
  render() {
    let view = <h1>Playlist-inator!</h1>

    return (
      <div className="App">
        {view}
        <div className="billboard">
          <Chartlistdd cbfunc={this.charlistdd_callback}/>
          
        </div>
      </div>
    );
  }

  
}

export default App;
