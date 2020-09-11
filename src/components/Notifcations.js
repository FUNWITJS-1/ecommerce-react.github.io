import React, { Component } from "react";
import { MDBNotification, MDBContainer } from "mdbreact";

class Notification extends Component {
  render() {
    return (
       
     <MDBNotification
        autohide={1000} // by default = ∞ ms
        bodyClassName="p-5 font-weight-bold white-text"
        className="stylish-color-dark"
        closeClassName="blue-grey-text"
        fade
        icon="bell"
        iconClassName="blue-grey-text"
        message="Item Added to cart"
        show
        text="Contine Shopping!"
        title="Notification"
        titleClassName="elegant-color-dark white-text"
        style={{
            width: "auto",
            position: "fixed",
            top: "50px",
            right: "20px",
            zIndex: 9999
          }}
      />
  
    );
  }
}

export default Notification;