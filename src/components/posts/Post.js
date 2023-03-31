import React from 'react'
import './post.css'
import { useEffect, useState } from 'react'
import axios from '../../constants/axios'
import { APIKEY, imageUrl } from '../../constants/constants'

function Post(props) {
  const [movies, setMovie] = useState([])
  useEffect(() => {
    axios.get(props.url).then((res) => {
      setMovie(res.data.results)
    }).catch((err) => {
      console.log(err);
    })
  }, [])
  return (
    <div className='row'>

      <h2>{props.tittle}</h2>
      
      <div className="row-posts">

        {movies.map((item) => {
          return (
            <img className={props.Small?'small_poster':'poster'} src={`${imageUrl + item.backdrop_path}`} alt="" />
          )
        })}

      </div>

    </div>
  )
}

export default Post