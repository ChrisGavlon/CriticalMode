import { useEffect } from "react";
import ReviewCard from "./ReviewCard";

function ReviewList({reviews, setReviews, setSelectedReview}) {

    useEffect(() => {
        fetch("/reviews")
        .then((r) => r.json())
        .then(setReviews);
    }, [setReviews]);

    console.log(reviews)

    return (
      <div className="review-list">
          {reviews.map((review) => {
              return <ReviewCard key={review.id} review={review} setSelectedReview={setSelectedReview}/>
          })}
      </div>
    )
  }
  
  export default ReviewList;