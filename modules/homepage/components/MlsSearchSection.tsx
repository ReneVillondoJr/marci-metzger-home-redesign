'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { mlsSearchConfig } from '@/modules/homepage/data/mls-search';
import { useMlsSearchForm } from '@/modules/homepage/hooks/use-mls-search-form';

const selectClassName =
  'h-11 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/20';

export function MlsSearchSection() {
  const { form, updateField, canSubmit, buildSearchParams } =
    useMlsSearchForm();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!canSubmit) return;

    const params = buildSearchParams();

    window.location.href = `/listings?${params.toString()}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='mx-auto mt-10 max-w-6xl bg-white px-10 py-10 shadow-2xl sm:px-12 sm:py-12'
    >
      <h3 className='font-serif text-3xl font-light uppercase tracking-wide text-[#a47768] sm:text-4xl'>
        {mlsSearchConfig.formTitle}
      </h3>

      <div className='mt-8 space-y-7'>
        {/* ROW 1 */}
        <div className='grid gap-6 md:grid-cols-3'>
          {/* Location */}
          <div className='grid gap-2'>
            <Label
              htmlFor='mls-location'
              className='text-sm font-normal text-foreground'
            >
              Location
            </Label>

            <select
              id='mls-location'
              value={form.location}
              onChange={(event) => updateField('location', event.target.value)}
              className={selectClassName}
            >
              <option value=''>Any</option>
            </select>
          </div>

          {/* Type */}
          <div className='grid gap-2'>
            <Label
              htmlFor='mls-type'
              className='text-sm font-normal text-foreground'
            >
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
          <div className='grid gap-2'>
            <Label
              htmlFor='mls-sort'
              className='text-sm font-normal text-foreground'
            >
              Sort By
            </Label>

            <select
              id='mls-sort'
              value={form.sortBy}
              onChange={(event) => updateField('sortBy', event.target.value)}
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

        {/* ROW 2 */}
        <div className='grid gap-x-8 gap-y-6 md:grid-cols-[167px_167px_167px_167px_minmax(280px,1fr)]'>
          {/* Bedrooms */}
          <div className='grid gap-2'>
            <Label
              htmlFor='mls-bedrooms'
              className='text-sm font-normal text-black'
            >
              Bedrooms
            </Label>

            <select
              id='mls-bedrooms'
              value={form.bedrooms}
              onChange={(event) => updateField('bedrooms', event.target.value)}
              className='h-10 w-full rounded-md border border-gray-300 bg-white px-3 text-sm text-gray-700 outline-none focus:border-gray-400 focus:ring-0'
            >
              {mlsSearchConfig.bedroomOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Baths */}
          <div className='grid gap-2'>
            <Label
              htmlFor='mls-bathrooms'
              className='text-sm font-normal text-black'
            >
              Baths
            </Label>

            <select
              id='mls-bathrooms'
              value={form.bathrooms}
              onChange={(event) => updateField('bathrooms', event.target.value)}
              className='h-10 w-full rounded-md border border-gray-300 bg-white px-3 text-sm text-gray-700 outline-none focus:border-gray-400 focus:ring-0'
            >
              {mlsSearchConfig.bathroomOptions.map((option) => (
                <option key={option.value} value={option.label}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Min Price */}
          <div className='grid gap-2'>
            <Label
              htmlFor='mls-min-price'
              className='text-sm font-normal text-black'
            >
              Min Price
            </Label>

            <Input
              id='mls-min-price'
              inputMode='numeric'
              placeholder='$ Min'
              value={form.minPrice}
              onChange={(event) => updateField('minPrice', event.target.value)}
              className='h-10 w-full rounded-none border-0 border-b border-gray-300 bg-transparent px-0 text-sm shadow-none focus-visible:border-gray-500 focus-visible:ring-0'
            />
          </div>

          {/* Max Price */}
          <div className='grid gap-2'>
            <Label
              htmlFor='mls-max-price'
              className='text-sm font-normal text-black'
            >
              Max Price
            </Label>

            <Input
              id='mls-max-price'
              inputMode='numeric'
              placeholder='$ Max'
              value={form.maxPrice}
              onChange={(event) => updateField('maxPrice', event.target.value)}
              className='h-10 w-full rounded-none border-0 border-b border-gray-300 bg-transparent px-0 text-sm shadow-none focus-visible:border-gray-500 focus-visible:ring-0'
            />
          </div>

          {/* Search */}
          <div className='flex items-end'>
            <Button
              type='submit'
              disabled={!canSubmit}
              className='h-14 w-full rounded-full bg-[#d8d8d8] px-8 text-sm font-bold uppercase tracking-wide text-black hover:bg-[#cfcfcf] disabled:opacity-50'
            >
              {mlsSearchConfig.submitLabel}
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
