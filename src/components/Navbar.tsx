import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'হোম' },
    { href: '#about', label: 'আমাদের সম্পর্কে' },
    { href: '#full-committee', label: 'কমিটি' },
    { href: '#activities', label: 'আমাদের কার্যক্রম' },
    { href: '#help', label: 'সহযোগিতা করুন' },
    { href: '#transparency', label: 'স্বচ্ছতা' },
    { href: '#gallery', label: 'গ্যালারি' },
    { href: '#contact', label: 'যোগাযোগ' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-narrow mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="flex items-center gap-3">
            <img src={logo} alt="নব জোয়ার তরুণ সংঘ" className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover" />
            <span className="text-lg md:text-xl font-semibold text-foreground hidden sm:block">
              নব জোয়ার তরুণ সংঘ
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-up">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-primary transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
