import React from 'react'
import instance from '../components/instance'
import { useState, useEffect } from 'react'
import './Row.css'

const base_url="https://image.tmdb.org/t/p/original/"
//destructuring
function Row({ title, fetchUrl, islargeRow } ) {

    const [movies, setMovies] = useState([])

    useEffect(() => {
      async function fetchData(){
        const request = await instance.get(fetchUrl)
        setMovies(request.data.results)
      }
      fetchData()
    
    }, [])
    console.log("movies is",movies)

  return (
    <div className='row' style={{marginLeft:"20px"}}>
      <h1>{ title }</h1>
      <div className='row_posters'style={{display:"flex"}}>
      {movies.map((movie) => (
        <img className={`row_poster ${islargeRow && "row_posterlarge"}`} 
        src={`${base_url}${movie.poster_path}`}
         alt={ movie.name }></img>
      ))}
      </div>
    </div>
  )
}

export default Row
