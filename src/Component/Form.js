import React, { Component } from 'react'

class Form extends Component {
    constructor() {
        super()
              
    this.state = {
        currentName : ''
    }
}   

addNewStudent() {
    this.props.addStudent(this.state.currentName)
    this.setState({
        currentName : ''
    })
}
        
    render() {
        return (
            <div >
            <h2> TodoList 2 </h2>
            <input type="text" placeholder="Masukkan Nama" value={this.state.currentName} name="student_name" onChange= {(e) => this.setState({ currentName : e.target.value })} />
            <input type="submit" value="Add Student" onClick = {() => this.addNewStudent()} />
            </div>
            
        )
    }
}

export default Form

