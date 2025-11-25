import z from "zod";

export const sendMessageSchema = z.object({
  fullName: z
    .string()
    .min(3, { message: "يجب أن لا يقل الاسم عن ثلاثة أحرف." })
    .max(100, { message: "يجب أن لا يزيد الاسم عن مئة حرف." }),

  email: z.string().email({ message: "يرجى إدخال بريد إلكتروني صحيح." }),

  message: z
    .string()
    .min(10, { message: "يجب أن لا تقل الرسالة عن عشرة أحرف." })
    .max(500, { message: "يجب أن لا تزيد الرسالة عن خمسمئة حرف." }),
});
