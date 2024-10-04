import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      isMenuOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };

  render() {
    return (
      <>
        <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 p-5 shadow-lg sticky top-0 z-50">
          <div className="container mx-auto flex items-center justify-between">
            {/* Logo */}
            <div className="text-3xl font-extrabold tracking-wider text-white">
              newsBite
            </div>

            {/* Hamburger Menu for smaller screens */}
            <div className="lg:hidden">
              <button onClick={this.toggleMenu} className="text-white focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>

            {/* Fullscreen Nav Links */}
            <div className={`hidden lg:flex space-x-8`}>
              <Link to="/" className="text-white text-lg font-semibold transition duration-300 ease-in-out hover:text-yellow-400 hover:scale-110">Home</Link>
              <Link to="/business" className="text-white text-lg font-semibold transition duration-300 ease-in-out hover:text-yellow-400 hover:scale-110">Business</Link>
              <Link to="/entertainment" className="text-white text-lg font-semibold transition duration-300 ease-in-out hover:text-yellow-400 hover:scale-110">Entertainment</Link>
              <Link to="/general" className="text-white text-lg font-semibold transition duration-300 ease-in-out hover:text-yellow-400 hover:scale-110">General</Link>
              <Link to="/health" className="text-white text-lg font-semibold transition duration-300 ease-in-out hover:text-yellow-400 hover:scale-110">Health</Link>
              <Link to="/science" className="text-white text-lg font-semibold transition duration-300 ease-in-out hover:text-yellow-400 hover:scale-110">Science</Link>
              <Link to="/sports" className="text-white text-lg font-semibold transition duration-300 ease-in-out hover:text-yellow-400 hover:scale-110">Sports</Link>
              <Link to="/technology" className="text-white text-lg font-semibold transition duration-300 ease-in-out hover:text-yellow-400 hover:scale-110">Technology</Link>
            </div>
          </div>

          {/* Mobile Menu - Sliding from Right to Left */}
          <div
            className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-gradient-to-r from-indigo-600 to-purple-600 p-6 transition-transform duration-300 ease-in-out z-40 ${
              this.state.isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            } lg:hidden`}
          >
            <button onClick={this.toggleMenu} className="text-white focus:outline-none absolute top-5 right-5">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <div className="mt-10 space-y-6">
              <Link to="/" onClick={this.toggleMenu} className="text-white text-lg font-semibold block transition duration-300 ease-in-out hover:text-yellow-400">Home</Link>
              <Link to="/business" onClick={this.toggleMenu} className="text-white text-lg font-semibold block transition duration-300 ease-in-out hover:text-yellow-400">Business</Link>
              <Link to="/entertainment" onClick={this.toggleMenu} className="text-white text-lg font-semibold block transition duration-300 ease-in-out hover:text-yellow-400">Entertainment</Link>
              <Link to="/general" onClick={this.toggleMenu} className="text-white text-lg font-semibold block transition duration-300 ease-in-out hover:text-yellow-400">General</Link>
              <Link to="/health" onClick={this.toggleMenu} className="text-white text-lg font-semibold block transition duration-300 ease-in-out hover:text-yellow-400">Health</Link>
              <Link to="/science" onClick={this.toggleMenu} className="text-white text-lg font-semibold block transition duration-300 ease-in-out hover:text-yellow-400">Science</Link>
              <Link to="/sports" onClick={this.toggleMenu} className="text-white text-lg font-semibold block transition duration-300 ease-in-out hover:text-yellow-400">Sports</Link>
              <Link to="/technology" onClick={this.toggleMenu} className="text-white text-lg font-semibold block transition duration-300 ease-in-out hover:text-yellow-400">Technology</Link>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
