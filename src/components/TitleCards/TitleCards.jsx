import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'

const TitleCards = ({title, category}) => {
  // useRef() to access a DOM element
  const [apiData, setApiData] = useState([]);
  const cardRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOWE4Yjc0YjMxZjZiZTcxMTc5NDU2ZWFiMTc1OWRhZiIsIm5iZiI6MTc1NDU1NDU0Ni43NjEsInN1YiI6IjY4OTQ2MGIyYzZiZThlOTY4OTlkYjEzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NtHHaVTJVsMqcY6s0LYgr3He4tN5wugqNjjifneV6C4'
    }
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardRef.current.scrollLeft += event.deltaY;
  }

  useEffect(() => {
    cardRef.current.addEventListener('wheel', handleWheel);
    fetch(`https://api.themoviedb.org/3/movie/${category ? category : 'now_playing'}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));
  }, []);

  return (
    <div className='title-card'>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardRef}>
        {apiData.map((card, index) => {
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+ card.backdrop_path} alt={card.name} />
            <p>{card.original_title}</p>
          </Link>
        })};
      </div>
    </div>
  )
}

export default TitleCards
