

export function ColorList({ color }) {
  const style = {
    width: '200px', height: '10px',
    backgroundColor: color, marginTop: '2em'
  };
  return (
    <div style={style}></div>
  );
}
