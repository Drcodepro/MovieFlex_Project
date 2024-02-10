import "./Card.css";
import React from "react";

export default class Card extends React.Component {
  

  render() {
    return (
      <div className="CardBody">
        <div className="Movieposter">
          <img src={this.props.movie.url} alt="Movie Poster" />
        </div>

        <div className="Moviedetails">
          <div className="movieName">{this.props.movie.name} </div>
          <div className="moviediscribe">
            This movie is truly fantastic; its action scenes are nothing short
            of fabulous. Throughout the film, you won't be able to take your
            eyes off the screen. The breathtaking sequences are so captivating
            that you won't even want to blink.
          </div>
          <div className="moviePrice"> Rs:{this.props.movie.price}</div>

          <div className="Footer">
            <div>Rating:{this.props.movie.rating}</div>
            <div className="Star-Rating">
              <img
                src="https://cdn-icons-png.flaticon.com/128/43/43625.png"
                alt="minus-butn"
                className="minus-btn"
                onClick={()=>this.props.StarDecreace(this.props.movie)}
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/1040/1040230.png"
                alt=" star-rating"
                className="Star"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png"
                alt="plus-butn"
                className="plus-btn"
                onClick={()=>this.props.StarIncreace(this.props.movie)}
              />
              <span>{this.props.movie.star}</span>
            </div>
            <div className="buttons">
              {/* changing the fevorite button into unfevorite */}

              {/* first way to do this */}
              {/* {this.state.fevorite ? (<button className="UnFevoriteButton" onClick={this.handleFevorite}> Unfevorite</button>) 
              : (<button className="FevoriteButton"  onClick={this.handleFevorite}>Fevorite</button>)}
               */}

              {/* another way to do this */}
                <button
                  className={this.props.movie.fevorite ? "UnFevoriteButton" : "FevoriteButton"} onClick={()=>this.props.handleFevorite(this.props.movie)} > {this.props.movie.fevorite ? "UnFevorite" : "Fevorite"}
                </button>
              

              {/* changing the Cart button into remove Cart */}
              <button
                className={this.props.movie.cart ? "RemoveCartBtn" : "AddCartBtn"}onClick={()=>this.props.handleCart(this.props.movie)}>{this.props.movie.cart ? "Remove To Cart" : "Add To Cart"}
              </button>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}
