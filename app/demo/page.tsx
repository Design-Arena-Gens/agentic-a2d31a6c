'use client'

import Link from 'next/link'
import { Zap, Play, ArrowLeft } from 'lucide-react'

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <nav className="border-b bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <Zap className="h-8 w-8 text-primary-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">SaaSify</span>
            </Link>
            <Link href="/" className="flex items-center text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            See SaaSify in Action
          </h1>
          <p className="text-xl text-gray-600">
            Watch how easy it is to grow your business with our platform
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="aspect-video bg-gradient-to-br from-primary-600 to-blue-600 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-black/20"></div>
            <button className="relative z-10 h-20 w-20 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition shadow-lg">
              <Play className="h-10 w-10 text-primary-600 ml-1" />
            </button>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
              <h3 className="text-white text-2xl font-bold mb-2">Product Demo</h3>
              <p className="text-white/90">Learn how SaaSify can transform your business in 5 minutes</p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Easy Setup',
              description: 'Get started in minutes with our guided onboarding process',
              time: '0:00 - 2:00'
            },
            {
              title: 'Powerful Features',
              description: 'Explore analytics, team tools, and integrations',
              time: '2:00 - 4:00'
            },
            {
              title: 'Scale with Ease',
              description: 'See how companies grow from startup to enterprise',
              time: '4:00 - 5:00'
            }
          ].map((section, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="text-primary-600 font-semibold mb-2">{section.time}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{section.title}</h3>
              <p className="text-gray-600">{section.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to get started?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition text-lg font-semibold">
              Start Free Trial
            </Link>
            <Link href="/login" className="px-8 py-4 bg-white text-primary-600 border-2 border-primary-600 rounded-lg hover:bg-primary-50 transition text-lg font-semibold">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
