import { Dialog, DialogContent } from "@/components/ui/dialog";
import ReactPlayer from "react-player";

type TrailerProps = {
  trailerOpen: boolean;
  setTrailerOpen: (open: boolean) => void;
  trailer: string;
};

const Trailer = ({ trailer, trailerOpen, setTrailerOpen }: TrailerProps) => {
  return (
    <Dialog open={trailerOpen} onOpenChange={setTrailerOpen}>
      <DialogContent className="max-w-[80%] sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg h-1/2 sm:h-4/6 xl:max-w-screen-xl p-1">
        <ReactPlayer className="react-player" url={trailer} controls width="100%" height="100%" />
      </DialogContent>
    </Dialog>
  );
};

export default Trailer;
