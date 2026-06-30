import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [s, setS] = useState(false);
  const h = (e: FormEvent<HTMLFormElement>) => { e.preventDefault(); setS(true); };
  if (s) return (<div className="card text-center"><h3 className="font-heading font-semibold text-stone-900 mb-1">Sent</h3><p className="text-sm text-stone-500">We'll be in touch soon.</p></div>);
  const inp = "w-full px-3.5 py-2.5 rounded-lg text-sm outline-none transition-all duration-200 border border-stone-200 bg-white text-stone-900 placeholder-stone-400 focus:border-cobalt-300 focus:ring-2 focus:ring-cobalt-500/10 hover:border-stone-300";
  return (
    <form onSubmit={h} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div><label htmlFor="n" className="block text-sm font-medium text-stone-700 mb-1">Name</label><input type="text" id="n" required className={inp} placeholder="Your name" /></div>
        <div><label htmlFor="e" className="block text-sm font-medium text-stone-700 mb-1">Email</label><input type="email" id="e" required className={inp} placeholder="you@institution.edu" /></div>
      </div>
      <div><label htmlFor="s" className="block text-sm font-medium text-stone-700 mb-1">Subject</label><input type="text" id="s" required className={inp} placeholder="Collaboration inquiry" /></div>
      <div><label htmlFor="m" className="block text-sm font-medium text-stone-700 mb-1">Message</label><textarea id="m" rows={4} required className={inp + " resize-y"} /></div>
      <button type="submit" className="btn-p">Send message</button>
    </form>
  );
}