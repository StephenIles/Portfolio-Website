const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
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
    </section>
  );
};

export default Hero;