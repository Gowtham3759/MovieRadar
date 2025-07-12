import React from 'react'
import '../styles/card.css'
const Card = ({movie}) => {
  return (
    <>
        <div className='wc'>
            <div className='top'>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className='poster'/>
                <p>{movie.title}</p>
            </div>
            <div className='desc'>
                <p style={{marginLeft:'0px'}}>{movie.vote_average.toFixed(1)}</p>
                <p>{movie.original_language}</p>
                <p>Movie</p>
            </div>
        </div>
    </>
  )
}

export default Card