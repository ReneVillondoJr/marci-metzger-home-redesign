'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { mlsSearchConfig } from '@/modules/homepage/data/mls-search';
import { useMlsSearchForm } from '@/modules/homepage/hooks/use-mls-search-form';

const selectClassName =
  'h-11 w-full rounded-none border-0 border-b border-[#D8D5D0] bg-transparent px-0 text-sm text-[#222222] outline-none transition-all duration-500 focus:border-[#222222] focus:ring-0';

const labelClassName =
  'text-[10px] font-medium uppercase tracking-[0.16em] text-[#66615C]';

const inputClassName =
  'h-11 w-full rounded-none border-0 border-b border-[#D8D5D0] bg-transparent px-0 text-sm text-[#222222] shadow-none transition-all duration-500 placeholder:text-[#99938C] focus-visible:border-[#222222] focus-visible:ring-0';

export function MlsSearchSection() {
  const { form, updateField, buildSearchParams } = useMlsSearchForm();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const params = buildSearchParams();

    window.location.href = `/listings?${params.toString()}`;
  }

  return (
    <section className='bg-white px-5 py-16 sm:px-6 md:py-20 lg:py-24'>
      {' '}
      <div className='mx-auto max-w-7xl'>
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
          {/* Heading */}
          <div className='mb-11 md:mb-13'>
            <p className='mb-3 text-[10px] font-medium uppercase tracking-[0.32em] text-[#77716B]'>
              Property Search
            </p>

            <h3 className='font-serif text-2xl font-light uppercase tracking-[0.08em] text-[#222222] sm:text-3xl md:text-4xl'>
              {mlsSearchConfig.formTitle}
            </h3>

            <div className='mt-5 h-px w-12 bg-[#222222]' />
          </div>

          <div className='space-y-11'>
            {/* ================= ROW 1 ================= */}
            <div className='grid gap-8 md:grid-cols-3 md:gap-10'>
              {/* Location */}
              <div className='grid gap-2.5'>
                <Label htmlFor='mls-location' className={labelClassName}>
                  Location
                </Label>

                <select
                  id='mls-location'
                  value={form.location}
                  onChange={(event) =>
                    updateField('location', event.target.value)
                  }
                  className={selectClassName}
                >
                  <option value=''>Any</option>
                </select>
              </div>

              {/* Type */}
              <div className='grid gap-2.5'>
                <Label htmlFor='mls-type' className={labelClassName}>
                  Type
                </Label>

                <select
                  id='mls-type'
                  value={form.type}
                  onChange={(event) => updateField('type', event.target.value)}
                  className={selectClassName}
                >
                  <option value=''>Any</option>
                </select>
              </div>

              {/* Sort By */}
              <div className='grid gap-2.5'>
                <Label htmlFor='mls-sort' className={labelClassName}>
                  Sort By
                </Label>

                <select
                  id='mls-sort'
                  value={form.sortBy}
                  onChange={(event) =>
                    updateField('sortBy', event.target.value)
                  }
                  className={selectClassName}
                >
                  <option value=''>Any</option>

                  {mlsSearchConfig.sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Divider */}
            <div className='h-px bg-[#ECE9E5]' />

            {/* ================= ROW 2 ================= */}
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
              {/* Bedrooms */}
              <div className='grid gap-2.5'>
                <Label htmlFor='mls-bedrooms' className={labelClassName}>
                  Bedrooms
                </Label>

                <select
                  id='mls-bedrooms'
                  value={form.bedrooms}
                  onChange={(event) =>
                    updateField('bedrooms', event.target.value)
                  }
                  className={selectClassName}
                >
                  {mlsSearchConfig.bedroomOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Baths */}
              <div className='grid gap-2.5'>
                <Label htmlFor='mls-bathrooms' className={labelClassName}>
                  Baths
                </Label>

                <select
                  id='mls-bathrooms'
                  value={form.bathrooms}
                  onChange={(event) =>
                    updateField('bathrooms', event.target.value)
                  }
                  className={selectClassName}
                >
                  {mlsSearchConfig.bathroomOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Min Price */}
              <div className='grid gap-2.5'>
                <Label htmlFor='mls-min-price' className={labelClassName}>
                  Min Price
                </Label>

                <Input
                  id='mls-min-price'
                  inputMode='numeric'
                  placeholder='$ Min'
                  value={form.minPrice}
                  onChange={(event) =>
                    updateField('minPrice', event.target.value)
                  }
                  className={inputClassName}
                />
              </div>

              {/* Max Price */}
              <div className='grid gap-2.5'>
                <Label htmlFor='mls-max-price' className={labelClassName}>
                  Max Price
                </Label>

                <Input
                  id='mls-max-price'
                  inputMode='numeric'
                  placeholder='$ Max'
                  value={form.maxPrice}
                  onChange={(event) =>
                    updateField('maxPrice', event.target.value)
                  }
                  className={inputClassName}
                />
              </div>

              {/* Search Button */}
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

                  {/* Shine effect */}
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
