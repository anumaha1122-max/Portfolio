import { motion } from 'framer-motion';
import { FaBookOpen, FaGraduationCap } from 'react-icons/fa';

const learning = [
    'Advanced React Native',
    'Spring Boot Security',
    'AWS EC2 Deployment',
    'Docker',
    'CI/CD',
    'System Design Basics',
];

const educationDetails = [
    ['Degree', 'Bachelor of Technology'],
    ['College', 'Malla Reddy College of Engineering (MRCE)'],
    ['Year', '2021 - 2025'],
    ['CGPA', '7.16'],
    ['Location', 'Madhapur, Hyderabad'],
];

export default function Education() {
    return (
        <section id="education" className="section-padding">
            <div className="container-custom">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary">
                        Education
                    </p>

                    <h2 className="mt-4 text-3xl font-black md:text-5xl">
                        Education and Continuous Learning
                    </h2>

                    <p className="mt-5 text-mutedText">
                        My academic background and the technologies I am currently improving.
                    </p>
                </div>

                <div className="mt-12 grid gap-7 lg:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card rounded-[32px] p-7"
                    >
                        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-2xl text-primary">
                            <FaGraduationCap />
                        </div>

                        <h3 className="text-2xl font-black">Academic Details</h3>

                        <div className="mt-6 grid gap-4">
                            {educationDetails.map(([label, value]) => (
                                <div
                                    key={label}
                                    className="rounded-2xl bg-white/[0.04] p-4 soft-border"
                                >
                                    <p className="text-sm text-mutedText">{label}</p>

                                    <h4 className="mt-1 font-bold">
                                        {value}
                                    </h4>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="glass-card rounded-[32px] p-7"
                    >
                        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/15 text-2xl text-primary">
                            <FaBookOpen />
                        </div>

                        <h3 className="text-2xl font-black">Currently Learning</h3>

                        <p className="mt-3 text-mutedText">
                            Continuous learning areas to become stronger in full-stack and
                            mobile application development.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                            {learning.map((item) => (
                                <span
                                    key={item}
                                    className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}