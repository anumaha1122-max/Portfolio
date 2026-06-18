// import { useState } from 'react'; import { motion } from 'framer-motion'; import { FaDownload, FaEnvelope, FaEye, FaFileAlt, FaTimes } from 'react-icons/fa';
// export default function Resume() { const [open, setOpen] = useState(false); const contact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); return <section id="resume" className="section-padding"><div className="container-custom"><motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card overflow-hidden rounded-[36px]"><div className="grid gap-8 p-7 md:p-10 lg:grid-cols-[.9fr_1.1fr]"><div><p className="text-sm font-bold uppercase tracking-[0.3em] text-primary">Resume</p><h2 className="mt-4 text-3xl font-black md:text-5xl">Hari Prasad - Full Stack and Mobile App Developer</h2><p className="mt-5 leading-8 text-mutedText">Skilled in React Native, React.js, Java Spring Boot, MySQL, Firebase, REST APIs, GitHub, Docker, and AWS EC2.</p><div className="mt-8 flex flex-wrap gap-4"><a href="/resume.pdf" download="Hari-Prasad-Resume.pdf" className="gradient-button inline-flex items-center gap-2 rounded-full px-6 py-3 font-bold text-darkBg"><FaDownload />Download Resume</a><button onClick={() => setOpen(true)} className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-bold transition hover:border-primary hover:text-primary"><FaEye />View Resume</button><button onClick={contact} className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/10 px-6 py-3 font-bold transition hover:bg-secondary/20"><FaEnvelope />Contact Me</button></div></div><div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6"><div className="mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-primary/10 text-3xl text-primary"><FaFileAlt /></div><h3 className="text-2xl font-black">Resume Preview Card</h3><div className="mt-5 space-y-4 text-sm text-mutedText"><p><span className="font-bold text-white">Name:</span> Hari Prasad</p><p><span className="font-bold text-white">Role:</span> Full Stack and Mobile App Developer</p><p><span className="font-bold text-white">Skills:</span> React Native, React.js, Spring Boot, MySQL, Firebase, REST APIs</p><p><span className="font-bold text-white">Availability:</span> Open for job opportunities</p></div></div></div></motion.div></div>{open && <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/75 px-4 py-8 backdrop-blur-sm"><div className="relative h-[85vh] w-full max-w-5xl overflow-hidden rounded-[28px] bg-card soft-border"><div className="flex items-center justify-between border-b border-white/10 px-5 py-4"><h3 className="font-black">Resume Preview</h3><button onClick={() => setOpen(false)} className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20" aria-label="Close resume preview"><FaTimes /></button></div><iframe src="/resume.pdf" title="Hari Prasad Resume" className="h-[calc(85vh-73px)] w-full bg-white" /></div></div>}</section> }

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaEye, FaFileAlt, FaTimes } from 'react-icons/fa';

export default function Resume() {
    const [open, setOpen] = useState(false);

    return (
        <section id="resume" className="section-padding">
            <div className="container-custom">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary">
                        Resume
                    </p>

                    <h2 className="mt-4 text-3xl font-black md:text-5xl">
                        My Resume
                    </h2>

                    <p className="mt-5 text-mutedText">
                        View or download my professional resume for software engineering,
                        mobile app development, React Native, React.js, and Spring Boot roles.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card mx-auto mt-12 max-w-4xl rounded-[36px] p-6 md:p-10"
                >
                    <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
                        <div className="text-center md:text-left">
                            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/10 text-4xl text-primary md:mx-0">
                                <FaFileAlt />
                            </div>

                            <h3 className="mt-6 text-2xl font-black">
                                Anusuri Mahalakshmi
                            </h3>

                            <p className="mt-2 font-bold text-primary">
                                Software Engineer - Mobile App Development
                            </p>

                            <p className="mt-4 leading-7 text-mutedText">
                                6 months of experience at Bliss Sierra Software Solutions,
                                focused on mobile app development, UI screens, navigation,
                                REST API integration, and debugging.
                            </p>
                        </div>

                        <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
                            <h4 className="text-xl font-black">Resume Summary</h4>

                            <div className="mt-5 space-y-4 text-sm text-mutedText">
                                <p>
                                    <span className="font-bold text-white">Name:</span>{' '}
                                    Anusuri Mahalakshmi
                                </p>

                                <p>
                                    <span className="font-bold text-white">Role:</span>{' '}
                                    Software Engineer - Mobile App Development
                                </p>

                                <p>
                                    <span className="font-bold text-white">Experience:</span>{' '}
                                    6 Months at Bliss Sierra Software Solutions
                                </p>

                                <p>
                                    <span className="font-bold text-white">Skills:</span>{' '}
                                    React Native, React.js, JavaScript, Spring Boot, MySQL,
                                    Firebase, REST APIs, GitHub, Docker, AWS EC2
                                </p>

                                <p>
                                    <span className="font-bold text-white">Education:</span>{' '}
                                    Bachelor of Technology, Malla Reddy College of Engineering
                                    (MRCE)
                                </p>

                                <p>
                                    <span className="font-bold text-white">Contact:</span>{' '}
                                    anumaha1122@gmail.com | +91 7207532167
                                </p>

                                <p>
                                    <span className="font-bold text-white">Location:</span>{' '}
                                    Madhapur, Hyderabad
                                </p>
                            </div>

                            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                                <button
                                    type="button"
                                    onClick={() => setOpen(true)}
                                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 font-bold transition hover:border-primary hover:text-primary"
                                >
                                    <FaEye />
                                    View Resume
                                </button>

                                <a
                                    href="/resume.pdf"
                                    download="Anusuri-Mahalakshmi-Resume.pdf"
                                    className="gradient-button inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-bold text-darkBg"
                                >
                                    <FaDownload />
                                    Download Resume
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {open && (
                <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/75 px-4 py-8 backdrop-blur-sm">
                    <div className="relative h-[85vh] w-full max-w-5xl overflow-hidden rounded-[28px] bg-card soft-border">
                        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                            <h3 className="flex items-center gap-2 font-black">
                                <FaFileAlt />
                                Resume Preview
                            </h3>

                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
                                aria-label="Close resume preview"
                            >
                                <FaTimes />
                            </button>
                        </div>

                        <iframe
                            src="/resume.pdf"
                            title="Anusuri Mahalakshmi Resume"
                            className="h-[calc(85vh-73px)] w-full bg-white"
                        />
                    </div>
                </div>
            )}
        </section>
    );
}