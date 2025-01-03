import React, { useState } from 'react'
import MoviesList from './MovieList';
import Movie from './Movie';
const NetFlixApp = () => {

    const [movies,setMovies]=useState([

        {
            title:'Double iSmart',
            poster:'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/double-ismart-et00359660-1715779326.jpg'},

        {title:'Maruthi Nagar Subramanyam',poster:'https://m.media-amazon.com/images/M/MV5BZDkyZjc1ZmMtZjRkZS00NzY5LWJmNTUtMDRlMGIzNWM3NWIyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'},

        {title:'Satyabhama',poster:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7CT9tA4C3AoqyD6wcrDF7yvlkgeqPhZXuZA&s'},

        {title:'Mr. Bachchan',poster:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHIx4SyMIqY3_0P1unKOju_XT6ImRwiTRq0g&s'},
        {title:'Mr. Bachchan',poster:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHIx4SyMIqY3_0P1unKOju_XT6ImRwiTRq0g&s'}
    ]);


  return (
    <div className='mainlist'>
       {/* <h1>NetFlixApp</h1> */}
    <MoviesList 
    movies={movies} 
    
    />

        </div>
  )
}




export default NetFlixApp