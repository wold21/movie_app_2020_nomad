// 2. Router navigation사용할 때 설치
// npm install react-router-dom
import React from 'react';
// npm install axios
import axios from 'axios';
import Movie from '../components/Movie';
import "./Home.css";

class Home extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };
getMovies = async () => {
  const {
    data: { 
      data : { movies }
    }
  } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating")
  this.setState({ movies, isLoading:false });
};
  componentDidMount() {
    this.getMovies();
  }

  render(){
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
              <span className="loader__text">Loding...</span>
          </div>
          ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie 
                key={movie.id} 
                id={movie.id} 
                year={movie.year} 
                title={movie.title} 
                summary={movie.summary} 
                poster={movie.medium_cover_image}
                genres={movie.genres}
                /> 
            ))} 
          </div>
          )}
    </section>
    );
  }
}

export default Home;

// 참고 사이트
// yts.mx
// https://yts-proxy.nomadcoders1.now.sh/list_movies.json