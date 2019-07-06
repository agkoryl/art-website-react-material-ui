import React from "react";

import { Link } from "react-router-dom";

const linkStyles = {
  color: "white",
  fontSize: 16,
  textDecoration: "none"
};

const mLink = props => {
  return (
    <Link style={linkStyles} to={props.url}>
      {props.text}
    </Link>
  );
};

export default mLink;
