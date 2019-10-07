import React from 'react';
import Axios from 'axios';
import "../CSS/MovieInfo.css";
import MovieCast from './MovieCastandCrew';
const MovieDetailsApi = "https://api.themoviedb.org/3/movie/";
const CastDetailsApi = "https://api.themoviedb.org/3/movie/"
const apikey = "?api_key=7670452493bc6524525019bd4fea8f48";


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
        let movieInfo = await Axios.get(`${MovieDetailsApi}${this.Movieid}${apikey}`);
        this.setState({
            movieInfo : movieInfo.data
        });

        const CastAndCrew = await Axios.get(`${CastDetailsApi}${this.Movieid}/credits${apikey}`);
        this.setState({
            castInfo : CastAndCrew.data.cast
        });

        this.setState({
            crewInfo : CastAndCrew.data.crew
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
        const imageurl = `https://image.tmdb.org/t/p/w500${this.state.movieInfo.backdrop_path}`;
        const {original_title, overview, popularity,revenue,homepage } = this.state.movieInfo;
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
                            <a className="movie-info-homepage-link" href={homepage}>Click for homepage</a>  
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