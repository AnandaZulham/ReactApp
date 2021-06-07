import React from 'react';

class ToDoList extends React.Component {
    constructor(){
    super()
    this.state = {
        inputItem : '',
        items : []
    }
    }
    
    handleSubmit = (e) => {
 	   e.preventDefault();
  	   this.setState({
		    items : [...this.state.items, this.state.inputItem],
    		inputItem : ''
    	})
    	if(this.state.inputItem === '') {
        	return null;
    	}
}
    
    handleChange = (e) => {
    this.setState({
        inputItem : e.target.value
    })
}
    
    render() {
        return (
        <div className="container">
        	<h2>TodoList</h2>
        	<input onChange ={this.handleChange} placeholder="username" className="form-control input-group-sm"/>
        	<button onClick={this.handleSubmit} className="btn btn-primary mt-3"> Add user </button>
        	<List items={this.state.items}  />
        </div>
        )
    }
}


function List(props) {
    return(
    <ul className="list-group">
        {
        props.items.map((item,index) => 
            <li class="list-group-item" key={index}>{item}</li>
        )
        }
    </ul>
    )
}

export default ToDoList;
