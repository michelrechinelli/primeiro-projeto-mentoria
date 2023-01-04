const API_KEY = '79d14794e56461bb34fe214c8fbe0c86';
    const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
    const req =await fetch( `${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default 
{   getHomeList:async ()=> 
        {   return [
            
            {
                slug: 'animation',
                title: 'Recomendados para você',
                items: await basicFetch(`discover/movie?with_genres=16&language=pt-BR&api_key=${API_KEY}`)
            },
            /*{
                slug: 'toprated',
                title: 'Em Alta',
                items: []
            },
            {
                slug: 'action',
                title: 'Ação',
                items: []
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: []
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: []
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: []
            },*/
        ];
    }
}
                