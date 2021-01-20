import React, {Component} from 'react';
import DaftarBuku from './DaftarBuku';
import DetailsBuku from './DetailsBuku'

class Apps extends Component {
    state = {
        daftarBuku : [
        {id: 1, judul:' Tutorial HTML5 Lengkap', tahun:'2017', pengarang:'Ananda Zulham', penerbit: 'No Name', sinopsis:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. '},
        {id: 2 , judul:' Tutorial Framework CSS Taildwinds', tahun:'2015', pengarang:'Ananda Zulham', penerbit: 'No Name', sinopsis:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. '},
        {id: 3, judul:'Menguasai React JS dalam 1 bulan', tahun:'2013', pengarang:'Ananda Zulham', penerbit: 'No Name', sinopsis:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. '},
        {id: 4, judul:'Membuat aplikasi Mobile dengan React Native', tahun:'2016', pengarang:'Ananda Zulham', penerbit: 'No Name', sinopsis:'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. '},
        {id: 5, judul:'Menjadi FullStack Developer', tahun:'2019', pengarang:'Ananda Zulham', penerbit: 'No Name', sinopsis:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. '},
        {id: 6, judul:'Mengenal Lebih dalam tentang Back End', tahun:'2012', pengarang:'Ananda Zulham', penerbit: 'No Name', sinopsis:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. '}
        ],
        bukuTerpilih : null
    }
    
    bukuDipilih = (buku) => {
        this.setState({
            bukuTerpilih:buku
        })
    }
    render() {
    return (
    <div className="container">
        <div className="row-cols-8">
            <div className="col-lg-8" style={{float:"left"}}>
                <DaftarBuku bukuDipilih={this.bukuDipilih} daftarbuku={this.state.daftarBuku}/>
            </div>
            <div className="col-lg-6" >
                <DetailsBuku buku={this.state.bukuTerpilih} />
            </div>
        </div>
    </div> 
    )
    }
}

export default Apps
