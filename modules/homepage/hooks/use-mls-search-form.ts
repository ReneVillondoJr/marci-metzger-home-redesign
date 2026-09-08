// hooks/use-mls-search-form.ts
'use client';

import { useMemo, useState } from 'react';

import type { MlsSearchFormData } from '@/modules/homepage/types/home';

const initialForm: MlsSearchFormData = {
  location: '',
  type: '',
  sortBy: '',
  bedrooms: '',
  bathrooms: '',
  minPrice: '',
  maxPrice: '',
};

export function useMlsSearchForm() {
  const [form, setForm] = useState<MlsSearchFormData>(initialForm);

  function updateField<K extends keyof MlsSearchFormData>(
    field: K,
    value: MlsSearchFormData[K],
  ) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  // Mirrors the original site disabling "Search Now" until a location is
  // chosen — swap this rule out once real location data is wired in.
  const canSubmit = useMemo(
    () => form.location.trim().length > 0,
    [form.location],
  );

  function buildSearchParams(): URLSearchParams {
    const params = new URLSearchParams();
    Object.entries(form).forEach(([key, value]) => {
      if (value) params.set(key, value);
    });
    return params;
  }

  return { form, updateField, canSubmit, buildSearchParams };
}
