import { Component } from "react";
import "./Movie.css"
class Movie  extends Component {
    render() { 
        console.log(this.props);

        return ( 
            <>
            <div className="movie-card">
                <img src={this.props.imageSrc} alt="movie img" />
                <h3>{this.props.name}</h3>
                <p>{this.props.description}</p>
                <p>{this.props.rating}</p>
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