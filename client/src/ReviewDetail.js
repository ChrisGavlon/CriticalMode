import React, { useReducer } from 'react'
import CommentSection from './children/CommentSection';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

function ReviewDetail({ review, user }) {

  return (
    <div className="review-details">
      <h1>{review.title}</h1>
      <img alt="author-pfp" src={review.user.prof_img} style={{width: "40px", height: "40px"}} className="user-prof-img" id="review-detail-prof-img"/> 
      <h4 id="review-detail-username">by <strong className="username">{review.user.username}</strong></h4>
      <h4 className="body-paragraph">{ReactHtmlParser(review.body)}</h4>
      <h1>Score: <span className="score">{review.score}</span></h1>
      <CommentSection review={review} user={user}/>
    </div>
  )
}

export default ReviewDetail;