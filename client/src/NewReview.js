import React, { useState } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import BalloonBlockEditor from '@ckeditor/ckeditor5-build-balloon-block';

function NewReview( { game, user } ) {
  const [score, setScore] = useState()
  const [title, setTitle] = useState("")
  const [body, setBody] = useState()
  const [user_id, setUser_id] = useState(user.id)
  const [game_id, setGame_id] = useState(game.id)

  async function handleSubmit(e) {
    e.preventDefault();
    // fetch returns a Promise, we must await it
    const response = await fetch("/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ score, title, body, user_id, game_id }),
    });
    // response.json() returns a Promise, we must await it
    const data = await response.json();
    if (response.ok) {
      console.log("Review created:", data);
    } 
  }

  function handleEdit(e, editor){
    setBody(editor.getData());
  }

  return (
    <div className="new-review-div">
      <form onSubmit={handleSubmit}>
        <h1>
          Game: {game.title}
        </h1>
        <h1>
          Title: <input type="text" className="new-review-title" onChange={(e) => setTitle(e.target.value)} />
        </h1>
        <h1>
          Score: <input type="text" className="new-review-score" onChange={(e) => setScore(e.target.value)} />
        </h1>
        <h2>Start Writing:</h2>
        <br/>
          <CKEditor 
          editor={BalloonBlockEditor}
          onChange={(e, editor) => handleEdit(e, editor)}
          />
        <input type="submit" value="Submit Review!"></input>
      </form>
    </div>
  )
}

export default NewReview;