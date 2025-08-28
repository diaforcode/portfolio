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
    <section id="contact" className="relative py-28 px-4 z-10">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white"
        >
          Contact Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-muted-foreground dark:text-shadow-muted-foreground mt-4 text-base md:text-lg"
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
        <Card
          className="border border-zinc-300/20 dark:border-white/10 
                     bg-white/30 dark:bg-white/5 
                     backdrop-blur-md rounded-2xl shadow-md dark:shadow-xl 
                     hover:shadow-lg dark:hover:shadow-2xl 
                     transition-all duration-300"
        >
          <CardContent className="space-y-4 p-6">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="bg-white/50 dark:bg-transparent 
                             border border-zinc-300 dark:border-white/20 
                             rounded px-4 py-2 
                             placeholder:text-zinc-500 dark:placeholder:text-white/50 
                             text-slate-800 dark:text-white"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  className="bg-white/50 dark:bg-transparent 
                             border border-zinc-300 dark:border-white/20 
                             rounded px-4 py-2 
                             placeholder:text-zinc-500 dark:placeholder:text-white/50 
                             text-slate-800 dark:text-white"
                />
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Your Message"
                  className="bg-white/50 dark:bg-transparent 
                             border border-zinc-300 dark:border-white/20 
                             rounded px-4 py-2 
                             placeholder:text-zinc-500 dark:placeholder:text-white/50 
                             text-slate-800 dark:text-white"
                />
                <button
                  type="submit"
                  className="bg-cyan-600 hover:bg-cyan-700 
                             transition rounded px-6 py-2 
                             text-white font-medium cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            ) : (
              <p className="text-center text-green-600 dark:text-green-400">
                Thank you! I'll get back to you soon.
              </p>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
