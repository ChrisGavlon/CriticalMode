import React, { useReducer } from 'react'
import CommentSection from './children/CommentSection';

function ReviewDetail({ review, user }) {

  return (
    <div className="review-details">
      <h1>{review.title}</h1>
      <img src={review.user.prof_img} style={{width: "40px", height: "40px"}}/> <h4>by {review.user.username}</h4>
      <h4 className="body-paragraph">{review.body}</h4>
      <h1>{review.score}</h1>
      <CommentSection review={review} user={user}/>
    </div>
  )
}

export default ReviewDetail;