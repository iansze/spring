import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import ReviewImage from "./ReviewImage";
import Review from "./Review";

type ReviewListProps = {
  id: string;
  reviewOpen: boolean;
  setReviewOpen: (open: boolean) => void;
  onReviewSubmit: () => void;
};

const ReviewList = ({ id, reviewOpen, setReviewOpen }: ReviewListProps) => {
  return (
    <Dialog open={reviewOpen} onOpenChange={setReviewOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Reviews</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col justify-center items-center ">
          <ReviewImage id={id} />
          <Review id={id} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReviewList;
