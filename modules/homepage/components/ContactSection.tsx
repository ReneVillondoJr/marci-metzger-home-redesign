'use client';

import { Navigation, Phone, MapPin } from 'lucide-react';

import { SectionHeading } from '@/components/layout/SectionHeading';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

import { contactInfo } from '@/modules/homepage/data/contact';
import { useContactForm } from '@/modules/homepage/hooks/use-contact-form';

type ContactSectionProps = {
  title?: string;
};

export function ContactSection({
  title = contactInfo.sectionHeading,
}: ContactSectionProps) {
  const { form, errors, isSubmitting, isSubmitted, updateField, submitForm } =
    useContactForm();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await submitForm();
  }

  return (
    <section className='bg-white pt-20 text-black md:pt-24'>
      <div className='mx-auto max-w-6xl px-6'>
        <SectionHeading title={title} showDivider />
        <div className='mt-14 grid gap-12 md:grid-cols-2 md:gap-16'>
          <div>
            <h3 className='font-serif text-2xl font-light uppercase tracking-[0.06em] text-[#222222]'>
              Send Message
            </h3>

            <div className='mt-3 h-px w-10 bg-[#222222]' />

            <form onSubmit={handleSubmit} className='mt-8 space-y-6'>
              {isSubmitted && (
                <p className='border border-[#E5E2DD] bg-[#F7F5F0] px-4 py-3 text-sm text-[#55504B]'>
                  Thanks — your message has been sent.
                </p>
              )}

              <div className='grid gap-2'>
                <Label
                  htmlFor='contact-name'
                  className='text-[10px] font-medium uppercase tracking-[0.16em] text-[#66615C]'
                >
                  Name
                </Label>

                <Input
                  id='contact-name'
                  value={form.name}
                  onChange={(event) => updateField('name', event.target.value)}
                  className='
                h-11
                rounded-none
                border-0
                border-b
                border-[#D8D5D0]
                bg-transparent
                px-0
                text-sm
                text-[#222222]
                shadow-none
                transition-all
                duration-500
                placeholder:text-[#99938C]
                focus-visible:border-[#222222]
                focus-visible:ring-0
              '
                />
              </div>

              <div className='grid gap-2'>
                <Label
                  htmlFor='contact-email'
                  className='text-[10px] font-medium uppercase tracking-[0.16em] text-[#66615C]'
                >
                  Email
                </Label>

                <Input
                  id='contact-email'
                  type='email'
                  value={form.email}
                  onChange={(event) => updateField('email', event.target.value)}
                  className='
                h-11
                rounded-none
                border-0
                border-b
                border-[#D8D5D0]
                bg-transparent
                px-0
                text-sm
                text-[#222222]
                shadow-none
                transition-all
                duration-500
                placeholder:text-[#99938C]
                focus-visible:border-[#222222]
                focus-visible:ring-0
              '
                />

                {errors.email && (
                  <p className='text-xs font-medium text-red-500'>
                    {errors.email}
                  </p>
                )}
              </div>

              <div className='grid gap-2'>
                <Label
                  htmlFor='contact-message'
                  className='text-[10px] font-medium uppercase tracking-[0.16em] text-[#66615C]'
                >
                  Message
                </Label>

                <Textarea
                  id='contact-message'
                  rows={5}
                  value={form.message}
                  onChange={(event) =>
                    updateField('message', event.target.value)
                  }
                  className='
                min-h-35
                resize-none
                rounded-none
                border-0
                border-b
                border-[#D8D5D0]
                bg-transparent
                px-0
                text-sm
                text-[#222222]
                shadow-none
                transition-all
                duration-500
                focus-visible:border-[#222222]
                focus-visible:ring-0
              '
                />

                {errors.message && (
                  <p className='text-xs font-medium text-red-500'>
                    {errors.message}
                  </p>
                )}
              </div>

              <div className='flex justify-center'>
                <Button
                  type='submit'
                  disabled={isSubmitting}
                  className='
                group
                relative
                h-11
                overflow-hidden
                rounded-none
                border
                border-[#222222]
                bg-[#222222]
                px-10
                text-[10px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-white
                transition-all
                duration-500
                hover:border-[#4A4540]
                hover:bg-[#4A4540]
              '
                >
                  <span className='relative z-10'>
                    {isSubmitting ? 'Sending…' : 'SEND'}
                  </span>

                  <span
                    className='
                  pointer-events-none
                  absolute
                  inset-y-0
                  -left-full
                  w-1/2
                  skew-x-[-20deg]
                  bg-white/10
                  transition-all
                  duration-700
                  ease-out
                  group-hover:left-[120%]
                '
                  />
                </Button>
              </div>

              <p className='text-xs leading-5 text-[#99938C]'>
                This site is protected by reCAPTCHA and the Google Privacy
                Policy and Terms of Service apply.
              </p>
            </form>
          </div>

          <div className='md:pl-8'>
            <div className='border-l border-[#E5E2DD] pl-7'>
              <p className='text-[10px] font-medium uppercase tracking-[0.2em] text-[#99938C]'>
                Contact
              </p>

              <div className='mt-9 space-y-8'>
                <div className='flex gap-4'>
                  <div className='flex size-10 shrink-0 items-center justify-center border border-[#E5E2DD] bg-[#F7F5F0] text-[#66615C]'>
                    <MapPin className='size-5' />
                  </div>

                  <div>
                    <h4 className='font-medium text-[#222222]'>
                      {contactInfo.businessName}
                    </h4>

                    <p className='mt-1 text-sm leading-6 text-[#66615C]'>
                      {contactInfo.address}
                    </p>
                  </div>
                </div>

                <div className='flex gap-4'>
                  <div className='flex size-10 shrink-0 items-center justify-center border border-[#E5E2DD] bg-[#F7F5F0] text-[#66615C]'>
                    <Phone className='size-5' />
                  </div>

                  <div>
                    <h4 className='font-medium text-[#222222]'>Phone</h4>

                    <a
                      href={contactInfo.phoneHref}
                      className='mt-1 block text-sm text-[#66615C] underline-offset-4 transition-colors hover:text-[#222222] hover:underline'
                    >
                      {contactInfo.phoneLabel}
                    </a>
                  </div>
                </div>

                <div>
                  <h4 className='font-medium text-[#222222]'>Office Hours</h4>

                  <p className='mt-2 text-sm text-[#66615C]'>
                    {contactInfo.officeHours.label} —{' '}
                    {contactInfo.officeHours.hours}
                  </p>

                  <p className='mt-1 text-sm leading-6 text-[#77716B]'>
                    {contactInfo.officeHours.note}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='relative mt-16 w-full overflow-hidden border-t border-[#E5E2DD]'>
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
          className='
        absolute
        left-4
        top-4
        inline-flex
        items-center
        gap-2
        bg-white
        px-4
        py-2.5
        text-sm
        font-medium
        text-[#222222]
        shadow-lg
        transition-all
        duration-300
        hover:bg-[#F7F5F0]
      '
        >
          <Navigation className='size-4' />
          Get Directions
        </a>
      </div>
    </section>
  );
}
