import React, { useReducer } from 'react'
import CommentSection from './children/CommentSection';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

function ReviewDetail({ review, user }) {

  return (
    <div className="review-details">
      <h1>{review.title}</h1>
      <img src={review.user.prof_img} style={{width: "40px", height: "40px"}}/> <h4>by <strong className="username">{review.user.username}</strong></h4>
      <h4 className="body-paragraph">{ReactHtmlParser(review.body)}</h4>
      <h1 className="score">{review.score}</h1>
      <h2 id="text-comments">Comments</h2>
      <CommentSection review={review} user={user}/>
    </div>
  )
}

export default ReviewDetail;