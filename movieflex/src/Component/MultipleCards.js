import Card from "./Card";
import React from "react";

export let cartCount=0;

export default class MultipleCard extends React.Component {
constructor(){
  super();

  this.state ={
    movies: [{cart:false,fevorite:false,name:"The Avenger",rating:9.6,price:399,star:0,url:"https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg"},
    {cart:false,fevorite:false,name:"Forest Gump",rating:8.5,price:259,star:0,url:"https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg"},
    {cart:false,fevorite:false,name:"The Dark Knight",rating:7.9,price:709,star:0,url:"https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg"},
    {cart:false,fevorite:false,name:"Spider Man(Home Coming)",rating:8.2,price:499,star:0,url:"https://upload.wikimedia.org/wikipedia/en/f/f9/Spider-Man_Homecoming_poster.jpg"},
    {cart:false,fevorite:false,name:"John wick 2",rating:7.6,price:599,star:0,url:"https://upload.wikimedia.org/wikipedia/en/3/31/John_Wick_Chapter_Two.png"},
    {cart:false,fevorite:false,name:"Rambo(Last Blood)",rating:6.9,price:459,star:0,url:"https://upload.wikimedia.org/wikipedia/en/b/b1/Rambo_-_Last_Blood_official_theatrical_poster.jpg"}]

  }
}

//We can use handler functions without binding them to the component but they will lose reference to the current component instance when triggered once.
    //so we have to bind  handlestar() function with current instance "this" otherwise "this" will lost when we call the handlestar function

    // this.handleStar = this.handleStar.bind(this);

    // if we don't want to write above line for binding so use Arrow function "arrow function automaticali bind "this" to the current instance of class"

    // or we can bind "this" with the handleStar function each time when we are calling it  ----- this.handleStar.bind(this);

  // Arrow function

  StarIncreace = (movie) => {
   //The setState function is used to schedule an update to a component's state, and it triggers a re-render of the component with the updated state.
  
    let movieId = this.state.movies.indexOf(movie);

    if(this.state.movies[movieId].star<5){
    this.state.movies[movieId].star += 0.5;

      this.setState({
       movies:this.state.movies  // here we can say that we are pushing the changed state into unchanged state
      });
   }
    }



    StarDecreace = (movie) => {
      //The setState function is used to schedule an update to a component's state, and it triggers a re-render of the component with the updated state.
     console.log(movie)
      // another way so decreace the line of code 
      const{movies}=this.state;
       let movieId = movies.indexOf(movie);

       if(movies[movieId].star>0){

       movies[movieId].star -= 0.5;
        
         this.setState({
          movies:movies  // here we can say that we are pushing the changed state into unchanged state
         });
        }
       }



  // Onclick event handler function that will change the fevorite property value and also re-render the component
  handleFevorite = (movie) => {

    const{movies}=this.state;
    let movieId = movies.indexOf(movie);
    movies[movieId].fevorite = !movies[movieId].fevorite;  // if current component's fevorite is true then it will change it as false and if false then true
    
    this.setState({
      // movies:movies 
         movies        // here key value has the same name so we can write only one instead of writing both it will stiill same  
    });
  };


  handleCart = (movie,cart) => {

    if(cart){
    cartCount--;
    }
    else{
      cartCount++;
    }
    const{movies}=this.state;
  let movieId = movies.indexOf(movie);
  movies[movieId].cart=!movies[movieId].cart;
    this.setState({
      movies:movies 
    });
  };


   
render(){

  return (<>
    {this.state.movies.map((currentMovie,indx)=>{

    return <Card  key={indx} movie = {currentMovie}  StarIncreace={this.StarIncreace } StarDecreace={this.StarDecreace } handleFevorite={this.handleFevorite} handleCart={this.handleCart}/>
   
   })}
    
 </>);
}
}
