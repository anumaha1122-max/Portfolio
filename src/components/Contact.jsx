import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import {
    FaEnvelope,
    FaGithub,
    FaLinkedin,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaWhatsapp,
} from 'react-icons/fa';

const cards = [
    [
        'Email',
        'anumaha1122@gmail.com',
        'mailto:anumaha1122@gmail.com',
        <FaEnvelope />,
    ],
    [
        'Phone',
        '+91 7207532167',
        'tel:+917207532167',
        <FaPhoneAlt />,
    ],
    [
        'LinkedIn',
        'linkedin.com/in/maha-anusuri-8669212a8',
        'https://linkedin.com/in/maha-anusuri-8669212a8',
        <FaLinkedin />,
    ],
    [
        'GitHub',
        'github.com/anumaha1122-max',
        'https://github.com/anumaha1122-max',
        <FaGithub />,
    ],
    [
        'Location',
        'Hyderabad, Madhapur',
        '#contact',
        <FaMapMarkerAlt />,
    ],
    [
        'WhatsApp',
        '+91 7207532167',
        'https://wa.me/917207532167',
        <FaWhatsapp />,
    ],
];

const initial = {
    name: '',
    email: '',
    subject: '',
    message: '',
};

export default function Contact() {
    const [form, setForm] = useState(initial);
    const [status, setStatus] = useState('');
    const [sending, setSending] = useState(false);

    const change = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const submit = async (e) => {
        e.preventDefault();
        setStatus('');

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            setStatus(
                'EmailJS is not configured yet. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your .env file.'
            );
            return;
        }

        try {
            setSending(true);

            await emailjs.send(
                serviceId,
                templateId,
                {
                    to_name: 'Anusuri Mahalakshmi',
                    from_name: form.name,
                    from_email: form.email,
                    subject: form.subject,
                    message: form.message,
                },
                {
                    publicKey,
                }
            );

            setStatus('Message sent successfully. Thank you for contacting me.');
            setForm(initial);
        } catch (err) {
            setStatus('Message could not be sent. Please check EmailJS setup and try again.');
        } finally {
            setSending(false);
        }
    };

    return (
        <section id="contact" className="section-padding">
            <div className="container-custom">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary">
                        Contact
                    </p>

                    <h2 className="mt-4 text-3xl font-black md:text-5xl">
                        Contact Anusuri Mahalakshmi
                    </h2>

                    <p className="mt-5 text-mutedText">
                        Use this form for interview calls, internship opportunities,
                        freelance work, or full-time developer roles.
                    </p>
                </div>

                <div className="mt-12 grid gap-7 lg:grid-cols-[0.9fr_1.1fr]">
                    <div className="grid gap-4 sm:grid-cols-2">
                        {cards.map(([label, value, href, icon], index) => (
                            <motion.a
                                key={label}
                                href={href}
                                target={href.startsWith('http') ? '_blank' : undefined}
                                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -6 }}
                                className="glass-card rounded-[26px] p-5"
                            >
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-xl text-primary">
                                    {icon}
                                </div>

                                <p className="text-sm text-mutedText">{label}</p>

                                <h3 className="mt-2 break-words text-sm font-bold">
                                    {value}
                                </h3>
                            </motion.a>
                        ))}
                    </div>

                    <motion.form
                        onSubmit={submit}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card rounded-[32px] p-6 md:p-8"
                    >
                        <div className="grid gap-5 md:grid-cols-2">
                            <Field
                                label="Name"
                                name="name"
                                value={form.name}
                                change={change}
                            />

                            <Field
                                label="Email"
                                name="email"
                                type="email"
                                value={form.email}
                                change={change}
                            />
                        </div>

                        <Field
                            label="Subject"
                            name="subject"
                            value={form.subject}
                            change={change}
                        />

                        <div className="mt-5">
                            <label className="mb-2 block text-sm font-bold">
                                Message
                            </label>

                            <textarea
                                name="message"
                                value={form.message}
                                onChange={change}
                                required
                                rows="6"
                                placeholder="Write your message..."
                                className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-mutedText focus:border-primary"
                            />
                        </div>

                        {status && (
                            <p className="mt-5 rounded-2xl border border-primary/20 bg-primary/10 p-4 text-sm leading-6 text-primary">
                                {status}
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={sending}
                            className="gradient-button mt-6 w-full rounded-full px-6 py-4 font-black text-darkBg transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
                        >
                            {sending ? 'Sending...' : 'Send Message'}
                        </button>

                        <p className="mt-4 text-xs leading-6 text-mutedText">
                            EmailJS setup: create a .env file and add
                            VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and
                            VITE_EMAILJS_PUBLIC_KEY.
                        </p>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}

function Field({ label, name, type = 'text', value, change }) {
    return (
        <div className="mt-5 first:mt-0">
            <label className="mb-2 block text-sm font-bold">
                {label}
            </label>

            <input
                type={type}
                name={name}
                value={value}
                onChange={change}
                required
                placeholder={`Your ${label.toLowerCase()}`}
                className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-mutedText focus:border-primary"
            />
        </div>
    );
}