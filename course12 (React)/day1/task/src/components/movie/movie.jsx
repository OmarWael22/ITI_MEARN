import { Component } from "react";
import "./Movie.css"
function Movie (props) {
    
        return ( 
            <>
            <div className="movie-card">
                <img src={`https://image.tmdb.org/t/p/w500/${props.backdrop_path}`} alt="movie img" />
                <h3>{props.original_title}</h3>
                <p>{props.overview}</p>
                <p>{props.release_date} </p>
                <p>{props.vote_average} / 10</p>
            </div>
            </>
        );
    
}

export default Movie ;
// function Movie() {
//     return ( 
//         <>  
//             
//         </>
//     );
// }

// export default Movie;