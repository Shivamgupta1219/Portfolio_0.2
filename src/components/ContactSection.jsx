import { useInView, motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

import { Send, Github, Linkedin, Mail, CheckCircle } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Shivamgupta1219",
    color: "hover:text-white",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shivam-gupta-42087a255/",
    color: "hover:text-blue-500",
  },
  // { icon: Twitter, label: "Twitter", href: "", color: "hover:text-sky-400" },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:sgshivamgupta206@gmail.com",
    color: "hover:text-purple-400",
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError("Name is required");
      return false;
    }
    if (!formData.email.trim()) {
      setError("Email is required");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email");
      return false;
    }
    if (!formData.message.trim()) {
      setError("Message is required");
      return false;
    }
    if (formData.message.trim().length < 10) {
      setError("Message must be at least 10 characters");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        publicKey,
      );

      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Email error:", error);
      setError("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-black relative overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full" />
      </div>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Heading - matched style */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/5 mb-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span className="text-xs font-mono text-blue-500 tracking-widest uppercase">
                Contact
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-gray-900 dark:text-white">
              Let's Build Something{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Together
              </span>
            </h2>

            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear
              from you. Drop a message and I'll get back within 24 hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8">
                {isSubmitted ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex flex-col items-center justify-center py-12"
                  >
                    <CheckCircle className="h-20 w-20 text-green-500 mb-6" />
                    <h3 className="text-2xl font-bold mb-2">
                      Message Sent! 🎉
                    </h3>
                    <p className="text-gray-400 text-center">
                      Thanks for reaching out! I'll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-3 bg-red-500/20 border border-red-500/50 text-red-400 rounded-lg text-sm"
                      >
                        {error}
                      </motion.div>
                    )}

                    <div>
                      <label className="text-sm font-medium">Name</label>
                      <input
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            name: e.target.value,
                          });
                          setError("");
                        }}
                        maxLength="100"
                        className="
w-full mt-2 px-4 py-3 rounded-xl
bg-white/50 dark:bg-white/5
border border-white/20
backdrop-blur-md
focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30
outline-none transition-all duration-300
placeholder:text-gray-400
"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium">Email</label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            email: e.target.value,
                          });
                          setError("");
                        }}
                        maxLength="255"
                        className="
w-full mt-2 px-4 py-3 rounded-xl
bg-white/50 dark:bg-white/5
border border-white/20
backdrop-blur-md
focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30
outline-none transition-all duration-300
placeholder:text-gray-400
"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium">Message</label>
                      <textarea
                        rows="5"
                        placeholder="Tell me about your project..."
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            message: e.target.value,
                          });
                          setError("");
                        }}
                        maxLength="1000"
                        className="
w-full mt-2 px-4 py-3 rounded-xl
bg-white/50 dark:bg-white/5
border border-white/20
backdrop-blur-md
focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30
outline-none transition-all duration-300
placeholder:text-gray-400
"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        {formData.message.length}/1000
                      </p>
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isLoading}
                      whileHover={{ scale: isLoading ? 1 : 1.02 }}
                      whileTap={{ scale: isLoading ? 1 : 0.98 }}
                      className="
  w-full flex items-center justify-center gap-2 py-3 rounded-xl
  bg-gradient-to-r from-blue-500 to-purple-500
  text-white font-semibold
  shadow-lg hover:shadow-xl
  transition-all duration-300
  disabled:opacity-60 disabled:cursor-not-allowed
  "
                    >
                      {isLoading ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="flex flex-col justify-center"
            >
              <h3 className="text-2xl font-bold mb-4">Let's Connect!</h3>

              <p className="text-gray-400 mb-8">
                I'm always open to discussing new projects, creative ideas, or
                opportunities. Feel free to connect with me.
              </p>

              {/* Socials */}
              <div className="flex gap-4 mb-8">
                {socialLinks.map((social, index) => (
                  <motion.a
                    target="_blank"
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -4 }}
                    className="
w-12 h-12 rounded-xl
bg-white/50 dark:bg-white/5
backdrop-blur-md
border border-white/20
flex items-center justify-center
text-gray-500
hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500
transition-all duration-300
"
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>

              {/* Email */}
              <div className="bg-white/5 rounded-xl p-4 inline-flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-500" />
                <span className="font-mono text-sm">
                  sgshivamgupta206@gmail.com
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
