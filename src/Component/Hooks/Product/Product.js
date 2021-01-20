import {useContext} from 'react';
import {CardContext} from '../CardContext'

function Product() {
    const {count, setCount} = useContext(CardContext);
   
    return (
        <div className="row" >
            <h1> Nama Product </h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, incidunt. Velit quod aspernatur nobis sit!</p>
            <h2> Harga 2.000 </h2>  
            <button className="btn btn-primary" onClick={() => setCount(count + 1)}> Tambah Keranjang </button>
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

