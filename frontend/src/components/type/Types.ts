export type MovieData = {
  id: string;
  imdbId: string;
  trailer: string;
  poster: string;
  title: string;
  releaseDate: string;
  backdrops: {
    backdropId: string;
    url: string;
  }[];
  genres: {
    genresName: string;
    genresId: number;
  }[];
};

export type User = {
  user_id?: number;
  username?: string;
  email: string;
  password: string;
  review?: string[];
};

export type AuthMethod = "Login" | "Signup" | "Update" | undefined;

export type Review = {
  content: string;
  rate: number;
  username: string;
  user_id: number;
  movie_id: number;
};
