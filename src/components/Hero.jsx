import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-12 md:py-32">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-900 px-3 md:px-4 py-2 rounded-full mb-4 md:mb-6 text-xs md:text-sm">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              <span className="font-medium">Learn from proven frameworks</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              Master Strategic Intelligence & System Design
            </h1>

            <p className="text-base md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed">
              Learn how to build decision-intelligence frameworks and scalable systems that generate real revenue. Compare your approach against industry standards and successful monetized models.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <button className="btn-primary flex items-center justify-center gap-2 text-sm md:text-base">
                Start Learning <ArrowRight size={20} />
              </button>
              <button className="btn-secondary text-sm md:text-base">
                View Comparisons
              </button>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-2xl blur-3xl opacity-20"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">AURORA GRID</h3>
                      <p className="text-sm text-gray-600">Decision-intelligence framework</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🏗️</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">System Architecture</h3>
                      <p className="text-sm text-gray-600">Scalable design patterns</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">💰</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Monetization</h3>
                      <p className="text-sm text-gray-600">Revenue models that work</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
