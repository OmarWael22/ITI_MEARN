function FilterMovie() {
    const filterobj = {
        adult : 'false',
        rating : '7'
    }
    const handleChange = (e)=>{
        filterobj[e.target.name] = e.target.value
        console.log(filterobj);
    }
    return ( 
        <>
        <div className="filters">
            <h3>Filters</h3>
            <div className="age-filter">
                <button onClick={handleChange} name="adult" value='false'>Tennagers</button>
                <button onClick={handleChange} name="adult" value='true'>Adults</button>
            </div>
            <div className="rating-filter">
                <button>7+</button>
                <button>8+</button>
                <button>9+</button>
            </div>
        </div>
        </> 
    );
}

export default FilterMovie;