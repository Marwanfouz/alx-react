import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";

function Notifications({ displayDrawer, listNotifications }) {
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
      <ul>{listNotifications ? (
        listNotifications.map(({id, html, type, value}) => <NotificationItem key={id} type={type} value={value} html={html} />)
      ) : (
        <NotificationItem value="No new notification for now" />
      )}
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
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;
