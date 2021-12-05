import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import ReviewList from "./children/ReviewList";

function Home({ reviews, setReviews, setSelectedReview}) {

  return (
    <div className="home">
        <ReviewList reviews={reviews} setReviews={setReviews} setSelectedReview={setSelectedReview}/>
    </div>
  )
}

export default Home;