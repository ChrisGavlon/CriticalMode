import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import SearchBar from "./children/SearchBar";

function NavBar({ history, user, setUser, setSearch }) {
  const [ displaySearch, setDisplaySearch ] = useState(true)

  //Log-out function
  function handleLogout() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null)
        history.push('/')
      }
    });
  }

  return (
    <header className="navBar">
            <Link className="homeBttn" id="homeBttn" to="/">CriticalMode</Link>
              { displaySearch ? (
              user ? (
              <>
              <FontAwesomeIcon icon={faSearch} className="searchIcon" onClick={(e) => setDisplaySearch(null)}/>
              <p id="userGreeting">Hello, <strong>{user.username}</strong>!</p>
              <Link to="/profile"><img id="userPFP" src={user.prof_img} className="user-prof-img"/></Link>
              <button className="navBarBttn" id="logoutBttn" onClick={handleLogout}>Logout</button>
              </>
              ) : (
              <>
              <FontAwesomeIcon icon={faSearch} className="searchIcon" onClick={(e) => setDisplaySearch(null)}/>
              <Link className="navBarBttn" id="loginBttn" to="/login">Login</Link>
              <Link className="navBarBttn" id="signupBttn" to="/signup">Sign-up</Link>  
              </>
              )   
              ) : (
                <>
                <SearchBar setSearch={setSearch}/>
                <h4 className="cancel-search" onClick={(e) => setDisplaySearch(true)}>✖</h4>
                </>
              )
              }
    </header>
  )
}

export default NavBar;