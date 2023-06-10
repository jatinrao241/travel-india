import React, { useEffect, useState } from 'react';
import "./InstallAppButtonStyle.css";
import { registerServiceWorker } from './serviceWorker';

const InstallAppButton = () => {
  const [showInstallButton, setShowInstallButton] = useState(false);
  let deferredPrompt;

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
      setShowInstallButton(true);
    });
  }, []);

  const handleInstall = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('App installed');
        } else {
          console.log('App installation rejected');
        }
        deferredPrompt = null;
      });
    }
  };

  useEffect(() => {
    registerServiceWorker();
  }, []);

  return (
    <div className="container">
      {/* ... Rest of your component code ... */}
      {showInstallButton && (
        <div className="mt-2 add-to" style={{ display: 'block' }}>
          <button className="btn button-color add-to-btn" onClick={handleInstall}>
            <i className="fa-solid fa-cloud-arrow-down pr-1"></i> Install App
          </button>
        </div>
      )}
    </div>
  );
};

export default InstallAppButton;