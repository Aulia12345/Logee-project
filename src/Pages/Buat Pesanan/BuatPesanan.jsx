import React, { useState } from "react";
import { diskon, diskon2, diskon3, gmap2 } from "../../assets/Assets";
import './BuatPesanan.css';
import { Form, Input, Modal, Button, Row, Col } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { Voucher } from "./Voucher";

const BuatPesanan = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);

  return (
    <div className="pesanan">
      <img className="gmap2" src={gmap2} alt="Google Maps" />

      <div className="formPesanan">
        {/* Detail Penerima Section */}
        <div>
          <h1 className="judulPesanan">Detail Penerima</h1>
          <Form layout="vertical">
            <Form.Item>
              <p className="labelForm">Nama Penerima</p>
              <Input className="inputan" placeholder="Masukkan Nama Lengkap" />
            </Form.Item>

            <Form.Item>
              <p className="labelForm">Nomor Telepon</p>
              <Input className="inputan" placeholder="Masukkan Nomor Telepon Aktif" />
            </Form.Item>

            <Form.Item>
              <p className="labelForm">Alamat Tujuan</p>
              <Input.TextArea
                className="textArea"
                rows={4}
                placeholder="Masukkan Alamat"
              />
            </Form.Item>
          </Form>
        </div>

        {/* Voucher Diskon Section */}
        <div>
          <h1 className="judulPesanan">Voucher Diskon</h1>
          <Form layout="vertical">
            <Form.Item>
              <p className="labelForm">
                Voucher Diskon <img src={diskon} alt="Diskon Icon" />
              </p>
              <Input className="inputan" placeholder="Masukkan Voucher Diskon" />
            </Form.Item>

            <Form.Item>
              <p className="labelForm">
                Voucher Saya <img src={diskon2} alt="Voucher Icon" />
              </p>
              <Button className="modalForm" onClick={showModal}>
                Voucher yang Kamu Miliki <RightOutlined style={{ color: '#ff5600' }} />
              </Button>

              <Modal
                closable={false}
                open={isModalOpen}
                footer={null}
                onCancel={handleCancel}
              >
                <h1>Voucher yang Dimiliki</h1>
                {Voucher.map((item) => (
                  <Row key={item.id}>
                    <Col className="voucher">
                      <div className="voucher-content">
                        <div style={{ display: 'flex', gap: "2vw", alignItems: "center" }}>
                          <img className="iconV" src={diskon3} alt="Diskon" />
                          <div className="descV">
                            <p className="desc1">{item.nama}</p>
                            <p className="desc2">{item.syarat}</p>
                          </div>
                        </div>
                        <button className="buttonV">Klaim</button>
                      </div>
                    </Col>
                  </Row>
                ))}
                <div className="button-container">
                  <Button className="kembaliB" onClick={handleCancel}>Kembali</Button>
                </div>
              </Modal>
            </Form.Item>

            <div className="Button">
                <Button className="back">Kembali</Button>
                <Button className="next" disabled={isModalOpen}>Selanjutnya</Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default BuatPesanan;
