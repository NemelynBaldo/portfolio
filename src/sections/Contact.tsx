import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

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
    // In a real app, post to your endpoint
    await new Promise((r) => setTimeout(r, 500))
    reset()
    alert('Thanks for reaching out!')
  }

  return (
    <section id="contact" className="container-px mx-auto py-24">
      <h2>Contact</h2>
      <p className="mt-4 max-w-prose text-neutral-600 dark:text-neutral-300">
        Prefer clean social links? Replace this form with icons. For now, say hello:
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid max-w-xl gap-4">
        <label className="grid gap-2">
          <span className="text-sm">Name</span>
          <Input placeholder="Your name" {...register('name')} />
          {errors.name && (
            <span className="text-xs text-red-600 dark:text-red-400">{errors.name.message}</span>
          )}
        </label>
        <label className="grid gap-2">
          <span className="text-sm">Email</span>
          <Input placeholder="you@example.com" type="email" {...register('email')} />
          {errors.email && (
            <span className="text-xs text-red-600 dark:text-red-400">{errors.email.message}</span>
          )}
        </label>
        <label className="grid gap-2">
          <span className="text-sm">Message</span>
          <Textarea rows={5} placeholder="Let's work together" {...register('message')} />
          {errors.message && (
            <span className="text-xs text-red-600 dark:text-red-400">{errors.message.message}</span>
          )}
        </label>
        <div className="pt-2">
          <Button disabled={isSubmitting} type="submit">
            {isSubmitSuccessful ? 'Sent' : isSubmitting ? 'Sending…' : 'Send Message'}
          </Button>
        </div>
      </form>
    </section>
  )
}
