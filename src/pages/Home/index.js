import movies from "../../assets/movies";
import { Card } from "../../components/Card";

export function Home() {
  return (
    <>
      {movies.map((currentMovie) => {
        return (
          <Card
            original_title={currentMovie.original_title}
            overview={currentMovie.overview}
          />
        );
      })}
    </>
  );
}
