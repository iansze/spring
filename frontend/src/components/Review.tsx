import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import ReviewImage from "./ReviewImage";

type ReviewProps = {
  id: string;
  reviewOpen: boolean;
  setReviewOpen: (open: boolean) => void;
};

const Review = ({ id, reviewOpen, setReviewOpen }: ReviewProps) => {
  return (
    <Dialog open={reviewOpen} onOpenChange={setReviewOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Reviews</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col justify-center items-center ">
          <ReviewImage id={id} />
          <div className="flex-col">ReviewsR</div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Review;
