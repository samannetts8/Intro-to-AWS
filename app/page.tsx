"use client";

import { useState, useEffect } from 'react';
import { Menu, ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

const sections = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    overview: 'Begin your journey with our comprehensive platform.',
    content: `Learn how to get started with our platform. We'll guide you through the initial setup process and help you understand the core concepts. Our platform is designed to be intuitive and user-friendly, making it easy for both beginners and experienced users to get up and running quickly.

    Follow our step-by-step guide to ensure a smooth onboarding experience. We'll cover everything from account creation to basic configuration settings.`
  },
  {
    id: 'features',
    title: 'Key Features',
    overview: 'Explore the powerful features that set us apart.',
    content: `Discover the full range of features that make our platform unique. From advanced analytics to seamless integrations, we provide all the tools you need to succeed.

    Our feature set is constantly evolving based on user feedback and industry trends. We focus on delivering capabilities that drive real value for our users.`
  },
  {
    id: 'architecture',
    title: 'Architecture',
    overview: 'Understanding the technical foundation.',
    content: `Dive deep into our platform's architecture. Learn about our scalable infrastructure, security measures, and how different components work together to deliver a seamless experience.

    We've built our platform with modern best practices in mind, ensuring reliability, performance, and maintainability.`
  },
  {
    id: 'api',
    title: 'API Reference',
    overview: 'Complete API documentation for developers.',
    content: `Access comprehensive documentation for our API endpoints. Whether you're building integrations or extending functionality, our API reference provides everything you need.

    Each endpoint is thoroughly documented with examples, parameter descriptions, and response formats.`
  }
];

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState(sections[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      }));

      const currentSection = sectionElements.find(({ element }) => {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom > 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
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
            "-translate-x-full lg:translate-x-0": !isSidebarOpen,
            "translate-x-0": isSidebarOpen
          }
        )}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold">Contents</h2>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden p-2 hover:bg-secondary rounded-md"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        </div>
        <nav className="p-4">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => {
                scrollToSection(section.id);
                setIsSidebarOpen(false);
              }}
              className={cn(
                "w-full text-left px-4 py-2 rounded-md mb-2 transition-colors",
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

      {/* Main Content */}
      <main
        className={cn(
          "transition-all duration-200 ease-in-out",
          isSidebarOpen ? "lg:ml-64" : "ml-0"
        )}
      >
        <div className="max-w-7xl mx-auto p-6 lg:p-8">
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="mb-16 scroll-mt-16"
            >
              <div className="lg:grid lg:grid-cols-[300px,1fr] lg:gap-8">
                {/* Overview Column */}
                <div className="lg:sticky lg:top-8 lg:self-start mb-8 lg:mb-0">
                  <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                  <p className="text-muted-foreground">{section.overview}</p>
                </div>
                
                {/* Content Column */}
                <div className="prose dark:prose-invert max-w-none">
                  <div className="bg-card rounded-lg p-6 shadow-sm">
                    {section.content.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-4 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}