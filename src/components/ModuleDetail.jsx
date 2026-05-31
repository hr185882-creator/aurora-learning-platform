import React, { useState } from 'react';
import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';
import { courseModules } from '../data/courseData';

export default function ModuleDetail({ module, section, setSection, onBack }) {
  const fullModule = courseModules.find(m => m.id === module.id);
  const [expandedLayers, setExpandedLayers] = useState({});

  if (!fullModule) return null;

  const currentSection = section 
    ? fullModule.sections.find(s => s.id === section)
    : fullModule.sections[0];

  const toggleLayer = (layerId) => {
    setExpandedLayers(prev => ({
      ...prev,
      [layerId]: !prev[layerId]
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-4">
          <button
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{fullModule.title}</h1>
            <p className="text-gray-600">{currentSection?.title}</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="sticky top-24 space-y-2 mb-8 md:mb-0">
              <h3 className="font-bold text-gray-900 mb-4">Sections</h3>
              {fullModule.sections.map(sec => (
                <button
                  key={sec.id}
                  onClick={() => setSection(sec.id)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    currentSection?.id === sec.id
                      ? 'bg-blue-100 text-blue-900 font-semibold'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {sec.title}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-3">
            <div className="prose prose-sm md:prose-lg max-w-none">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{currentSection?.title}</h2>
              
              {currentSection?.content && (
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">{currentSection.content}</p>
              )}

              {/* Subsections */}
              {currentSection?.subsections && (
                <div className="space-y-6 mb-12">
                  {currentSection.subsections.map((sub, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{sub.title}</h3>
                      <p className="text-gray-600">{sub.content}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Framework Layers */}
              {currentSection?.layers && (
                <div className="space-y-4 mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Framework Layers</h3>
                  {currentSection.layers.map((layer, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleLayer(idx)}
                        className="w-full px-6 py-4 bg-gradient-to-r from-blue-50 to-emerald-50 hover:from-blue-100 hover:to-emerald-100 flex items-center justify-between transition-colors"
                      >
                        <div className="text-left">
                          <h4 className="text-lg font-bold text-gray-900">{layer.name}</h4>
                          <p className="text-sm text-gray-600">{layer.subtitle}</p>
                        </div>
                        {expandedLayers[idx] ? <ChevronUp /> : <ChevronDown />}
                      </button>
                      {expandedLayers[idx] && (
                        <div className="px-6 py-4 bg-white border-t border-gray-200">
                          <p className="text-gray-600 mb-4">{layer.description}</p>
                          {layer.example && (
                            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-600">
                              <p className="text-sm text-gray-700"><strong>Example:</strong> {layer.example}</p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Comparison */}
              {currentSection?.comparison && (
                <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Comparison: {currentSection.comparison.framework}</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Origin</h4>
                      <p className="text-gray-600">{currentSection.comparison.origin}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Structure</h4>
                      <p className="text-gray-600">{currentSection.comparison.structure}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Strengths</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        {currentSection.comparison.strengths.map((s, i) => (
                          <li key={i}>{s}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Weaknesses</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        {currentSection.comparison.weaknesses.map((w, i) => (
                          <li key={i}>{w}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-600">
                      <h4 className="font-bold text-blue-900 mb-2">AURORA GRID Advantage</h4>
                      <p className="text-blue-800">{currentSection.comparison.auroraAdvantage}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Case Study */}
              {currentSection?.caseDetails && (
                <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-lg p-8 border border-gray-200 mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Case Details</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Forecast</h4>
                      <p className="text-gray-600">{currentSection.caseDetails.forecast}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Timestamp</h4>
                      <p className="text-gray-600">{currentSection.caseDetails.timestamp}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Outcome</h4>
                      <p className="text-gray-600">{currentSection.caseDetails.outcome}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Verification</h4>
                      <p className="text-gray-600">{currentSection.caseDetails.verification}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-4">How AURORA GRID Layers Applied</h4>
                      <div className="space-y-3">
                        {currentSection.caseDetails.layers.map((l, i) => (
                          <div key={i} className="bg-white rounded-lg p-4 border border-gray-200">
                            <p className="font-semibold text-gray-900">{l.layer}</p>
                            <p className="text-gray-600 text-sm mt-1">{l.action}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Architecture */}
              {currentSection?.architecture && (
                <div className="space-y-6 mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Architecture Components</h3>
                  {Object.entries(currentSection.architecture).map(([key, component]) => (
                    <div key={key} className="border border-gray-200 rounded-lg p-6 bg-gray-50">
                      <h4 className="font-bold text-gray-900 mb-2 capitalize">{key}</h4>
                      <p className="text-sm text-gray-600 mb-3"><strong>Tech:</strong> {component.tech}</p>
                      <p className="text-sm text-gray-600 mb-3"><strong>Purpose:</strong> {component.purpose}</p>
                      <p className="text-sm text-gray-600"><strong>Benefits:</strong> {component.benefits}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Patterns */}
              {currentSection?.patterns && (
                <div className="space-y-6 mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Architecture Patterns</h3>
                  {currentSection.patterns.map((pattern, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-lg p-6 bg-white">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{pattern.name}</h4>
                      <p className="text-gray-600 mb-4">{pattern.description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="font-semibold text-gray-900 mb-2">Pros</p>
                          <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                            {pattern.pros.map((p, i) => <li key={i}>{p}</li>)}
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 mb-2">Cons</p>
                          <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                            {pattern.cons.map((c, i) => <li key={i}>{c}</li>)}
                          </ul>
                        </div>
                      </div>
                      <p className="text-sm text-blue-600 font-semibold">Use Case: {pattern.useCase}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Principles */}
              {currentSection?.principles && (
                <div className="space-y-6 mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Design Principles</h3>
                  {currentSection.principles.map((principle, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-lg p-6 bg-white">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{principle.name}</h4>
                      <p className="text-gray-600 mb-4">{principle.description}</p>
                      <div>
                        <p className="font-semibold text-gray-900 mb-2 text-sm">Techniques</p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                          {principle.techniques.map((t, i) => <li key={i}>{t}</li>)}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Models */}
              {currentSection?.models && (
                <div className="space-y-6 mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Monetization Models</h3>
                  {currentSection.models.map((model, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-lg p-6 bg-white">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-lg font-bold text-gray-900">{model.name}</h4>
                          <p className="text-sm text-gray-600">Example: {model.example}</p>
                        </div>
                        <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{model.pricing}</span>
                      </div>
                      <p className="text-gray-600 mb-4">{model.description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <p className="font-semibold text-gray-900 mb-2 text-sm">Pros</p>
                          <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                            {model.pros.map((p, i) => <li key={i}>{p}</li>)}
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 mb-2 text-sm">Cons</p>
                          <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                            {model.cons.map((c, i) => <li key={i}>{c}</li>)}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Steps */}
              {currentSection?.steps && (
                <div className="space-y-6 mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Process Steps</h3>
                  <div className="space-y-4">
                    {currentSection.steps.map((step, idx) => (
                      <div key={idx} className="flex gap-6">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600 text-white font-bold">
                            {step.step}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-gray-900">{step.title}</h4>
                          <p className="text-gray-600 mt-1">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
