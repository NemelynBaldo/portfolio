import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email'),
  message: z.string().min(10, 'Please enter a message'),
})
type FormData = z.infer<typeof schema>

export default function Contact() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 600))
    reset()
  }

  return (
    <section id="contact" className="container-px mx-auto min-h-screen py-24 text-neutral-900 dark:text-neutral-100">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Let’s Connect</h2>
        <p className="mt-3 mb-10 text-center text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
          Prefer email or a quick note? Reach out using the form or the details below.
        </p>

        {isSubmitSuccessful && (
          <div className="mb-6 rounded-xl border border-white/20 dark:border-white/10 bg-white/10 dark:bg-white/5 backdrop-blur-md px-4 py-3 text-sm text-neutral-800 dark:text-neutral-200 text-center">
            Thanks for reaching out! I’ll get back to you soon.
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-2">
          {/* Info Card */}
          <div className="rounded-2xl border border-white/20 dark:border-white/10 bg-white/10 dark:bg-white/5 backdrop-blur-md p-6">
            <h3 className="font-semibold text-lg mb-4">Contact Details</h3>
            <ul className="space-y-4 text-neutral-700 dark:text-neutral-300">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
                <span>+63 986 047 3647</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
                <a href="mailto:melynbaldo715@gmail.com" className="underline-offset-4 hover:underline">melynbaldo715@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
                <span>B10 L17 Fairground Vallejo Place PH 4, Pasong Buaya 2, Imus Cavite</span>
              </li>
            </ul>
            <div className="mt-6 text-sm text-neutral-500 dark:text-neutral-400">
              I aim to reply within 1–2 business days.
            </div>
          </div>

          {/* Form Card */}
          <div className="rounded-2xl border border-white/20 dark:border-white/10 bg-white/10 dark:bg-white/5 backdrop-blur-md p-6">
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6" noValidate>
              <label className="grid gap-2" htmlFor="name">
                <span className="text-sm font-medium">Name<span className="sr-only"> (required)</span></span>
                <Input id="name" placeholder="Your name" aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined}
                  {...register('name')}
                  className="bg-white/60 dark:bg-neutral-900/60 border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100" />
                {errors.name && (
                  <span id="name-error" className="text-xs text-red-600 dark:text-red-400">{errors.name.message}</span>
                )}
              </label>

              <label className="grid gap-2" htmlFor="email">
                <span className="text-sm font-medium">Email<span className="sr-only"> (required)</span></span>
                <Input id="email" placeholder="you@example.com" type="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined}
                  {...register('email')}
                  className="bg-white/60 dark:bg-neutral-900/60 border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100" />
                {errors.email && (
                  <span id="email-error" className="text-xs text-red-600 dark:text-red-400">{errors.email.message}</span>
                )}
              </label>

              <label className="grid gap-2" htmlFor="message">
                <span className="text-sm font-medium">Message<span className="sr-only"> (required)</span></span>
                <Textarea id="message" rows={5} placeholder="Let’s work together" aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : undefined}
                  {...register('message')}
                  className="bg-white/60 dark:bg-neutral-900/60 border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100" />
                {errors.message && (
                  <span id="message-error" className="text-xs text-red-600 dark:text-red-400">{errors.message.message}</span>
                )}
              </label>

              <Button disabled={isSubmitting} type="submit" className="bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 w-full flex items-center justify-center gap-2">
                <Send className="w-4 h-4" /> {isSubmitting ? 'Sending…' : isSubmitSuccessful ? 'Sent' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
