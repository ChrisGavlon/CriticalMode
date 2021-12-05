import { useState } from 'react'

function CommentForm( { user, review, afterCommented } ){
    const [display, setDisplay] = useState(false)
    const [body, setBody] = useState("")
    const [user_id, setUser_id] = useState(user.id)
    const [review_id, setReview_id] = useState(review.id)

    function handleCancel() {
    setDisplay(!display)
    document.getElementById("user-post").value = "";
    }

    async function handleSubmit(e) {
        e.preventDefault();
        debugger
        // fetch returns a Promise, we must await it
        const response = await fetch("/comments", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ body, user_id, review_id }),
        });
        // response.json() returns a Promise, we must await it
        const data = await response.json();
        if (response.ok) {
          console.log("Comment created:", data);
          afterCommented();
        } 
      }

    return (
        <div>
            <img src={user.prof_img} style={{width: "30px", height: "30px"}}/>
            <form onSubmit={handleSubmit}>
            <textarea 
            id="user-post"
            placeholder="Post a comment" 
            onClick={(e) => setDisplay(true)} 
            onChange={(e) => setBody(e.target.value)}
            />
            <br/>
            { display ? (
            <><input type="button" value="CANCEL" onClick={(e) => handleCancel()}/><input type="submit" value="COMMENT"/></>
            ) : (
            null
            )
            }
            </form>
        </div>
    )
}

export default CommentForm