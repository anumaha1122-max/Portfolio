import { motion } from 'framer-motion';
import { projects } from '../data/projects.js';
import ProjectCard from './ProjectCard.jsx';

export default function Projects() {
    return (
        <section id="projects" className="section-padding">
            <div className="container-custom">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary">
                        Projects
                    </p>

                    <h2 className="mt-4 text-3xl font-black md:text-5xl">
                        Professional Projects
                    </h2>

                    <p className="mt-5 text-mutedText">
                        Real-world portfolio projects focused on mobile apps, web apps,
                        role-based systems, admin dashboards, REST APIs, and backend
                        integration.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 grid gap-7 md:grid-cols-2"
                >
                    {projects.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}