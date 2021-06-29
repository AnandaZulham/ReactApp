import {useState} from 'react'


export default function TableComponent(){
	const [personal,setPersonal] = useState([
		{id: 1, name: 'Dwi', age: 18, address: 'Lampung'},
		{id: 2, name: 'Budi', age: 20, address: 'Bandung'},
		{id: 3, name: 'Andy', age: 19, address: 'Bogor'},
	])
	return (
	  <div className="container mt-3">
		<h5 className="py-3 text-center text-white bg-primary bg-gradient">Table Component</h5>
		<table className="table table-striped">
		  <thead>
		    <tr>
		      <th>Name</th>
		      <th>Age</th>
		      <th>Address</th>
		    </tr>
		  </thead>
		  <tbody>
		    {personal.map((p, i) => {
			if(i % 2 === 0) {
			return (
			 <tr className="table-dark">
			  <th>{p.id}</th>
			  <td>{p.name}</td>
			  <td>{p.address}</td>
			 </tr>
			)
			} else {
			 return (
			  <tr className="table-info">
			   <th>{p.id}</th>
			   <td>{p.name}</td>
			   <td>{p.address}</td> 
			  </tr>
			)
			}
		    })}
		  </tbody>
		</table>
	  </div>
	)
}


