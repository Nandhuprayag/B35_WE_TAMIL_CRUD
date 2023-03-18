import { useEffect, useState } from "react";
import { json, useNavigate, useParams } from "react-router-dom";
import { API } from "./global";
import { Button, TextField } from "@mui/material";



export function MovieEdit()
 {
  const { id } = useParams();
  const [movie,setMovie]=useState(null);
   
  const getMovies=()=>{
    fetch(`${API}/movies/${id}`,
    {
      method:'GET'
    })
    .then(response => response.json())
    .then(data => {
      setMovie(data)
    })
  }
  useEffect(()=>getMovies(),[])

  console.log(movie)

    return (
      <div style={{margin:'4rem'}}>
            {movie ? <MovieEditForm movie={movie}/>:"Loading ...."}
      </div>
    )
}

function MovieEditForm({movie})
{
  const [name,setName]=useState(movie.name);
  const [poster,setPoster]=useState(movie.poster);
  const [rating,setrating]=useState(movie.rating)
  const [summary,setsummary]=useState(movie.summary)
  const [trailer,settrailer]=useState(movie.trailer)  

   const navigate=useNavigate()
  return(
    <div style={{margin:'5rem'}}>
       <TextField id="outlined-basic" fullWidth='100%' label="Enter Name" value={name} variant="outlined" onChange={(e)=> setName(e.target.value)} />
      <TextField id="outlined-basic" fullWidth='100%' label="Enter Poster" value={poster} variant="outlined" onChange={(e)=> setPoster(e.target.value)}/>
      <TextField id="outlined-basic" fullWidth='100%' label="Enter Rating" value={rating} variant="outlined" onChange={(e)=> setrating(e.target.value)}/>
      <TextField id="outlined-basic" fullWidth='100%' label="Enter Summary" value={summary} variant="outlined" onChange={(e)=> setsummary(e.target.value)}/>
      <TextField id="outlined-basic" fullWidth='100%' label="Enter Trailer" value={trailer} variant="outlined" onChange={(e)=> settrailer(e.target.value)}/>
       <Button
       variant="contained" fullWidth='100%' color="success"
       onClick={()=>
      {
        const updateMovie={
          name:name,poster:poster,rating:rating,summary:summary,trailer:trailer
        }; fetch(`${API}/movies/${movie.id}`,
        {
          method:'put',
          body:JSON.stringify(updateMovie),
          headers:{
            'content-type':'application/json'
          }
        }) 
        .then((data)=> navigate(`/movie`))

      }}
       
       >Save</Button>
    </div>
  )


}