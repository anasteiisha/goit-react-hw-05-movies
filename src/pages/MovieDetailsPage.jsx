import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const GetMovieReviews = () => {
  const { movieId } = useParams(); //отримуємо параметри з URL за допомогою хука useParams

  const [title, setTitle] = useState('');
  const [posterPath, setPosterPath] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTitle = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}`,
          {
            params: {
              api_key: `cd3a26d9a871d2dca8f48d979a7b2f5d`,
            },
          }
        );
        setTitle(response.data.title);

        // отримуємо постер фільму
        const imageResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/images`,
          {
            params: {
              api_key: 'cd3a26d9a871d2dca8f48d979a7b2f5d',
            },
          }
        );
        if (
          imageResponse.data.posters &&
          imageResponse.data.posters.length > 0
        ) {
          setPosterPath(imageResponse.data.posters[0].file_path); // Сохраняем путь к первому постеру
        } else {
          setError('No posters available');
        }
      } catch (error) {
        console.error('Error fetching movie details or images:', error);
        setError('Error fetching movie details or images');
      } finally {
        setIsLoading(false);
      }
    };

    getTitle();
  }, [movieId]);

  if (isLoading) {
    return <div>Loading..{isLoading}.</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {posterPath && (
        <img
          src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
          alt="Movie Poster"
        />
      )}
      Movie: {title}
    </div>
  );
};

export default GetMovieReviews;
