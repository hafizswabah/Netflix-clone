import React from 'react'
import './post.css'
import { useEffect, useState } from 'react'
import axios from '../../constants/axios'
import { APIKEY, imageUrl} from '../../constants/constants'
import Youtube from 'react-youtube'

function Post(props) {
  const [urlId,setId]=useState('')
  const [movies, setMovie] = useState([])
  useEffect(() => {
    axios.get(props.url).then((res) => {
      setMovie(res.data.results)
    }).catch((err) => {
      console.log(err);
    })
  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
const handleMovie=(id)=>{
axios.get(`/movie/${id}/videos?api_key=${APIKEY}&language=en-US`).then((res)=>{
 console.log(res.data.results);
  if(res.data.results.lenth!=0){
  setId(res.data.results[0])
 }else{console.log('emptyArray');}
}).catch((err)=>{
  console.log(err);
})
}
  return (
    <div className='row'>
      <h2>{props.tittle}</h2>
      <div className="row-posts">
        {movies.map((item) => {
          return (
            <img onClick={()=>handleMovie(item.id)} className={props.Small ? 'small_poster' : 'poster'} src={`${imageUrl + item.backdrop_path}`} alt="" />
          )
        })}
      </div>
{urlId && <Youtube opts={opts} videoId={urlId.key}/>}
    </div>
  )
}

export default Post