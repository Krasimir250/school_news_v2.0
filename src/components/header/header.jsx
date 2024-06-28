function Header() {
    return (
        <header className="bg-blue-600 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold flex">
            <p>School News</p>
          </div>
          <nav className="space-x-4">
            <a href="/" className="text-white hover:text-gray-200">Home</a>
            <a href="/about" className="text-white hover:text-gray-200">About</a>
            <a href="/services" className="text-white hover:text-gray-200">Services</a>
            <a href="/contact" className="text-white hover:text-gray-200">Contact</a>
          </nav>
        </div>
      </header>
    );
  }
  
  export default Header;
  