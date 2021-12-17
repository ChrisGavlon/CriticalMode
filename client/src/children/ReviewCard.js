import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

function ReviewCard({ review, setSelectedReview }) {
  const [comments, setComments] = useState([])

  useEffect(() => {
    fetch("/comments")
    .then((r) => r.json())
    .then(setComments);
  }, [setComments]);

  const AssoComments = comments.filter(
    (comment) => comment.review_id === review.id
  )

  const count = AssoComments.length

    return (
      <Link className="review-card" onClick={() => setSelectedReview(review)} to={`/review-detail/${review.id}`}>
        <h3 className="review-card-title">{review.title}</h3>
        <h3 className="review-card-score">{review.score}</h3> 
        <h4 className="topic">{review.game.title} </h4>
        <h4 className="review-card-review-by">
          <span id="By">By:</span>
          <img src={review.user.prof_img} style={{width: "25px", height: "25px"}} id="review-card-prof-img" className="user-prof-img"/> 
          <span className="review-card-username">{review.user.username}</span>
        </h4>
        <div className="review-card-comments">{count} Comment(s)</div>
      </Link>
    )
  }
  
  export default ReviewCard;