const Projects = () => {
    return (
        <section id="projects" className="section-padding bg-gray-50 relative border-t border-gray-200">
            <div className="container-max">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        My Projects
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Here are some of the projects I've worked on, showcasing my skills in web development 
                        and my ability to create solutions that meet client needs.
                    </p>
                </div>
                
                {/* Project grid will go here */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Project 1 - E-commerce Website */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                            <span className="text-blue-600 text-lg font-medium">E-commerce Screenshot</span>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">ModernShop E-commerce</h3>
                            <p className="text-gray-600 mb-4">
                                Full-featured e-commerce platform with shopping cart, user authentication, and payment integration.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="skill-badge">React</span>
                                <span className="skill-badge">Node.js</span>
                                <span className="skill-badge">MongoDB</span>
                                <span className="skill-badge">Stripe</span>
                            </div>
                            <div className="flex gap-3">
                                <a href="#" className="btn-primary text-sm">Live Demo</a>
                                <a href="#" className="btn-secondary text-sm">GitHub</a>
                            </div>
                        </div>
                    </div>

                    {/* Project 2 - Task Management App */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                            <span className="text-green-600 text-lg font-medium">Task App Screenshot</span>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">TaskFlow Manager</h3>
                            <p className="text-gray-600 mb-4">
                                Collaborative task management application with real-time updates and team collaboration features.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="skill-badge">React</span>
                                <span className="skill-badge">TypeScript</span>
                                <span className="skill-badge">Express</span>
                                <span className="skill-badge">Socket.io</span>
                            </div>
                            <div className="flex gap-3">
                                <a href="#" className="btn-primary text-sm">Live Demo</a>
                                <a href="#" className="btn-secondary text-sm">GitHub</a>
                            </div>
                        </div>
                    </div>

                    {/* Project 3 - Restaurant Website */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <div className="h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                            <span className="text-orange-600 text-lg font-medium">Restaurant Screenshot</span>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Bella Vista Restaurant</h3>
                            <p className="text-gray-600 mb-4">
                                Modern restaurant website with online reservations, menu showcase, and contact integration.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="skill-badge">React</span>
                                <span className="skill-badge">TailwindCSS</span>
                                <span className="skill-badge">JavaScript</span>
                                <span className="skill-badge">Responsive</span>
                            </div>
                            <div className="flex gap-3">
                                <a href="#" className="btn-primary text-sm">Live Demo</a>
                                <a href="#" className="btn-secondary text-sm">GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;