import style from "./Card.module.css"; // we have used css module

// here we are creating our Card that contains all the details about the movie ...

export default function Card (props){
    return (
      <div className={style.CardBody}>
        <div className={style.Movieposter}>
          <img src={props.movie.url} alt="Movie Poster" />
        </div>

        <div className={style.Moviedetails}>
          <div className={style.movieName}>{props.movie.name} </div>
          <div className={style.moviediscribe}>
            This movie is truly fantastic; its action scenes are nothing short
            of fabulous. Throughout the film, you won't be able to take your
            eyes off the screen. The breathtaking sequences are so captivating
            that you won't even want to blink.
          </div>
          <div className={style.moviePrice}> Rs:{props.movie.price}</div>

          <div className={style.Footer}>
            <div>Rating:{props.movie.rating}</div>
            <div className={style.Star_Rating}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/43/43625.png"
                alt="minus-butn"
                className={style.minus_btn}
                onClick={()=>props.StarDecreace(props.movie)}
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/1040/1040230.png"
                alt=" star-rating"
                className={style.Star}
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png"
                alt="plus-butn"
                className={style.plus_btn}
                onClick={()=>props.StarIncreace(props.movie)}
              />
              <span>{props.movie.star}</span>
            </div>
            <div className={style.buttons}>
              {/* changing the fevorite button into unfevorite */}

              {/* first way to do this */}
              {/* {this.state.fevorite ? (<button className="UnFevoriteButton" onClick={this.handleFevorite}> Unfevorite</button>) 
              : (<button className="FevoriteButton"  onClick={this.handleFevorite}>Fevorite</button>)}
               */}

              {/* another way to do this */}
                <button
                  className={props.movie.fevorite ? style.UnFevoriteButton : style.FevoriteButton} onClick={()=>props.handleFevorite(props.movie)} > {props.movie.fevorite ? "UnFevorite" : "Fevorite"}
                </button>
              

              {/* changing the Cart button into remove Cart */}
              <button
                className={props.movie.cart ? style.RemoveCartBtn : style.AddCartBtn}onClick={()=>props.handleCart(props.movie)}>{props.movie.cart ? "Remove To Cart" : "Add To Cart"}
              </button>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
