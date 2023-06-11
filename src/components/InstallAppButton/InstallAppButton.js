import React from 'react';
import "./InstallAppButtonStyle.css";

const InstallAppButton = () => {
  return (
    <div className="container">
      {(
        <div className="mt-2 add-to" style={{ display: 'block' }}>
          <button className="btn button-color add-to-btn">
            <i className="fa-solid fa-cloud-arrow-down pr-1"></i> Install App
          </button>
        </div>
      )}
    </div>
  );
};

export default InstallAppButton;