import React from 'react';
import '../CSS/MovieCastandCrew.css';
import PersonCard from './PersonCard';

export default function MovieCastandCrew(props) {
    let propsname = Object.keys(props)[0];
    let result;
    if(propsname === "castInfo") {
        result = props.castInfo.map(person => (
            <PersonCard
                key = {person.credit_id}
                id = {person.credit_id}
                imageurl = {person.profile_path}
                realname = {person.name}
                characterName = {person.character }
                relation =  "AS"
            />
        ))
    } else if(propsname === "crewInfo") {
        result = props.crewInfo.map(person => (
            <PersonCard
                key = {person.credit_id}
                id = {person.credit_id}
                imageurl = {person.profile_path}
                realname = {person.name}
                characterName = {person.job }
                relation =  "IS"
            />
        ))
    }
    return (
        <div className="cast-info">
            { result }
        </div>
    )
}
