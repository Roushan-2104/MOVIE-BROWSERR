import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Trending from "./components/Trending";
import { Route, Switch } from "react-router-dom";
import SearchView from "./components/SearchView";
import Details from "./components/Details";
import Error from "./components/error";
import Footer from './components/Footer';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (searchText) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=eef0ae062dfda1f5ebdc1dd92ae95aa9&language=en-US&query=${searchText}&page=1&include_adult=false/`
      )
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data.results);
        });
    }
  }, [searchText]);
  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/trend" component={Trending} />
        <Route path="/search">
          <SearchView keyword={searchText} searchResults={searchResults} />
        </Route>
        <Route path="/movies/:id">
          <Details keyword={searchText} />
        </Route>
        <Route component={Error} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
