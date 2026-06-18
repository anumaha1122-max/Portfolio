import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Education', id: 'education' },
    { label: 'Resume', id: 'resume' },
    { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState('home');

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const onScroll = () => {
            let current = 'home';

            navLinks.forEach((link) => {
                const section = document.getElementById(link.id);

                if (section && window.scrollY >= section.offsetTop - 145) {
                    current = link.id;
                }
            });

            setActive(current);
        };

        window.addEventListener('scroll', onScroll);
        onScroll();

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const go = (id) => {
        setOpen(false);

        if (location.pathname !== '/') {
            navigate(`/#${id}`, {
                state: { scrollTo: id },
            });
            return;
        }

        document.getElementById(id)?.scrollIntoView({
            behavior: 'smooth',
        });
    };

    return (
        <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-darkBg/80 backdrop-blur-xl">
            <nav className="container-custom flex h-20 items-center justify-between px-5">
                <Link to="/" className="text-2xl font-black tracking-tight">
                    Maha<span className="gradient-text">.dev</span>
                </Link>

                <div className="hidden items-center gap-7 lg:flex">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            type="button"
                            onClick={() => go(link.id)}
                            className={`text-sm font-semibold transition ${active === link.id && location.pathname === '/'
                                    ? 'text-primary'
                                    : 'text-mutedText hover:text-white'
                                }`}
                        >
                            {link.label}
                        </button>
                    ))}
                </div>

                <button
                    type="button"
                    onClick={() => setOpen((value) => !value)}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 text-xl lg:hidden"
                    aria-label="Toggle menu"
                >
                    {open ? <FaTimes /> : <FaBars />}
                </button>
            </nav>

            {open && (
                <div className="border-t border-white/10 bg-darkBg/95 px-5 py-4 lg:hidden">
                    <div className="container-custom grid gap-2">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                type="button"
                                onClick={() => go(link.id)}
                                className="rounded-2xl px-4 py-3 text-left text-sm font-semibold text-mutedText transition hover:bg-white/5 hover:text-primary"
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}