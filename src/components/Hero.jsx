import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaRocket } from 'react-icons/fa';
import heroDeveloper from '../assets/images/developer.png';

const words = [
    'React Native Developer',
    'React.js Developer',
    'Spring Boot Developer',
    'Full Stack Developer',
    'Mobile App Developer',
];

export default function Hero() {
    const [i, setI] = useState(0);
    const [text, setText] = useState('');

    useEffect(() => {
        let c = 0;
        const word = words[i];

        const interval = setInterval(() => {
            setText(word.slice(0, c + 1));
            c++;

            if (c === word.length) {
                clearInterval(interval);

                setTimeout(() => {
                    setI((p) => (p + 1) % words.length);
                }, 1200);
            }
        }, 70);

        return () => clearInterval(interval);
    }, [i]);

    const scroll = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="home"
            className="relative overflow-hidden px-5 pb-20 pt-32 md:pt-40"
        >
            <div className="absolute left-10 top-32 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute right-10 top-20 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />

            <div className="container-custom relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
                <motion.div
                    initial={{ opacity: 0, y: 26 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65 }}
                >
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                        <FaRocket />
                        Open for job opportunities
                    </div>

                    <h1 className="text-4xl font-black leading-tight md:text-6xl lg:text-7xl">
                        Hi, I’m <span className="gradient-text">Maha</span>
                    </h1>

                    <h2 className="mt-5 text-xl font-bold md:text-2xl">
                        React Native | React.js | Spring Boot Developer
                    </h2>

                    <div className="mt-4 h-8 text-lg font-bold text-primary md:text-xl">
                        {text}
                        <span className="animate-pulse">|</span>
                    </div>

                    <p className="mt-6 max-w-2xl text-base leading-8 text-mutedText md:text-lg">
                        I build mobile apps, web apps, and full-stack systems with clean UI,
                        secure authentication, REST APIs, and scalable backend architecture.
                    </p>

                    <div className="mt-9 flex flex-wrap gap-4">
                        <button
                            type="button"
                            onClick={() => scroll('projects')}
                            className="gradient-button inline-flex items-center gap-2 rounded-full px-6 py-3 font-bold text-darkBg shadow-glow transition hover:scale-105"
                        >
                            <FaRocket />
                            View Projects
                        </button>

                        <button
                            type="button"
                            onClick={() => scroll('contact')}
                            className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/10 px-6 py-3 font-bold transition hover:bg-secondary/20"
                        >
                            <FaEnvelope />
                            Contact Me
                        </button>
                    </div>

                    <div className="mt-10 grid gap-4 sm:grid-cols-3">
                        {[
                            ['6+', 'Real-world app concepts'],
                            ['5+', 'Tech stacks practiced'],
                            ['100%', 'Job-focused portfolio'],
                        ].map(([number, label]) => (
                            <div key={label} className="glass-card rounded-3xl p-5">
                                <h3 className="text-2xl font-black text-primary">
                                    {number}
                                </h3>
                                <p className="mt-1 text-sm text-mutedText">{label}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.75 }}
                    className="glass-card relative overflow-hidden rounded-[36px] p-5 shadow-glow"
                >
                    <div className="relative rounded-[28px] bg-darkBg/70 p-6">
                        <div className="mb-5 flex gap-2">
                            <span className="h-3 w-3 rounded-full bg-red-400" />
                            <span className="h-3 w-3 rounded-full bg-yellow-400" />
                            <span className="h-3 w-3 rounded-full bg-green-400" />
                        </div>

                        <div className="relative min-h-[330px] overflow-hidden rounded-[24px]">
                            <img
                                src={heroDeveloper}
                                alt="Professional developer illustration"
                                className="h-full min-h-[330px] w-full object-cover"
                            />

                            <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/10 bg-darkBg/75 p-5 backdrop-blur-xl">
                                <p className="text-sm font-semibold text-mutedText">
                                    Developer Workspace
                                </p>

                                <h3 className="mt-2 text-2xl font-black gradient-text">
                                    Code. Build. Deploy.
                                </h3>
                            </div>
                        </div>

                        <div className="mt-5 rounded-3xl border border-primary/20 bg-primary/10 p-4">
                            <p className="text-sm leading-6 text-mutedText">
                                Focused on clean UI, secure authentication, scalable APIs, and
                                real-world role-based app systems.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}