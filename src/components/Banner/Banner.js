import React, { useEffect, useState } from 'react'
import './banner.css'
import axios from '../../constants/axios'
import {APIKEY,imageUrl} from '../../constants/constants'
function Banner() {
    const [movie,setMovie]=useState()
    useEffect(()=>{
        axios.get(`trending/all/week?api_key=${APIKEY}`).then((res)=>{
            setMovie(res.data.results[Math.floor(Math.random()*20)])
        })
    },[])
    return (
       
        <div  className='banner'  style={{backgroundImage:`url(${imageUrl+movie?.backdrop_path})`}}>
            <div className="content">
                <h1 className='tittle'>{movie?.title}</h1>
                <div className="banner-buttons">
                    <button className="button">Play</button>
                    <button className="button">My List</button>
                </div>
                <h2 className="description">
                {movie?.overview}
                </h2>
            </div>
            <div className="fade"></div>
        </div>
    )
}

export default Banner