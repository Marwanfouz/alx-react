import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";


class Notifications extends React.Component {
  constructor(props) {
    super(props);

    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length >
        this.props.listNotifications.length ||
      nextProps.displayDrawer !== this.props.displayDrawer
    );
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications, handleDisplayDrawer, handleHideDrawer } = this.props;

    return (
      <>
      {displayDrawer ? (
      <>
      <div className={css(styles.flex)}>
        <div className={css(styles.Notifications)}>
        <button
          className={css(styles["notification-button"])}
          aria-label="Close"
          onClick={handleHideDrawer}
        >
          <img src={closeIcon} alt="closeIcon" width="10px" />
        </button>
        <p>Here is the list of notifications</p>
        <ul>
        {listNotifications ? (
          listNotifications.map(({id, html, type, value}) => {
            return <NotificationItem key={id} type={type} value={value} html={html} markAsRead={this.markAsRead} id={id}/>
          })
        ) : (
          <NotificationItem value="No new notification for now" />
        )}
        </ul>
        </div>
      </div>
      </>
      ) : (
        <div className={css(styles.menuItem)} onClick={handleDisplayDrawer}>
          <p>Your notifications</p>
        </div>
      )}
      </>
    );
  }
}

const opacity = {
  "0%": { opacity: 0.5 },
  "100%": { opacity: 1 },
};

const bounce = {
  "0%": { transform: "translateY(0px)" },
  "33%": { transform: "translateY(-5px)" },
  "66%": { transform: "translateY(5px)" },
  "100%": { transform: "translateY(0px)" },
};

const styles = StyleSheet.create({
  flex: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    position: "absolute",
    right: "5px",
    zIndex: "2",
    "@media (max-width: 900px)": {
      width: "100%",
      fontSize: 20,
      position: "relative",
      right: 0,
      left: 0,
    },
  },

  Notifications: {
    padding: "8px",
    border: "2px dashed red",
    width: "35vw",
    "@media (max-width: 900px)": {
      width: "100%",
      padding: "0px",
      border: "none",
      height: "100vh",
    },
  },

  "notification-button": {
    background: "none",
    border: "none",
    cursor: "pointer",
    float: "right",
  },

  menuItem: {
    textAlign: "right",
    ":hover": {
      cursor: "pointer",
      animationName: [opacity, bounce],
      animationDuration: "1s, 0.5s",
      animationIterationCount: "3",
    },
  },
});

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

export default Notifications;
