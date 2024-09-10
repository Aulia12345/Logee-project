import React from "react";
import { img2 } from "../../../assets/Assets";

import './KontenKatalog.css'
import ChatButton from "../../../Komponen/ChatButton/ChatButton";

const KontenKatalog =()=>{

return(
    <div className="kontenKatalog">
        <h1>Pilih Armada Pengiriman</h1>
        <div className="isiKonten">
        <img src={img2} alt="" />
        <h2 className="h2">Ayo Temukan Armada Terbaikmu</h2>
        <p className="textKatalog">Isi dan lengkapi data untuk mendapatkan armada yang paling sesuai dengan kebutuhanmu</p>
        </div>
        <div>
        <ChatButton />
      </div>
        
    </div>
)
};

export default KontenKatalog;