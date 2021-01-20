import {useReducer} from 'react';
import screen from './screen.png';

const initialState = 0

const reducer = (state, action) => {
    console.log(action, state)
    switch (action) {
        case "tambah": return state + 1
        case "kurang": return state - 1;
        default : return state;
    }

}

function UseReducer() {

    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <>
        <div className="container">
            <div className="row-card">
                    <div className="card">
                        <img src={screen} alt='asdaadaa' />
                    </div>
                <div className="col-2">
                    <h2> ScreenShoot </h2>
                    <p> Harga </p>
                    <h4> Rp.157.000 </h4>
                    <p> Jumlah </p>
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
