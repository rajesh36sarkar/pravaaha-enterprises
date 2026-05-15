"use client";
import { useState } from "react";
import { Send, Loader2, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    <motion.form onSubmit={submit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-[#11120D] mb-1">Name *</label>
          <input name="name" required value={form.name} onChange={handle} className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#C58718] outline-none transition-all" placeholder="Your name" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-[#11120D] mb-1">Email *</label>
          <input name="email" type="email" required value={form.email} onChange={handle} className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#C58718] outline-none transition-all" placeholder="your@email.com" />
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold text-[#11120D] mb-1">Phone</label>
        <input name="phone" value={form.phone} onChange={handle} className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#C58718] outline-none transition-all" placeholder="+91 XXXXXXXX" />
      </div>
      <div>
        <label className="block text-xs font-semibold text-[#11120D] mb-1">Service *</label>
        <select name="subject" required value={form.subject} onChange={handle} className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#C58718] outline-none transition-all">
          <option value="">Select a service</option>
          <option value="web">💻 Web Development</option>
          <option value="app">📱 App Development</option>
          <option value="fullstack">⚙️ Full‑Stack</option>
          <option value="design">🎨 UI/UX Design</option>
          <option value="other">📋 Other</option>
        </select>
      </div>
      <div>
        <label className="block text-xs font-semibold text-[#11120D] mb-1">Message *</label>
        <textarea name="message" required rows={5} value={form.message} onChange={handle} className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#C58718] outline-none transition-all resize-none" placeholder="Tell me about your project..." />
      </div>
      <motion.button type="submit" disabled={status === "loading"} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full flex items-center justify-center gap-2 py-3 bg-[#11120D] text-white rounded-xl font-semibold hover:bg-[#C58718] transition-all text-sm disabled:opacity-60">
        {status === "loading" ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</> : <><Send className="w-4 h-4" /> Send Message</>}
      </motion.button>
      <AnimatePresence>
        {status === "done" && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-3 rounded-xl text-sm">
            <CheckCircle className="w-4 h-4" /> Sent successfully! I'll reply soon.
          </motion.div>
        )}
      </AnimatePresence>
    </motion.form>
  );
}