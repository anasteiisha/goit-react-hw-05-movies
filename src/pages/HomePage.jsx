import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SearchMovies = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/trending/movie/day',
          {
            params: {
              api_key: 'cd3a26d9a871d2dca8f48d979a7b2f5d',
            },
          }
        );
        setData(response.data.results); //оновлення стейту масиву фильмів
      } catch (error) {
        console.error('Error:', error);
      }
    };

    getData(); //виклик функції для виконання запиту при монтуванні компонента
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      <ul>
        {' '}
        {data.map(movie => {
          return (
            <Link key={movie.id} to={`movies/${movie.id}`}>
              <li> {movie.title}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchMovies;
