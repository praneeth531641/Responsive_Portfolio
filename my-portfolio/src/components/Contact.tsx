// src/components/Contact.jsx
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_mv6l9n9",
        "template_36wl6r4",
        form.current,
        "Fb4nL3sIt9vbIY_fc"
      )
      .then(
        (result) => {
          setStatus("Message sent ✅");
          form.current.reset();
        },
        (error) => {
          setStatus("Failed to send ❌");
        }
      );
  };

  return (
    <section className="py-20 bg-gradient-to-r from-sky-50 via-white to-purple-50 dark:from-gray-800 dark:to-gray-900" id="contact">
      <div className="max-w-3xl mx-auto px-6 shadow-xl rounded-lg bg-white dark:bg-gray-800 border dark:border-gray-700">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-10">Contact Me</h2>
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
            rows="5"
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
            {status && <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">{status}</p>}
          </div>
        </form>
      </div>
    </section>
  );
}