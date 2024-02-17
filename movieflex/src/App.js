
import './App.css';
import {MultipleCard} from "./Component/MultipleCards.js"
import NavBar from './Component/NavBar.js';
import React from "react";
import { movieData } from "./Component/MovieData.js";


class App extends React.Component{

  constructor(){
    super();
  
    this.state ={
      movies: movieData,
      cartCount:0
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
  
  
    handleCart = (movie) => {
      let{movies,cartCount}=this.state;
    let movieId = movies.indexOf(movie);
    movies[movieId].cart=!movies[movieId].cart;

    if(movies[movieId].cart){
      cartCount=cartCount+1;
    }
    else{
     cartCount=cartCount-1;
    }
      this.setState({
        movies:movies ,
        cartCount
      });
    };

render(){

  return (
  <div >
  <NavBar cartCount={this.state.cartCount}/>
 <div id="CardContainer">
     <MultipleCard movies={this.state.movies} StarIncreace={this.StarIncreace } StarDecreace={this.StarDecreace } handleFevorite={this.handleFevorite} handleCart={this.handleCart}/>
 </div>

  </div>
  );
}
}

export default App;
