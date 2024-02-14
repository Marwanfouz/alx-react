import React from "react";
import "./Notifications.css";
import PropTypes from "prop-types";

class NotificationItem extends React.PureComponent {
  render() {
    const { type, value, html, markAsRead, id } = this.props;
    return (
      <>
        <li onClick={() => markAsRead(id)} data-notification-type={type} dangerouslySetInnerHTML={html ? { __html: html } : null}>
          {value}
        </li>
      </>
    );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  __html: PropTypes.shape({
    html: PropTypes.string,
  }),
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

NotificationItem.defaultProps = {
  type: "default",
  markAsRead: () => {},
  id: 0,
};

export default NotificationItem;
