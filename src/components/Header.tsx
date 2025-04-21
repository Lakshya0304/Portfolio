import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = element.offsetTop - 80; // Account for header height
      window.scrollTo({
        top: offset,
        behavior: "smooth"
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-background/90 backdrop-blur-md shadow-sm dark:bg-gradient-to-r dark:from-black/60 dark:to-gray-900/60 py-4" 
          : "bg-transparent py-6"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex items-center justify-between">
        <motion.a 
          href="#hero" 
          className="text-xl font-bold text-portfolio-purple"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Lakshya<span className="text-foreground">K.</span>
        </motion.a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {["About", "Projects", "Skills", "Education", "Contact"].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, item.toLowerCase())}
              className="text-sm font-medium text-gray-600 hover:text-portfolio-purple transition-colors dark:text-gray-300 dark:hover:text-portfolio-purple"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * i }}
            >
              {item}
            </motion.a>
          ))}
          <ThemeToggle />
          <motion.a
            href="mailto:lakshyakhandelwal700@gmail.com"
            className="px-4 py-2 rounded-md bg-portfolio-purple text-white text-sm font-medium hover:bg-portfolio-dark-purple transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            Get In Touch
          </motion.a>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button 
            className="flex flex-col gap-1.5 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={cn(
              "w-6 h-0.5 bg-gray-800 transition-all duration-300",
              mobileMenuOpen && "transform rotate-45 translate-y-2"
            )} />
            <span className={cn(
              "w-6 h-0.5 bg-gray-800 transition-all duration-300",
              mobileMenuOpen && "opacity-0"
            )} />
            <span className={cn(
              "w-6 h-0.5 bg-gray-800 transition-all duration-300",
              mobileMenuOpen && "transform -rotate-45 -translate-y-2"
            )} />
          </button>
        </div>
        
        {mobileMenuOpen && (
          <motion.div 
            className="absolute top-full left-0 right-0 bg-white shadow-lg p-4 flex flex-col gap-4 md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {["About", "Projects", "Skills", "Education", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-gray-600 hover:text-portfolio-purple transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="mailto:lakshyakhandelwal700@gmail.com"
              className="px-4 py-2 rounded-md bg-portfolio-purple text-white text-sm font-medium hover:bg-portfolio-dark-purple transition-colors text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get In Touch
            </a>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
