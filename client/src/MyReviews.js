import { Link } from 'react-router-dom';


function MyReviews( {review, setSelectedReview, afterDelete} ) {
  const count = review.comments.length;
  function handleDelete(){
    fetch(`/reviews/${review.id}`, {
      method: "DELETE" 
    })
    .then((r) => {
      if (r.ok) {
        console.log(r)
        afterDelete();
      } else {
        console.log(r)
      }
    });
  }

  return (
    <>
      <div className="my-review-card-div">
        <Link className="my-review-card-link" onClick={() => setSelectedReview(review)} to={`/reviews/${review.id}`}>
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
      </div>
      <button className="delReview" onClick={handleDelete}>DELETE</button>
    </>
  )
}

export default MyReviews;