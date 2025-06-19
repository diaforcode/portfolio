// components/Contact.tsx
"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      setSubmitted(true);
    } else {
      alert("Failed to send message. Try again later.");
    }
  };

  return (
    <section id="contact" className="relative py-28 px-4 text-white z-10">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold"
        >
          Contact Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-white/80 mt-4"
        >
          Have a question or want to work together? Feel free to reach out.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto"
      >
        <Card className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl">
          <CardContent className="space-y-4">
            {!submitted ? (
              <form
                className="flex flex-col space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="bg-transparent border border-white/20 rounded px-4 py-2 placeholder:text-white/50 text-white"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  className="bg-transparent border border-white/20 rounded px-4 py-2 placeholder:text-white/50 text-white"
                />
                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder="Your Message"
                  className="bg-transparent border border-white/20 rounded px-4 py-2 placeholder:text-white/50 text-white"
                />
                <button
                  type="submit"
                  className="bg-cyan-600 hover:bg-cyan-700 transition rounded px-6 py-2 text-white font-medium"
                >
                  Send Message
                </button>
              </form>
            ) : (
              <p className="text-center text-green-400">
                Thank you! I'll get back to you soon.
              </p>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
