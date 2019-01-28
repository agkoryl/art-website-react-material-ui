import React from "react";
import Grid from "@material-ui/core/Grid";

import ContactData from "./ContactData";
import Map from "./Map";

class Contact extends React.Component {
  render() {
    return (
      <Grid container style={{ margin: "40px" }}>
        <Grid item xs={12} md={3}>
          <ContactData />
        </Grid>
        <Grid item xs={12} md={9} style={{display: "flex", alignItems: "center"}}>
        <Map url={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2499.160911987917!2d22.628906315008685!3d51.2161113397811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472256885966d96d%3A0xebfa00b7707f8b92!2sinfoShare+Academy+-+oddzia%C5%82+Lublin!5e0!3m2!1spl!2spl!4v1548704451207"}></Map>
        </Grid>
      </Grid>
    );
  }
}

export default Contact;
