import React from 'react';


function Map(props) {
    return(
<div style={{width: "100%"}}>
<iframe title={"one"} src={props.url} style={{width: "80%", height:"100%", frameborder:"0", border:"0" }} ></iframe>
</div>
    );
}

export default Map;


