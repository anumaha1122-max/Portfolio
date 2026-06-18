import { motion } from 'framer-motion';
import {
    FaCheckCircle,
    FaLaptopCode,
    FaMapMarkerAlt,
    FaUserTie,
    FaBriefcase,
    FaCode,
} from 'react-icons/fa';
import profileImage from '../assets/images/image.png';

const info = [
    {
        label: 'Name',
        value: 'Anusuri Mahalakshmi',
        icon: <FaUserTie />,
    },
    {
        label: 'Role',
        value: 'Software Engineer - Mobile App Development',
        icon: <FaLaptopCode />,
    },
    {
        label: 'Location',
        value: 'Madhapur, Hyderabad',
        icon: <FaMapMarkerAlt />,
    },
    {
        label: 'Focus',
        value: 'React Native, React.js, Spring Boot',
        icon: <FaCode />,
    },
    {
        label: 'Experience',
        value: '6 Months at Bliss Sierra Software Solutions',
        icon: <FaBriefcase />,
    },
    {
        label: 'Availability',
        value: 'Open for job opportunities',
        icon: <FaCheckCircle />,
    },
];

const strengths = [
    'Mobile App Development',
    'React Native UI Screens',
    'REST API Integration',
    'Role-Based App Flows',
];

export default function About() {
    return (
        <section id="about" className="section-padding relative overflow-hidden">
            <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />

            <div className="container-custom relative">
                <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                    <motion.div
                        initial={{ opacity: 0, x: -28 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="glass-card rounded-[36px] p-5 md:p-7"
                    >
                        <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-br from-primary/20 via-white/[0.03] to-secondary/20 p-4">
                            <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-primary/20 blur-2xl" />
                            <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-secondary/20 blur-2xl" />

                            <img
                                src={profileImage}
                                alt="Anusuri Mahalakshmi profile"
                                className="relative h-[380px] w-full rounded-[24px] object-cover"
                            />

                            <div className="absolute bottom-8 left-8 right-8 rounded-3xl border border-white/10 bg-darkBg/75 p-5 backdrop-blur-xl">
                                <p className="text-sm font-bold text-primary">
                                    Software Engineer
                                </p>

                                <h3 className="mt-1 text-xl font-black">
                                    Mobile App Development
                                </h3>

                                <p className="mt-2 text-sm text-mutedText">
                                    React Native • React.js • Spring Boot
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 28 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary">
                            About Me
                        </p>

                        <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
                            Passionate Developer Building Real-World Applications
                        </h2>

                        <div className="mt-6 space-y-5 text-base leading-8 text-mutedText">
                            <p>
                                I am Anusuri Mahalakshmi, a software engineer focused on mobile
                                app development, frontend UI implementation, REST API
                                integration, and real-world application flows.
                            </p>

                            <p>
                                I have 6 months of experience at Bliss Sierra Software
                                Solutions, where I worked on React Native mobile app screens,
                                navigation flows, responsive UI, forms, API integration, and
                                debugging.
                            </p>

                            <p>
                                My goal is to grow as a React Native, React.js, Full Stack, and
                                Java Spring Boot developer by contributing to practical,
                                scalable, and user-friendly software applications.
                            </p>
                        </div>

                        <div className="mt-7 flex flex-wrap gap-3">
                            {strengths.map((item) => (
                                <span
                                    key={item}
                                    className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>

                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                            {info.map((item, index) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, y: 18 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -5 }}
                                    className="glass-card rounded-3xl p-5"
                                >
                                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-xl text-primary">
                                        {item.icon}
                                    </div>

                                    <p className="text-sm text-mutedText">
                                        {item.label}
                                    </p>

                                    <h3 className="mt-1 text-sm font-bold leading-6 md:text-base">
                                        {item.value}
                                    </h3>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}