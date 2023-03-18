import { IconButton } from '@mui/material';
import { useState } from 'react';
import Badge from '@mui/material/Badge';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';


export function Counter() 
{
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
   <div style={{margin:'5em'}}>
        <IconButton onClick={()=>setLike(like+1)} color='primary'>
        <Badge badgeContent={like} color="success">
        <ThumbUpIcon/></Badge>
        </IconButton>

        <IconButton onClick={()=>setDislike(dislike+1)} color='primary'>
        <Badge badgeContent={dislike} color="error">
        <ThumbDownAltIcon/></Badge>
        </IconButton>
   </div>
    );
}
