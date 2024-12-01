import React, { useState } from 'react';
import './CaturaComponent.css';
import { FaRegEnvelope } from "react-icons/fa";

const CaturaComponent = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
  };

  const templates = [
    {
      id: 1,
      title: 'Greeting Template',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt odio vivamus ac aliquam. Placerat maecenas quis ut elementum praesent imperdiet. Egestas mattis pellentesque nibh dui sed malesuada dolor eget ipsum. Molestie nam morbi id arcu volutpat arcu.',
    },
  ];

  const handleNoteChange = (event, index) => {
    // Handle note changes here (e.g., update state or send to server)
    console.log('Note changed:', event.target.value, index);
  };

  const handlePhotoChange = (event) => {
    // Handle photo upload here (e.g., upload to server)
    const file = event.target.files[0];
    console.log('Photo uploaded:', file);
  };

  return (
    <div className="catura-container">
      <h2>Ask Catura</h2>
      <div className="dropdown-container">
        <div className="dropdown">
             <span> <FaRegEnvelope /> WhatsApp</span>
          <i className="arrow-down"></i>
        </div>
        <div className="dropdown">
          <span> <FaRegEnvelope /> Greetings</span>
          <i className="arrow-down"></i>
        </div>
      </div>

      {selectedTemplate && (
        <div className="template-preview">
          <div className="template-title">{selectedTemplate.title}</div>
          <div className="template-content">{selectedTemplate.content}</div>
          <div className="template-actions">
            <button className="copy-button">Copy to Send</button>
            <button className="preview-button">Preview</button>
          </div>
        </div>
      )}

      <textarea placeholder="Type a message..." />
      <button className="send-button">
        <span className='send-icon'>
      <svg width="40" height="35" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="50" height="40" rx="10" />
<path d="M21.5 25H25M15 23H17M15 27H17M22.4535 17.2603L33.6842 22.8722C35.4386 23.7489 35.4386 26.2511 33.6842 27.1278L22.4535 32.7397C20.4561 33.7378 18.3068 31.6853 19.2138 29.6458L20.8502 25.9662C21.1237 25.3511 21.1237 24.6489 20.8502 24.0338L19.2138 20.3542C18.3068 18.3147 20.4561 16.2622 22.4535 17.2603Z" stroke="white" stroke-width="2" stroke-linecap="round"/>
</svg></span>

      </button>

      <div className="action-launcher">
      <h2>Action Launcher</h2>
      <div className="search-bar">
        <input type="text" placeholder="Search actions..." />
      </div>
      <div className="action-buttons">
        <button className="primary-button">
          <span>+</span> Add Action
        </button>
        <button className="secondary-button">Fee Reversal</button>
        <button className="secondary-button">Retail Onboarding</button>
        <button className="secondary-button">Address Update</button>
      </div>


    </div>

    <div className="case-favorite">
      <header>
        <span className="icon">📌</span>
        <h2>Case Favorite</h2>
      </header>
      <div className="notes">
        <textarea placeholder="Note 1" onChange={(event) => handleNoteChange(event, 0)} />
        <textarea placeholder="Note 2" onChange={(event) => handleNoteChange(event, 1)} />
        {/* Add more textareas as needed */}
      </div>
      <div className="photo">
        <label htmlFor="photoInput">
          <input type="file" id="photoInput" accept="image/*" onChange={handlePhotoChange} hidden />
          <span>
            <i className="fa fa-camera"></i> Photo
          </span>
        </label>
        {/* Display uploaded photo here */}
      </div>
    </div>






    </div>

   







  );
};

export default CaturaComponent;