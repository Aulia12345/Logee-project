import React from 'react';
import { FloatButton } from 'antd';
import './ChatButton.css';
import { chat } from '../../assets/Assets'; // Pastikan path import benar
import { RedditCircleFilled, RedditOutlined } from '@ant-design/icons';

const ChatButton = () => {

  const Chat =()=>{
    return(
      <p><b>TANYA</b> <br /><span style={{background:"#FF5600", color:'white'}}><b>LOGEE</b></span></p>
    )
  }

  return (
    <div className='chat'>
      <FloatButton
      description={<Chat/>}
        shape="circle"
        style={{
            right:10,
          bottom: 10, 
          width: '5vw', 
          height: '5vw', 
          borderStyle:'solid',
          borderWidth:0.1,
          borderColor:'#D1D1D6'
        }}
      />
    </div>
  );
};

export default ChatButton;
