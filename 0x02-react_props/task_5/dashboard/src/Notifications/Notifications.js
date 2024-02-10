import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";

function Notifications({ displayDrawer }) {
  return (
    <>
    {displayDrawer ? (
    <>
    <div className="flex">
      <div className="menuItem">
      <p>Your notifications</p>
      </div>
      <div className="Notifications">
      <button
        className="notification-button"
        aria-label="Close"
        onClick={() => console.log("Close button has been clicked")}
      >
        <img src={closeIcon} alt="closeIcon" width="10px" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type="default" value="New course available"/>
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem type="urgent" html={getLatestNotification()} />
      </ul>
      </div>
    </div>
    </>
    ) : (
      <div className="menuItem">
        <p>Your notifications</p>
      </div>
    )}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;
