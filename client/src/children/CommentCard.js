function CommentCard({comment}){
    return (
        <div className="comment">
            <img src={comment.user.prof_img} style={{width: "30px", height: "30px"}} className="user-prof-img" id="prof-img-comment"/> <h4 className="comment-username">{comment.user.username}</h4>
            <h4>{comment.body}</h4>
        </div>
    )
}

export default CommentCard;