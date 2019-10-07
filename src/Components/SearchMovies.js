import React, { Component } from 'react';
import Axios from 'axios';
import '../CSS/SearchMovies.css';
import SearchResult from './SearchResult';

const Api_base = "https://api.themoviedb.org/3/search/movie?query=";
const Api_key = "&api_key=7670452493bc6524525019bd4fea8f48";

export default class SearchMovies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formValue : "",
            isLoading : false,
            searchError : false,
            searchResult : []
        }
        this.onChangeHandle = this.onChangeHandle.bind(this);
        this.onFormSubmitHandle = this.onFormSubmitHandle.bind(this);
    }
    onChangeHandle(evt) {
        this.setState({
            formValue : evt.target.value
        });
    }

    async onFormSubmitHandle(evt) {
        this.setState({
            searchError : false,
            isLoading : true
        });
        evt.preventDefault();
        try {
            const url = `${Api_base}${this.state.formValue}${Api_key}`;
            this.setState({formValue : ""});
            const searchResponse = await Axios.get(url);
            if(searchResponse.data.results.length === 0) {
                this.setState({
                    searchError : true,
                    isLoading : false
                });
                throw Error("Nothing Found");
            } else { 
                this.setState({
                    searchResult : searchResponse.data.results
                });
                this.setState({isLoading : false});
            }
        } catch(error) {
            console.log("Error");
        }
    }
    render() {
        return (
            <div className="search-movies">
                 <div className="search-form">
                    <form onSubmit={this.onFormSubmitHandle}>
                        <input 
                         onChange={this.onChangeHandle }
                         value = {this.state.formValue}
                         type="text" placeholder="Search for your favourite movie"
                          />
                        <a href="home"><i className="fas fa-search"></i></a>
                    </form>
                 </div>
                <div className="search-result">
                    {
                        this.state.isLoading ? (
                            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                        ) : (
                                this.state.searchError ? <h1>Nothing Found</h1> : (
                                    <SearchResult data = {this.state.searchResult} />
                                )                           
                        )
                    }
                </div>
            </div>
        )
    }
}
