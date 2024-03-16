"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const formSchema = z.object({
  title: z.string(),
  company: z.string(),
  jobPostingUrl: z.string(),
  location: z.string(),
  dateApplied: z.date({
    required_error: "A date is required.",
  }),
  salary: z.string(),
  status: z.string(),
  description: z.string(),
  comment: z.string(),
});

const NewJobForm = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      company: "",
      jobPostingUrl: "",
      location: "",
      salary: "",
      description: "",
      comment: "",
      status: "APPLYING",
      dateApplied: new Date(),
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    setIsLoading(true);
    axios
      .post("/api/job", data)
      .then(() => {
        toast.success("New Job Added!");
        router.push("/dashboard");
        router.refresh();
        // reset();
      })
      .catch(() => {
        toast.error("Something went wrong.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full md:max-w-[70% flex justify-center"
      >
        <div className="flex md:max-w-[60rem] flex-col w-full md:flex-row space-y-8 md:space-y-0 md:gap-10 lg:gap-20 grow">
          <div className="space-y-8 grow">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="font-semibold">Job Title</FormLabel>
                  <FormControl>
                    <input
                      type="text"
                      placeholder="Job Title"
                      className="input input-bordered w-full max-w-xl"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="font-semibold">Company Name</FormLabel>
                  <FormControl>
                    <input
                      type="text"
                      placeholder="Company Name"
                      className="input input-bordered w-full max-w-xl"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="jobPostingUrl"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="font-semibold">
                    Job Posting URL
                  </FormLabel>
                  <FormControl>
                    <input
                      type="text"
                      placeholder="Job Posting URL"
                      className="input input-bordered w-full max-w-xl"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="font-semibold">Location</FormLabel>
                  <FormControl>
                    <input
                      type="text"
                      placeholder="Location"
                      className="input input-bordered w-full max-w-xl"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dateApplied"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "pl-3 text-left font-normal w-full max-w-xl h-14 rounded-lg",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="salary"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="font-semibold">Salary</FormLabel>
                  <FormControl>
                    <input
                      type="number"
                      placeholder="Salary"
                      className="input input-bordered w-full max-w-xl"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-8 grow">
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="font-semibold">Status</FormLabel>
                  <FormControl>
                    <select
                      className="select select-bordered w-full max-w-xl"
                      {...field}
                    >
                      <option value="APPLYING">Applying</option>
                      <option value="APPLIED">Applied</option>
                      <option value="REJECTED">Rejected</option>
                      <option value="INTERVIEWING">Interviewing</option>
                      <option value="NEGOTIATING">Negotiating</option>
                      <option value="ACCEPTED">Accepted</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full">
                  <FormLabel className="font-semibold">
                    Job Description
                  </FormLabel>
                  <FormControl>
                    <textarea
                      className="textarea textarea-bordered max-w-xl h-64"
                      placeholder="Job Description"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="comment"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full">
                  <FormLabel className="font-semibold">Comment</FormLabel>
                  <FormControl>
                    <textarea
                      className="textarea textarea-bordered max-w-xl h-32"
                      placeholder="Comment"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <button
              type="submit"
              className="btn btn-neutral w-full md:max-w-xl"
              disabled={isLoading}
            >
              Create New Job
            </button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default NewJobForm;
