import {React,useEffect,useState} from 'react'
import './styles/head.css';
import './styles/search.css';
import Card from './components/Card';
const apiKey = import.meta.env.VITE_API_KEY;
const base_url='https://api.themoviedb.org/3';
const api_options={
  method:'GET',
  headers:{
    accept:'application/json',
    Authorization:`Bearer ${apiKey}`
  }
}
function App() {
  
  const[movies,setMovies]=useState([]);
  const [movie,setMovie]=useState('');
  const fetchMovies=async(typed='')=>{
    const endpoint=typed?`${base_url}/search/movie?query=${typed}`:`${base_url}/discover/movie?sort_by=popularity.desc`;
    const m=await fetch(endpoint,api_options); 
    const re=await m.json();
    setMovies(re.results);
    console.log(re.results[0].poster_path);
  }
  useEffect(()=>{
      fetchMovies(movie);
  },[movie])
  const handleChange =(e) =>{
    setMovie(e.target.value);
  }
  return (
    <div className='whole'>
      <div className='head'>
        <img src="/images/logo.png" alt="hello" className='logo'/>
        <img src='images/hero-img.png' className='hero'/>
        <h1 style={{textAlign:'center'}}>Find Movies You'll Love Without the Hassle</h1>
      </div>
      <div className='search'>
        <input type='text' placeholder='search through 300+ movies online' className='btn' value={movie} onChange={handleChange} style={{color:'white'}}/>
      </div>
      <h1 style={{textAlign:'center',fontFamily:'Arial'}}>Movies</h1>
      <div className='grid'>
        {
          movies.map((movie)=>{
            return movie.poster_path?<Card movie={movie}/>:null;
          })
        }
      </div>
    </div>
  )
}

export default App
