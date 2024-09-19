import React, { useState } from 'react';
import { FloatButton, Button } from 'antd';
import './ChatButton.css'; // Pastikan file CSS diimport
import { ClockCircleOutlined, CloseCircleOutlined, CloseOutlined, MessageOutlined } from '@ant-design/icons';
import { chat2, img, plane } from '../../assets/Assets';

const ChatButton = () => {
  const [isChatVisible, setIsChatVisible] = useState(false);

  const toggleChat = () => {
    setIsChatVisible(!isChatVisible);
  };

  const Chat = () => (
    <p>
      <b>TANYA</b> <br />
      <span style={{ background: "#FF5600", color: "white" }}>
        <b>LOGEE</b>
      </span>
    </p>
  );

  return (
    <div className='chat'>
      {/* Float Button */}
      <FloatButton
        description={isChatVisible?<CloseOutlined className='closed'/>:<Chat />}
        shape="circle"
        style={{
          right: 10,
          bottom: 10,
          width: "5vw",
          height: "5vw",
          borderStyle: "solid",
          borderWidth: 0.1,
          borderColor: "#D1D1D6",
          backgroundColor:'#FF5600',
        }}
        onClick={toggleChat} // Toggle untuk menampilkan atau menyembunyikan kolom chat
      />

      {/* Kolom Chat */}
      {isChatVisible && (
        <div className="chat-box">
          <div className="chat-header">
            <img className='chatIcon' src={chat2} alt="" />
            <p><b>Tanya <i>Logee</i></b></p>
            
          </div>
          <div className="chat-content">
            <p className='chatBot'>Hello! How can I help you?</p>
            {/* Tambahkan input field atau respon otomatis di sini */}
          </div>
          <div className="chat-input">
            <input type="text" placeholder="Tulis pesan..." />
            <Button type="primary"><img className='chatIcon2' src={plane} alt="" /></Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatButton;
