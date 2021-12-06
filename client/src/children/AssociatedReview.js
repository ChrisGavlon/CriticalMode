import { Link } from 'react-router-dom'

function AssociatedReview({ review, setSelectedReview }){

    return (
        <Link className="asso-link" onClick={() => setSelectedReview(review)} to={`/reviews/${review.id}`}>
            <div className="asso-review-cards">
                <h3>{review.score}</h3> 
                <h3>{review.title}</h3>
                <h4>review by: <img src={review.user.prof_img} style={{width: "25px", height: "25px"}}/> {review.user.username}</h4>
            </div>
        </Link>
    )
}

export default AssociatedReview