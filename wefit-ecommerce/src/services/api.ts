import { URL } from '../config/api';
import { Movie, ApiResponse } from '../types';

export const getMovies = async (): Promise<Movie[]> => {
  try {
    const response = await URL.get<ApiResponse>('/movies');
    return response.data.products || [];
  } catch (error) {
    throw new Error('Falha ao carregar os filmes');
  }
};

export default URL;
