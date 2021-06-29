import {Link} from 'react-router-dom';
import {CardContext} from './Hooks/CardContext'
import {useContext} from 'react'


function Navbar() {
    const {count} = useContext(CardContext)
    return (
	    <div className="container">
    <nav className="navbar navbar-expand-xs navbar-light bg-light  mt-5">
    	<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarcontent">
    	  <span className="navbar-toggler-icon"></span>
    	</button>
        <div className="collapse navbar-collapse" id="navbarcontent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item p-2">
                    <Link to="/" className="nav-link"> Home </Link>
                </li>
                <li className="nav-item p-2">
                    <Link to="/SubProduct" className="nav-link"> SubProduct </Link>
                </li>
                <li className="nav-item p-2">
                    <Link to="/Timer" className="nav-link"> Timer </Link>
                </li>
                <li className="nav-item p-2">
                    <Link to="/Todolist1" className="nav-link"> TodoList </Link>
                </li>
                <li className="nav-item p-2">
                    <Link to="/ButtonToggle" className="nav-link"> Button </Link>
                </li>
                <li className="nav-item p-2">
                    <Link to="/TableComponent" className="nav-link"> TableComponent </Link>
                </li>
	    	<li className="nav-item p-2">
                    <button className="btn btn-danger">{count}</button>
                </li>
            </ul>
        </div>
    </nav>
	    </div>
    )
}

export default Navbar
