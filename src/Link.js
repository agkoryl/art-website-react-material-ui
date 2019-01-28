import React from 'react';

const linkStyles = {
    color: 'white',
    fontSize: 16,
    textDecoration: 'none'
  };

const Link = props => {
    return <a style={linkStyles} href={props.url}>{props.text}</a>
  };
  
  export default Link