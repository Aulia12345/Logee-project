import React from "react";
import './DetailInformasi.css';
import { Card, Col, Row } from 'antd';
import { checklist, img, starfilled } from "../../assets/Assets";
import { cardData } from "../Katalog Pages/Tabel Katalog/cardData";
import DetailPage from "./DetailPage";

const DetailInformasi = () => {
  const selectedCard = cardData.find((card) => card.id === 1);

  return (
    <div className="body">
      <div>
        <img className="img" src={img} alt="katalog" />
        <h1 className="judulArmada">Solusi Digital Bisnis Logistik</h1>
      </div>

      <div className="card-container">
        <Row gutter={[12,12]}>
          <Col lg={12} md={12} xs={24}>
            {selectedCard && (
              <Card key={selectedCard.id} className="card1">
                <div className="cardC">
                  <div className="Title">
                    <div className="title">
                      <span className="title1">
                        <p className="pTitle1">{selectedCard.title}</p>
                      </span>
                    </div>
                    <div className="subTitle">
                      <span className="pTitle2">
                        <img src={starfilled} alt="" />
                        <p><b>{selectedCard.rating}</b></p>
                        <p className="pTitle2-2">{selectedCard.reviews} |</p>
                        <p className="pTitle1-2">{selectedCard.estimation}</p>
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            )}
          </Col>

          <Col lg={12} md={12} xs={24}>
            <Card className="card2">
              <div className="cardC">
                <p className="titleCard2">Kualifikasi :</p>
                <ul className="List">
                  <li className="kualifikasiList">
                    <img className="checklist" src={checklist} alt="" />
                    <p>Menampung Barang Dingin</p>
                  </li>
                  <li className="kualifikasiList">
                    <img className="checklist" src={checklist} alt="" />
                    <p>Menampung Barang Berat Hingga 50 Kg</p>
                  </li>
                  <li className="kualifikasiList">
                    <img className="checklist" src={checklist} alt="" />
                    <p>Menampung Barang Berharga</p>
                  </li>
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
