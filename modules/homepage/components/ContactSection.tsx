'use client';

import { Navigation, Phone, MapPin } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

import { contactInfo } from '@/modules/homepage/data/contact';
import { useContactForm } from '@/modules/homepage/hooks/use-contact-form';

export function ContactSection() {
  const { form, errors, isSubmitting, isSubmitted, updateField, submitForm } =
    useContactForm();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await submitForm();
  }

  return (
    <section className='bg-white pt-20 text-black'>
      <div className='mx-auto max-w-6xl px-6'>
        {/* Main Heading */}
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='font-serif text-2xl font-light uppercase tracking-[0.08em] text-[#222222] sm:text-3xl md:text-3xl'>
            {' '}
            {contactInfo.sectionHeading}{' '}
          </h2>
        </div>

        {/* Content */}
        <div className='mt-14 grid gap-12 md:grid-cols-2 md:gap-16'>
          {/* Contact Form */}
          <div>
            <h3 className='text-xl font-semibold text-black'>Send Message</h3>

            <form onSubmit={handleSubmit} className='mt-6 space-y-5'>
              {isSubmitted && (
                <p className='rounded-md border border-black/10 bg-gray-100 px-4 py-3 text-sm text-black/70'>
                  Thanks — your message has been sent.
                </p>
              )}

              {/* Name */}
              <div className='grid gap-2'>
                <Label htmlFor='contact-name' className='text-black/70'>
                  Name
                </Label>

                <Input
                  id='contact-name'
                  value={form.name}
                  onChange={(event) => updateField('name', event.target.value)}
                  className='h-11 border-gray-200 bg-gray-100 text-black placeholder:text-black/40 focus-visible:ring-black/20'
                />
              </div>

              {/* Email */}
              <div className='grid gap-2'>
                <Label htmlFor='contact-email' className='text-black/70'>
                  Email
                </Label>

                <Input
                  id='contact-email'
                  type='email'
                  value={form.email}
                  onChange={(event) => updateField('email', event.target.value)}
                  className='h-11 border-gray-200 bg-gray-100 text-black placeholder:text-black/40 focus-visible:ring-black/20'
                />

                {errors.email && (
                  <p className='text-xs font-medium text-red-500'>
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className='grid gap-2'>
                <Label htmlFor='contact-message' className='text-black/70'>
                  Message
                </Label>

                <Textarea
                  id='contact-message'
                  rows={5}
                  value={form.message}
                  onChange={(event) =>
                    updateField('message', event.target.value)
                  }
                  className='resize-none border-gray-200 bg-gray-100 text-black placeholder:text-black/40 focus-visible:ring-black/20'
                />

                {errors.message && (
                  <p className='text-xs font-medium text-red-500'>
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <div className='flex justify-center'>
                <Button
                  type='submit'
                  disabled={isSubmitting}
                  className='bg-gray-200 px-10 text-black hover:bg-gray-300'
                >
                  {isSubmitting ? 'Sending…' : 'SEND'}
                </Button>
              </div>

              <p className='text-xs leading-5 text-black/40'>
                This site is protected by reCAPTCHA and the Google Privacy
                Policy and Terms of Service apply.
              </p>
            </form>
          </div>

          {/* Call or Visit */}
          <div className='md:pl-8'>
            <div className='border-l border-gray-200 pl-6'>
              <p className='text-sm font-medium uppercase tracking-[0.2em] text-gray-400'>
                Contact
              </p>

              <div className='mt-8 space-y-7'>
                {/* Business */}
                <div className='flex gap-4'>
                  <div className='flex size-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-gray-100 text-black/60'>
                    <MapPin className='size-5' />
                  </div>

                  <div>
                    <h4 className='font-semibold text-black'>
                      {contactInfo.businessName}
                    </h4>

                    <p className='mt-1 text-sm leading-6 text-black/50'>
                      {contactInfo.address}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className='flex gap-4'>
                  <div className='flex size-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-gray-100 text-black/60'>
                    <Phone className='size-5' />
                  </div>

                  <div>
                    <h4 className='font-semibold text-black'>Phone</h4>

                    <a
                      href={contactInfo.phoneHref}
                      className='mt-1 block text-sm text-black/50 underline-offset-4 transition-colors hover:text-black hover:underline'
                    >
                      {contactInfo.phoneLabel}
                    </a>
                  </div>
                </div>

                {/* Office Hours */}
                <div>
                  <h4 className='font-semibold text-black'>Office Hours</h4>

                  <p className='mt-2 text-sm text-black/50'>
                    {contactInfo.officeHours.label} —{' '}
                    {contactInfo.officeHours.hours}
                  </p>

                  <p className='mt-1 text-sm leading-6 text-black/40'>
                    {contactInfo.officeHours.note}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className='relative mt-16 w-full overflow-hidden border-t border-gray-200'>
        <iframe
          src={contactInfo.mapEmbedUrl}
          width='100%'
          height='450'
          style={{ border: 0 }}
          allowFullScreen
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          title={`${contactInfo.businessName} location`}
          className='block h-[350px] w-full md:h-[450px]'
        />

        <a
          href={contactInfo.directionsHref}
          target='_blank'
          rel='noopener noreferrer'
          className='absolute left-1.5 top-1.5 inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-md transition hover:bg-gray-100'
        >
          <Navigation className='h-4 w-4' />
          Get Directions
        </a>
      </div>
    </section>
  );
}
