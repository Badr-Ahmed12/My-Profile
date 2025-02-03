"use client";
import { useForm, SubmitHandler } from 'react-hook-form';
import { motion } from 'framer-motion';
import Button from './Button';
import { FormValues } from '@/types/index';

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    // هنا ممكن تبعت البيانات لسيرفر أو API
    reset(); // إعادة تعيين النموذج بعد الإرسال
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="max-w-lg mx-auto space-y-4"
    >
      <div>
        <label htmlFor="name" className="block mb-1">الاسم</label>
        <input
          id="name"
          type="text"
          {...register('name', { required: 'الاسم مطلوب' })}
          className="w-full border p-2 rounded"
        />
        {errors.name && <p className="text-red-500 mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block mb-1">البريد الإلكتروني</label>
        <input
          id="email"
          type="email"
          {...register('email', { required: 'البريد الإلكتروني مطلوب' })}
          className="w-full border p-2 rounded"
        />
        {errors.email && <p className="text-red-500 mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block mb-1">الرسالة</label>
        <textarea
          id="message"
          {...register('message', { required: 'الرسالة مطلوبة' })}
          className="w-full border p-2 rounded"
          rows={5}
        ></textarea>
        {errors.message && <p className="text-red-500 mt-1">{errors.message.message}</p>}
      </div>

      <div className="flex justify-center">
        <Button type="submit" variant="primary">أرسل الرسالة</Button>
      </div>
    </motion.form>
  );
};
