import { useState } from "react";

import Trailer from "./Trailer";
import ReviewList from "./ReviewList";

type ReviewAndTrailerPaneProps = {
  id: string;
  trailer: string;
};

const ReviewAndTrailerPanel = ({ id, trailer }: ReviewAndTrailerPaneProps) => {
  const [reviewOpen, setReviewOpen] = useState(false);
  const [trailerOpen, setTrailerOpen] = useState(false);

  return (
    <>
      <div className="space-y-2 hidden group-hover:block absolute bottom-1/3 right-0 bg-white text-black px-4 py-2 z-20">
        <h2 className="cursor-pointer" onClick={() => setReviewOpen(true)}>
          Reivew
        </h2>
        <h2 className="cursor-pointer" onClick={() => setTrailerOpen(true)}>
          Trailer
        </h2>
      </div>
      <ReviewList reviewOpen={reviewOpen} setReviewOpen={setReviewOpen} id={id} />
      <Trailer trailerOpen={trailerOpen} setTrailerOpen={setTrailerOpen} trailer={trailer} />
    </>
  );
};

export default ReviewAndTrailerPanel;
