import React, { useState } from "react";
import { img, map, star, truckIcon } from "../../../assets/Assets";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Button, Form, Radio, Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
import './Katalog.css';
import { Rekomendasi } from "./Rekomendasi";

const Katalog = () => {

// State untuk menyimpan pilihan dari dropdown
const [selectedVehicle, setSelectedVehicle] = useState('');
const [asal, setAsal] = useState('');
const [tujuan, setTujuan] = useState('');
const [rekomendasiValues, setRekomendasiValues] = useState({});
const [isModalVisible, setIsModalVisible] = useState(false);
const navigate = useNavigate();

  const items = [
    {
      icon: <img src={truckIcon} alt="truck" />,
      label: "Trailer 20 feet",
      key: '0',
      value:"Trailer 20 feet",
    },
    {
      icon: <img src={truckIcon} alt="truck" />,
      label: "Trailer 30 feet",
      key: '1',
      value:"Trailer 30 feet",
    },
    {
      icon: <img src={truckIcon} alt="truck" />,
      label: "Trailer 40 feet",
      key: '2',
      value:"Trailer 40 feet",
    },
  ];

   // Fungsi untuk menangani perubahan pilihan dari dropdown
   const handleMenuClick = (e) => {
    const selectedItem = items.find(item => item.key === e.key);
    if (selectedItem) {
      setSelectedVehicle(selectedItem.value); // Set state dengan pilihan yang dipilih
      console.log('Tipe Kendaraan yang dipilih:', selectedItem.value); // Tampilkan pilihan di console
    }
  };

    const menu = {
      items: items.map((item) => ({
        label: (
          <Space>
            <img src={truckIcon} alt="truck" />
            {item.label}
          </Space>
        ),
        key: item.key,
        onClick: handleMenuClick
      })),
    };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      asal,
      tujuan,
      tipeKendaraan: selectedVehicle,
      rekomendasi: rekomendasiValues, // Menyimpan hasil dari modal rekomendasi
    };

    console.log('Form submitted with data:', formData);
    navigate('/tabel-katalog');
  };

    // Fungsi untuk submit data rekomendasi dari modal
    const onFinish = (values) => {
      console.log('Rekomendasi values:', values);
      setRekomendasiValues(values); // Simpan nilai rekomendasi ke state
      setIsModalVisible(false); // Tutup modal
    };
  

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="katalog">
      <div>
        <img className="img" src={img} alt="katalog" />
        <h1 className="judulArmada">Cari Armada Pengiriman</h1>
      </div>

      <form onSubmit={handleSubmit} className="formContainer">
        <div className="inputGroup">
          <label htmlFor="asal" className="labelI">Asal</label>
          <div className="inputContainer">
            <img src={map} className="icon" alt="map" />
            <input
              type="text"
              id="asal"
              value={asal}
              onChange={(e) => setAsal(e.target.value)}
              className="input"
              placeholder="Masukkan Asal"
            />
          </div>
        </div>

        <div className="inputGroup">
          <label htmlFor="tujuan" className="labelI">Tujuan</label>
          <div className="inputContainer">
            <img src={map} className="icon" alt="map" />
            <input
              type="text"
              id="tujuan"
              value={tujuan}
              onChange={(e) => setTujuan(e.target.value)}
              className="input"
              placeholder="Masukkan Tujuan"
            />
          </div>
        </div>

        <div className="inputGroup">
          <label htmlFor="tipeKendaraan" className="labelI">Tipe Kendaraan</label>
          <div className="inputContainer">
            <Dropdown
            menu={menu}
              overlayStyle={{ color: 'black' }}
              trigger={['click']}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space className="dropdownT">
                  <img src={truckIcon} alt="truck" />
                  {selectedVehicle ? selectedVehicle : 'Pilih Armada'}
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
        </div>

        <div className="inputGroup">
          <label htmlFor="rekomendasi" className="labelI">Rekomendasi</label>
          <div className="inputContainer">
          <Button className="rekom" type="default" onClick={showModal} icon={<img src={star} className="icon" alt="star" />}>
            Pilih Rekomendasi
          </Button>
          </div>

          <Modal
            closable={false}
            open={isModalVisible}
            footer={null}
            onCancel={handleCancel}
          >
            <h1 className="judulRekom">Isi Rekomendasi Untuk Pengiriman Terbaik!</h1>
            <Form onFinish={onFinish}>
              {Rekomendasi.map((item) => (
                <Form.Item key={item.id} name={`radioOption${item.id}`}>
                  <Space className="radio" direction="vertical">
                    <label>{item.soal}</label>
                    <Radio.Group className="custom-radio">
                      <Space direction="vertical">
                        <Radio value="Yes">Yes</Radio>
                        <Radio value="No">No</Radio>
                      </Space>
                    </Radio.Group>
                  </Space>
                </Form.Item>
              ))}
              <Space className="buttonRadio">
                <Button className="buttonRadioBack" onClick={handleCancel}>Kembali</Button>
                <Button className="buttonRadioSubmit" htmlType="submit">Simpan</Button>
              </Space>
            </Form>
          </Modal>
        </div>

        <button type="submit" className="button">Cari Armada</button>
      </form>
    </div>
  );
};

export default Katalog;
