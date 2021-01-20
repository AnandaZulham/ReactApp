import React, {useState} from 'react';

import TampilComp from './TampilComp';

const State = () => {
    const [jumlah, setJumlah] = useState(1);
    const [dataLogin] = useState({ username : "Ananda", token:"12345", isLogin:false})
    // Cek Kondisi, Login atau belum

    let tampil;
    if(dataLogin.isLogin){
    tampil = <TampilComp
        username= {dataLogin.username}
        fungsi = {setJumlah.bind(this)}
        jumlah = {jumlah}
    />
    } else {
        tampil =<TampilComp username="Maaf Anda Belum Login" disabled={true} />
    }

    return (
        <div>
        <p>{jumlah}</p>
        <button onClick={() => setJumlah(jumlah + 1)}> Tambah </button>
        {tampil}
        </div>
    )
}

export default State;
