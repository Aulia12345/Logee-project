import React, { useState, useEffect } from "react";
import './DetailInformasi.css';
import { foto, foto2, gmap, starfilled, truckA } from "../../assets/Assets";
import { Card, Row, Col, Space, Button } from "antd";
import ChatButton from "../../Komponen/ChatButton/ChatButton";
import FooterPesanan from "../../Komponen/Footer-component/Footer-pesanan/FooterPesanan";
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DetailPage = () => {
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
    <div>
      <div className="descContainer">
        {/* Description Section */}
        <div>
          <h1 className="judulDetail">
            DESKRIPSI
            <span>
              <img className="icon" src={truckA} alt="truck icon" />
            </span>
          </h1>
          <p className="desc">{detailData.desc}</p>
        </div>

        {/* Reviews Section */}
        <div className="ulasan">
          <h1 className="judulDetail">ULASAN</h1>
          <Space size={12} className="review-space">
            {detailData.reviews.map((review, index) => (
              <Card
                key={index}
                className="review-card"
                style={{ maxWidth: 250 }}
              >
                <Row className="review-row">
                  <Col lg={6} md={8} xs={12} className="review-col">
                    <div className="review-content">
                      <div className="circle-frame frame2">
                        <img className="circle-img" src={foto} alt="" />
                      </div>
                      <div className="review-info">
                        <p className="driver-name">{review.name}</p>
                        <div className="shipper-info">
                          <p className="shipper-name">{detailData.vendor} |</p>
                          <p className="rating">
                            <span>
                              <img src={starfilled} alt="Star rating" className="star-icon" />
                            </span>
                           {detailData.rating}
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="review-description">{review.review}</p>
                  </Col>
                </Row>
              </Card>
            ))}
          </Space>
        </div>

        {/* Details Section */}
        <div>
          <Card bordered={false} className="cardDetail">
            <Row gutter={[12, 12]}>
              {/* Route Section */}
              <Col lg={12} md={24} xs={24}>
                <h1 className="judulDetail">RUTE</h1>
                <img className="gmap" src={gmap} alt="Google Map" />
              </Col>

              {/* Drivers Section */}
              <Col lg={12} md={24} xs={24} className="pengemudi-section">
                <h1 className="judulDetail">PENGEMUDI</h1>
                <div className="pengemudiCard">
                  {detailData.drivers.map((driver, index) => (
                    <div key={index} className="pengemudi-card">
                      <div className="circle-frame">
                      <img className="circle-img" src={foto2} alt="" />
                      </div>
                      <div className="pengemudi-info">
                        <p className="pengemudi-name">{driver.name}</p>
                        <p className="pengemudi-position">{driver.role} | {driver.delivery} deliveries</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
          </Card>
        </div>

        {/* Payment Details */}
        <div className="payment">
          <h1 className="judulDetail">RINCIAN PEMBAYARAN</h1>
          <div className="payment-summary">
            {detailData.prices.map((priceItem, index) => (
              <div key={index} className="payment-item">
                <p className="item-label">{priceItem.name}</p>
                <p className="item-value">Rp {priceItem.price}</p>
              </div>
            ))}
            {/* Display total payment */}
            <div className="payment-item total-payment">
              <p className="item-label total-label"><b>Total Pembayaran</b></p>
              <p className="item-value total">Rp {detailData.prices.find(p => p.name === 'Total')?.price || 0}</p>
            </div>
          </div>
        </div>

        {/* Chat Button and Footer */}
        <ChatButton />
    
      </div>
      <FooterPesanan />
    </div>
  );
};

export default DetailPage;
