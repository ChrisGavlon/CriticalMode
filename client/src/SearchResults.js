import { useState, useEffect } from "react";
import ResultCard from "./children/ResultCard";

function SearchResults({ search, setSelectedGame }) {
  const [games, setGames] = useState([])

  useEffect(() => {
    fetch("/games")
    .then((r) => r.json())
    .then(setGames);
}, [setGames]);

  const filteredGames = games.filter(game => game.title.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="result-list">
        {filteredGames.map((game) => {
          return <ResultCard key={game.id} game={game} setSelectedGame={setSelectedGame} />
        })}
    </div>
  )
}

export default SearchResults;