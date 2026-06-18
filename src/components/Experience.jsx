import { motion } from 'framer-motion';
import {
    FaBriefcase,
    FaCheckCircle,
    FaMobileAlt,
    FaCode,
    FaServer,
} from 'react-icons/fa';

const highlights = [
    'Worked on mobile app development using React Native',
    'Created responsive mobile UI screens',
    'Worked with navigation, forms, and role-based app flows',
    'Integrated frontend screens with backend REST APIs',
    'Debugged UI and functionality issues',
    'Used GitHub for version control',
];

const skills = [
    {
        icon: <FaMobileAlt />,
        title: 'Mobile App Development',
        text: 'Developed and improved mobile application screens using React Native with clean UI and smooth user flow.',
    },
    {
        icon: <FaCode />,
        title: 'Frontend Implementation',
        text: 'Worked on forms, cards, dashboards, navigation, reusable components, and mobile-friendly layouts.',
    },
    {
        icon: <FaServer />,
        title: 'API Integration',
        text: 'Connected mobile app screens with backend REST APIs and handled frontend data flow.',
    },
];

export default function Experience() {
    return (
        <section id="experience" className="section-padding">
            <div className="container-custom">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary">
                        Experience
                    </p>

                    <h2 className="mt-4 text-3xl font-black md:text-5xl">
                        Professional Experience
                    </h2>

                    <p className="mt-5 text-mutedText">
                        Short professional experience focused on mobile application development,
                        UI implementation, API integration, and debugging.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card mx-auto mt-12 max-w-5xl rounded-[32px] p-6 md:p-8"
                >
                    <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                        <div>
                            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-2xl text-primary">
                                <FaBriefcase />
                            </div>

                            <h3 className="text-2xl font-black">
                                Software Engineer - Mobile App Development
                            </h3>

                            <p className="mt-2 text-lg font-bold text-primary">
                                Bliss Sierra Software Solutions
                            </p>

                            <p className="mt-4 max-w-3xl leading-8 text-mutedText">
                                Worked as a Software Engineer with focus on mobile app development.
                                Built and improved React Native mobile screens, implemented responsive UI,
                                handled navigation flows, integrated REST APIs, and fixed UI/functionality issues.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-primary/20 bg-primary/10 px-5 py-4 text-center">
                            <p className="text-sm text-mutedText">Duration</p>
                            <h4 className="mt-1 text-xl font-black text-primary">
                                6 Months
                            </h4>
                        </div>
                    </div>

                    <div className="mt-8 grid gap-5 md:grid-cols-3">
                        {skills.map((item) => (
                            <div
                                key={item.title}
                                className="rounded-3xl bg-white/[0.04] p-5 soft-border"
                            >
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/15 text-xl text-primary">
                                    {item.icon}
                                </div>

                                <h4 className="font-black">{item.title}</h4>

                                <p className="mt-3 text-sm leading-7 text-mutedText">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8">
                        <h4 className="text-xl font-black">Key Responsibilities</h4>

                        <div className="mt-5 grid gap-4 md:grid-cols-2">
                            {highlights.map((item) => (
                                <div
                                    key={item}
                                    className="flex gap-3 rounded-2xl bg-white/[0.04] p-4 soft-border"
                                >
                                    <FaCheckCircle className="mt-1 shrink-0 text-primary" />

                                    <p className="text-sm leading-6 text-mutedText">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}