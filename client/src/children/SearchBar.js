import { useHistory } from 'react-router-dom';

function SearchBar({ setSearch }) {
  const history = useHistory();

  function handleSubmit(e){
    e.preventDefault();
    setSearch(e.target.querySelector('input').value)
    history.push('/results');
  }

    return (
      <>
      <form onSubmit={handleSubmit} className="search-form">
        <input className="searchbar" type="text"  placeholder="Search for a game" />
        <button className="search-bttn" type="submit">Search</button>
      </form>
      </>
    )
  }
  
  export default SearchBar;