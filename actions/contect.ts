"use server"

import { z } from "zod"

const schema = z.object({
  name: z.string().min(1, { message: "الاسم مطلوب" }),
  email: z.string().email({ message: "البريد الإلكتروني غير صالح" }),
  message: z.string().min(10, { message: "الرسالة يجب أن تكون على الأقل 10 أحرف" }),
})

export async function submitContactForm(formData: FormData) {
  const validatedFields = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  })

  if (!validatedFields.success) {
    return { success: false, errors: validatedFields.error.flatten().fieldErrors }
  }

  await new Promise((resolve) => setTimeout(resolve, 1000))

  return { success: true, message: "تم إرسال رسالتك بنجاح!" }
}

