import { useState } from "react";

export default function ContactForm() {
  const [s, setS] = useState(false);
  const h = (e: FormEvent<HTMLFormElement>) => { e.preventDefault(); setS(true); };
  if (s) return (<div class="card text-center"><h3 class="font-heading font-semibold text-gray-900 mb-1">Sent</h3><p class="text-sm text-gray-500">We'll be in touch soon.</p></div>);
  const inp = "w-full px-3.5 py-2.5 rounded-lg text-sm outline-none transition-all border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:border-cobalt-300 focus:ring-2 focus:ring-cobalt-500/10";
  return (
    <form onSubmit={h} class="space-y-4">
      <div class="grid sm:grid-cols-2 gap-4">
        <div><label for="n" class="block text-sm font-medium text-gray-700 mb-1">Name</label><input type="text" id="n" required class={inp} placeholder="Your name" /></div>
        <div><label for="e" class="block text-sm font-medium text-gray-700 mb-1">Email</label><input type="email" id="e" required class={inp} placeholder="you@institution.edu" /></div>
      </div>
      <div><label for="s" class="block text-sm font-medium text-gray-700 mb-1">Subject</label><input type="text" id="s" required class={inp} placeholder="Collaboration inquiry" /></div>
      <div><label for="m" class="block text-sm font-medium text-gray-700 mb-1">Message</label><textarea id="m" rows={4} required class={inp + " resize-y"} /></div>
      <button type="submit" class="btn-p">Send message</button>
    </form>
  );
}