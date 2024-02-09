import React from "react";
import "./Notifications.css";
import PropTypes from "prop-types";

function NotificationItem({ type, html, value }) {
  return (
    <>
      <li data-notification-type={type} dangerouslySetInnerHTML={html ? { __html: html } : null}>
        {value}
      </li>
    </>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  __html: PropTypes.shape({
    html: PropTypes.string,
  }),
};

NotificationItem.defaultProps = {
  type: "default",
};

export default NotificationItem;
