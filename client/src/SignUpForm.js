import { useState } from "react";

function SignUpForm({ setUser, history }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [bio, setBio] = useState("");
    const [prof_img, setProf_img] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        if(prof_img === "") {
          setProf_img("https://youtube.videodeck.net/deck/img/avatar.png")
        }
        fetch("/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
            password_confirmation: passwordConfirmation,
            bio,
            prof_img
          }),
        }).then((r) => {
          if (r.ok) {
            r.json().then((user) => setUser(user));
            history.push('/')
          }
        });
    }


  return (
    <div>
        <div className="form">
        <h2>Sign-up!</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <br/>
            <input 
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <br/>
            <label htmlFor="password">Password:</label>
            <br/>
            <input 
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br/>
            <label htmlFor="password">Confirm Password:</label>
            <br/>
            <input 
                type="password"
                id="password_confirmation"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
            <br/>
            <label htmlFor="bio">Share something about yourself!: </label>
            <br/>
              <textarea
                name="bio"
                type="text"
                id="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            <br/>
            <label htmlFor="prof_img">Give yourself a profile image: </label>
            <br/>
              <input 
                name="prof_img"
                type="text"
                id="prof_img"
                value={prof_img}
                onChange={(e) => setProf_img(e.target.value)}
                rows={6}
              />
              <br/>
            <input type="submit" value="Sign-up!"/>
        </form>
    </div>
    </div>
  )
}

export default SignUpForm;