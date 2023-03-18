import { Button } from '@mui/material';
import { useState } from 'react';
import { ColorList } from "./ColorList";

export function ColorBox() {
  const [color, setColor] = useState('green');

  const [list, setlist] = useState(['red', 'green', 'blue']);
  const style = {
    fontSize: '3em', backgroundColor: color
  };
  return (
    <div style={{ margin: '4rem' }}>
      <input type='text' value={color}
        onChange={(e) => setColor(e.target.value)}
        style={style} />
      <Button onClick={() => setlist([...list, color])}>Add Color</Button>
      {list.map((color, index) => (
        <ColorList color={color} key={index} />
      ))}
    </div>
  );
}
