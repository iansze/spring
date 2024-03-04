import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectItemText,
} from "@radix-ui/react-select";
import { Textarea } from "@/components/ui/textarea";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { instance, requests } from "@/utils/axios";

type ReviewFormProps = {
  id?: string;
  handleOpen: (open: boolean) => void;
  defaultContent?: string;
  defaultRate?: number;
  movieId?: number;
  edit?: boolean;
  onReviewSubmit?: () => void;
};

const formSchema = z.object({
  review: z.string().min(3, {
    message: "Review must be at least 3 characters.",
  }),
  rate: z.string().max(1, {
    message: "Must select a rating.",
  }),
});

const ReviewForm = ({
  id,
  movieId,
  handleOpen,
  defaultContent,
  defaultRate,
  edit,
  onReviewSubmit,
}: ReviewFormProps) => {
  const { user } = useContext(AuthContext);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      review: defaultContent,
      rate: defaultRate?.toString(),
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const reviewData = {
      content: data.review,
      rate: data.rate,
      user_id: user?.user_id,
    };
    try {
      if (edit) {
        await instance.put(`${requests.editReview}${movieId}`, reviewData);
      } else {
        await instance.post(`${requests.addReview}${id}`, reviewData);
      }
    } catch (err) {
      console.log(err);
    }

    if (onReviewSubmit) {
      onReviewSubmit();
    }
    handleOpen(false);
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full ">
        <FormField
          control={form.control}
          name="review"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Review</FormLabel>
              <FormControl>
                <Textarea
                  className="text-black max-h-[180px] overflow-y-auto"
                  placeholder="Type your message here."
                  id="message"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="rate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Rate</FormLabel>
              <Select
                value={field.value}
                onValueChange={field.onChange}
                aria-label="rate"
                name="rate"
              >
                <FormControl>
                  <SelectTrigger className="block w-2/3 h-6 bg-white text-black rounded-md">
                    <SelectValue placeholder="Select a rating for video" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent
                  position="popper"
                  align="center"
                  className="mx-auto w-[5rem] sm:w-[11.5rem] p-2 text-center cursor-pointer overflow-hidden bg-white text-black rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]"
                >
                  {[1, 2, 3, 4, 5].map((rate) => (
                    <SelectItem
                      value={rate.toString()}
                      key={rate}
                      className="hover:bg-gray-300 hover:rounded-md "
                    >
                      <SelectItemText>{rate}</SelectItemText>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription className="text-gray-50">
                Rate the video from 1 to 5.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="bg-slate-300 text-slate-900 hover:text-slate-300 hover:bg-slate-700"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default ReviewForm;
