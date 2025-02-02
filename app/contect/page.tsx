"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useContactStore, type FormValues } from "@/store/contenctStore"
import { AlertCircle, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const { form, isSubmitting, submitSuccess, onSubmit } = useContactStore(
    (state) => ({
      form: state.form,
      isSubmitting: state.isSubmitting,
      submitSuccess: state.submitSuccess,
      onSubmit: state.onSubmit,
    })
  )

  return (
    <main className="container mx-auto p-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-6"
      >
        Contact Us
      </motion.h1>

      <AnimatePresence>
        {submitSuccess ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-lg mx-auto p-4 bg-green-100 text-green-800 rounded-md flex items-center"
          >
            <CheckCircle className="mr-2" />
            Your message has been sent successfully!
          </motion.div>
        ) : (
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-lg mx-auto space-y-4"
          >
            <div>
              <label htmlFor="name" className="block mb-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                {...form.register("name")}
                aria-invalid={form.formState.errors.name ? "true" : "false"}
                className="input"
              />
              {form.formState.errors.name && (
                <p className="text-red-500 mt-1 flex items-center">
                  <AlertCircle className="mr-1 h-4 w-4" />
                  {form.formState.errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                {...form.register("email")}
                aria-invalid={form.formState.errors.email ? "true" : "false"}
                className="input"
              />
              {form.formState.errors.email && (
                <p className="text-red-500 mt-1 flex items-center">
                  <AlertCircle className="mr-1 h-4 w-4" />
                  {form.formState.errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block mb-1">
                Message
              </label>
              <textarea
                id="message"
                {...form.register("message")}
                rows={5}
                aria-invalid={form.formState.errors.message ? "true" : "false"}
                className="textarea"
              />
              {form.formState.errors.message && (
                <p className="text-red-500 mt-1 flex items-center">
                  <AlertCircle className="mr-1 h-4 w-4" />
                  {form.formState.errors.message.message}
                </p>
              )}
            </div>

            <div className="flex justify-center">
              <button type="submit" disabled={isSubmitting} className="button">
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </main>
  )
}

