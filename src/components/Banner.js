import React, { useEffect, useState } from 'react'
import instance from './instance'
import requests from './request'
import '../components/Banner.css'
function Banner() {
    const [movie, setMovie] = useState([])

    async function fetchData(){
        const request = await instance.get(requests.fetchNetflixOriginals)
        setMovie(request.data.results[
            Math.floor(Math.random() * request.data.results.length - 1)
        ])
    }
    useEffect(() => {
      fetchData()
    }, [])
    console.log("banner movies is",movie)
    function truncate(str, n){
        return str?.length > n ? str.substr(0,n-1)+"....": str;
    }
  return (
    <header className='header'
    style={{backgroundsize:"cover",
    backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
    backgroundPosition:"center center",
    height:"800px"}}>
        <div className='banner_contents'>
            <h1 className='banner_title'>
                {movie.title || movie.name || movie.original_name}
            </h1>
            <h1 className='banner-description'>
            {truncate(movie?.overview,250)}
            </h1>

        </div>

    </header>
  )
}

export default Banner