import { Component } from "react";
import Movie from "../movie/movie";
import "./movies.css"
import Slider from "../slider/slider";
class Movies extends Component {
    constructor() {
        super()
        this.state = {
        movies: []

        };
        console.log(this.state);

    }
    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7`)
        .then((res)=> res.json())
        .then((data)=> {
            console.log(data.results);
            this.setState({movies : data['results']});
            console.log(this.state);
        } )
        
    }
    render() { 
        if(this.state.movies.length == 0)
            return <h3>Loading</h3>
        return ( 
            <>
            <h1>Movies</h1>
            <div className="container">

            {/* Task1 */}
            {
                this.state.movies.map((mov)=>{
                    return <Movie {...mov} ></Movie>
                })
            }

            </div>
            <br />
            <hr />
            <br />
            <div className="container">

            {/* Task 2 */}
            <Slider  movies = {this.state.movies }></Slider>
            </div>
            </>
        )
    }
}

export default Movies;