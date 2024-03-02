import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import ReviewImage from "./ReviewImage";
import ReviewList from "./ReviewList";
import ReviewForm from "./ReviewForm";
import { Portal } from "@radix-ui/react-dialog";

type ReviewProps = {
  id: string;
  reviewOpen: boolean;
  setReviewOpen: (open: boolean) => void;
};

const Review = ({ id, reviewOpen, setReviewOpen }: ReviewProps) => {
  return (
    <Dialog open={reviewOpen} onOpenChange={setReviewOpen}>
      <Portal>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Reviews</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col justify-center items-center ">
            <ReviewImage id={id} />
            <ReviewList id={id} />
            <ReviewForm />
          </div>
        </DialogContent>
      </Portal>
    </Dialog>
  );
};

export default Review;
