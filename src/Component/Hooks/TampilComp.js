import React from 'react';

function TampilComp(props) {
    return (
    <div>
        <h1> Hello {props.username} </h1>
        <h2> {props.jumlah} </h2>
        <button onClick={() => props.fungsi(props.jumlah + 1)} disabled={props.disabled}> Tambah </button>
    </div>
   )
}

export default TampilComp;
