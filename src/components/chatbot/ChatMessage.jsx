import React from 'react';
import './style.css'; // Import your CSS file

const Message = ({ message }) => {
  return (
    <div className='message'>
      <div className='message-sender'>{message.sender}</div>
      <div className='message-text'>{message.text}</div>
    </div>
  );
};

export default Message;
