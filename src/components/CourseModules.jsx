import React from 'react';
import { ChevronRight } from 'lucide-react';
import { courseModules } from '../data/courseData';

export default function CourseModules({ onSelectModule }) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Course Modules</h2>
          <p className="section-subtitle">Comprehensive learning path from fundamentals to advanced implementation</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courseModules.map((module) => (
            <button
              key={module.id}
              onClick={() => onSelectModule(module)}
              className="card text-left hover:shadow-lg hover:border-blue-300 transition-all group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-5xl">{module.icon}</div>
                <ChevronRight size={24} className="text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{module.title}</h3>
              <p className="text-gray-600 mb-4">{module.description}</p>
              <div className="text-sm text-blue-600 font-semibold group-hover:text-blue-700">
                {module.sections.length} sections
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
