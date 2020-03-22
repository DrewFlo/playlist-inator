import React, {Component} from 'react';
import './App.css';
import Chartlistdd from './chartlistdd'
import Chartlistdetail from './chartlistdetail'

const { getChart } = require('./billboard-top-100');

class App extends Component {
  state = {
    selectedChartList :'' 
  } 

  charlistdd_callback = (value) => {
    console.log("charlistdd_callback: ", value)
    this.setState ({selectedChartList : value})
    getChart((err, chart) => {
      if (err) console.log(err);
      console.log(chart)
    });
  }

  charlistdetail_callback = (value) => {
    console.log("charlistdetail_callback: ", value)
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
//<Chartlistdetail targetList = {this.state.selectedChartList} cbfunc={this.chartlistdetail_callback}/>

export default App;
