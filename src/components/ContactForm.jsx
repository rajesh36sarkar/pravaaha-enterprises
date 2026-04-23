"use client";

import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate sending (you can integrate MongoDB later)
    setTimeout(() => {
      setStatus("sent");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      
      setTimeout(() => setStatus(""), 5000);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Name *
        </label>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
          placeholder="Your full name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email *
        </label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Phone
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
          placeholder="+91 XXXXXXXXXX"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Subject *
        </label>
        <select
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
        >
          <option value="">Select a subject</option>
          <option value="saree">Saree Inquiry - Akalpa</option>
          <option value="digital">Digital Services - Pravaaha Digital</option>
          <option value="other">Other Inquiry</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Message *
        </label>
        <textarea
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows="4"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
          placeholder="Tell us about your requirement..."
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-blue-400"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status === "sent" && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
          ✅ Message sent successfully! We'll get back to you soon.
        </div>
      )}
    </form>
  );
};

export default ContactForm;