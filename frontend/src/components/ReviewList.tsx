import { instance, requests } from "@/utils/axios";
import { useEffect, useState } from "react";
import { Review } from "./type/Types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie, faStar, faImage } from "@fortawesome/free-solid-svg-icons";
import { ScrollArea } from "@/components/ui/scroll-area";

type ReviewListProps = {
  id: string;
};

const ReviewList = ({ id }: ReviewListProps) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      const res = await instance.get(`${requests.fetchReviews}${id}`);
      setReviews(res.data);
      setLoading(false);
    };
    fetchReviews();
  }, [id]);

  return (
    <ScrollArea className="w-full justify-between items-center m-4 mx-auto ">
      {loading && <h1>Loading...</h1>}
      {reviews.map((review: Review, index) => (
        <div key={`${index}-${review.username}`} className="flex flex-col border-t border-gray-200">
          <div className="flex items-center mt-2">
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
  );
};

export default ReviewList;
