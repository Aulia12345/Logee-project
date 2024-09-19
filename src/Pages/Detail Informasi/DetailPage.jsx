import React from "react";
import './DetailInformasi.css';
import { gmap, star, starfilled, truckA } from "../../assets/Assets";
import { Card, Row, Col, Space, Button } from "antd";
import { pengemudi, ulasan } from "../Katalog Pages/Tabel Katalog/cardData";
import ChatButton from "../../Komponen/ChatButton/ChatButton";
import FooterPesanan from "../../Komponen/Footer-component/Footer-pesanan/FooterPesanan";

const DetailPage = () => {
  return (
    <div>
    <div className="descContainer">
      {/* Deskripsi Section */}
      <div>
        <h1 className="judulDetail">
          DESKRIPSI
          <span>
            <img className="icon" src={truckA} alt="truck icon" />
          </span>
        </h1>
        <p className="desc">
          Trailer 20 Feet adalah pilihan ideal untuk transportasi muatan besar. Didesain kokoh dan stabil, cocok untuk berbagai medan. Kapasitas besar, siap mengakomodasi kebutuhan bisnis Anda. Dilengkapi fitur keselamatan, menjamin keamanan muatan. Efisien dan andal dalam setiap perjalanan.
        </p>
      </div>

      <div className="ulasan">
      <h1 className="judulDetail">ULASAN</h1>
      <Space  size={12} className="review-space">
  {ulasan.map((review) => (
    <Card key={review.id} className="review-card"
    style={{
      maxWidth: 250,
    }}>
      <Row className="review-row" >
        <Col lg={6} md={8} xs={12} className="review-col">
          <div className="review-content">
            <div className="circle-frame frame2">
              <img
                src={review.foto}
                className="circle-img"
                alt="Driver profile"
              />
            </div>
            <div className="review-info">
              <p className="driver-name">{review.pengemudi}</p>
              <div className="shipper-info">
                <p className="shipper-name">{review.shipper} |</p>
                <p className="rating">
                  <span  >
                    <img src={starfilled} alt="Star rating" className="star-icon" />
                  </span>
                  {review.rating}
                </p>
                <p className="review-text">{review.reviews}</p>
              </div>
            </div>
          </div>
          <p className="review-description">{review.desc}</p>
        </Col>
      </Row>
    </Card>
  ))}
</Space>
      </div>

      {/* Detail Section */}
      <div>
        <Card bordered={false} className="cardDetail">
          <Row gutter={[12, 12]}>
            {/* Rute Section */}
            <Col lg={12} md={24} xs={24}>
              <h1 className="judulDetail">RUTE</h1>
              <img className="gmap" src={gmap} alt="Google Map" />
            </Col>

            {/* Pengemudi Section */}
            <Col lg={12} md={24} xs={24} className="pengemudi-section">
              <h1 className="judulDetail">PENGEMUDI</h1>
              <div className="pengemudiCard">
              {pengemudi.map((driver) => (
                <div key={driver.id} className="pengemudi-card">
                  <div className="circle-frame">
                    <img
                      src={driver.foto}
                      alt={driver.pengemudi}
                      className="circle-img"
                    />
                  </div>
                  <div className="pengemudi-info">
                    <p className="pengemudi-name">{driver.pengemudi}</p>
                    <p className="pengemudi-position">
                      {driver.posisi} | {driver.total}
                    </p>
                  </div>
                </div>
              ))}
              </div>
            </Col>
          </Row>
        </Card>
      </div>

      <div className="payment">
      <h1 className="judulDetail">RINCIAN PEMBAYARAN</h1>
      <div className="payment-summary">
  <div className="payment-item">
    <p className="item-label">Sub total pengiriman</p>
    <p className="item-value">Rp 150.000</p>
  </div>
  <div className="payment-item">
    <p className="item-label">Pembayaran Tol</p>
    <p className="item-value">Rp 20.000</p>
  </div>
  <div className="payment-item">
    <p className="item-label">Pembayaran Proteksi Keamanan</p>
    <p className="item-value">Rp 20.000</p>
  </div>
  <div className="payment-item total-payment">
    <p className="item-label total-label"><b>Total Pembayaran</b></p>
    <p className="item-value total">Rp 190.000</p>
  </div>
</div>
      </div>
      <ChatButton />

      <div>
     
</div>
    </div>
    <FooterPesanan/>
    </div>
  );
};

export default DetailPage;
