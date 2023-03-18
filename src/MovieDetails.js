import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { API } from './global';
import { Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';



export function MovieDetails() 
{
 const [movie,setMovie]=useState({})

  const { id } = useParams();
  
  useEffect(()=>
  {
    fetch(`${API}/movies/${id}`,
    {
      method:'GET',
    })
    .then(response => response.json())
    .then((data)=> {
      console.log(data)
      setMovie(data)
    })
  },[])  


   const navigate=useNavigate()
  return (
    <div className='moviedetail-style'>
      <iframe className='trailer-style' src={movie.trailer}></iframe>
      <div className='movie-spec'>
      <h3 className="movie-name">{movie.name}</h3>
      <p > ⭐{movie.rating}</p>
      </div>
      <p>{movie.summary}</p>
      <div>
      <Button variant="outlined" startIcon={<ArrowBackIosNewIcon />}
      onClick={()=> navigate(`/movie`)}
      >
   BACK
</Button>
      </div>
    </div>
  );
}
