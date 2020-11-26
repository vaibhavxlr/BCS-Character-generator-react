import axios from 'axios';
import './App.css';
import Header from './components/ui/Header';
import React, { useState, useEffect } from 'react'; 
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'


const App = () => {

  const [items, setItems] = useState([]) //items represent characters coming from API
  const [isLoading, setIsLoading] = useState(true)  //used for store the state whether data is being fetched right now or laoding data is done
  const [query, setQuery] = useState('')  

  useEffect(() => {
    const fetchItems = async () => {
    let result = [];

    if(query === 'Better Call Saul')
       result = await axios(`https://www.breakingbadapi.com/api/characters?category=Better+Call+Saul`)     
    else 
       result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
    
    console.log(result.data)
    setItems(result.data)
    setIsLoading(false)
  }

  fetchItems()
  }, [query])


  return (
    <div className="container">
      <Header />
      <Search getQuery = {(q) => setQuery(q)} />
      <CharacterGrid isLoading = {isLoading} items = {items} />
    </div>
  );
}

export default App;
