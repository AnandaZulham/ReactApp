import React from 'react';

const DetailsBuku = ({buku}) => {
if(!buku) {
    return (
        <div> Detail Buku </div>
    )
}
    return (
        <div> 
        <h1> Detail Buku </h1>
            <table className="table-sm table-bordered table-primary lead">
                <tr>
                    <td> Judul Buku </td>
                    <td> {buku.judul} </td>
                </tr>
                <tr>
                    <td> Pengarang </td>
                    <td> {buku.pengarang} </td>
                </tr>
                <tr>
                    <td> Tahun Terbit </td>
                    <td> {buku.tahun} </td>
                </tr>
                <tr>
                    <td> Penerbit </td>
                    <td> {buku.penerbit} </td>
                </tr>
                <tr>
                    <td> Sinopsis </td>
                    <td> {buku.sinopsis}</td>
                </tr>
            </table>
         </div>
    )
}

export default DetailsBuku
