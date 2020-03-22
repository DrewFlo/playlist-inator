import React, {Component} from 'react';
const { listCharts } = require('./billboard-top-100');

class Chartlistdd extends Component {

    constructor (props) {
        super(props)
        this.state = { 
        chartlist : [] ,
        chartcall : false,
        listValue : "DEFAULT" }     
    }

    handleChange = (event) =>  {
        this.setState({listValue: event.target.value})
        this.props.cbfunc( event.target.value)
    }
   
    billboardlist = () => {

        if (!this.state.chartcall) {
            listCharts((err, charts) => {
                if (err) console.log(err)
                this.setState({'chartlist' : (charts.filter((ele, index ) => index < 5 ))})
                this.setState({'chartcall' : true})
            })
            }
        }
  

   
  
  render() {
    this.billboardlist()
    
    return (
      <div className="charlistdd">
          <select value={this.state.listValue} onChange={this.handleChange}>
          <option value="DEFAULT" disabled>Select</option> 
          {this.state.chartlist.map((item, idx) => 
            <option key={idx} value={item.name}>{item.name}</option>)}
          </select>
      </div>
    );
  }

  
}

export default Chartlistdd;