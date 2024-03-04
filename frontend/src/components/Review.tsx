import { instance, requests } from "@/utils/axios";
import { useContext, useEffect, useState } from "react";
import { Review } from "./type/Types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie, faStar, faImage } from "@fortawesome/free-solid-svg-icons";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { AuthContext } from "./context/AuthContext";
import ReviewPopOver from "./ReviewPopOver";

type ReviewProps = {
  id: string;
};

const Review = ({ id }: ReviewProps) => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [triggerFetch, setTriggerFetch] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      const res = await instance.get(`${requests.fetchReviews}${id}`);
      setReviews(res.data);
      setLoading(false);
    };
    fetchReviews();
  }, [id, triggerFetch]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (reviews.length === 0) {
    return <h1>No reviews yet</h1>;
  }

  console.log(triggerFetch);

  return (
    <>
      <ScrollArea className="w-full justify-between items-center m-4 mx-auto h-44 ">
        {reviews.map((review: Review, index) => (
          <div
            key={`${index}-${review.username}`}
            className="flex flex-col border-t border-gray-200"
          >
            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center">
                <Avatar>
                  <AvatarImage />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col ">
                  <div className="ml-3">
                    <h4 className="">{review.username}</h4>
                  </div>
                  <div className="flex ml-3 gap-2 justify-center items-center">
                    <FontAwesomeIcon icon={faUserTie} />
                    <span className="">{Math.floor(Math.random() * 100)}</span>
                    <FontAwesomeIcon icon={faStar} />
                    <span className="">{Math.floor(Math.random() * 100)}</span>
                    <FontAwesomeIcon icon={faImage} />
                    <span className="">{Math.floor(Math.random() * 100)}</span>
                  </div>
                </div>
              </div>
              {review.user_id === user?.user_id ? (
                <div className="flex space-x-2 items-center ">
                  <ReviewPopOver
                    edit={true}
                    reviewData={review}
                    onReviewSubmit={() => setTriggerFetch((prev) => !prev)}
                  />
                  <Button variant="destructive">Delete</Button>
                </div>
              ) : null}
            </div>
            <div className="my-1">
              {[...Array(review.rate)].map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} style={{ color: "#FFD43B" }} />
              ))}
              {[...Array(5 - review.rate)].map((_, index) => (
                <FontAwesomeIcon key={index + review.username} icon={faStar} />
              ))}
            </div>
            <p className="my-4">{review.content}</p>
          </div>
        ))}
      </ScrollArea>
      <ReviewPopOver id={id} edit={false} onReviewSubmit={() => setTriggerFetch((prev) => !prev)} />
    </>
  );
};

export default Review;
