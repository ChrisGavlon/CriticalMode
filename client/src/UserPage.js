import { useState, useEffect } from 'react';
import MyReviews from "./MyReviews";

function UserPage({ user, setSelectedReview }){
    const [reviews, setReviews] = useState([])

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
  
    const AssoReviews = reviews.filter(
      (review) => review.user_id === user.id
    )

    return (
        <div className="user-page">
            <div className="my-profile">
                <img src={user.prof_img} id="my-prof-img"/>
                <h2 id="my-username">{user.username}</h2>
                <h4 id="my-bio">{user.bio}</h4>
            </div>
            {AssoReviews.map((review) => {
          return <MyReviews key={review.id} review={review} setSelectedReview={setSelectedReview} afterDelete={afterDelete}/>
        })}
        </div>
    )
}

export default UserPage;