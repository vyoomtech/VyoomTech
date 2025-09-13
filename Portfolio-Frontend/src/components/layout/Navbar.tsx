import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white backdrop-blur-lg shadow-lg" : "bg-white"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center space-x-2">
              <img
                src="/logo.png"
                alt="Vyoom Tech Logo"
                className="h-11 w-auto object-contain"
              />
            </a>
          </div>

          {/* Desktop Navigation and CTA Button */}
          {/* This is the key change: wrap navigation and CTA in a single flex container */}
          <div className="hidden md:flex items-center space-x-6"> 
            <div className="flex items-baseline space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-primary-dark px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:bg-gray-100"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <Button variant="hero" size="sm" className="shadow-md hover:shadow-lg transition-shadow duration-200">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
              className="text-gray-700 hover:bg-gray-100"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          className="md:hidden"
          id="mobile-menu"
          role="menu"
          aria-orientation="vertical"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-dark block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
                role="menuitem"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4">
              <Button variant="hero" size="sm" className="w-full shadow-md hover:shadow-lg transition-shadow duration-200">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;