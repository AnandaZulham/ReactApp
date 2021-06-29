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
            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                    <Link to="/" className="nav-link text-danger"> Home </Link>
                </li>
                <li className="nav-item">
                    <Link to="/SubProduct" className="nav-link text-info"> SubProduct </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Timer" className="nav-link text-info"> Timer </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Todolist1" className="nav-link text-info"> TodoList </Link>
                </li>
                <li className="nav-item">
                    <Link to="/ButtonToggle" className="nav-link text-info"> Button </Link>
                </li>
                <li className="nav-item">
                    <button className="btn btn-danger">{count}</button>
                </li>
            </ul>
        </div>
    </nav>
	    </div>
    )
}

export default Navbar
