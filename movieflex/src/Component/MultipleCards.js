import Card from "./Card";

export  function MultipleCard(props){

  return (<>
    {props.movies.map((currentMovie,indx)=>{
    return <Card  key={indx} movie = {currentMovie} 
      StarIncreace={props.StarIncreace}
      StarDecreace={props.StarDecreace}
      handleFevorite={props.handleFevorite} 
      handleCart={props.handleCart}
    />})}
  </>);
}


