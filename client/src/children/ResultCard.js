import { Link } from 'react-router-dom'

function ResultCard({ game, setSelectedGame }) {

    return (
      <div className="result-cards" onClick={(e) => setSelectedGame(game)}>
          <Link to={`/results/${game.id}`} className="results-link">
            <img src={game.img} style={{width: "200px"}} className="result-img"/>
            <h4 className="game-title">{game.title}</h4>
            <h4 className="game-dev">{game.developer}</h4>
            <h4 className="game-genre">{game.genre}</h4>
          </Link>
      </div>
    )
  }
  
  export default ResultCard;