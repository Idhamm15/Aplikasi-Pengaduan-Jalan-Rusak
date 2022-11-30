// Importing Libraries
import React from 'react';

// Importing CSS
import './Navbar.css'

function Navbar() {
    return (
        <React.Fragment>
            <div class="panelkontak">
        <a class="active" href="#home"></a>
        <a href="#">+62 8389 5395 851</a>
        <a href="#">LAYANANPENGADUAN@GMAIL.COM  </a>
      </div>

    <div class="topnav-1">
        <a href="#">LAYANAN PENGADUAN KOTA TEGAL</a>

        <div class="topnav">
            <a class="active" href="#home"></a>
            <a href="#"></a>
            <a href="#"></a>
            <a href="#"></a>
            <a href="#"></a>
            <a href="#"></a>
            <a href="#"></a>
           
            


            <a class="active" href="#home">BERANDA</a>
            <a href="#">TENTANG</a>
            <a href="#">PUSAT PENGADUAN</a>
            <a href="#">ARTIKEL</a>
            <a href="#">KONTAK</a>
        </div>
    </div>
        </React.Fragment>
        
    )
}

export default Navbar;