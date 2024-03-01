
const API_KEY = '9e42c112beec9727fcc0524687a55da2';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'top_rated',
                title: 'Top Rated',
                desc: 'Top rated movies on IMDb this week',
                items: await basicFetch(`/movie/top_rated?language=en-US&page=1&api_key=${API_KEY}`)
            },
            {
                slug: 'now_playing',
                title: 'Now Playing',
                desc: ` This week's top TV and movies`,
                items: await basicFetch(`/movie/now_playing?language=en-US&page=1&api_key=${API_KEY}`)
            },
          
            {
                slug: 'originals',
                title: 'Original Netflix',
                desc: ' TV shows and movies just for you',
                items: await basicFetch(`/discover/tv?with_networks=213&language=en-US&api_key=${API_KEY}`)
            },
            {
                slug: 'sci-fi',
                title: 'Sci Fi',
                desc: ' ',
                items: await basicFetch(`/discover/movie?with_genres=878&language=en-US&api_key=${API_KEY}`)
            },
            {
                slug: 'fantasy',
                title: 'Fantasy',
                items: await basicFetch(`/discover/movie?with_genres=14&language=en-US&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Action',
                items: await basicFetch(`/discover/movie?with_genres=28&language=en-US&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comedy',
                items: await basicFetch(`/discover/movie?with_genres=35&language=en-US&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Horror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=en-US&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=en-US&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentaries',
                items: await basicFetch(`/discover/movie?with_genres=99&language=en-US&api_key=${API_KEY}`)
            },
        ];
    },
  
    getMovieInfo: async (movieId, type) => {
        let info = {};
        if (movieId) {
            switch (type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=en-US&api_key=${API_KEY}`)
                    break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=en-US&api_key=${API_KEY}`)
                    break;
                default:
                    info = null;
                    break;
            }
        }
        return info;
    }
}
