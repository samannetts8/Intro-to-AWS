"use client";

import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { sections } from '@/lib/content';

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -80% 0px',
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 hover:bg-secondary rounded-md"
        >
          <Menu className="h-6 w-6" />
        </button>
        <h1 className="text-xl font-semibold">Documentation</h1>
      </div>

      {/* Sidebar */}
      <div
        className={cn(
          "fixed top-0 left-0 h-full bg-background border-r w-64 transform transition-transform duration-200 ease-in-out z-50",
          {
            "-translate-x-full lg:translate-x-0": !isOpen,
            "translate-x-0": isOpen
          }
        )}
      >
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold">Contents</h2>
        </div>
        <nav className="p-4">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={cn(
                "block w-full text-left px-4 py-2 rounded-md mb-2 transition-colors",
                activeSection === section.id
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-secondary"
              )}
            >
              {section.title}
            </button>
          ))}
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}