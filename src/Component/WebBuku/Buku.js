import React from 'react';

const Buku = (props) => {
    const onClickHandle = () => {
        props.bukuDipilih(props.buku)
    }
    return (

    <div className="list-group-item" >
        <h1> {props.buku.judul} </h1>
        <p> {props.buku.pengarang} </p>
        <button className="btn btn-primary" onClick={onClickHandle}> Details </button>
    </div>
    )
}

export default Buku
