"use client";

import { useState } from "react";
import { Button } from "./Button";
import { services } from "@/lib/content";

const inputClass =
  "w-full rounded-lg border border-line-strong bg-cream px-4 py-2.5 text-sm text-ink placeholder:text-muted focus-ring focus-visible:border-accent";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // EDIT: wire this to your backend / email service / CRM.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-2xl border border-line bg-surface p-8 text-center"
      >
        <h3 className="font-heading text-xl font-medium text-ink">
          Thanks — message received.
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate">
          We&apos;ll get back to you within one business day to schedule your
          consultation.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-line bg-cream p-6 shadow-sm sm:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-ink">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
            placeholder="Your name"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-ink">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
            placeholder="you@company.com"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="company" className="text-sm font-medium text-ink">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className={inputClass}
            placeholder="Company name"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="service" className="text-sm font-medium text-ink">
            What can we help with?
          </label>
          <select id="service" name="service" className={inputClass} defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="other">Something else</option>
          </select>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={inputClass}
          placeholder="Tell us a little about your systems and what you'd like to improve."
        />
      </div>

      <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit">Book a Consultation</Button>
        <p className="text-xs text-muted">
          We&apos;ll reply within one business day.
        </p>
      </div>
    </form>
  );
}
