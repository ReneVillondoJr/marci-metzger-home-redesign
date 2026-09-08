// hooks/use-contact-form.ts
'use client';

import { useState } from 'react';

import type {
  ContactFormData,
  ContactFormErrors,
} from '@/modules/homepage/types/home';

const initialForm: ContactFormData = {
  name: '',
  email: '',
  message: '',
};

function validate(form: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!form.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Enter a valid email address.';
  }

  if (!form.message.trim()) {
    errors.message = 'Message is required.';
  }

  return errors;
}

export function useContactForm() {
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function updateField<K extends keyof ContactFormData>(
    field: K,
    value: ContactFormData[K],
  ) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  async function submitForm(): Promise<boolean> {
    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return false;
    }

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 600));
      setIsSubmitted(true);
      setForm(initialForm);
      return true;
    } finally {
      setIsSubmitting(false);
    }
  }

  return { form, errors, isSubmitting, isSubmitted, updateField, submitForm };
}
