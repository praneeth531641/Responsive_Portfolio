import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaUser, FaEnvelope, FaCommentDots, FaPaperPlane, FaTimes } from "react-icons/fa";

export default function Contact() {
  const form = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState("");
  const [showForm, setShowForm] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_mv6l9n9",
        "template_36wl6r4",
        form.current,
        "Fb4nL3sIt9vbIY_fc"
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
      className="py-20 bg-gradient-to-r from-sky-50 via-white to-purple-50 dark:from-gray-800 dark:to-gray-900 transition-all"
    >
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-10">
          Contact Me
        </h2>

        {!showForm ? (
          <div className="text-center">
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-md transition duration-300"
            >
              <FaPaperPlane /> Send a Message
            </button>
          </div>
        ) : (
          <div className="relative shadow-2xl rounded-lg bg-white dark:bg-gray-800 border dark:border-gray-700 p-6 animate-fade-in">
            {/* Close Button */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition text-xl"
              aria-label="Close"
            >
              <FaTimes />
            </button>

            <form ref={form} onSubmit={sendEmail} className="space-y-6 mt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative">
                  <FaUser className="absolute left-3 top-4 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="w-full pl-10 p-4 border border-gray-300 rounded-lg dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-4 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your Email"
                    className="w-full pl-10 p-4 border border-gray-300 rounded-lg dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>

              <div className="relative">
                <FaCommentDots className="absolute left-3 top-5 text-gray-400" />
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Your Message"
                  className="w-full pl-10 p-4 border border-gray-300 rounded-lg dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-2xl transition duration-300"
                >
                  📤 Send Message
                </button>
                {status && (
                  <p
                    className={`mt-4 text-sm ${
                      status.includes("✅")
                        ? "text-green-600 dark:text-green-400"
                        : status.includes("❌")
                        ? "text-red-600 dark:text-red-400"
                        : "text-gray-600 dark:text-gray-300"
                    } animate-fade-in`}
                  >
                    {status}
                  </p>
                )}
              </div>
            </form>
          </div>
        )}
      </div>

      {/* Animation styles */}
      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .animate-fade-in {
            animation: fade-in 0.5s ease-out;
          }
        `}
      </style>
    </section>
  );
}
