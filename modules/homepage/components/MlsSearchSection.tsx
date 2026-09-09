'use client';

import { useRouter } from 'next/navigation';

import { SectionHeading } from '@/components/layout/SectionHeading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { mlsSearchConfig } from '@/modules/homepage/data/mls-search';
import { useMlsSearchForm } from '@/modules/homepage/hooks/use-mls-search-form';

const labelClassName =
  'text-[10px] font-medium uppercase tracking-[0.16em] text-[#66615C]';

const selectTriggerClassName =
  'h-11 w-full rounded-none border-0 border-b border-[#D8D5D0] bg-transparent px-0 text-sm text-[#222222] shadow-none transition-all duration-500 focus:border-[#222222] focus:ring-0 focus:ring-offset-0 data-[placeholder]:text-[#99938C]';

const inputClassName =
  'h-11 w-full rounded-none border-0 border-b border-[#D8D5D0] bg-transparent px-0 text-sm text-[#222222] shadow-none transition-all duration-500 placeholder:text-[#99938C] focus-visible:border-[#222222] focus-visible:ring-0';

export function MlsSearchSection() {
  const router = useRouter();

  const { form, updateField, buildSearchParams } = useMlsSearchForm();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const params = buildSearchParams();

    router.push(`/listings?${params.toString()}`);
  }

  return (
    <section className='bg-white px-5 py-16 sm:px-6 md:py-20 lg:py-24'>
      <div className='mx-auto max-w-7xl'>
        <SectionHeading
          title='FIND YOUR DREAM HOME'
          showDivider
          className='mb-10 md:mb-12'
        />
        <form
          onSubmit={handleSubmit}
          className='
    mx-auto
    max-w-6xl
    border
    border-[#E5E2DD]
    bg-white
    px-6
    py-10
    shadow-[0_12px_40px_rgba(0,0,0,0.04)]
    sm:px-10
    sm:py-12
    md:px-14
    md:py-14
    lg:px-16
    lg:py-16
  '
        >
          <div className='mb-11 md:mb-13'>
            <h3 className='font-serif text-2xl font-light uppercase tracking-[0.08em] text-[#222222] sm:text-3xl md:text-4xl'>
              {mlsSearchConfig.formTitle}
            </h3>
            <div className='mt-5 h-px w-12 bg-[#222222]' />
          </div>
          <div className='space-y-11'>
            <div className='grid gap-8 md:grid-cols-3 md:gap-10'>
              <div className='grid gap-2.5'>
                <Label htmlFor='mls-location' className={labelClassName}>
                  Location
                </Label>

                <Select
                  value={form.location || 'any'}
                  onValueChange={(value) =>
                    updateField('location', value ?? '')
                  }
                >
                  <SelectTrigger
                    id='mls-location'
                    className={selectTriggerClassName}
                  >
                    <SelectValue placeholder='Any' />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value='any'>Any</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className='grid gap-2.5'>
                <Label htmlFor='mls-type' className={labelClassName}>
                  Type
                </Label>

                <Select
                  value={form.type || 'any'}
                  onValueChange={(value) => updateField('type', value ?? '')}
                >
                  <SelectTrigger
                    id='mls-type'
                    className={selectTriggerClassName}
                  >
                    <SelectValue placeholder='Any' />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value='any'>Any</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className='grid gap-2.5'>
                <Label htmlFor='mls-sort' className={labelClassName}>
                  Sort By
                </Label>

                <Select
                  value={form.sortBy || 'any'}
                  onValueChange={(value) => updateField('sortBy', value ?? '')}
                >
                  <SelectTrigger
                    id='mls-sort'
                    className={selectTriggerClassName}
                  >
                    <SelectValue placeholder='Any' />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value='any'>Any</SelectItem>

                    {mlsSearchConfig.sortOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className='h-px bg-[#ECE9E5]' />

            <div
              className='
            grid
            gap-x-8
            gap-y-8
            sm:grid-cols-2
            lg:grid-cols-[1fr_1fr_1fr_1fr_1.4fr]
            lg:items-end
            lg:gap-x-7
          '
            >
              <div className='grid gap-2.5'>
                <Label htmlFor='mls-bedrooms' className={labelClassName}>
                  Bedrooms
                </Label>

                <Select
                  value={form.bedrooms || 'any'}
                  onValueChange={(value) =>
                    updateField('bedrooms', value ?? '')
                  }
                >
                  <SelectTrigger
                    id='mls-bedrooms'
                    className={selectTriggerClassName}
                  >
                    <SelectValue placeholder='Any Number' />
                  </SelectTrigger>

                  <SelectContent>
                    {mlsSearchConfig.bedroomOptions.map((option) => (
                      <SelectItem
                        key={option.value || 'any'}
                        value={option.value || 'any'}
                      >
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className='grid gap-2.5'>
                <Label htmlFor='mls-bathrooms' className={labelClassName}>
                  Baths
                </Label>

                <Select
                  value={form.bathrooms || 'any'}
                  onValueChange={(value) =>
                    updateField('bathrooms', value ?? '')
                  }
                >
                  <SelectTrigger
                    id='mls-bathrooms'
                    className={selectTriggerClassName}
                  >
                    <SelectValue placeholder='Any Number' />
                  </SelectTrigger>

                  <SelectContent>
                    {mlsSearchConfig.bathroomOptions.map((option) => (
                      <SelectItem
                        key={option.value || 'any'}
                        value={option.value || 'any'}
                      >
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className='grid gap-2.5'>
                <Label htmlFor='mls-min-price' className={labelClassName}>
                  Min Price
                </Label>

                <Input
                  id='mls-min-price'
                  inputMode='numeric'
                  placeholder='$ Min'
                  value={form.minPrice ?? ''}
                  onChange={(event) =>
                    updateField('minPrice', event.target.value)
                  }
                  className={inputClassName}
                />
              </div>

              <div className='grid gap-2.5'>
                <Label htmlFor='mls-max-price' className={labelClassName}>
                  Max Price
                </Label>

                <Input
                  id='mls-max-price'
                  inputMode='numeric'
                  placeholder='$ Max'
                  value={form.maxPrice ?? ''}
                  onChange={(event) =>
                    updateField('maxPrice', event.target.value)
                  }
                  className={inputClassName}
                />
              </div>

              <div className='flex items-end sm:col-span-2 lg:col-span-1'>
                <Button
                  type='submit'
                  className='
                group
                relative
                h-11
                w-full
                overflow-hidden
                rounded-none
                border
                border-[#222222]
                bg-[#222222]
                px-7
                text-[10px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-white
                transition-all
                duration-500
                hover:border-[#4A4540]
                hover:bg-[#4A4540]
                hover:text-white
                active:scale-[0.98]
              '
                >
                  <span
                    className='
                  relative
                  z-10
                  transition-transform
                  duration-500
                  group-hover:translate-x-1
                '
                  >
                    {mlsSearchConfig.submitLabel}
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
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
