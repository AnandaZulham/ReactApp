import {useReducer} from 'react';

const initialState = {value: 1}

const reducers = (state, action) => {
	if(action.type === 'kurang') {
	  if(state.value > 0) {
		return {value: state.value - 1}
	  } else {
		return {value: 0 }
	  }
	} else if (action.type === 'tambah'){
		return {value: state.value+ 1}
	} 
}

function UseReducer() {

    const [count, dispatch] = useReducer(reducers, initialState)
    return (
        <>
        <div className="container">
		  <div className="row">
			<div className="input-group my-4">
			  <button type="button" className="btn btn-primary" onClick={() => dispatch({type: 'kurang'})}>-</button>
			  <input type="text" className="form-control bg-light text-center text-info" placeholder={count.value} disabled/>
			  <button type="button" className="btn btn-primary" onClick={() => dispatch({type: 'tambah'})}>+</button> 
			</div>
		  </div>
        </div>
        </>
    )
}

export default UseReducer;
