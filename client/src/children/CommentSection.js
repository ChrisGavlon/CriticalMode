import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CommentCard from './CommentCard';
import CommentForm from './CommentForm';

function CommentSection({ review, user }) {
  const [comments, setComments] = useState([])

  useEffect(() => {
    fetch("/comments")
    .then((r) => r.json())
    .then(setComments);
}, [setComments]);

 function afterCommented(){
  fetch("/comments")
  .then((r) => r.json())
  .then(setComments);
 }

  const displayedComments = comments.filter(
    (comment) => comment.review_id === review.id
  )

    return (
      <div className="comment-section">
        { user ? (
        <CommentForm user={user} review={review} afterCommented={afterCommented}/>
        ) : (
        <h4><Link className="unlogged-link" to="/login">Login</Link> or <Link className="unlogged-link" to="/signup">Sign-up</Link> to post a comment</h4>
        )
        }
        {
        displayedComments.map((comment) => {
          return <CommentCard key={comment.id} comment={comment}/>
          })
        }
      </div>
    )
  }
  
  export default CommentSection;