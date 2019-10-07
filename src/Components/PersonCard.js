import React from 'react';
import '../CSS/PersonCard.css';



export default function PersonCard(props) {
    let imageurl;
    props.imageurl !== null ? 
    imageurl = `https://image.tmdb.org/t/p/w500${props.imageurl}` : 
    imageurl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpMWXwoYNV8RguG1Ki3qHfO1xjazCCC4ie4YMUzLnatTYWQeEu";

    return (
        <div className="person-card">
           <div 
                className="person-image"
                style={{backgroundImage : `url(${imageurl})`}} >
            </div>
            <div className="person-info">
                <p className="person-info-realName person-names">{props.realname}</p>
                {props.relation ? <p className="AS">{props.relation}</p> : "" }
                <p className="person-info-charName person-names">{props.characterName}</p>
            </div>
        </div>
    )
}
