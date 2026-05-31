import React, { useState } from 'react';
import { Menu, X, ChevronRight, BookOpen, Users, Target } from 'lucide-react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import CourseModules from './components/CourseModules';
import ModuleDetail from './components/ModuleDetail';
import Comparisons from './components/Comparisons';
import Footer from './components/Footer';

export default function App() {
  const [currentModule, setCurrentModule] = useState(null);
  const [currentSection, setCurrentSection] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navigation 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        currentModule={currentModule}
        setCurrentModule={setCurrentModule}
        setCurrentSection={setCurrentSection}
      />

      {currentModule ? (
        <ModuleDetail 
          module={currentModule}
          section={currentSection}
          setSection={setCurrentSection}
          onBack={() => {
            setCurrentModule(null);
            setCurrentSection(null);
          }}
        />
      ) : (
        <>
          <Hero />
          
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Why This Platform?</h2>
                <p className="text-lg text-gray-600 mb-8">Learn methodologies that have generated real revenue and solved real problems</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold mb-3">Strategic Intelligence</h3>
                  <p className="text-gray-600">Master AURORA GRID's decision-intelligence framework used by founders, analysts, and traders to forecast structural turning points.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">🏗️</div>
                  <h3 className="text-xl font-bold mb-3">System Design</h3>
                  <p className="text-gray-600">Learn architecture patterns, scalability principles, and design methodologies used in production systems.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">💰</div>
                  <h3 className="text-xl font-bold mb-3">Monetization</h3>
                  <p className="text-gray-600">Understand how to build and monetize frameworks, from premium consulting to SaaS platforms.</p>
                </div>
              </div>
            </div>
          </section>

          <CourseModules onSelectModule={setCurrentModule} />
          
          <Comparisons />

          <section className="py-16 md:py-24 bg-blue-600 text-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Learn?</h2>
              <p className="text-xl mb-8 text-blue-100">Start with any module above and build your mastery of strategic intelligence and system design.</p>
              <button 
                onClick={() => setCurrentModule({ id: 1 })}
                className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Start Learning
              </button>
            </div>
          </section>

          <Footer />
        </>
      )}
    </div>
  );
}
