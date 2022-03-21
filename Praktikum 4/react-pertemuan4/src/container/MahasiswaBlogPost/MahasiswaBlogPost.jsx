import React, { Component } from "react";
import Post from "../../component/MahasiswaBlogPost/MahasiswaPost";
import './MahasiswaBlogPost.css';

class MahasiswaBlogPost extends Component {
    state = {
        listArtikel: [],
        insertArtikel: {
            id: 1,
            NIM: "",
            nama: "",
            alamat: "",
            hp: "",
            angkatan: "",
            status: ""
        }
    }
    ambilDataDariServerAPI() {
        fetch('http://localhost:3001/mahasiswa?_sort=id&_order=desc')
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listArtikel: jsonHasilAmbilDariAPI
                })
            })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    handleHapusArtikel = (data) => {
        fetch(`http://localhost:3001/mahasiswa/${data}`, { method: 'DELETE' })
            .then(res => {
                this.ambilDataDariServerAPI()
            })
    }

    handleTambahArtikel = (event) => {
        let formInsertArtikel = { ...this.state.insertArtikel };
        let timestamp = new Date().getTime();
        formInsertArtikel['id'] = timestamp;
        formInsertArtikel[event.target.name] = event.target.value;
        this.setState({
            insertArtikel: formInsertArtikel
        });
    }

    handleTombolSimpan = () => {
        fetch('http://localhost:3001/mahasiswa', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertArtikel)
        })
            .then((Response) => {
                this.ambilDataDariServerAPI();
            })
    }

    render() {
        return (
            <div className="post-artikel">
                <div className="form pb-2 border-bottom" >
                    <div className="form-input">
                        <div className="form-group row">
                            <center><h3>Tambah Data Mahasiswa</h3></center>
                            <label htmlFor="title" className="col-sm-2 col-form-label">NIM</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="NIM" name="NIM" onChange={this.handleTambahArtikel} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="title" className="col-sm-2 col-form-label">Nama</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="nama" name="nama" onChange={this.handleTambahArtikel} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="body" className="col-sm-2 col-form-label">ALamat</label>
                            <div className="col-sm-10">
                                <textarea className="form-control" id="alamat" name="alamat" onChange={this.handleTambahArtikel} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="title" className="col-sm-2 col-form-label">No. HP</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="hp" name="hp" onChange={this.handleTambahArtikel} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="title" className="col-sm-2 col-form-label">Angkatan</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="angkatan" name="angkatan" onChange={this.handleTambahArtikel} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="title" className="col-sm-2 col-form-label">Status</label>
                            <div className="col-sm-10">
                                <select className="form-control" name="status" id="status" onChange={this.handleTambahArtikel}>
                                    <option value="Aktif">Aktif</option>
                                    <option value="Lulus">Lulus</option>
                                    <option value="Lulus">Cuti</option>
                                </select>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary" id="button-simpan" onClick={this.handleTombolSimpan}>Simpan</button>
                    </div>
                </div>
                <div class="container mt-3">
                    <h3>Tabel Mahasiswa</h3>
                    <p>Data Mahasiswa Politeknik Negeri Malang</p>
                    <table class="table table-bordered">
                        <thead class="table-dark">
                            <tr>
                                <th>Foto</th>
                                <th>NIM</th>
                                <th>Nama</th>
                                <th>Alamat</th>
                                <th>No Handphone</th>
                                <th>Angkatan</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.listArtikel.map(artikel => {
                                    return <Post key={artikel.id} NIM={artikel.NIM} nama={artikel.nama} alamat={artikel.alamat}
                                        hp={artikel.hp} angkatan={artikel.angkatan} status={artikel.status} idArtikel={artikel.id}
                                        hapusArtikel={this.handleHapusArtikel} />
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
}

export default MahasiswaBlogPost;