const About = () => {
    return (
        <section id="about" className="section-padding bg-white">
            <div className="container-max">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
                    About Me
                </h2>
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
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Skills & Technologies</h3>

                        <div className="mb-8">
                            <h4 className="text-lg font-semibold text-gray-700 mb-4">Frontend</h4>
                            <div className="flex flex-wrap gap-3">
                                <span className="skill-badge">React</span>
                                <span className="skill-badge">Typescript</span>
                                <span className="skill-badge">Javascript</span>
                                <span className="skill-badge">HTML 5</span>
                                <span className="skill-badge">CSS 3</span> 
                                <span className="skill-badge">Tailwind CSS</span>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h4 className="text-lg font-semibold text-gray-700 mb-4">Backend & Database</h4>
                            <div className="flex flex-wrap gap-3">
                                <span className="skill-badge">Node.js</span>
                                <span className="skill-badge">Express</span>
                                <span className="skill-badge">MongoDB</span>
                                <span className="skill-badge">MySQL</span>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h4 className="text-lg font-semibold text-gray-700 mb-4">Tools & Other</h4>
                            <div className="flex flex-wrap gap-3">
                                <span className="skill-badge">Git</span>
                                <span className="skill-badge">GitHub</span>
                                <span className="skill-badge">VS Code</span>
                                <span className="skill-badge">Vite</span>
                                <span className="skill-badge">Responsive Design</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;