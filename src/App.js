import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import LandingPage from './LandingPage';
import Header from './Header';
import './App.css';
import styled from 'styled-components';

const App =() => {
  const APP_ID = '8244022a';
  const APP_KEY = '31d982e7c2856d383cd497dcb2f9e515';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <Header/>
      <header>
        <h1>Recipe Book</h1>
      </header>
      <form className="search-form" role="search" onSubmit={getSearch}>
        <label htmlFor="search-bar">
          <span className="visually-hidden">Search</span>
        </label>

        <input type="text" id="search-bar" name="search-term" value={search} onChange={updateSearch}/>

        <button type="submit" className="search-button">Search</button>
      </form>
      <main> 
        {!recipes.length ? <p>empty</p> : <p>full</p>}
      {recipes.map(recipe => (
        <Recipe
          key={recipe.recipe.label} 
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
      </main>
    </div>
  );
}

export default App;
