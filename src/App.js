import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import Post from './components/posts/Post';
import { APIKEY } from './constants/constants'
function App() {
  return (
    <div className="App">
   <NavBar/>
   <Banner/>
   <Post tittle='Netflix Orginals' url={`discover/tv?api_key=${APIKEY}&with_network=213`}/>
   <Post tittle='Actions' Small url={`discover/movie?api_key=${APIKEY}&with_genres=28`}/>
   <Post tittle='Comedy' Small url={`discover/movie?api_key=${APIKEY}&with_genres=35`}/>
   <Post tittle='Horror' Small url={`discover/movie?api_key=${APIKEY}&with_genres=27`}/>
    </div>
  );
}

export default App;
