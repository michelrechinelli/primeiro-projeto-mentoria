const API_KEY = "79d14794e56461bb34fe214c8fbe0c86"
const API_BASE = "https://api.themoviedb.org/3"
const categories = [
    {
        name:"trending",
        title:"Em Alta",
        path:  `/trending/all/week?api_key=${API_KEY}&language=pt-BR`   
    },
    {
        name:"originals",
        title:"Originais Netflix",
        path:  `/discover/tv?api_key=${API_KEY}&with_networks=213`   
    },
    {
        name:"toprated",
        title:"Populares",
        path:  `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`   
    },
    {
        name:"comedy",
        title:"Comédias",
        path:  `/discover/tv?api_key=${API_KEY}&with_genres=35`   
    },
    {
        name:"romances",
        title:"Romance",
        path:  `/discover/tv?api_key=${API_KEY}&with_genres=10749`   
    },
    {
        name:"documentary",
        title:"Documentário",
        path:  `/discover/tv?api_key=${API_KEY}&with_genres=99`   
    },

];
export const getMovies = async(path) => {
    
    try {

    let url =`${API_BASE},${path}`; 
    const response = await fetch(url);
    return await response.json();

    }catch (error) {
        console.log("error getMovies:",error);
    }
};

export default categories;