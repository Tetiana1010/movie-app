import React, { useState, useEffect }  from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import movieApi from '../../services/movieApi.js';
import  { useSearchParams } from "react-router-dom";

export default function Cast() {
  const { id } = useParams();

  const [cast, setCast] = useState([])

  useEffect(() => {
    movieApi
      .fetchCastWithQuery(id)
      .then(response => setCast(response));  
  }, []);


  return (
    <CastStyled>
      {cast.length > 1 && cast.map(player => 
        <div key={player.id} className='actor'>
          <img src={`https://image.tmdb.org/t/p/w500/${player.profile_path}`} alt={player.name}  height="150"/>
          <p><span>{player.gender === 1 ? 'Actress ' : 'Actor'} </span> {player.name}</p>
          <p><span>Character:</span> {player.character}</p>
        </div>)
      }
    </CastStyled>
  );
};

const CastStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px 45px;

  .actor {
    width: 200px;
    height: 280px;
    padding: 1rem;
    -webkit-box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.1); 
    box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.1);
  };

`;