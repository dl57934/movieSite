import {getMovieList, getMovieDetail, getMoviesuggestion} from './db'


const resolvers = {
    Query:{
        getMovies:(_, {rating, limit})=> getMovieList({rating, limit}),
        getDetailMovie:(_,{movie_id})=>getMovieDetail({movie_id}),
        getSuggestionMovie:(_, {movie_id})=>getMoviesuggestion({movie_id})
    }
}

export default resolvers;