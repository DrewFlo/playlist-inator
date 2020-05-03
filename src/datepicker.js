import React, {Component} from 'react'
import moment from 'moment'
import DatePickerr from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import './App.css';
//const moment = require('billboard-top-100/node_modules/moment/moment.js');


class DatePicker extends Component {

    constructor (props) {
        super(props)
        this.state = {
              startDate: new Date()
              }     
    }
  
    handleChange = (event) =>  {
        console.log ("in datepicker", event)
        this.setState({ startDate: event })
        this.test(event)
    }
     
    test = (event) => {
        const dayINeed = 6; // for Saturday 
       
        //const selectedDateAsMoment = new moment((event.getMonth()+1) +"/"+event.getDate() + "/" + event.getFullYear(), 'MM-DD-YYYY')
        var weekdayOfSelectedDate = selectedDateAsMoment.isoWeekday()
       
        const selectedDateAsMoment2 = new moment(event)
       
        const mud2 = selectedDateAsMoment2.add(5, 'days').format('MM-DD-YYYY')
        console.log ("selectedDateAsMoment2", selectedDateAsMoment2)
        console.log ("mud2", mud2)
        //console.log (selectedDateAsMoment.add(5, 'd'))
        // console.log("event as moment" ,selectedDateAsMoment)
        // console.log ("found weekday", weekdayOfSelectedDate)
        // const mud = moment(event, "MM-DD-YYYY").add(14 ,'days')
        // console.log(mud)
        // let newDate
        // switch (weekdayOfSelectedDate) {
        //     case 1:
        //         console.log("case1")
        //         newDate = moment(selectedDateAsMoment, "MM-DD-YYYY").subtract(4 ,'days')
        //         console.log ("still in case 1 ", newDate)
        //         break
        //     case 2:
        //         console.log("case2")
        //         newDate = moment(selectedDateAsMoment).subtract (2 ,'d')
        //         break
        //     case 3:
        //         console.log("case3")
        //         newDate = selectedDateAsMoment.subtract (3 ,'d')
        //         break
        //     case 4:
        //         console.log("case 4")
        //         newDate = moment(selectedDateAsMoment).add (3 ,'days')
        //         break
        //     case 5:
        //         console.log("case5")
        //         newDate = selectedDateAsMoment.add (2 ,'d')
        //         break    
        //     case 6:
        //         console.log("case6")
        //         newDate = selectedDateAsMoment.add (1 ,'d')
        //         break
        //     default:
        //         console.log("case-default")
        //         newDate = selectedDateAsMoment
        // }
   
          
    }
    
    render() {    
      //this.test()
      return (
        <div className="datepicker">
            <p>Pick A Date</p> 
           <DatePickerr selected={this.state.startDate} onChange={this.handleChange}  dateFormat="MM/dd/yyyy"/>
        </div>
      );
    }
  
    
  }
  
  export default DatePicker;