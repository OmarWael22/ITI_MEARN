import { Component } from "react";
import Movie from "../movie/movie";
import "./movies.css"
class Movies extends Component {
    constructor() {
        super()
        this.state = {
        movies: [
            {
            name: "Inception",
            description: "A skilled thief enters dreams to steal secrets.",
            imageSrc: "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg",
            rating: "⭐ 8.8/10"
            },
            {
            name: "The Dark Knight",
            description: "Batman faces the Joker in a battle for Gotham’s soul.",
            imageSrc: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTfE_qrYMBZ_JB8om-34WGaZARhpX26yWRttqIDvn4_7l--UzX8mxKcPrc59IcvTpEA_G8gPA",
            rating: "⭐ 9.0/10"
            },
            {
            name: "Interstellar",
            description: "A group travels through a wormhole to find a new home for humanity.",
            imageSrc: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg",
            rating: "⭐ 8.6/10"
            },
            {
            name: "The Matrix",
            description: "A hacker discovers the truth about his simulated reality.",
            imageSrc: "https://m.media-amazon.com/images/I/51vpnbwFHrL._AC_.jpg",
            rating: "⭐ 8.7/10"
            }
        ]

        };
        console.log(this.state);
    }
    render() { 
        return ( 
            <>
            <h1>Movies</h1>
            <div className="container">
            {
                this.state.movies.map((mov)=><Movie {...mov} ></Movie>)
            }
            </div>
            </>
        )
    }
}

export default Movies;