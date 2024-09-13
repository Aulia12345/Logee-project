import React from "react";
import './DetailInformasi.css';
import { Card, Col, Row } from 'antd';
import { checklist, img, starfilled } from "../../assets/Assets";
import { cardData } from "../Katalog Pages/Tabel Katalog/cardData";

const DetailInformasi = () => {
  // Find the selected card based on ID
  const selectedCard = cardData.find((card) => card.id === 1);

  return (
    <div className="body">
      {/* Banner Section */}
      <div>
        <img className="img" src={img} alt="katalog" />
        <h1 className="judulArmada">Solusi Digital Bisnis Logistik</h1>
      </div>

      {/* Card Container */}
      <div className="card-container">
        <Row gutter={[12, 12]}>
          {/* Card 1 - Selected Card Info */}
          <Col lg={12} md={12} xs={24}>
            {selectedCard && (
              <Card key={selectedCard.id} className="card1">
                <div className="cardC">
                  <div className="Title">
                    <div className="title">
                      <p className="pTitle1">{selectedCard.title}</p>
                    </div>
                    <div className="subTitle">
                      <img src={starfilled} alt="rating" />
                      <p><b>{selectedCard.rating}</b></p>
                      <p className="pTitle2-2">{selectedCard.reviews} |</p>
                      <p className="pTitle1-2">{selectedCard.estimation}</p>
                    </div>
                  </div>
                </div>
              </Card>
            )}
          </Col>

          {/* Card 2 - Kualifikasi */}
          <Col lg={12} md={12} xs={24}>
            <Card className="card2">
              <div className="cardC">
                <p className="titleCard2">Kualifikasi:</p>
                <ul className="List">
                  {["Menampung Barang Dingin", "Menampung Barang Berat Hingga 50 Kg", "Menampung Barang Berharga"].map((qualification, index) => (
                    <li key={index} className="kualifikasiList">
                      <img className="checklist" src={checklist} alt="checklist" />
                      <p>{qualification}</p>
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
