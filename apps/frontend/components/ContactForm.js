"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "Будь ласка, заповніть усі поля." });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: "error", message: "Будь ласка, введіть коректну адресу email." });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setIsSubmitting(false);
    setStatus({
      type: "success",
      message: "Дякуємо! Ваше повідомлення успішно надіслано. Наша редакція зв'яжеться з вами найближчим часом."
    });
    setFormData({ name: "", email: "", message: "" });
  };

  if (status.type === "success") {
    return (
      <div className="bg-emerald-950/20 border border-emerald-500/20 rounded-2xl p-8 text-center animate-fade-in">
        <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h4 className="text-lg font-bold text-white mb-2">Надіслано!</h4>
        <p className="text-sm text-zinc-400 leading-relaxed max-w-md mx-auto">{status.message}</p>
        <button
          onClick={() => setStatus({ type: "", message: "" })}
          className="mt-6 px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-850 text-xs font-semibold text-zinc-300 hover:text-white border border-zinc-800 transition-all duration-200"
        >
          Надіслати інше повідомлення
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status.type === "error" && (
        <div className="p-4 bg-red-950/20 border border-red-500/20 rounded-xl text-xs text-red-400">
          {status.message}
        </div>
      )}
      
      <div>
        <label htmlFor="form-name" className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
          Ваше ім'я
        </label>
        <input
          id="form-name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Введіть ваше ім'я"
          className="w-full h-11 px-4 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-zinc-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200 placeholder:text-zinc-650"
        />
      </div>

      <div>
        <label htmlFor="form-email" className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
          Email адреса
        </label>
        <input
          id="form-email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className="w-full h-11 px-4 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-zinc-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200 placeholder:text-zinc-650"
        />
      </div>

      <div>
        <label htmlFor="form-message" className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
          Повідомлення
        </label>
        <textarea
          id="form-message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          placeholder="Напишіть ваше питання або пропозицію..."
          className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-zinc-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200 placeholder:text-zinc-650 resize-y"
        ></textarea>
      </div>

      <button
        id="submit-contact"
        type="submit"
        disabled={isSubmitting}
        className="w-full h-11 rounded-xl bg-indigo-650 hover:bg-indigo-600 disabled:bg-indigo-800 text-sm font-semibold text-white transition-all duration-200 flex items-center justify-center shadow-lg shadow-indigo-600/10"
      >
        {isSubmitting ? (
          <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        ) : (
          "Надіслати повідомлення"
        )}
      </button>
    </form>
  );
}
