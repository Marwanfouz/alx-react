// import React from "react";

// const WithLogging = ({ WrappedComponent }) => {

//   const getDisplayName = (WrappedComponent) => WrappedComponent.displayName || WrappedComponent.name || "Component";

//   WithLogging.displayName = `WithLogging(${getDisplayName(WrappedComponent)})`;

//   return class extends React.Component {
//     componentDidMount() {
//       console.log(`Component ${getDisplayName(WrappedComponent)} is mounted`);
//     }
  
//     componentWillUnmount() {
//       console.log(`Component ${getDisplayName(WrappedComponent)} is going to unmount`);
//     }
    
//     render() {
//       return <WrappedComponent {...this.props} />;
//     }
//   }
// };

// export default WithLogging;

import React from 'react';

const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

const WithLogging = (WrappedComponent) => {
  class WithLoggingComponent extends React.Component {
    componentDidMount() {
      console.log(`Component ${getDisplayName(WrappedComponent)} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${getDisplayName(WrappedComponent)} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  // Set the display name for debugging purposes
  WithLoggingComponent.displayName = `WithLogging(${getDisplayName(WrappedComponent)})`;

  return WithLoggingComponent;
};

export default WithLogging;

