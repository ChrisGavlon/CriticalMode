import { useState, useEffect } from 'react';
import MyReviews from "./MyReviews";

function UserPage({ user, setSelectedReview, setUser, refresh }){
    const [reviews, setReviews] = useState([])
    const [updating, setUpdating] = useState(null)
    const [username, setUsername] = useState("")
    const [prof_img, setProf_img] = useState("")
    const [bio, setBio] = useState("")

    useEffect(() => {
      fetch("/reviews")
      .then((r) => r.json())
      .then(setReviews);
    }, []);

    function afterDelete(){
    fetch("/reviews")
      .then((r) => r.json())
      .then(setReviews);
    }

    function handleUpdate(e){
        e.preventDefault()
        fetch("/edit", {
            method: "PATCH",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify({ username: username, prof_img: prof_img, bio: bio, id: user.id}),
        })
        .then((r)=> r.json())
        .then((data) => {console.log(data)
            setUser(data)
            refresh();
        })
    }
  
    const AssoReviews = reviews.filter(
      (review) => review.user_id === user.id
    )

    return (
        <div className="user-page">
            <h1 id="my-profile-text">My Profile</h1>

            <div className="my-profile">
                {updating ? (
                    <form onSubmit={(e) => handleUpdate(e)}>
                        <input placeholder="New Profile Pic: " onChange={(e) => setProf_img(e.target.value)}/>
                        <br/>
                        <input placeholder="New Username:" onChange={(e) => setUsername(e.target.value)}/>
                        <br/>
                        <input placeholder="New Bio: " onChange={(e) => setBio(e.target.value)}/>
                        <br/>
                        <button onClick={() => setUpdating(false)}>CANCEL</button> <input type="submit"/> 
                    </form> ) : (
                    <>
                        <img src={user.prof_img} id="my-prof-img"/>
                        <h2 id="my-username">{user.username}</h2>
                        <h4 id="my-bio">{user.bio}</h4>
                        <button onClick={() => setUpdating(true)}>UPDATE</button>
                    </>
                    ) 
                }
                </div>
            <h1 id="my-reviews-text">My Reviews</h1>
            {AssoReviews.map((review) => {
          return <MyReviews key={review.id} review={review} setSelectedReview={setSelectedReview} afterDelete={afterDelete}/>
        })}
        </div>
    )
}

export default UserPage;