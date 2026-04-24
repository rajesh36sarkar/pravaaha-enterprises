"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      setStatus("done");
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-[#11120D] mb-1">Name *</label>
          <input name="name" required value={form.name} onChange={handle} className="w-full px-4 py-2.5 border rounded-xl text-sm focus:ring-2 focus:ring-[#C58718] outline-none trans-all" placeholder="Your name" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-[#11120D] mb-1">Email *</label>
          <input name="email" type="email" required value={form.email} onChange={handle} className="w-full px-4 py-2.5 border rounded-xl text-sm focus:ring-2 focus:ring-[#C58718] outline-none trans-all" placeholder="your@email.com" />
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold text-[#11120D] mb-1">Phone</label>
        <input name="phone" value={form.phone} onChange={handle} className="w-full px-4 py-2.5 border rounded-xl text-sm focus:ring-2 focus:ring-[#C58718] outline-none trans-all" placeholder="+91 XXXXX" />
      </div>
      <div>
        <label className="block text-xs font-semibold text-[#11120D] mb-1">Subject *</label>
        <select name="subject" required value={form.subject} onChange={handle} className="w-full px-4 py-2.5 border rounded-xl text-sm focus:ring-2 focus:ring-[#C58718] outline-none trans-all">
          <option value="">Select</option>
          <option value="saree">🥻 Saree Inquiry</option>
          <option value="digital">💻 Digital Services</option>
          <option value="other">📋 Other</option>
        </select>
      </div>
      <div>
        <label className="block text-xs font-semibold text-[#11120D] mb-1">Message *</label>
        <textarea name="message" required rows={4} value={form.message} onChange={handle} className="w-full px-4 py-2.5 border rounded-xl text-sm focus:ring-2 focus:ring-[#C58718] outline-none resize-none trans-all" placeholder="Your message..." />
      </div>
      <button type="submit" disabled={status === "loading"} className="w-full flex items-center justify-center gap-2 py-3 bg-[#11120D] text-white rounded-xl font-semibold hover:bg-[#C58718] trans-all text-sm disabled:opacity-60">
        {status === "loading" ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</> : <><Send className="w-4 h-4" /> Send Message</>}
      </button>
      {status === "done" && (
        <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-3 rounded-xl text-sm">
          <CheckCircle className="w-4 h-4" /> Sent successfully! We'll reply soon.
        </div>
      )}
    </form>
  );
}