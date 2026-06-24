import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  if (submitted) {
    return (
      <div class="card p-10 text-center animate-in">
        <div class="w-14 h-14 mx-auto rounded-xl bg-cobalt-50 flex items-center justify-center text-cobalt-600 mb-4">
          <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-stone-900 mb-1">Message sent</h3>
        <p class="text-stone-500 text-sm">Thank you. We'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} class="space-y-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label for="name" class="block text-sm font-medium text-stone-700 mb-1">Name <span class="text-cobalt-400">*</span></label>
          <input type="text" id="name" required class="input-glass" placeholder="Your name" />
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-stone-700 mb-1">Email <span class="text-cobalt-400">*</span></label>
          <input type="email" id="email" required class="input-glass" placeholder="you@institution.edu" />
        </div>
      </div>
      <div>
        <label for="subject" class="block text-sm font-medium text-stone-700 mb-1">Subject <span class="text-cobalt-400">*</span></label>
        <input type="text" id="subject" required class="input-glass" placeholder="Collaboration inquiry, question..." />
      </div>
      <div>
        <label for="message" class="block text-sm font-medium text-stone-700 mb-1">Message <span class="text-cobalt-400">*</span></label>
        <textarea id="message" rows={5} required class="input-glass resize-y" placeholder="Tell us about your research..." />
      </div>
      <button type="submit" class="btn-primary px-8 py-3">Send message</button>
    </form>
  );
}