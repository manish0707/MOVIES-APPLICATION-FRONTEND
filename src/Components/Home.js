import React, { Component } from 'react';
import '../CSS/Home.css';
import image from '../images/movie.jpg';

export class Home extends Component {
    render() {
        const HomeFront = (
            <div style={{background : `url(${image})`}} className="image-wrapper-home">
                <h2>Know almost everything about your favourite movie</h2>
            </div>
        )
        return (
            <div className="Homepage">
                {HomeFront}
            </div>
        )
    }
}

export default Home;
