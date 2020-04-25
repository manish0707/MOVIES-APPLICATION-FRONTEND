import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom'
import "../CSS/MovieInfo.css";
import MovieCast from './MovieCastandCrew';
import { API_BASE_URL } from '../constant/api'

export default class MovieInfo extends React.Component {
    constructor(props) {
        super(props);
        this.styling = null;
        this.Movieid = props.match.params.id;
        this.state = {
            movieInfo : {},
            castInfo : [],
            crewInfo : [],
            castInfoShowing : true,
            crewInfoShowing : false
        }
        this.clickHandle = this.clickHandle.bind(this);
    }
    async componentDidMount() {
        let movieInfo = await Axios.get(`${API_BASE_URL}movies/${this.Movieid}`);
        this.setState({
            movieInfo : movieInfo.data.movie
        });

        const CastAndCrew = await Axios.get(`${API_BASE_URL}movies/${this.Movieid}/credits`);
        this.setState({
            castInfo : CastAndCrew.data.credits.cast
        });

        this.setState({
            crewInfo : CastAndCrew.data.credits.crew
        });

    }
    clickHandle(type) {
        if(type === "Cast") {
            this.setState({
                crewInfoShowing : false,
                castInfoShowing : true
            });
        } else if(type === "Crew") {
            this.setState({
                castInfoShowing : false,
                crewInfoShowing : true
            })
        }
    }
    render() {
        console.log(this.state)
        const imageurl = `https://image.tmdb.org/t/p/w500${this.state.movieInfo.backdrop_path}`;
        const {id, original_title, overview, popularity,revenue } = this.state.movieInfo;
        const styling = {
            backgroundColor : "#182C61"
        }
        return (
                <div className="movie-info-page">
                    <div className="image-and-info">
                        <div 
                            style={{backgroundImage : `url(${imageurl})`}}
                            className="Movie-poster">
                        </div>
                        <div className="movie-info">
                            <p className="movie-info-title">{original_title}</p> 
                            <p className="movie-info-para overview">{overview}</p>
                            <p className="highlighted-details ">Popularity : {popularity}</p>
                            <p className="highlighted-details ">Revenue : {revenue}</p>
                            <div className="reviewLink"><Link to={`/movies/${id}/reviews`}>Read Reviews</Link></div>
                        </div>
                    </div>
                    <div className="other-info">
                        <div className="info-links">
                            <ul className="info-links-ul">
                                <li><button
                                style={this.state.castInfoShowing ? styling : null }
                                 onClick={this.clickHandle.bind(this, "Cast" )}>CLICK TO SEE CAST</button></li>
                                <li><button
                                    style={this.state.crewInfoShowing ? styling : null}
                                    onClick ={this.clickHandle.bind(this, "Crew" )}>CLICK TO SEE CREW</button></li>
                            </ul>
                        </div>
                        <div style={styling}>
                            {
                                this.state.crewInfoShowing ? 
                                <MovieCast crewInfo = {this.state.crewInfo } />
                                :<MovieCast castInfo = {this.state.castInfo} />
                            }
                        </div>
                    </div>
                </div>
        )
    }
}