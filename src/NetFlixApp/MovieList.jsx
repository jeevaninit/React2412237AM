import React from "react";
import Movie from "./Movie";
const MoviesList=({movies})=>{
    return(
        <>
        {movies.map((movie,index)=>(
            <div className='mainlist'>
            <Movie
            key={index}
            movie={movie}
            />
            </div>
        ))}
        </>
    )
    }
export default MoviesList;