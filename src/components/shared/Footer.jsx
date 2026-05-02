import {
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaInstagram,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-950 text-gray-200 mt-16">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* 1️⃣ Brand Section */}
                <div>
                    <h2 className="text-2xl font-bold text-white">Tiles Gallery</h2>
                    <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                        A modern full-stack web application built with Next.js, MongoDB,
                        and Tailwind CSS. Designed for fast performance and smooth user experience.
                    </p>
                </div>

                {/* 2️⃣ Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href={`/`} className="hover:text-white">Home</a></li>
                        <li><a href="/alltiles"className="hover:text-white">All Tiles</a></li>
                        <li><a href="/about" className="hover:text-white">About</a></li>
                        <li><a href="/contact" className="hover:text-white">Contact</a></li>
                    </ul>
                </div>


                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Partner Companies</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li>Tiles Manufacturing Co. (China)</li>
                        <li>Tokyo Ceramic Ltd. (Japan)</li>
                        <li>Asia Building Materials Group</li>
                        <li>Global Tiles Exporters</li>
                        <li>Premium Surface Solutions</li>
                    </ul>
                </div>


                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>

                    <div className="flex gap-4 text-xl mb-4">
                        <a href="https://github.com/" target="_blank">
                            <FaGithub className="hover:text-white transition" />
                        </a>
                        <a href="https://linkedin.com/" target="_blank">
                            <FaLinkedin className="hover:text-blue-500 transition" />
                        </a>
                        <a href="https://facebook.com/" target="_blank">
                            <FaFacebook className="hover:text-blue-600 transition" />
                        </a>
                        <a href="https://instagram.com/" target="_blank">
                            <FaInstagram className="hover:text-pink-500 transition" />
                        </a>
                    </div>

                    <p className="text-sm text-gray-400">
                        Email: your.email@example.com
                    </p>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
                © {new Date().getFullYear()} Tiles Gallery. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;