import React, {useState, useEffect} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
function Axios () {
    const [data, setData] = useState([])

    useEffect( () => {
        axios.get('http://jsonplaceholder.typicode.com/posts').then(res => {
            setData(res.data)
        })
    },[])
    return(
        <div>
            <h1>Star Wars Movie</h1>
            {data.map(item => {
                return (<div className="card" style={{width: "18rem"}}>
                    <div className="card-body">
                        <h5 className="card-title">{item.id}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{item.title}</h6>
                        <p className="card-text">{item.body}</p>
                    </div>
                </div>)
            })}
        </div>
        )
}

export default Axios
