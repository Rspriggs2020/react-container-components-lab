import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'your-key-here';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainerextends extends Component {
    state = {
        searchTerm: '',
        reviews: []
    };

    handleSearch = e => 
    this.setState({ searchTerm: e.target.value });

    handleSubmit = e => {
        e.preventDefault()

        fetch(URL.concat(this.state.searchTerm))
        .then(res => res.json())
        .then(res => this.setState({ reviews: res.results }));
    }

    render(){
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input
                    id="search-input"
                    type="text"
                    onChange={this.handleSearch}
                    />
                </form>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )

    }
}

export default SearchableMovieReviewsContainerextends;
