import { Link } from 'react-router-dom'

function ResultCard({ game, setSelectedGame }) {

    return (
      <Link className="result-cards" onClick={(e) => setSelectedGame(game)} to={`/results/${game.id}`}>
          <img src={game.img} style={{width: "200px"}}/>
          <h4 className="game-title">{game.title}</h4>
          <h4 className="game-dev">{game.developer}</h4>
          <h4 className="game-genre">{game.genre}</h4>
      </Link>
    )
  }
  
  export default ResultCard;