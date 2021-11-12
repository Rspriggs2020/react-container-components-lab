import React from 'react';

const Review = ({byline, headline, summary_short }) => {
    return (
        <div className="review">
            <li>
                <h1>{headline}</h1>
                <h2>{byline}</h2>
                <p>{summary_short}</p>
            </li>
        </div>
    )
}

const MovieReviews = ({reviews}) => {
    return (
        <div className="review-list">
            <ul>
            {reviews.map(review => 
                <div className="review">
                    <li>
                    <h1>{review.headline}</h1>
                    <h2>{review.byline}</h2>
                    <p>{review.summary_short}</p>
                    </li>
                </div>
               )
            }
            </ul>
        </div>
    )
}

MovieReviews.defaultProps = {
    reviews: []
}

export default MovieReviews;




