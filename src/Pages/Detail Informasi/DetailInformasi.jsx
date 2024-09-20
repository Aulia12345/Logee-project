import React, {useState, useEffect} from "react";
import './DetailInformasi.css';
import { Card, Col, Row } from 'antd';
import { checklist, img, starfilled } from "../../assets/Assets";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DetailInformasi = () => {
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

  return (
    <div className="body">
      <div>
        <img className="img" src={img} alt="katalog" />
        <h1 className="judulArmada">Solusi Digital Bisnis Logistik</h1>
      </div>

      <div className="card-container">
        <Row gutter={[12,12]}>
          <Col lg={12} md={12} xs={24}>
              <Card className="card1">
                <div className="cardC">
                  <div className="Title">
                    <div className="title">
                      <span className="title1">
                        <p className="pTitle1">{detailData.vehicleType}</p>
                      </span>
                    </div>
                    <div className="subTitle">
                      <span className="pTitle2">
                        <img src={starfilled} alt="" />
                        <p><b>{detailData.rating}</b></p>
                        <p className="pTitle2-2">{detailData.reviews.length} |</p>
                        <p className="pTitle1-2">{detailData.estimatedTime}</p>
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
          </Col>

          <Col lg={12} md={12} xs={24}>
            <Card className="card2">
              <div className="cardKualifikasi">
                <p className="titleCard2">Kualifikasi :</p>
                <ul className="List">
                  {detailData.specs.map((spec, index)=>(
                     <li key={index} className="kualifikasiList">
                     <img className="checklist" src={checklist} alt="" />
                     <p>{spec}</p>
                   </li>
                  ))}
                </ul>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default DetailInformasi;
