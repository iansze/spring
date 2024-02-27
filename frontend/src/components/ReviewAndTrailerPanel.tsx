import { useState } from "react";
import Review from "./Review";

type ReviewAndTrailerPaneProps = {
  id: string;
};

const ReviewAndTrailerPanel = ({ id }: ReviewAndTrailerPaneProps) => {
  const [reviewOpen, setReviewOpen] = useState(false);

  return (
    <div className="space-y-2 hidden group-hover:block absolute bottom-1/3 right-0 bg-white text-black px-4 py-2 z-20">
      <h2 className="cursor-pointer" onClick={() => setReviewOpen(true)}>
        Reivew
      </h2>
      <h2 className="">Trailer</h2>
      <Review reviewOpen={reviewOpen} setReviewOpen={setReviewOpen} id={id} />
    </div>
  );
};

export default ReviewAndTrailerPanel;
