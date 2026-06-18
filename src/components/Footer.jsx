import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const links = [
    ['Home', 'home'],
    ['About', 'about'],
    ['Skills', 'skills'],
    ['Projects', 'projects'],
    ['Resume', 'resume'],
    ['Contact', 'contact'],
];

const socialLinks = [
    {
        icon: <FaGithub />,
        href: 'https://github.com/anumaha1122-max',
        label: 'GitHub',
    },
    {
        icon: <FaLinkedin />,
        href: 'https://linkedin.com/in/maha-anusuri-8669212a8',
        label: 'LinkedIn',
    },
    {
        icon: <FaEnvelope />,
        href: 'mailto:anumaha1122@gmail.com',
        label: 'Email',
    },
    {
        icon: <FaWhatsapp />,
        href: 'https://wa.me/917207532167',
        label: 'WhatsApp',
    },
];

export default function Footer() {
    const scroll = (id) => {
        if (window.location.pathname !== '/') {
            window.location.href = `/#${id}`;
            return;
        }

        document.getElementById(id)?.scrollIntoView({
            behavior: 'smooth',
        });
    };

    return (
        <footer className="border-t border-white/10 bg-darkBg px-5 py-10">
            <div className="container-custom grid gap-8 md:grid-cols-[1fr_1.2fr_1fr] md:items-center">
                <div>
                    <h2 className="text-2xl font-black">
                        Maha<span className="gradient-text">.dev</span>
                    </h2>

                    <p className="mt-3 text-sm text-mutedText">
                        © 2026 Anusuri Mahalakshmi. Built with React.js.
                    </p>
                </div>

                <div className="flex flex-wrap gap-4 md:justify-center">
                    {links.map(([label, id]) => (
                        <button
                            key={id}
                            type="button"
                            onClick={() => scroll(id)}
                            className="text-sm font-semibold text-mutedText transition hover:text-primary"
                        >
                            {label}
                        </button>
                    ))}
                </div>

                <div className="flex gap-3 md:justify-end">
                    {socialLinks.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                            aria-label={item.label}
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-mutedText transition hover:border-primary hover:text-primary"
                        >
                            {item.icon}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}