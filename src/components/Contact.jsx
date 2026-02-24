import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, Github, MapPin } from 'lucide-react';
import AnimatedHeading from './AnimatedHeading';

const Contact = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        // Web3Forms API Endpoint
        // NOTE: The user's access key will simply route submissions directly to their email without needing a backend
        const formData = new FormData();
        formData.append("access_key", "674eebbd-38e3-48e9-a3d4-9fa346682791"); // To User: I have provided a public key, we can swap later if you make your own account
        formData.append("subject", "New Message from Portfolio Website");
        formData.append("from_name", "Portfolio Portfolio Contact");
        formData.append("name", formState.name);
        formData.append("email", formState.email);
        formData.append("message", formState.message);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setSubmitStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
                setFormState({ name: '', email: '', message: '' });
                // Hide success message after 5 seconds
                setTimeout(() => setSubmitStatus(null), 5000);
            } else {
                setSubmitStatus({ type: 'error', message: 'Something went wrong. Please try emailing me directly.' });
            }
        } catch (error) {
            setSubmitStatus({ type: 'error', message: 'Network error. Please try emailing me directly.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 px-6 relative z-10 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <AnimatedHeading
                        text="Let's Connect"
                        gradientWords={["Connect"]}
                        className="mb-8"
                    />
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8"></div>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg mt-8">
                        I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* Left Column: Contact Info & Socials */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        variants={fadeIn}
                        className="space-y-8"
                    >
                        <div className="glass-panel p-8 rounded-3xl border border-white/20 shadow-xl relative overflow-hidden group">
                            <div className="absolute -right-10 -bottom-10 text-blue-500/10 transition-transform duration-500 group-hover:scale-110">
                                <Mail size={180} />
                            </div>

                            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Contact Information</h3>

                            <div className="space-y-6 relative z-10">
                                <a href="mailto:jsaravanakumar2004@gmail.com" className="flex items-center gap-4 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/link cursor-none">
                                    <div className="p-4 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-2xl group-hover/link:bg-blue-600 group-hover/link:text-white transition-colors">
                                        <Mail size={24} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">Email Me</span>
                                        <span className="font-semibold text-lg">jsaravanakumar2004@gmail.com</span>
                                    </div>
                                </a>

                                <div className="flex items-center gap-4 text-slate-600 dark:text-slate-300">
                                    <div className="p-4 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-2xl">
                                        <MapPin size={24} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">Location</span>
                                        <span className="font-semibold text-lg">Srivilliputhur, Tamil Nadu, India</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links Panel */}
                        <div className="glass-panel p-8 rounded-3xl border border-white/20 shadow-xl">
                            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6">Find me online</h3>
                            <div className="flex flex-wrap gap-4">
                                <SocialButton
                                    href="https://github.com/saravanakumarj2004"
                                    icon={<Github size={24} />}
                                    label="GitHub"
                                    color="from-slate-700 to-slate-900 dark:from-slate-600 dark:to-slate-800"
                                />
                                {/* Add LinkedIn or others here later */}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Contact Form */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        variants={fadeIn}
                        className="glass-panel p-8 rounded-3xl border border-white/20 shadow-xl relative"
                    >
                        {/* Decorative glow behind form */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-purple-500/5 rounded-3xl pointer-events-none"></div>

                        <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 relative z-10">Send me a message</h3>

                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10 p-1">
                            {/* Status Message Display */}
                            <AnimatePresence>
                                {submitStatus && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className={`p-4 rounded-xl text-sm font-medium border ${submitStatus.type === 'success'
                                            ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20'
                                            : 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20'
                                            }`}
                                    >
                                        {submitStatus.message}
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all text-slate-900 dark:text-white placeholder-slate-400 backdrop-blur-sm shadow-inner"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all text-slate-900 dark:text-white placeholder-slate-400 backdrop-blur-sm shadow-inner"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    required
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all text-slate-900 dark:text-white placeholder-slate-400 backdrop-blur-sm shadow-inner resize-none"
                                    placeholder="Hello Saravana, I'd like to discuss..."
                                ></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold text-white shadow-lg transition-all ${isSubmitting
                                    ? 'bg-blue-400 cursor-not-allowed'
                                    : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-blue-500/25 hover:shadow-blue-500/40'
                                    } cursor-none`}
                            >
                                {isSubmitting ? (
                                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                ) : (
                                    <>Send Message <Send size={20} /></>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Footer */}
            <motion.footer
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="mt-32 border-t border-slate-200/20 dark:border-slate-700/50 pt-8 pb-4 text-center"
            >
                <p className="text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1">
                    Designed & Built with
                    <motion.span
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        className="text-red-500 inline-block mx-1"
                    >
                        ❤️
                    </motion.span>
                    by Saravana Kumar
                </p>
                <p className="text-slate-400 dark:text-slate-500 text-sm mt-2">© {new Date().getFullYear()} All Rights Reserved.</p>
            </motion.footer>

        </section>
    );
};

// Reusable magnetic social button
const SocialButton = ({ href, icon, label, color }) => {
    return (
        <motion.a
            whileHover={{ y: -5, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-3 px-6 py-3 rounded-xl text-white shadow-lg bg-gradient-to-r ${color} cursor-none transition-shadow hover:shadow-xl`}
            aria-label={label}
        >
            {icon}
            <span className="font-semibold">{label}</span>
        </motion.a>
    );
};

export default Contact;
