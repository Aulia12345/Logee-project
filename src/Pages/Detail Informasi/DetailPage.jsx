import React from "react";
import './DetailInformasi.css';
import { gmap, truckA } from "../../assets/Assets";
import { Card, Row, Col } from "antd";
import { pengemudi } from "../Katalog Pages/Tabel Katalog/cardData";
import ChatButton from "../../Komponen/ChatButton/ChatButton";

const DetailPage = () => {
  return (
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
            </Col>
          </Row>
        </Card>
      </div>

      <ChatButton />
    </div>
  );
};

export default DetailPage;
