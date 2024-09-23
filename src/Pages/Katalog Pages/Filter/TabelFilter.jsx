import React, { useEffect, useState } from "react";
import './TabelFilter.css';
import { Card, Space, Button } from 'antd';
import { starfilled, truckIcon } from "../../../assets/Assets";
import ChatButton from "../../../Komponen/ChatButton/ChatButton";
import axios from 'axios';
import { useLocation } from "react-router-dom";

const TabelFilter = () => {
    const location = useLocation();
  const { state } = location || {};
  const { origin, destination, tipeKendaraan, rekomendasi } = state || {};
  const [mappedData, setMappedData] = useState([]);

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const response = await axios.get(
            `https://api-logee.vercel.app/catalogs?origin=${origin}&destination=${destination}&vehicleType=${tipeKendaraan}&isFrozen=${rekomendasi.radioOption1}&isMoreThanTons=${rekomendasi.radioOption2}&isMoreThan3Days=${rekomendasi.radioOption3}&isFragile=${rekomendasi.radioOption4}`
        );
        const data = response.data.map(item => ({
          id: item._id,
          route: `${item.origin} to ${item.destination}`,
          vehicleType: item.vehicleType,
          isFrozen: item.isFrozen ? 'Yes' : 'No',
          weightCapacity: item.weightCapacity,
          estimatedTime: item.estimatedTime,
          vendor: item.vendor,
          rating: item.rating,
          description: item.desc,
          specs: item.specs.join(', '),
          reviews: item.reviews.map(review => ({
            reviewer: review.name,
            comment: review.review
          })),
          drivers: item.drivers.map(driver => ({
            driverName: driver.name,
            role: driver.role,
            deliveries: driver.delivery
          })),
          prices: item.prices.map(price => `${price.name}: Rp ${price.price}`),
          totalPrice: item.prices.find(p => p.name === 'Total')?.price || 0, 
          rating: item.rating, // Assuming this field exists in the response
          review: item.reviews // Assuming this field exists in the response
        }));
        setMappedData(data); // Set the transformed data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCardData();
  }, []);

  return (
    <div className="tabelKatalog">
      <h1 className="h1Card">PILIH ARMADA PENGIRIMAN</h1>
      <Space direction="vertical" size={16}>
        {mappedData.map((item) => (
          <Card
            key={item.id} // Using id as the unique key
            className="Card" 
            title={
              <div className="cardC">
                <div className="Title">
                  <div className="title">
                    <span className="title1">
                      <img src={truckIcon} alt="" />
                      <p className="pTitle1">{item.vehicleType}</p>
                    </span>
                    <p className="pTitle1-2">Estimasi pengiriman: {item.estimatedTime}</p>
                  </div>

                  <div className="subTitle">
                    <p className="title2">{item.vendor} | </p>
                    <span className="pTitle2">
                      <img src={starfilled} alt="" />
                      <p>
                        <b>
                          {item.rating}
                        </b>
                      </p>
                      <p className="pTitle2-2">({item.review.length} reviews)</p>
                    </span>
                  </div>
                </div>
                
                <p className="priceTitle">Rp {item.totalPrice}</p>
              </div>
            }
            style={{ minWidth: '80vw' }}
            hoverable={true}
          >
            <Space className="CardB">
              <Button className="CardButton">Tanya Logee</Button>
              <Button className="CardButton" href={`/tabel-katalog/detail-informasi/${item.id}`}>Detail Information</Button>
            </Space>
          </Card>
        ))}
      </Space>
      <ChatButton />
    </div>
  );
};

export default TabelFilter;