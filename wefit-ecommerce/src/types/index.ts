export interface Movie {
  id: number;
  title: string;
  price: number;
  image: string;
  description?: string;
}

export interface ApiResponse {
  products: Movie[];
}
