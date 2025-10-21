// import { useState } from "react";

function SearchMovie({updateSearchParam}) {

    // const[searchKey , setSearchKey] = useState('');
    const handleChange = (e)=>{
        updateSearchParam(e.target.value)
    }
    return ( 
        <>
        <div className="search">
            <input type="text" name="search" id="search"  onChange={handleChange} placeholder="Search Movie"/>
            <h3>Search for Movie</h3>
        </div>
        </>
    );
}

export default SearchMovie;