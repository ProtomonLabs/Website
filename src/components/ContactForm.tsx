import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div class="card p-10 text-center animate-scale">
        <div class="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-cobalt-100 to-ocean-100 flex items-center justify-center text-3xl mb-5 text-cobalt-600">
          <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <h3 class="text-2xl font-heading font-bold text-ocean-900 mb-2">Message sent</h3>
        <p class="text-ocean-500 text-sm">Thank you for reaching out. We'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} class="space-y-5">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label for="name" class="block text-sm font-medium text-ocean-700 mb-1.5">
            Name <span class="text-cobalt-400">*</span>
          </label>
          <input
            type="text"
            id="name"
            required
            class="w-full px-4 py-3 rounded-xl border border-ocean-200/60 bg-white text-ocean-900 placeholder-ocean-300/60 focus:outline-none focus:ring-2 focus:ring-cobalt-300/40 focus:border-cobalt-300 transition-all text-sm"
            placeholder="Your name"
          />
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-ocean-700 mb-1.5">
            Email <span class="text-cobalt-400">*</span>
          </label>
          <input
            type="email"
            id="email"
            required
            class="w-full px-4 py-3 rounded-xl border border-ocean-200/60 bg-white text-ocean-900 placeholder-ocean-300/60 focus:outline-none focus:ring-2 focus:ring-cobalt-300/40 focus:border-cobalt-300 transition-all text-sm"
            placeholder="you@institution.edu"
          />
        </div>
      </div>
      <div>
        <label for="subject" class="block text-sm font-medium text-ocean-700 mb-1.5">
          Subject <span class="text-cobalt-400">*</span>
        </label>
        <input
          type="text"
          id="subject"
          required
          class="w-full px-4 py-3 rounded-xl border border-ocean-200/60 bg-white text-ocean-900 placeholder-ocean-300/60 focus:outline-none focus:ring-2 focus:ring-cobalt-300/40 focus:border-cobalt-300 transition-all text-sm"
          placeholder="Collaboration inquiry, question..."
        />
      </div>
      <div>
        <label for="message" class="block text-sm font-medium text-ocean-700 mb-1.5">
          Message <span class="text-cobalt-400">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          required
          class="w-full px-4 py-3 rounded-xl border border-ocean-200/60 bg-white text-ocean-900 placeholder-ocean-300/60 focus:outline-none focus:ring-2 focus:ring-cobalt-300/40 focus:border-cobalt-300 transition-all text-sm resize-y"
          placeholder="Tell us about your research or what you'd like to discuss..."
        />
      </div>
      <button
        type="submit"
        class="w-full sm:w-auto px-8 py-3.5 bg-cobalt-600 hover:bg-cobalt-700 text-white font-medium rounded-xl transition-all duration-300 shadow-sm hover:shadow-glow active:scale-[0.97] text-sm"
      >
        Send Message
      </button>
    </form>
  );
}