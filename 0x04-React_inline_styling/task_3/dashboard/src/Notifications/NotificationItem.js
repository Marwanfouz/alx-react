import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

class NotificationItem extends React.PureComponent {
  render() {
    const { type, value, html, markAsRead, id } = this.props;
    return (
      <>
        <li className={type === "default" ? css(styles.default) : css(styles.urgent)} onClick={() => markAsRead(id)} data-notification-type={type} dangerouslySetInnerHTML={html ? { __html: html } : null}>
          {value}
        </li>
      </>
    );
  }
}

const styles = StyleSheet.create({
  default: {
    color: "blue",
    "@media (max-width: 375px)": {
      borderBottom: "1px solid black",
      listStyle: "none",
      fontSize: "20px",
      padding: "10px 8px",
    },
  },
  urgent: {
    color: "red",
    "@media (max-width: 375px)": {
      borderBottom: "1px solid black",
      listStyle: "none",
      fontSize: "20px",
      padding: "10px 8px",
    },
  },
});

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
