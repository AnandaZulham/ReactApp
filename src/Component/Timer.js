import React from 'react';
import {useContext} from 'react';
import {CardContext} from './Hooks/CardContext';


function Data() {
    const dataContext = useContext(CardContext)
    return (
        <p> {dataContext.name} </p>
    )
}

class Timer extends React.Component { 
	constructor() {
	super()
		this.state={
            time : 0
		    }
	}
	
	componentDidMount() {
		this.addInterval = setInterval(() => this.increase(), 1000)	
	}
	
	increase() {
	    this.setState({
	        time : this.state.time + 1
	    })
	    if(this.state.time === 11) {
          this.setState({
            time : 0
          })
        }
	}
	render() {
	return(
	       <div>
	        <p><b>Time {this.state.time} Detik</b></p>
	        <Data />
	       </div>    
	    )
	}	
}

export default Timer;
