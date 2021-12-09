import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Home from "./Home";
import LoginForm from "./LoginForm";
import NavBar from "./NavBar";
import NewReview from "./NewReview";
import ResultDetails from "./ResultDetails";
import ReviewDetail from "./ReviewDetail";
import SearchResults from "./SearchResults";
import SignUpForm from "./SignUpForm";
import UserPage from "./UserPage";

function App() {
  const [reviews, setReviews] = useState([])
  const [user, setUser] = useState(null);
  const [selectedReview, setSelectedReview] = useState(null)
  const [selectedGame, setSelectedGame] = useState(null)
  const [search, setSearch] = useState("")
  const history = useHistory();

  //Auto-login
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function refresh(){
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => {
        setUser(user)
        window.location.reload(false);
        });
      }
    });
  }


  return (

    <div className="App">
      <NavBar history={history} user={user} setUser={setUser} setSearch={setSearch}/>
      { user ? (
      <Switch>
        {
          selectedGame && (
        <Route exact path={`/results/${selectedGame.id}`}>
          <ResultDetails game={selectedGame} setSelectedReview={setSelectedReview} setSelectedGame={setSelectedGame} user={user}/>
        </Route>
          )
        }
        <Route exact path="/results">
          <SearchResults search={search} setSelectedGame={setSelectedGame} />
        </Route>
        { 
          selectedReview && ( 
          <Route exact path={`/reviews/${selectedReview.id}`}>
            <ReviewDetail review={selectedReview} user={user}/>
          </Route>
          )
        }
        <Route exact path="/new-review">
          <NewReview game={selectedGame} user={user}/>
        </Route>
        <Route exact path="/profile">
          <UserPage user={user} setSelectedReview={setSelectedReview} setUser={setUser} refresh={refresh} />
        </Route>
        <Route exact path="/">
          <Home reviews={reviews} setReviews={setReviews} setSelectedReview={setSelectedReview}/>
        </Route>
      </Switch>
      ) : (
      <Switch>
        <Route exact path="/login">
          <LoginForm setUser={setUser} history={history}/>
        </Route>
        <Route exact path="/signup">
          <SignUpForm setUser={setUser} history={history}/>
        </Route>
        {
          selectedGame && (
        <Route exact path={`/results/${selectedGame.id}`}>
          <ResultDetails game={selectedGame}  setSelectedReview={setSelectedReview} setSelectedGame={setSelectedGame} user={user}/>
        </Route>
          )
        }
        <Route exact path="/results">
          <SearchResults search={search} setSelectedGame={setSelectedGame} />
        </Route>
        { 
          selectedReview && (
          <Route exact path={`/reviews/${selectedReview.id}`}>
            <ReviewDetail review={selectedReview} user={user}/>
          </Route>
        )
        }
        <Route path="/">
          <Home reviews={reviews} setReviews={setReviews} setSelectedReview={setSelectedReview}/>
        </Route>
      </Switch>
      )
      }
    </div>
  )
}

export default App;