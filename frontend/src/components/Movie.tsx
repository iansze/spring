import { MovieData } from "./type/Types";
import { Badge } from "./ui/badge";
import ReviewAndTrailerPanel from "./ReviewAndTrailerPanel";

type MovieProps = {
  data: MovieData;
};

const Movie = ({ data }: MovieProps) => {
  const { id, title, releaseDate, genres, backdrops, trailer } = data;
  const fadeOutEffect = parseInt(id) % 2 === 0 ? "animate-fadeOutLeft" : "animate-fadeOutRight";

  return (
    <div className="h-[200px] md:h-[300px]  lg:h-[400px] group relative ">
      <div className={`absolute w-full h-full bg-black ${fadeOutEffect} `} />
      <div className="h-full w-full absolute top-0 bg-gradient-to-r from-gray-900 from-30% to-gray-400 opacity-50 z-10" />
      <div className="h-full  absolute top-0 overflow-hidden -z-10 ">
        <img src={backdrops[0].url} alt={title} className="w-full " />
      </div>
      <div className="z-10 absolute top-1/3 left-5 text-white space-y-2">
        <h2 className="font-bold ">{title}</h2>
        <p>{releaseDate}</p>
        <ul>
          {genres?.map((genre, index) => (
            <Badge variant="secondary" key={index} className="mx-1">
              {genre.genresName}
            </Badge>
          ))}
        </ul>
      </div>
      <ReviewAndTrailerPanel id={id} trailer={trailer} />
    </div>
  );
};

export default Movie;
