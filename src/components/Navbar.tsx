import { useState } from 'react';
import { Menu, X, Home, Info, Briefcase, BookOpen, Users, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const isScrolled = window.scrollY > 20;
  //     setScrolled(isScrolled);
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  const navLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Info },
    { name: 'Services', href: '/services', icon: Briefcase },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'Career', href: '/career', icon: Users },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  return (
    <nav className={cn(
      'w-full transition-all duration-300 bg-black shadow-lg'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img src="/flogof.png" alt='' className='h-12 w-full' />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 text-white">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group relative px-3 py-2 text-sm font-medium text-white hover:text-purple-600 transition-colors duration-200"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-purple-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        'md:hidden transition-all duration-300 ease-in-out',
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
      )}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-black">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex items-center px-3 py-2 rounded-md text-base font-medium text-white hover:text-purple-600 hover:bg-purple-50 transition-colors duration-200"
            >
              <link.icon className="h-5 w-5 mr-2" />
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
