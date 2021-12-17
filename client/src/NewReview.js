import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import BalloonBlockEditor from '@ckeditor/ckeditor5-build-balloon-block';

function NewReview( { user } ) {
  const [score, setScore] = useState();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState();
  // const [game_id, setGame_id] = useState(null);
  const [game, setGame] = useState([]);
  const {id} = useParams();
  const history = useHistory();
  const user_id = user.id;
  

  useEffect(()=> {
    fetch(`/games/${id}`)
    .then((r) => r.json())
    .then((data) => {
        setGame(data)
    })
  }, [])

  async function handleSubmit(e) {
    e.preventDefault();
    // fetch returns a Promise, we must await it
    const response = await fetch("/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ score, title, body, user_id, game_id: id }),
    });
    // response.json() returns a Promise, we must await it
    const data = await response.json();
    if (response.ok) {
      console.log("Review created:", data);
      history.push('/profile')
    }
  }

  function handleEdit(e, editor){
    setBody(editor.getData());
  }

  return (
    <div className="new-review-div">
      <h2 id="new-review-title">
        Game: {game.title}
      </h2>
      <form id="new-review-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Title" className="new-review-title" onChange={(e) => setTitle(e.target.value)} />
          <input type="number" placeholder="Score" min="1" max="10" className="new-review-score" onChange={(e) => setScore(e.target.value)} />
        <h2>Start Writing:</h2>
        <br/>
        <div id="random-div">
          <CKEditor 
          editor={BalloonBlockEditor}
          onChange={(e, editor) => handleEdit(e, editor)}
          />
        </div>
        <input type="submit" value="Submit Review!" id="submit-review"></input>
      </form>
    </div>
  )
}

export default NewReview;