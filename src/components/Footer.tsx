const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 border-t-4 border-blue-500">
            <div className="container-max">
                <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4">Stephen Iles</h3>
                    <p className="text-gray-400 mb-6">Junior Full-Stack Web Developer</p>
                    <div className="flex justify-center space-x-6 mb-8">
                        <a 
                            href="https://github.com/stepheniles" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            GitHub
                        </a>
                        <a 
                            href="https://linkedin.com/in/stephen-iles" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            LinkedIn
                        </a>
                        <a 
                            href="mailto:contact@dreampixeldesigns.co.uk"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            Email
                        </a>
                    </div>
                    <div className="border-t border-gray-700 pt-6">
                        <p className="text-gray-500 text-sm">
                            © 2025 Stephen Iles. Built with React, TypeScript & TailwindCSS.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
