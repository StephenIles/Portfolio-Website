const Header = () => {
  return (
    <header className="bg-sky-100 py-4 px-6">
      <div className="container-max flex items-center justify-between">
        <div className="text-lg font-medium text-gray-800">
          Portfolio: Stephen Iles
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-gray-700 hover:text-gray-900 transition-colors">
            Home
          </a>
          <a href="#projects" className="text-gray-700 hover:text-gray-900 transition-colors">
            Projects  
          </a>
          <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">
            About Me
          </a>
          <a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors">
            Contact  
          </a> 
          <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
            View Projects
          </button> 
        </nav>
      </div>
    </header>
  );
};

export default Header;
