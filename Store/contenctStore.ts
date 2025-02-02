import { create } from "zustand"
import { z } from "zod"
import { submitContactForm } from "@/actions/contect"

const schema = z.object({
  name: z.string().min(1, { message: "الاسم مطلوب" }),
  email: z.string().email({ message: "البريد الإلكتروني غير صالح" }),
  message: z.string().min(10, { message: "الرسالة يجب أن تكون على الأقل 10 أحرف" }),
})

export type FormValues = z.infer<typeof schema>

type ContactStore = {
  formData: FormValues
  errors: Partial<Record<keyof FormValues, string>>
  isSubmitting: boolean
  submitSuccess: boolean
  setFormData: (data: Partial<FormValues>) => void
  setErrors: (errors: Partial<Record<keyof FormValues, string>>) => void
  resetForm: () => void
  submitForm: () => Promise<void>
}

export const useContactStore = create<ContactStore>((set, get) => ({
  formData: {
    name: "",
    email: "",
    message: "",
  },
  errors: {},
  isSubmitting: false,
  submitSuccess: false,
  setFormData: (data) => set((state) => ({ formData: { ...state.formData, ...data } })),
  setErrors: (errors) => set({ errors }),
  resetForm: () =>
    set({
      formData: { name: "", email: "", message: "" },
      errors: {},
      submitSuccess: false,
    }),
  submitForm: async () => {
    set({ isSubmitting: true, errors: {} })
    const { formData } = get()

    const validationResult = schema.safeParse(formData)

    if (!validationResult.success) {
      const errors = validationResult.error.flatten().fieldErrors
      set({ isSubmitting: false, errors: errors as Partial<Record<keyof FormValues, string>> })
      return
    }

    const formDataObj = new FormData()
    Object.entries(formData).forEach(([key, value]) => formDataObj.append(key, value as string))

    const result = await submitContactForm(formDataObj)

    if (result.success) {
      set({ isSubmitting: false, submitSuccess: true })
    } else {
      set({ isSubmitting: false, errors: result.errors || {} })
    }
  },
}))


