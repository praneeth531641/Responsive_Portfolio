// src/components/Contact.tsx
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_mv6l9n9",        // ✅ Your actual service ID
        "template_36wl6r4",       // ✅ Your actual template ID
        form.current,
        "Fb4nL3sIt9vbIY_fc"       // ✅ Your actual public key
      )
      .then(() => {
        setStatus("✅ Message sent successfully!");
        form.current?.reset();
      })
      .catch(() => {
        setStatus("❌ Failed to send. Try again.");
      });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-r from-sky-50 via-white to-purple-50 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="max-w-3xl mx-auto px-6 shadow-xl rounded-lg bg-white dark:bg-gray-800 border dark:border-gray-700">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-10">
          Contact Me
        </h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="p-4 border border-gray-300 rounded-lg dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="p-4 border border-gray-300 rounded-lg dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <textarea
            name="message"
            rows={5}
            required
            placeholder="Your Message"
            className="w-full p-4 border border-gray-300 rounded-lg dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>

          <div className="text-center">
            <button
              type="submit"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-2xl transition duration-300"
            >
              📤 Send Message
            </button>
            {status && (
              <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">
                {status}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
