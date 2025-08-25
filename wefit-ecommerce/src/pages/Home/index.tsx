import React, { useState, useEffect } from 'react';
import { Movie } from '../../types';
import { getMovies } from '../../services/api';
import MovieCard from '../../components/MovieCard';
import LoadingSpinner from '../../components/LoadingSpinner';
import { Container, Grid, Error } from './styles';

const Home: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const data = await getMovies();
        setMovies(data);
        setError(null);
      } catch (err) {
        setError('Erro ao carregar os filmes. Tente novamente.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return (
      <Container>
        <LoadingSpinner />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Error>{error}</Error>
      </Container>
    );
  }

  if (!Array.isArray(movies) || movies.length === 0) {
    return (
      <Container>
        <Error>Nenhum filme encontrado.</Error>
      </Container>
    );
  }

  return (
    <Container>
      <Grid>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
