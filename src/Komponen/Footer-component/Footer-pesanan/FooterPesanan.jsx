import React from "react";
import { Button } from "antd";
import './FooterPesanan.css'

const FooterPesanan =()=>{
    return(
        <div className="bayar">
  <div className="totalBayar">
  <p className="textBayar">Total Pembayaran</p>
  <p className="harga">Rp 190.000</p>
  </div>
<Button className="buttonBayar">
  Buat Pesanan
</Button>
</div>
    )
};

export default FooterPesanan;