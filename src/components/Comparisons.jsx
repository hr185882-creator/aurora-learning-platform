import React, { useState } from 'react';
import { comparisons } from '../data/courseData';

export default function Comparisons() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Framework Comparisons</h2>
          <p className="section-subtitle">See how AURORA GRID and system design approaches compare</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-gray-200 overflow-x-auto">
          {comparisons.map((comp, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-3 font-semibold whitespace-nowrap border-b-2 transition-colors ${
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
          {comparisons[activeTab].category === "Decision-Making Frameworks" ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold text-gray-900">Framework</th>
                    <th className="px-6 py-4 text-left font-bold text-gray-900">Layers</th>
                    <th className="px-6 py-4 text-left font-bold text-gray-900">Source Discipline</th>
                    <th className="px-6 py-4 text-left font-bold text-gray-900">Constraint Analysis</th>
                    <th className="px-6 py-4 text-left font-bold text-gray-900">Red Team</th>
                    <th className="px-6 py-4 text-left font-bold text-gray-900">Monetization</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons[activeTab].frameworks.map((fw, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 font-semibold text-gray-900">{fw.name}</td>
                      <td className="px-6 py-4 text-gray-600">{fw.layers}</td>
                      <td className="px-6 py-4 text-gray-600 text-sm">{fw.sourceDiscipline}</td>
                      <td className="px-6 py-4 text-gray-600 text-sm">{fw.constraintAnalysis}</td>
                      <td className="px-6 py-4 text-gray-600 text-sm">{fw.redTeam}</td>
                      <td className="px-6 py-4 text-gray-600 text-sm">{fw.monetization}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold text-gray-900">Pattern</th>
                    <th className="px-6 py-4 text-left font-bold text-gray-900">Scalability</th>
                    <th className="px-6 py-4 text-left font-bold text-gray-900">Complexity</th>
                    <th className="px-6 py-4 text-left font-bold text-gray-900">Deployment</th>
                    <th className="px-6 py-4 text-left font-bold text-gray-900">Team Size</th>
                    <th className="px-6 py-4 text-left font-bold text-gray-900">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons[activeTab].patterns.map((pattern, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 font-semibold text-gray-900">{pattern.name}</td>
                      <td className="px-6 py-4 text-gray-600">{pattern.scalability}</td>
                      <td className="px-6 py-4 text-gray-600">{pattern.complexity}</td>
                      <td className="px-6 py-4 text-gray-600">{pattern.deployment}</td>
                      <td className="px-6 py-4 text-gray-600">{pattern.teamSize}</td>
                      <td className="px-6 py-4 text-gray-600">{pattern.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
