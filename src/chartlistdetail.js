import React, {Component} from 'react';
const { getChart } = require('billboard-top-100/billboard-top-100.js');

class Chartlistdetail extends Component {

  constructor (props) {
      super(props)
      this.state = { 
        detaillist : [] ,
        detailcall : false,
      }     
  }

  handleChange = (event) =>  {
    
  }
   
  detaillist = () => {
    if (!this.state.detailcall && this.props.targetList ) {
      getChart('hot-100', '2020-04-04',(err, chart) => {
          if (err) console.log(err)
          console.log (chart)
          //this.setState({'chartlist' : (charts.filter((ele, index ) => index < 5 ))})
          //this.setState({'chartcall' : true})
      })
      }
  }
  
  render() {    
    this.detaillist()
    return (
      <div className="charlistdetail">
          <div>
            list of stuff! {this.props.targetList}
            {this.state.detaillist.map((item, idx) => 
            <div key={idx + 9}>{item.name}</div>)}
          </div>
      </div>
    );
  }

  
}

export default Chartlistdetail;