import React from 'react';
import PropTypes from "prop-types";

class BodySection extends React.Component {
  render() {
    return (
      <div className="bodySection">
      <h2>{this.props.title}</h2>
      {this.props.children}
      </div>
    );
  }
}

BodySection.prototype = {
  title: PropTypes.string,
  children: PropTypes.node,
}

export default BodySection;
