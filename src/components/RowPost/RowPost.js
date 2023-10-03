import React,{useEffect,useState} from 'react'
import './RowPost.css';
import axios from '../../axios';
import { API_KEY , imageUrl} from '../../constants/constants';
import Youtube from 'react-youtube'
function RowPost(props) {
  const [postMovie,setPostMovie] = useState([])
  const [youtubeKey,setYoutubeKey]= useState('')
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      // console.log(response.data.results)
      setPostMovie(response.data.results)
    }).catch(err=>{
      alert('network error')
    })
  })
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const handleMovie=(id)=>{
    console.log(id)
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(respose=>{
      console.log(respose.data.results[0].key);
      if(respose.data.results.length !== 0){
        setYoutubeKey(respose.data.results[0].key);
      }else{
        alert('no trailer found');
      }
    }).catch(err=>{
      alert('netwrok error');
    })
  }
  return (
    <div className='row'>
        <h4 style={{fontSize:'1.4vw'}}>{props.title}</h4>
        <div className="posters">
        {postMovie.map(obj=>{
          return(
            <img onClick={()=>handleMovie(obj.id)} alt="poster" className={props.isSmall ? 'smallPost' : 'poster'} src={obj ? imageUrl+obj.poster_path : ''} />
          )
        })}
        </div>
        <Youtube videoId={youtubeKey} opts={opts} style={{dislay:'none'}} className='youtubeTab'/>
    </div>
  )
}

export default RowPost
