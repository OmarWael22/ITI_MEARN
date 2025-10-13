import { Component } from "react";
import "./Movie.css"
class Movie  extends Component {
    render() { 
        console.log(this.props);
        return ( 
            <>
            <div className="movie-card">
                <img src={`https://image.tmdb.org/t/p/w500/${this.props.backdrop_path}`} alt="movie img" />
                <h3>{this.props.original_title}</h3>
                <p>{this.props.overview}</p>
                <p>{this.props.vote_average} / 10</p>
            </div>
            </>
        );
    }
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