import React from 'react'

const Search = (props) => {
   
    return ( 
        
        <div className="search">
            <input type="text" className="form-control my-3"/>
            <button className="btn btn-info col-lg-12 " onClick={props.getWeather} >get weather</button>
        </div>
     );
}
 
export default Search;