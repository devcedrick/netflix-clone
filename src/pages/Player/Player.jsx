import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import dayjs from 'dayjs'
import { useParams } from 'react-router-dom'

const Player = () => {
  const {id} = useParams();

  const [apiData, setApiData] = useState({
    name: '',
    key: '',
    publish_at: '',
    type: ''
  });
  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOWE4Yjc0YjMxZjZiZTcxMTc5NDU2ZWFiMTc1OWRhZiIsIm5iZiI6MTc1NDU1NDU0Ni43NjEsInN1YiI6IjY4OTQ2MGIyYzZiZThlOTY4OTlkYjEzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NtHHaVTJVsMqcY6s0LYgr3He4tN5wugqNjjifneV6C4'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
  }, []);

  const formattedDated = dayjs(apiData.publish_at).format('MMMM D, YYYY');
  // console.log(dayjs(apiData.publish_at).isValid());

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" />
      <iframe src={`https://www.youtube.com/embed/${apiData.key}`} width='90%' height='90%' title='trailer' frameborder="0" allowFullScreen></iframe>
      <div className="player-info">
        <p>{formattedDated}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
