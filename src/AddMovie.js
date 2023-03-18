import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from './global';


export function AddMovie() 
{
    const [movielist,setmovielist]=useState([])
  // const getMovies=()=>{
  //   fetch(`${API}/movies`,
  //   {
  //     method:'get',
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     setmovielist(data)
  //   })
  // }

  //  useEffect(()=> getMovies,[])

   const navigate=useNavigate()

   const [name,setName]=useState("");
   const [poster,setPoster]=useState("");
   const [rating,setrating]=useState("")
   const [summary,setsummary]=useState("")
   const [trailer,settrailer]=useState("")   
  return (
    <div className='addmovie-style'>
      <TextField id="outlined-basic" fullWidth='100%' label="Enter Name" variant="outlined" onChange={(e)=> setName(e.target.value)} />
      <TextField id="outlined-basic" fullWidth='100%' label="Enter Poster" variant="outlined" onChange={(e)=> setPoster(e.target.value)}/>
      <TextField id="outlined-basic" fullWidth='100%' label="Enter Rating" variant="outlined" onChange={(e)=> setrating(e.target.value)}/>
      <TextField id="outlined-basic" fullWidth='100%' label="Enter Summary" variant="outlined" onChange={(e)=> setsummary(e.target.value)}/>
      <TextField id="outlined-basic" fullWidth='100%' label="Enter Trailer" variant="outlined" onChange={(e)=> settrailer(e.target.value)}/>
      <Button variant='contained'
      fullWidth='100%'
      onClick={()=>
      {
        const newMovie={
          name:name,poster:poster,
          rating:rating,summary:summary,
          trailer:trailer
        };
        fetch(`${API}/movies`,
        {
            method:"POST",
            body:JSON.stringify(newMovie),
            headers:{
              "content-type":"application/json"
            }
        })
        .then(data =>{
          navigate(`/movie`)
        })
      }}  
      >
        Add Movie
      </Button>
    
    </div>
  );
}
