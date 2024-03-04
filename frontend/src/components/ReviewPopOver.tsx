import * as Popover from "@radix-ui/react-popover";
import ReviewForm from "./ReviewForm";
import { useState } from "react";
import { Button } from "./ui/button";
import { Review } from "./type/Types";

type ReviewPopOverProps = {
  id?: string;
  edit: boolean;
  reviewData?: Review;
  onReviewSubmit: () => void;
};

const ReviewPopOver = ({ id, edit, reviewData, onReviewSubmit }: ReviewPopOverProps) => {
  const [open, setOpen] = useState(false);
  const onOpenChange = (open: boolean) => setOpen(open);

  return (
    <Popover.Root open={open} onOpenChange={onOpenChange}>
      <Popover.Trigger asChild>
        {edit ? <Button>Edit Review</Button> : <Button>Add Review</Button>}
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="PopoverContent bg-black text-white z-50 p-8 w-[20rem] sm:w-[30rem]"
          sideOffset={5}
        >
          <ReviewForm
            id={id}
            handleOpen={onOpenChange}
            defaultContent={reviewData?.content}
            defaultRate={reviewData?.rate}
            movieId={reviewData?.movie_id}
            edit={edit}
            onReviewSubmit={onReviewSubmit}
          />
          <Popover.Close className="PopoverClose" aria-label="Close"></Popover.Close>
          <Popover.Arrow className="PopoverArrow" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default ReviewPopOver;
