import React, { useState } from 'react';
import { comparisons } from '../data/courseData';

export default function Comparisons() {
  const [activeTab, setActiveTab] = useState(0);
  const activeComparison = comparisons[activeTab];
  const hasFrameworks = Array.isArray(activeComparison?.frameworks);
  const hasPatterns = Array.isArray(activeComparison?.patterns);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Framework Comparisons</h2>
          <p className="section-subtitle">See how AURORA GRID and system design approaches compare</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 md:gap-4 mb-8 border-b border-gray-200 overflow-x-auto pb-2">
          {comparisons.map((comp, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-3 md:px-6 py-2 md:py-3 font-semibold whitespace-nowrap border-b-2 transition-colors text-sm md:text-base ${
                activeTab === idx
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              {comp.category}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          {hasFrameworks && (
            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full text-xs md:text-sm">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-2 md:px-6 py-3 md:py-4 text-left font-bold text-gray-900">Framework</th>
                    <th className="px-2 md:px-6 py-3 md:py-4 text-left font-bold text-gray-900">Layers</th>
                    <th className="px-2 md:px-6 py-3 md:py-4 text-left font-bold text-gray-900 hidden sm:table-cell">Source Discipline</th>
                    <th className="px-2 md:px-6 py-3 md:py-4 text-left font-bold text-gray-900 hidden md:table-cell">Constraint Analysis</th>
                    <th className="px-2 md:px-6 py-3 md:py-4 text-left font-bold text-gray-900 hidden lg:table-cell">Red Team</th>
                    <th className="px-2 md:px-6 py-3 md:py-4 text-left font-bold text-gray-900">Monetization</th>
                  </tr>
                </thead>
                <tbody>
                  {activeComparison.frameworks.map((fw, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-2 md:px-6 py-3 md:py-4 font-semibold text-gray-900 text-xs md:text-sm">{fw.name}</td>
                      <td className="px-2 md:px-6 py-3 md:py-4 text-gray-600 text-xs md:text-sm">{fw.layers}</td>
                      <td className="px-2 md:px-6 py-3 md:py-4 text-gray-600 text-xs hidden sm:table-cell">{fw.sourceDiscipline}</td>
                      <td className="px-2 md:px-6 py-3 md:py-4 text-gray-600 text-xs hidden md:table-cell">{fw.constraintAnalysis}</td>
                      <td className="px-2 md:px-6 py-3 md:py-4 text-gray-600 text-xs hidden lg:table-cell">{fw.redTeam}</td>
                      <td className="px-2 md:px-6 py-3 md:py-4 text-gray-600 text-xs md:text-sm">{fw.monetization}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {hasPatterns && (
            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full text-xs md:text-sm">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-2 md:px-6 py-3 md:py-4 text-left font-bold text-gray-900">Pattern</th>
                    <th className="px-2 md:px-6 py-3 md:py-4 text-left font-bold text-gray-900 hidden sm:table-cell">Scalability</th>
                    <th className="px-2 md:px-6 py-3 md:py-4 text-left font-bold text-gray-900 hidden md:table-cell">Complexity</th>
                    <th className="px-2 md:px-6 py-3 md:py-4 text-left font-bold text-gray-900 hidden lg:table-cell">Deployment</th>
                    <th className="px-2 md:px-6 py-3 md:py-4 text-left font-bold text-gray-900 hidden xl:table-cell">Team Size</th>
                    <th className="px-2 md:px-6 py-3 md:py-4 text-left font-bold text-gray-900">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {activeComparison.patterns.map((pattern, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-2 md:px-6 py-3 md:py-4 font-semibold text-gray-900 text-xs md:text-sm">{pattern.name}</td>
                      <td className="px-2 md:px-6 py-3 md:py-4 text-gray-600 text-xs hidden sm:table-cell">{pattern.scalability}</td>
                      <td className="px-2 md:px-6 py-3 md:py-4 text-gray-600 text-xs hidden md:table-cell">{pattern.complexity}</td>
                      <td className="px-2 md:px-6 py-3 md:py-4 text-gray-600 text-xs hidden lg:table-cell">{pattern.deployment}</td>
                      <td className="px-2 md:px-6 py-3 md:py-4 text-gray-600 text-xs hidden xl:table-cell">{pattern.teamSize}</td>
                      <td className="px-2 md:px-6 py-3 md:py-4 text-gray-600 text-xs md:text-sm">{pattern.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {!hasFrameworks && !hasPatterns && (
            <div className="p-6 text-sm text-gray-600">
              No comparison data is configured for this category yet.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
