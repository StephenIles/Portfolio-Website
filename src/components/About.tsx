const About = () => {
    return (
        <section id="about" className="section-padding bg-white relative border-t border-gray-100">
            <div className="container-max">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        About Me
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <p className="text-lg text-gray-600 mb-6">
                            I've always been fascinated by technology and the satisfaction of creating something from nothing. After exploring careers in Musical Theatre, Live Events Production, and retail management, I realized my true passion lay in web development. In December 2024, I completed my Web Development qualification and haven't looked back since.
                        </p>
                        <p className="text-lg text-gray-600 mb-6">
                            My management experience taught me invaluable skills in team leadership, project planning, and client communication - all of which I bring to every development project. I believe in fully understanding a client's vision before starting any work, ensuring projects are delivered on time and within budget while keeping clients involved throughout the entire process.
                        </p>
                        <p className="text-lg text-gray-600 mb-6">
                            I love the full-stack approach to development because it allows me to offer clients a complete solution from concept to deployment. Problem-solving is where I truly thrive - I never back down from a challenge and keep pushing until I find the right solution. I learn best when tackling real problems, which keeps me constantly growing and expanding my skillset.
                        </p>
                    </div>
                    <div>
                        <div className="bg-gray-50 rounded-lg p-8">
                            {/* Profile Image Placeholder */}
                            <div className="w-48 h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mx-auto mb-8 flex items-center justify-center">
                                <svg className="w-24 h-24 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            
                            {/* Skills Summary */}
                            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Core Skills</h3>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                    <span className="text-gray-700">Full-Stack Development</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    <span className="text-gray-700">React & TypeScript</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                                    <span className="text-gray-700">Project Management</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                                    <span className="text-gray-700">Client Communication</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                    <span className="text-gray-700">Problem Solving</span>
                                </div>
                            </div>
                            
                            {/* Quick Stats */}
                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-blue-600">2024</p>
                                    <p className="text-sm text-gray-600">Started Web Development</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;