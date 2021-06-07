import {useContext} from 'react';
import {CardContext} from '../CardContext'

function Product() {
    const {count, setCount} = useContext(CardContext);
   
    return (
        <div className="row" >
            <h1> Lightworks Full Version</h1>
            <p> The Best Video Editor For Windows, Linux, Mac OS</p>
            <h2> Price : $99.00 </h2>  
            <button className="btn btn-success btn-outlined" onClick={() => setCount(count + 1)}> Tambah Keranjang </button>
        </div>
    )
}

function SubProduct() {
    return (
    <div>
        <Product />
        <Product />
        <Product />
    </div>
    )
}

export default SubProduct

