import React from 'react';
import './Notifications.css';
import icon from "./close-icon.png";
import { getLatestNotification } from "./utils";

const Notifications = () => {
  return (
    <>
    <div className="Notifications">
      <p>Here is the list of notifications</p>
    <button
    style={{
          position: 'absolute',
          top: '15px',
          right: '15px',
          background: 'none',
          border: 'none',
          cursor: 'pointer'
        }}
    aria-label='Close'
    onClick={console.log('Close button has been clicked')}
    >
    <img src={icon} alt='Close'/>
    </button>
    <ul>
      <li data="default">New course available</li>
      <li data="urgent">New resume available</li>
      <li data="urgent" dangerouslySetInnerHTML={{__html:getLatestNotification()}}></li>
    </ul>
    </div>
    </>
  );
};

export default Notifications;
