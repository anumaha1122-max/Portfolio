import { FaWhatsapp } from 'react-icons/fa';

export default function ContactFloating() {
    return (
        <a
            href="https://wa.me/917207532167"
            target="_blank"
            rel="noreferrer"
            aria-label="Contact Anusuri Mahalakshmi on WhatsApp"
            className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-3xl text-white shadow-glow transition hover:scale-110"
        >
            <FaWhatsapp />
        </a>
    );
}