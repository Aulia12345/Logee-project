import React, {useState, useEffect} from "react";
import { Button } from "antd";
import './FooterPesanan.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const FooterPesanan =()=>{

  const { id } = useParams(); // Extract ID from URL
  const [detailData, setDetailData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    // Fetch detailed data based on ID
    const fetchDetailData = async (id) => {
      try {
        const response = await axios.get(`https://api-logee.vercel.app/catalogs/${id}`);
        setDetailData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
      if (id) {
        fetchDetailData(id); // Fetch data when ID is available
      }
    }, [id]);
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error fetching data!</div>;

    return(
        <div className="bayar">
  <div className="totalBayar">  
  <p className="textBayar">Total Pembayaran</p>
  <p className="harga">Rp {detailData.prices.find(p => p.name === 'Total')?.price || 0}</p>
  </div>
  <a href="/buat-pesanan">
<Button className="buttonBayar">
  Buat Pesanan
</Button>
</a>
</div>
    )
};

export default FooterPesanan;