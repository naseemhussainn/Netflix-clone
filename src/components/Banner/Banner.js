import React, { useState } from 'react'
import {API_KEY , imageUrl} from '../../constants/constants'
import "./Banner.css"
import { useEffect } from 'react'
import axios from '../../axios'

function Banner() {
  const [movie,setMovie] = useState() 
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((Response=>{
      console.log(Response.data.results[0]);
      setMovie(Response.data.results[0]);
    }))
  },[])
  return (
    <div className='banner'
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path :''})`}}
    >
        <div className='content'>
            <h1 className='title'>{movie ? movie.title : ''}</h1>
            <div className='banner_buttons'>
                <button className='Button'>PLAY</button>
                <button className='Button'>MY LIST</button>
            </div>
            <h1 className='discription'> {movie ? movie.overview : ''}</h1>
        </div>
      <div className="fade_bottom"></div>
      
    </div>
  )
}

export default Banner
