import { useState, type FormEvent } from "react";

const gradient = "linear-gradient(135deg, #4f46e5, #6366f1)";
const gradientHover = "linear-gradient(135deg, #4338ca, #4f46e5)";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="card p-10 text-center animate-scale">
        <div
          className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center text-3xl mb-5 text-cobalt-600"
          style={{ background: "linear-gradient(135deg, rgba(238,242,255,0.8), rgba(224,242,254,0.8))" }}
        >
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <h3 className="text-2xl font-heading font-bold text-slate-900 mb-2">Message sent</h3>
        <p className="text-slate-500 text-sm">Thank you for reaching out. We'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1.5">
            Name <span className="text-cobalt-400">*</span>
          </label>
          <input
            type="text"
            id="name"
            required
            className="w-full px-4 py-3 rounded-xl text-slate-800 placeholder-slate-400 transition-all duration-300 text-sm outline-none"
            style={{ background: "rgba(255,255,255,0.7)", border: "1px solid rgba(186,230,253,0.4)", backdropFilter: "blur(8px)" }}
            placeholder="Your name"
            onFocus={(e) => { e.target.style.borderColor = "rgba(165,180,252,0.6)"; e.target.style.boxShadow = "0 0 0 3px rgba(165,180,252,0.2)"; e.target.style.background = "rgba(255,255,255,0.85)"; }}
            onBlur={(e) => { e.target.style.borderColor = "rgba(186,230,253,0.4)"; e.target.style.boxShadow = "none"; e.target.style.background = "rgba(255,255,255,0.7)"; }}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1.5">
            Email <span className="text-cobalt-400">*</span>
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full px-4 py-3 rounded-xl text-slate-800 placeholder-slate-400 transition-all duration-300 text-sm outline-none"
            style={{ background: "rgba(255,255,255,0.7)", border: "1px solid rgba(186,230,253,0.4)", backdropFilter: "blur(8px)" }}
            placeholder="you@institution.edu"
            onFocus={(e) => { e.target.style.borderColor = "rgba(165,180,252,0.6)"; e.target.style.boxShadow = "0 0 0 3px rgba(165,180,252,0.2)"; e.target.style.background = "rgba(255,255,255,0.85)"; }}
            onBlur={(e) => { e.target.style.borderColor = "rgba(186,230,253,0.4)"; e.target.style.boxShadow = "none"; e.target.style.background = "rgba(255,255,255,0.7)"; }}
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-1.5">
          Subject <span className="text-cobalt-400">*</span>
        </label>
        <input
          type="text"
          id="subject"
          required
          className="w-full px-4 py-3 rounded-xl text-slate-800 placeholder-slate-400 transition-all duration-300 text-sm outline-none"
          style={{ background: "rgba(255,255,255,0.7)", border: "1px solid rgba(186,230,253,0.4)", backdropFilter: "blur(8px)" }}
          placeholder="Collaboration inquiry, question..."
          onFocus={(e) => { e.target.style.borderColor = "rgba(165,180,252,0.6)"; e.target.style.boxShadow = "0 0 0 3px rgba(165,180,252,0.2)"; e.target.style.background = "rgba(255,255,255,0.85)"; }}
          onBlur={(e) => { e.target.style.borderColor = "rgba(186,230,253,0.4)"; e.target.style.boxShadow = "none"; e.target.style.background = "rgba(255,255,255,0.7)"; }}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1.5">
          Message <span className="text-cobalt-400">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          required
          className="w-full px-4 py-3 rounded-xl text-slate-800 placeholder-slate-400 transition-all duration-300 text-sm outline-none resize-y"
          style={{ background: "rgba(255,255,255,0.7)", border: "1px solid rgba(186,230,253,0.4)", backdropFilter: "blur(8px)" }}
          placeholder="Tell us about your research or what you'd like to discuss..."
          onFocus={(e) => { e.target.style.borderColor = "rgba(165,180,252,0.6)"; e.target.style.boxShadow = "0 0 0 3px rgba(165,180,252,0.2)"; e.target.style.background = "rgba(255,255,255,0.85)"; }}
          onBlur={(e) => { e.target.style.borderColor = "rgba(186,230,253,0.4)"; e.target.style.boxShadow = "none"; e.target.style.background = "rgba(255,255,255,0.7)"; }}
        />
      </div>
      <button
        type="submit"
        className="w-full sm:w-auto px-8 py-3.5 text-white font-semibold rounded-xl transition-all duration-300 shadow-sm active:scale-[0.97] text-sm"
        style={{ background: gradient }}
        onMouseOver={(e) => { e.currentTarget.style.background = gradientHover; }}
        onMouseOut={(e) => { e.currentTarget.style.background = gradient; }}
      >
        Send Message
      </button>
    </form>
  );
}