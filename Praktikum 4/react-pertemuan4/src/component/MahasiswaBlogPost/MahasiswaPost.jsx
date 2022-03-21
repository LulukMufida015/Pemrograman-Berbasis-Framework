import React from "react";

const MahasiswaPost = (props) => {
    return(
        <tr>
            <td><div className="gambar-artikel">
                <img src="http://placeimg.com/120/120/any" alt="Gambar Tumbnail Artikel" /></div></td>
            <td>{props.NIM}</td>
            <td>{props.nama}</td>
            <td>{props.alamat}</td>
            <td>{props.hp}</td>
            <td>{props.angkatan}</td>
            <td>{props.status}</td>
            <td><button className="btn btn-sm btn-warning" id="button-hapus" onClick={() => props.hapusArtikel(props.idArtikel)}>Hapus</button></td>      
        </tr>          
    )
}

export default MahasiswaPost;