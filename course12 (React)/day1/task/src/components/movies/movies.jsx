import { Component, useEffect, useRef, useState } from "react";
import Movie from "../movie/movie";
import "./movies.css"
import Slider from "../slider/slider";
import SearchMovie from "../searchMovie/searchmovies";
function Movies() {
    // let originalMovies = [];
    let originalMovies = useRef([])
    const [movies , setMovies] = useState([])
    
        
    // const [searchParam , setSearchParam] = useState('');
    const updateSearchParam = (param)=>{
        console.log(param);
        // setSearchParam(param);
        setMovies(originalMovies.current.filter((mov)=> mov.original_title.toLowerCase().includes(param.toLowerCase())))
    }
    
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7`)
        .then((res)=> res.json())
        .then((data)=> {
            console.log(data.results);
            // originalMovies = data.results
            setMovies(data.results)
            originalMovies.current = data.results;
            // console.log(originalMovies)
        })},[]);
        

    if(originalMovies.current.length == 0)
        return <h3>Loading</h3>
    else return ( 
            <>
            <FilterMovie></FilterMovie>
            <h1>Movies</h1>
            <SearchMovie updateSearchParam={updateSearchParam}></SearchMovie>
            <div className="container">

            {/* Task1 */}
            {   
                
                movies.map((mov)=>{
                    return <Movie key={mov.id} {...mov} ></Movie>
                })
            }

            </div>

            </>
        )
    
}

export default Movies;