import { Link } from 'react-router-dom';


function MyReviews( {review, setSelectedReview, afterDelete} ) {

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
    <div className="my-review-card-div">
      <Link className="my-review-card-link" onClick={() => setSelectedReview(review)} to={`/reviews/${review.id}`}>
        <h3>{review.score}</h3> 
        <h3>{review.title}</h3>
        <h4>review by: <img src={review.user.prof_img} style={{width: "25px", height: "25px"}}/> {review.user.username}</h4>
      </Link>
      <button className="delReview" onClick={handleDelete}>DELETE</button>
    </div>
  )
}

export default MyReviews;