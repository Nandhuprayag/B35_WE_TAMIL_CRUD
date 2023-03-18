import { Block } from "@mui/icons-material";
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useState } from "react";
import InfoIcon from '@mui/icons-material/Info';
import { Counter } from "./Counter";
import { useNavigate } from "react-router-dom";


export function Movie({ movie, id, deleteButton, editButton }) 
{
 const [show,setShow]=useState(true)

  const rating_style={color:movie.rating>8?'green':'red'}
  const summary_style={
     display:show?'block':'none'
  }

  const navigate=useNavigate()
  return (
    <div className="movie-container">
         <img src={movie.poster} className='poster-style'/>
         <div className="movie-spec">
          <h3 className="movie-name">{movie.name}</h3>
              <IconButton aria-label="summary"
              color="primary"
               onClick={()=> setShow(!show)}
                >
               {show ?<ExpandLessIcon/>:<ExpandMoreIcon/>}
              </IconButton>
              <IconButton 
               color="primary"
               onClick={()=> navigate(`/movie/${id}`)}
               >
                <InfoIcon/>
              </IconButton>
              
              <div>
              <p style={rating_style}> ⭐{movie.rating}</p>
          
              </div>
         </div>
         <div>
         {show ?<p >{movie.summary}</p>:""}
         <div className="movieicon-style">
         <Counter/> 
         {deleteButton}
         {editButton}

         </div>
         
         </div>
         
         
    </div>
  );
}
