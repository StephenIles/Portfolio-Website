const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white relative">
        <div className="container-max text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">One Developer, Complete Solutions - From Design to Deployment</h1>
            <p className="text-xl text-gray-600 mb-8">Hi, I'm Stephen Iles - Junior Full Stack Web Developer</p>
            <div className="flex gap-4 justify-center">
                <button className="btn-primary">
                    View My Projects
                </button>
                <button className="btn-secondary">
                    Contact Me
                </button>
            </div>
        </div>
        {/* Section Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
    </section>
  );
};

export default Hero;