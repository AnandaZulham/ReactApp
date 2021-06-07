import {useReducer} from 'react';

const initialState = 0
const price = 95
const reducer = (state, action) => {
    console.log(action, state)
    switch (action) {
        case "tambah": return state + 1
        case "kurang": return state - 1
        default : return state;
    }

}

function UseReducer() {

    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <>
        <div className="container">
            <div className="row-card">
                <div className="col">
                    <h1>Davinci Resolve</h1>
                    <h4> The Best Professional Video Editor </h4>
                    <p> Price : ${price}.00 </p>
                    <div className="row">
                        <div className="col"> 
                            <button className="btn btn-primary" onClick={() => dispatch('kurang')}>-</button>
                        </div>
                        <div className="col"> {count} </div> 
                        <div className="col"> 
                            <button className="btn btn-success" onClick={() => dispatch('tambah')}>+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default UseReducer;
