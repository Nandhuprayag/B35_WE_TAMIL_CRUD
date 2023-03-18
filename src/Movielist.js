import { useEffect, useState } from 'react';
import { API } from './global';
import { Movie } from './Movie';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

export function Movielist() 
{

  const [movielist, setMovielist] = useState([]);
   

  const navigate=useNavigate();
  const getMovies=()=>
   {
    fetch(`${API}/movies`,
    {
      method: 'get',
    })
    .then((response) => response.json())
    .then(data => {
      setMovielist(data);
     });
   }
    
   useEffect(()=>getMovies(),[])
  return (
    <div style={{margin:'5em'}} className='movielist-style'>
        {movielist.map((mv, index)=> (
          <Movie movie={mv} key={index} id={mv.id}
          deleteButton={
            <IconButton aria-label="delete"  color="primary"
            onClick={()=> 
               fetch(`${API}/movies/${mv.id}`,
               {
                method:'delete',
               })
               .then(response => response.json())
               .then(data => {
                console.log(data)
                getMovies(data)
               })
            }
            ><DeleteIcon color='error' /></IconButton>
          }

           editButton={
            <IconButton 
            onClick={()=> 
             navigate(`/movie/edit/${mv.id}`)
            }
            >
              <EditIcon color='warning'/>
            </IconButton>
           }
          />
        ))}

    </div>
  );
}


