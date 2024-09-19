import React from "react";
import './TabelKatalog.css';
import { Card, Space, Button } from 'antd';
import { starfilled, truckIcon } from "../../../assets/Assets";
import ChatButton from "../../../Komponen/ChatButton/ChatButton";
import { cardData } from "./cardData";

const TabelKatalog = () => {
  return (
    <div className="tabelKatalog">
      <h1 className="h1Card">PILIH ARMADA PENGIRIMAN</h1>
      <Space direction="vertical" size={16}>
        {cardData.map((card) => (
          <Card
            key={card.id}
            className="Card" 
            title={
              <div className="cardC">
                <div className="Title">
                  <div className="title">
                    <span className="title1">
                      <img src={truckIcon} alt="" />
                      <p className="pTitle1">{card.title}</p>
                    </span>
                    <p className="pTitle1-2">{card.estimation}</p>
                  </div>

                  <div className="subTitle">
                    <p className="title2">{card.provider} | </p>
                    <span className="pTitle2">
                      <img src={starfilled} alt="" />
                      <p><b>{card.rating}</b></p>
                      <p className="pTitle2-2">{card.reviews}</p>
                    </span>
                  </div>
                </div>
                <p className="priceTitle">{card.price}</p>
              </div>
            }
            style={{ minWidth: '80vw' }}
            hoverable='true'
          >
            <Space className="CardB">
              <Button className="CardButton">Tanya Logee</Button>
              <Button className="CardButton" href="/tabel-katalog/detail-informasi">Detail Information</Button>
            </Space>
          </Card>
        ))}
      </Space>
      <ChatButton/>
    </div>
  );
};

export default TabelKatalog;
