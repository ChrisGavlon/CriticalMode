import AssociatedReview from "./children/AssociatedReview";
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function ResultDetails({ setSelectedReview, setSelectedGame, user }) {
  const [reviews, setReviews] = useState([])
  const [game, setGame] = useState([])
  const {id} = useParams();

  useEffect(()=> {
    fetch(`/games/${id}`)
    .then((r) => r.json())
    .then((data) => {
        setGame(data)
    })
  }, [])

  useEffect(() => {
    fetch("/reviews")
    .then((r) => r.json())
    .then(setReviews);
  }, []);

  const AssoReviews = reviews.filter(
    (review) => review.game_id === game.id
  )


  return (
    <div className="game-details">
      <div className="selected-game">
        <img src={game.img} />
        <h4 id="game-title">{game.title}</h4>
        <h4 id="game-dev">Developer(s): {game.developer}</h4>
        <h4 id="game-genre">Genre: {game.genre}</h4>
        { user ? (
        <Link className="navBarBttn" id="createReviewBttn" to="/new-review" onClick={() => setSelectedGame(game)}>Create Review</Link>
        ) : (
          null
        )}
      </div>
      <div className="related-reviews">
        <h2 id="reviews-for-this-game">Reviews For This Game</h2>
        {AssoReviews.map((review) => {
          return <AssociatedReview key={review.id} review={review} setSelectedReview={setSelectedReview}/>
        })}
      </div>
    </div>
  )
}

export default ResultDetails;