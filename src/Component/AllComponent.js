import React, {useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {CardContext} from './Hooks/CardContext';
import './style.css';

import Home from './Home'
import Timer from './Timer';
import ToDoList from './ToDoList';
import ToDoList2 from './ToDoList2';
import State from './Hooks/UseState';
import Navbar from './Navbar';
import SubProduct from './Hooks/Product/Product';
import Axios from './axios'
import ButtonToggle from './Button'

function AllComponent() {
    const [count, setCount] = useState(12);
    return (
        <BrowserRouter>
        <div>
        <CardContext.Provider value={{count,setCount}}>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/Timer">
                    <Timer />
                </Route>
                <Route path="/ToDoList1">
                    <ToDoList />
                </Route >
                <Route path="/ToDoList2">
                    <ToDoList2 />
                </Route >
                <Route path="/State">
                    <State />
                </Route >
                <Route path="/SubProduct">
                    <SubProduct />
                </Route>
                <Route path="/Axios">
                    <Axios />
                </Route>
                <Route path="/ButtonToggle" component={ButtonToggle}>

                </Route>
            </Switch>
        </CardContext.Provider>
        </div>
        </BrowserRouter>
    )    
}


export default AllComponent;
