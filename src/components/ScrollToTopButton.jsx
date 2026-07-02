import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const contactSection = document.getElementById("contact");

        if (!contactSection) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setVisible(entry.isIntersecting);
            },
            {
                threshold: 0.1,
            }
        );

        observer.observe(contactSection);

        return () => observer.disconnect();
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (!visible)  return null;

    return (
        visible && (
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
                <button
                    onClick={scrollToTop}
                    className="flex flex-col items-center px-5 py-3 rounded-full
                            transparent backdrop-blur-md border border-orange-400/30
                            text-orange-400 hover:scale-110 transition-all duration-300"
                >
                    <FaArrowUp className="text-lg mb-1" />
                    <span className="text-sm font-medium">
                        Ricardo Sánchez
                    </span>
                </button>
            </div>
        )
    );

};