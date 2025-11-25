"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendMessageSchema } from "@/lib/validation";
import z from "zod";

export default function SendMessageForm() {
  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },

    resolver: zodResolver(sendMessageSchema),
  });

  const onSubmit = (values: z.infer<typeof sendMessageSchema>) => {
    form.reset();
  };

  return (
    <Form {...form}>
      <form id="contact-form" className="w-full space-y-20" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <input
                  {...field}
                  placeholder="اللإسم كامل"
                  className="form-input"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <input
                  {...field}
                  placeholder="البريد اللإلكتروني"
                  className="form-input"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <textarea
                  {...field}
                  placeholder="رسالتك لنا"
                  rows={1}
                  className="form-input max-h-[200px] min-h-[65px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
