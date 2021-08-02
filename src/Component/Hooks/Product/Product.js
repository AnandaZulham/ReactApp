import {useContext} from 'react';
import {CardContext} from '../CardContext'

function Product() {
    const {count, setCount} = useContext(CardContext);
    return (
	      <div className="card h-100">
	    <img src="https://cdn.pixabay.com/photo/2014/09/27/13/45/notebook-463490_640.jpg" className="card-img-top w-100" alt="Laptop Asus" />
	       <div className="card-body">
            <h5 className="card-title">Laptop Asus</h5>
            <p className="card-text">Asus Vivobook 14 with Intel core i7 16GB RAM 1TB SSD</p>
            <h6>Price : $99.00</h6>  
            <button className="btn btn-success btn-md d-inline-block text-primary my-3" onClick={() => setCount(count + 1)}><i className="bi bi-cart"></i> Add To Cart</button>
	       </div>
	    </div>
    )
}

function SubProduct() {
    return (
    <div className="container mt-3">
	<div className="row row-cols-1 row-cols-md-2 g-2">
	    <div className="col">
	      <Product />
	    </div>
	    <div className="col">
	      <Product />
	    </div>
	    <div className="col">
	      <Product />
	    </div>
	</div>
    </div>
    )
}

export default SubProduct

