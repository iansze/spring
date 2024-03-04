import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { instance, requests } from "@/utils/axios";
import { useEffect, useState } from "react";

type ReviewImageProps = {
  id: string;
};

const ReviewImage = ({ id }: ReviewImageProps) => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await instance.get(`${requests.fetchImagesById}${id}`);
      setImageUrls(res.data);
    };
    fetchData();
  }, [id]);

  return (
    <Carousel>
      <CarouselContent>
        {imageUrls.map((url, index) => (
          <CarouselItem key={`${id}-${index}`}>
            <img src={url} alt="url" />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-4 " />
      <CarouselNext className="-right-4" />
    </Carousel>
  );
};

export default ReviewImage;
