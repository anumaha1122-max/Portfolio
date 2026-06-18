import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaGithub } from 'react-icons/fa';
import { projects } from '../data/projects.js';

export default function ProjectDetails() {
    const { slug } = useParams();
    const project = projects.find((item) => item.slug === slug);

    if (!project) {
        return (
            <section className="section-padding min-h-screen pt-32">
                <div className="container-custom text-center">
                    <h1 className="text-3xl font-bold">Project not found</h1>

                    <Link
                        to="/#projects"
                        className="gradient-button mt-8 inline-flex rounded-full px-6 py-3 font-semibold text-darkBg"
                    >
                        Back to Projects
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <section className="section-padding pt-32">
            <div className="container-custom max-w-5xl">
                <Link
                    to="/#projects"
                    className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-white"
                >
                    <FaArrowLeft />
                    Back to Projects
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55 }}
                    className="glass-card rounded-[32px] p-6 md:p-10"
                >
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                        {project.category}
                    </p>

                    <h1 className="mt-4 text-3xl font-black md:text-5xl">
                        {project.title}
                    </h1>

                    <p className="mt-5 text-base leading-8 text-mutedText md:text-lg">
                        {project.overview}
                    </p>

                    <div className="mt-8 grid gap-5 md:grid-cols-2">
                        <div className="rounded-3xl bg-white/5 p-6 soft-border">
                            <h2 className="text-xl font-bold">Problem Solved</h2>

                            <p className="mt-3 leading-7 text-mutedText">
                                {project.problem}
                            </p>
                        </div>

                        <div className="rounded-3xl bg-white/5 p-6 soft-border">
                            <h2 className="text-xl font-bold">Tech Stack</h2>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-10">
                        <h2 className="text-2xl font-bold">Main Features</h2>

                        <div className="mt-5 grid gap-3 sm:grid-cols-2">
                            {project.features.map((feature) => (
                                <div
                                    key={feature}
                                    className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-mutedText"
                                >
                                    <span className="mr-2 text-primary">●</span>
                                    {feature}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold transition hover:border-primary hover:text-primary"
                        >
                            <FaGithub />
                            GitHub
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}