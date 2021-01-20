import React from 'react';

import Form from './Form';


class ToDoList2 extends React.Component {
    constructor(props) {
    super(props)
    // Tetapkan state
    this.state = {
      students: [{
        name : 'A'
      }]
    }
}

    //Buat function dengan argument yang menerima parameter dari props addStudent
    addStudent(name) {
    //Buat variabel dan isikan dengan state milik students
    let currentStudents = this.state.students
    //beri method push(beri nilai di akhir) parameter name 
    currentStudents.push({name})
    //Update State, isi students dengan currentStudents yang kita push 
    this.setState({ 
        students: currentStudents
    })
}
    render() {
    return (
        <div className="todolist2"> 
        <Form addStudent={(name) => this.addStudent(name) }  />      
        <List2 students={this.state.students} />
        </div>
    )}       
}

class List2 extends React.Component {
    render() {
        return(
        <div>
        <ul>
            {this.props.students.map((student, index) => {
              return <li key={index}> {student.name}</li>  
            })}
          </ul>
        </div>    
       )
    }
}
export default ToDoList2;
