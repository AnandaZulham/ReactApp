import {Link} from 'react-router-dom';
import {CardContext} from './Hooks/CardContext'
import {useContext} from 'react'

function Navbar() {
    const {count} = useContext(CardContext)
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link to="/" className="nav-link text-info"> Home </Link>
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
                    <Link to="/Axios" className="nav-link text-info"> Axios </Link>
                </li>
                
                <li className="nav-item">
                    <Link to="/ButtonToggle" className="nav-link text-info"> Button </Link>
                </li>
                <li className="nav-item">
                    <button className="btn btn-danger"> {count}</button>
                </li>
            </ul>
        </div>
    </nav>
    )
}

export default Navbar
