'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { User, MailIcon, ArrowRightIcon, MessageSquare } from 'lucide-react';

const Form = () => {
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        setTouched({ ...touched, [name]: true });

        const newErrors = { ...errors };

        if (name === 'name' && !value.trim()) {
            newErrors.name = 'Name is required';
        } else if (name === 'name') {
            delete newErrors.name;
        }

        if (name === 'email' && !value.trim()) {
            newErrors.email = 'Email is required';
        } else if (name === 'email' && !validateEmail(value)) {
            newErrors.email = 'Please enter a valid email address';
        } else if (name === 'email') {
            delete newErrors.email;
        }

        if (name === 'message' && !value.trim()) {
            newErrors.message = 'Message is required';
        } else if (name === 'message') {
            delete newErrors.message;
        }

        setErrors(newErrors);
    };

    const handleSubmit = (e) => {
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        const newErrors = {};

        if (!name?.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!email?.trim()) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!message?.trim()) {
            newErrors.message = 'Message is required';
        }

        if (Object.keys(newErrors).length > 0) {
            e.preventDefault();
            setErrors(newErrors);
            setTouched({ name: true, email: true, message: true });
            return false;
        }

        // Form is valid, allow submission
        setErrors({});
    };

    return (
        <form className='flex flex-col gap-y-6' name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
            <div className='relative flex flex-col gap-y-1'>
                <div className='relative flex items-center group'>
                    <Input
                        type='text'
                        id='name'
                        name='name'
                        placeholder='Name'
                        className={`bg-background/50 border-border focus:border-primary transition-colors pl-10 ${touched.name && errors.name ? 'border-red-500 focus:border-red-500' : ''}`}
                        onBlur={handleBlur}
                        required
                        aria-required="true"
                        aria-invalid={touched.name && errors.name ? 'true' : 'false'}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    <User className='absolute left-3 text-muted-foreground group-focus-within:text-primary transition-colors' size={20} />
                </div>
                {touched.name && errors.name && (
                    <span id="name-error" className="text-red-500 text-xs ml-1" role="alert">{errors.name}</span>
                )}
            </div>
            <div className='relative flex flex-col gap-y-1'>
                <div className='relative flex items-center group'>
                    <Input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='Email'
                        className={`bg-background/50 border-border focus:border-primary transition-colors pl-10 ${touched.email && errors.email ? 'border-red-500 focus:border-red-500' : ''}`}
                        onBlur={handleBlur}
                        required
                        aria-required="true"
                        aria-invalid={touched.email && errors.email ? 'true' : 'false'}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    <MailIcon className='absolute left-3 text-muted-foreground group-focus-within:text-primary transition-colors' size={20} />
                </div>
                {touched.email && errors.email && (
                    <span id="email-error" className="text-red-500 text-xs ml-1" role="alert">{errors.email}</span>
                )}
            </div>
            <div className='relative flex flex-col gap-y-1'>
                <div className='relative flex items-start group'>
                    <Textarea
                        placeholder='Type Your Message Here'
                        id='message'
                        name='message'
                        className={`bg-background/50 border-border focus:border-primary transition-colors pt-3 pl-10 min-h-[150px] ${touched.message && errors.message ? 'border-red-500 focus:border-red-500' : ''}`}
                        onBlur={handleBlur}
                        required
                        aria-required="true"
                        aria-invalid={touched.message && errors.message ? 'true' : 'false'}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    <MessageSquare className='absolute top-3 left-3 text-muted-foreground group-focus-within:text-primary transition-colors' size={20} />
                </div>
                {touched.message && errors.message && (
                    <span id="message-error" className="text-red-500 text-xs ml-1" role="alert">{errors.message}</span>
                )}
            </div>
            <Button type="submit" className='flex items-center gap-x-2 w-full md:max-w-[180px] shadow-[0_0_15px_var(--primary)_inset] hover:shadow-[0_0_25px_var(--primary)_inset] transition-all'>
                Send Message
                <ArrowRightIcon size={18} />
            </Button>
        </form>
    );
};

export default Form;