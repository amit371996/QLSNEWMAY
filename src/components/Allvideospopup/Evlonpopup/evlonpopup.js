import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#___gatsby');

const EvlonPopUp = ({ isOpen, onClose, videoSrc }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Video Popup"
      
    >
      <div className="video-popup">
        <button className="close-button" onClick={onClose}>
        ×
        </button>
        <iframe
          src={videoSrc}
          width="100%"
          height="100%"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
      </div>
    </Modal>
  );
};

export default EvlonPopUp;
