import React, { useEffect } from 'react'
import { getMovies } from '../API';

function Row({title, path}) {
    const [movies, setMovies] = React.useState([]);

    const fetchMovies = async (_path) =>{
       try {
            const data =await getMovies(_path);
            console.log("data",data);
            setMovies(data?.results);
       } catch (error) {
        console.log("fetchMovies error")
       } 
    };

useEffect(() => {
    fetchMovies(path);
}, [path]);

  return <div>row</div>;
  
}

export default Row;
