import React from 'react';
import { Menu, X, ArrowLeft } from 'lucide-react';
import { courseModules } from '../data/courseData';

export default function Navigation({ mobileMenuOpen, setMobileMenuOpen, currentModule, setCurrentModule, setCurrentSection }) {
  const handleModuleSelect = (module) => {
    setCurrentModule(module);
    setCurrentSection(null);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer hover:opacity-80"
          onClick={() => {
            setCurrentModule(null);
            setCurrentSection(null);
          }}
        >
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Aurora</h1>
            <p className="text-xs text-gray-600">Learning Platform</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-2">
          {courseModules.map(module => (
            <button
              key={module.id}
              onClick={() => handleModuleSelect(module)}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              {module.title.split(' ')[0]}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-gray-50">
          <nav className="px-4 py-4 space-y-2">
            {courseModules.map(module => (
              <button
                key={module.id}
                onClick={() => handleModuleSelect(module)}
                className="w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-white rounded-lg transition-colors"
              >
                {module.title}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
