import React, {useEffect, useState, useCallback} from 'react'
import axios from 'axios';
import { API_BASE_URL, } from '../constant/api'
import MovieReviewCard from './MovieReviewCard';

export default function MovieReview({match}) {
  const [reviews, setReviews ] = useState([]);


  const fetchReviews = useCallback(async () => {
    const requestUrl = API_BASE_URL + 'movies/'+ match.params.id + "/reviews"; 
    try {
      const response = await axios.get(requestUrl);
      setReviews(response.data.results);
    } catch(e) {
      console.error("ERROR FETCHING REVIEWS!")
    }
  }, [match.params.id])

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews])

  const allReviews = reviews.map(review => (
      <MovieReviewCard author={review.author} review={review.content}/>
    ))

  return (
    <>
    <div style={{display : "flex", flexWrap : "wrap", justifyContent : "center"}}>
    {reviews.length === 0 ? (
      <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    ) : allReviews }
      
    </div>
    </>
  )
}
