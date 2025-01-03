import React from "react";

const Movie=({movie})=>{
    return(
        <>
        <div className='movielist'>
        <img src={movie.poster} alt={movie.title} />
        <h2>{movie.title}</h2>
        </div>
        </>
    )
}
export default Movie;