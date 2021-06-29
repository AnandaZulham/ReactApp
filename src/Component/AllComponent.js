import React, {useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {CardContext} from './Hooks/CardContext';
import Home from './Home'
import Timer from './Timer';
import ToDoList from './ToDoList';
import Navbar from './Navbar';
import SubProduct from './Hooks/Product/Product';
import ButtonToggle from './Button'
import UseReducer from './Hooks/UseReducer'
import TableComponent from './TableComponent'

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
                <Route path="/SubProduct">
                    <SubProduct />
                </Route>
                <Route path="/ButtonToggle" component={ButtonToggle}>
                </Route>
                <Route path="/UseReducer">
                    <UseReducer />
                </Route>
	    	<Route path="/TableComponent" component={TableComponent}>
	    	</Route>
            </Switch>
        </CardContext.Provider>
        </div>
        </BrowserRouter>
    )    
}


export default AllComponent;
