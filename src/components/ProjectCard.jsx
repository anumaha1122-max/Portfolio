import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaInfoCircle } from 'react-icons/fa';

export default function ProjectCard({ project }) {
    return (
        <motion.article
            whileHover={{ y: -8 }}
            className="glass-card rounded-[30px] p-6 md:p-7"
        >
            <p className="text-sm font-bold text-primary">
                {project.category}
            </p>

            <h3 className="mt-3 text-2xl font-black">
                {project.title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-mutedText">
                {project.description}
            </p>

            <div className="mt-5">
                <h4 className="text-sm font-bold">Key Features</h4>

                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    {project.features.slice(0, 6).map((feature) => (
                        <p key={feature} className="text-sm text-mutedText">
                            <span className="mr-2 text-primary">●</span>
                            {feature}
                        </p>
                    ))}
                </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                    <span
                        key={tech}
                        className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
                <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-bold transition hover:border-primary hover:text-primary"
                >
                    <FaGithub />
                    GitHub
                </a>

                <Link
                    to={`/projects/${project.slug}`}
                    className="gradient-button inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold text-darkBg"
                >
                    <FaInfoCircle />
                    View Details
                </Link>
            </div>
        </motion.article>
    );
}