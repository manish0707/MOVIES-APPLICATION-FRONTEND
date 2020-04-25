import React from 'react'
import Styles from '../CSS/MovieReviewCard.module.css'

export default function MovieReviewCard({author, review}) {
  return (
    <div className={Styles.ReviewCardWrapper}>
      <p>{review}</p>
      <br />
      <p style={{color: "black", fontWeight : "bold"}}>Written By : {author}</p>
    </div>
  )
}
