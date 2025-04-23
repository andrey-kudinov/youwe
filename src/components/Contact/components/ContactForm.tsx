import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/base/Button/Button';
import Input from '@/components/base/Input/Input';
import Select from '@/components/base/Select/Select';
import styles from '@/components/Contact/components/ContactForm.module.scss';

import { Error } from './Error';
import { Success } from './Success';

const fields = {
  fullName: {
    required: 'Please enter your name',
    maxLength: {
      value: 255,
      message: 'Your name must be less 255 characters',
    },
  },
  company: {
    maxLength: {
      value: 255,
      message: 'Company name must be less than 255 characters',
    },
  },
  interest: {
    required: 'Please select what you are interested in',
  },
  phone: {
    required: 'Please enter your phone number',
    maxLength: {
      value: 30,
      message: 'Phone number must be less than 30 characters',
    },
    pattern: {
      value: /^(\s*)?(\+)?([()+\s*]?\d[()+-\s*]?){5,30}(\s*)?$/,
      message: 'Please enter a valid phone number',
    },
  },
  email: {
    required: 'Please enter your email',
    maxLength: {
      value: 255,
      message: 'Email must be less than 255 characters',
    },
    pattern: {
      value: /^\S+@\S+$/,
      message: 'Please enter a valid email', // JS only: <p>error message</p> TS only support string
    },
  },
};

interface ContactFormData {
  fullName: string;
  company: string;
  interest: string;
  email: string;
  phone: string;
}

type FormState = 'form' | 'success' | 'error';

const CONTACT_US_URL =
  'https://api.hsforms.com/submissions/v3/integration/submit/23178562/d28df36b-883a-4e99-818a-df53c8b61f6d';

// https://legacydocs.hubspot.com/docs/methods/forms/submit_form
function mapToHubspotProperties(data: ContactFormData) {
  const [firstName, ...rest] = data.fullName.split(' ');
  const lastName = rest.join(' ');

  const fields = [
    {
      objectTypeId: '0-1',
      name: 'firstname',
      value: firstName,
    },
    {
      objectTypeId: '0-1',
      name: 'phone',
      value: data.phone,
    },
    {
      objectTypeId: '0-1',
      name: 'email',
      value: data.email,
    },
    {
      objectTypeId: '0-1',
      name: 'enquiry_type',
      value: data.interest,
    },
  ];

  if (lastName) {
    fields.push({
      objectTypeId: '0-1',
      name: 'lastname',
      value: lastName,
    });
  }

  if (data.company) {
    fields.push({
      objectTypeId: '0-1',
      name: 'company',
      value: data.company,
    });
  }

  return {
    fields,
  };
}

function ContactForm() {
  const [isLoading, setLoading] = useState(false);
  const [formState, setFormState] = useState<FormState>('form');

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    if (isLoading) {
      console.warn('Another form submission is already in progress.');
      return;
    }

    setLoading(true);

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(mapToHubspotProperties(data)),
    };

    try {
      const response = await fetch(CONTACT_US_URL, options);
      const responseData = await response.json();

      if (response.status > 202) {
        setFormState('error');

        window.dataLayer?.push({
          event: 'contact_request_submitted',
          contact_email: data.email,
          status: 'server_error',
          error_message: responseData.message || 'Unknown Server Error',
        });
      } else {
        setFormState('success');

        window.dataLayer?.push({
          event: 'contact_request_submitted',
          contact_email: data.email,
          status: 'success',
        });

        reset();
      }

      setLoading(false);
    } catch (err) {
      console.warn(err);

      setFormState('error');
      setLoading(false);

      window.dataLayer?.push({
        event: 'contact_request_submitted',
        contact_email: data.email,
        status: 'client_error',
        error_message: err.message,
      });
    }
  };

  const handleBack = () => {
    setFormState('form');
  };

  if (formState === 'success') {
    return <Success onBack={handleBack} />;
  }

  if (formState === 'error') {
    return <Error onBack={handleBack} />;
  }

  return (
    <form id="contact" onSubmit={handleSubmit(onSubmit)} className={styles.form} method="POST" name="contact-form">
      <Input
        id="fullName"
        type="text"
        label="Name"
        placeholder="Enter your name"
        errorMessage={errors?.fullName?.message}
        autocomplete="name"
        {...register('fullName', fields.fullName)}
      />

      <Input
        id="company"
        type="text"
        label="Company"
        placeholder="Your company name"
        errorMessage={errors?.company?.message}
        autocomplete="organization"
        {...register('company', fields.company)}
      />

      <Select
        id="interest"
        label="Interest"
        errorMessage={errors?.interest?.message}
        {...register('interest', fields.interest)}
      ></Select>

      <Input
        id="phone"
        type="text"
        label="Phone number"
        placeholder="Your contact phone number"
        errorMessage={errors?.phone?.message}
        autocomplete="phone"
        {...register('phone', fields.phone)}
      />

      <Input
        id="email"
        type="text"
        label="Email"
        placeholder="Your contact email"
        errorMessage={errors?.email?.message}
        autocomplete="email"
        {...register('email', fields.email)}
      />

      <div className={styles.cta}>
        <Button title="Send Message" iconName="send" submit loading={isLoading} />
        <div className={styles.alternative}>
          <p className={`subheadline2 ${styles.label}`}>Don’t like forms?</p>
          <p className={`paragraph2 ${styles.email}`}>
            <span>Email us at </span>
            <a href="mailto:contact@avalon.au">contact@avalon.au</a>
          </p>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
