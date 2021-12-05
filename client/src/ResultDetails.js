
function ResultDetails({ game }) {

  return (
    <div className="game-details">
      <img src={game.img} style={{width: "500px"}}/>
      <h4>{game.developer}</h4>
      <h4>{}</h4>
    </div>
  )
}

export default ResultDetails;