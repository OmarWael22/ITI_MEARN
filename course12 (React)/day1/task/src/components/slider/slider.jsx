import { Component } from "react";
import Movie from "../movie/movie";
import "./slider.css"
class Slider  extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            movies : props.movies,
            idx : 0,
        }
        this.intervalId = null
    }
    
    
    render() {
        let nextMovie = () =>{

            this.state.idx ++ ;
            this.state.idx %= this.state.movies.length
            this.setState({...this.state})
        }
        let prevMovie = () =>{
            if(this.state.idx == 0)
                this.state.idx = this.state.movies.length -1
            this.state.idx -- ;
            this.setState({...this.state})
        }
        let startShow = ()=>{
            if(!this.intervalId){
                this.intervalId = setInterval(nextMovie,1000)
            }
        }
        let stopShow = ()=>{
            if(this.intervalId){
                clearInterval(this.intervalId);
                this.intervalId = null
            }
                
        }
        console.log(this.state);
        return ( 
            <>
                
                <div className="slider">
                    <h2 style={{textAlign: 'center'}}>Slider</h2>
                    <Movie {...this.state.movies[this.state.idx]} />
                    <div className="controls">
                        <button onClick={startShow}>Start</button>
                        <button onClick={stopShow}>Stop</button>
                        <button onClick={prevMovie}>Prev</button>
                        <button onClick={nextMovie}>Next</button>
                    </div>
                </div>

            </>
        );
    }
}

export default Slider ;