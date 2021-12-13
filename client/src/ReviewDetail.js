import React, { useReducer, useState, useEffect } from 'react'
import CommentSection from './children/CommentSection';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { useParams } from 'react-router-dom'

function ReviewDetail({ user }) {
  const [review, setReview] = useState([]);
  const [reviewUser, setReviewUser] = useState([])
  const {id} = useParams();

  useEffect(()=> {
    fetch(`/reviews/${id}`)
    .then((r) => r.json())
    .then((data) => {
        setReview(data)
        setReviewUser(data.user)
    })
  }, [])
  
  return (
    <div className="review-details">
      <h1>{review.title}</h1>
      <img alt="author-pfp" src={reviewUser.prof_img} style={{width: "40px", height: "40px"}} className="user-prof-img" id="review-detail-prof-img"/> 
      <h4 id="review-detail-username">by <strong className="username">{reviewUser.username}</strong></h4>
      <h4 className="body-paragraph">{ReactHtmlParser(review.body)}</h4>
      <h1>Score: <span className="score">{review.score}</span></h1>
      <CommentSection review={review} user={user}/>
    </div>
  )
}

export default ReviewDetail;