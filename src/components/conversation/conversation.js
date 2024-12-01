import React, { useState } from 'react';
import './conversation.css';

const Conversation = () => {
  const [messages, setMessages] = useState([
    {
      sender: 'Rachel Adams',
      timestamp: '9:08 PM',
      message: 'Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus ac aliquam. Placerat maecenas quis ut elementum praesent imperdiet.',
      isSender: false,
    },
    {
      sender: 'You',
      timestamp: '27 Jul, 2024 9:08 PM',
      message: 'Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus ac aliquam. Placerat maecenas quis ut elementum praesent imperdiet. Egestas mattis pellentesque nibh dui sed malesuada dolor eget ipsum. Molestie nam morbi id arcu volutpat arcu.',
      isSender: true,
    },
  ]);

  const [selectedChannels, setSelectedChannels] = useState([]);
  const [messageText, setMessageText] = useState('');
  const [attachment, setAttachment] = useState(null);

  const handleChannelChange = (event) => {
    const { value, checked } = event.target;
    setSelectedChannels(prevChannels => checked ? [...prevChannels, value] : prevChannels.filter(channel => channel !== value));
  };

  const handleInputChange = (event) => {
    setMessageText(event.target.value);
  };

  const handleAttachmentChange = (event) => {
    setAttachment(event.target.files[0]);
  };

  const handleSubmit = () => {
    // Send the message and clear the input fields
    setMessages([...messages, { sender: 'You', timestamp: new Date().toLocaleString(), message: messageText, isSender: true }]);
    setMessageText('');
    setAttachment(null);
  };

  return (
    <div className="conversation">
      <header>
        <div className="tab active">Conversation</div>
        <div className="tab">Attachment</div>
      </header>
      <div className="message-list">
        {messages.map((message, index) => (
          <div className={`message ${message.isSender ? 'sender' : 'receiver'}`} key={index}>
            <div className="message-header">
              <div className="sender-info">
                <div className="sender-avatar">{message.sender.charAt(0)}</div>
                <div className="sender-name">{message.sender}</div>
              </div>
              <div className="timestamp">{message.timestamp}</div>
            </div>
            <div className="message-content">{message.message}</div>
          </div>
        ))}
      </div>
      <div className="message-input">
        <div className="channel-selection">
          <label>
            <input type="checkbox" value="SMS" checked={selectedChannels.includes('SMS')} onChange={handleChannelChange} />
            SMS
          </label>
          <label>
            <input type="checkbox" value="WhatsApp" checked={selectedChannels.includes('WhatsApp')} onChange={handleChannelChange} />
            WhatsApp
          </label>
          <label>
            <input type="checkbox" value="Email" checked={selectedChannels.includes('Email')} onChange={handleChannelChange} />
            Email
          </label>
        </div>
        <div className="input-area">
          <textarea placeholder="Type a message..." value={messageText} onChange={handleInputChange} />
          <div className="attachment-send">
            <label htmlFor="fileInput">
              <i className="fa fa-paperclip"></i>
              <input type="file" id="fileInput" onChange={handleAttachmentChange} hidden />
            </label>
            <button className="send-button" onClick={handleSubmit}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conversation;