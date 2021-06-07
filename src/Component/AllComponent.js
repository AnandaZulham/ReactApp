import React, {useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {CardContext} from './Hooks/CardContext';
import './style.css'
import Home from './Home'
import Timer from './Timer';
import ToDoList from './ToDoList';
import Navbar from './Navbar';
import SubProduct from './Hooks/Product/Product';
import ButtonToggle from './Button'
import UseReducer from './Hooks/UseReducer'

function AllComponent() {
    const [count, setCount] = useState(12);
    return (
        <BrowserRouter>
        <div className="container">
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
                <Route path="/SubProduct">
                    <SubProduct />
                </Route>
                <Route path="/ButtonToggle" component={ButtonToggle}>
                </Route>
                <Route path="/UseReducer">
                	<UseReducer />
                </Route>
            </Switch>
        </CardContext.Provider>
        </div>
        </BrowserRouter>
    )    
}


export default AllComponent;
