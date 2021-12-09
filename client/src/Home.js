import ReviewList from "./children/ReviewList";

function Home({ reviews, setReviews, setSelectedReview}) {

  return (
    <div className="home">
      <h1 id="homepage-latest-reviews">Latest Reviews</h1>
        <ReviewList reviews={reviews} setReviews={setReviews} setSelectedReview={setSelectedReview}/>
    </div>
  )
}

export default Home;