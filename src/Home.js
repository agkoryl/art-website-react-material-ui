import React from 'react';
import './Home.css';

import ImgMediaCard from './Card';


class Home extends React.Component {
    render () {
        return (<div class="homeDisplay">
            
            <ImgMediaCard></ImgMediaCard>
            <ImgMediaCard></ImgMediaCard>
            <ImgMediaCard></ImgMediaCard>
            
        </div>);
    }
}

export default Home;