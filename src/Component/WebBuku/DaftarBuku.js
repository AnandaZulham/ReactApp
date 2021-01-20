import React from 'react';
import Buku from './Buku';

const DaftarBuku = (props) => {
    const renderList = props.daftarbuku.map((buku) => {
        return (
        <div className="container ">
            <Buku bukuDipilih={props.bukuDipilih} key={buku.id} buku={buku} />
        </div>
        )
    })
    
    return (
    <React.Fragment>
        <h1> Daftar Buku </h1>
        {renderList}
    </React.Fragment>
    )
}

export default DaftarBuku;
