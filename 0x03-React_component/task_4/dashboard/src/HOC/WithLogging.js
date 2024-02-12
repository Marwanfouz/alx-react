import React from "react";

const WithLogging = ({ WrappedComponent }) => {

  const displayName = (WrappedComponent) => WrappedComponent.displayName || WrappedComponent.name || "Component";

  return class extends React.Component {
    componentDidMount() {
      console.log(`Component ${displayName(WrappedComponent)} is mounted`);
    }
  
    componentWillUnmount() {
      console.log(`Component ${displayName(WrappedComponent)} is going to unmount`);
    }
    
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
};

export default WithLogging;
