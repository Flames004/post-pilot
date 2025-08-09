import React from "react";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Create Amazing Content with{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI Power
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transform your content strategy with PostPilot's AI-driven idea generation. 
              Get unlimited creative suggestions for social media, blogs, and marketing campaigns in seconds.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link 
              to="/register" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Start Creating for Free
            </Link>
            <Link 
              to="/login" 
              className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all"
            >
              Already have an account?
            </Link>
          </div>

          {/* Demo Visual */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                  <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                  <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                  <div className="ml-4 text-white font-medium">PostPilot Dashboard</div>
                </div>
              </div>
              <div className="p-8">
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-4 h-4 bg-blue-600 rounded"></div>
                    <div className="text-left">
                      <div className="text-sm font-medium text-gray-700 mb-1">Keyword</div>
                      <div className="h-3 bg-gray-200 rounded w-32"></div>
                    </div>
                  </div>
                  <div className="h-10 bg-blue-600 rounded-lg"></div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-3"></div>
                    <div className="flex gap-2">
                      <div className="h-6 bg-blue-100 rounded w-16"></div>
                      <div className="h-6 bg-blue-100 rounded w-20"></div>
                      <div className="h-6 bg-blue-100 rounded w-18"></div>
                    </div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-4/5 mb-3"></div>
                    <div className="flex gap-2">
                      <div className="h-6 bg-purple-100 rounded w-14"></div>
                      <div className="h-6 bg-purple-100 rounded w-22"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose PostPilot?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to supercharge your content creation workflow
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-white rounded-lg"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI-Powered Ideas</h3>
              <p className="text-gray-600">
                Generate unlimited creative content ideas using advanced AI technology. Never run out of inspiration again.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-white rounded-lg"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Multiple Platforms</h3>
              <p className="text-gray-600">
                Create content for Instagram, Twitter, LinkedIn, blogs, and more. One tool for all your platforms.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-white rounded-lg"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Organization</h3>
              <p className="text-gray-600">
                Keep track of all your ideas with intelligent categorization and easy-to-browse history.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Get started in three simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Enter Your Topic</h3>
              <p className="text-gray-600">
                Simply type in your keyword or topic of interest
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Choose Content Type</h3>
              <p className="text-gray-600">
                Select the platform or content format you need
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Get AI Ideas</h3>
              <p className="text-gray-600">
                Receive creative ideas with relevant hashtags instantly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Content Strategy?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of creators who are already using PostPilot to generate amazing content ideas.
          </p>
          <Link 
            to="/register" 
            className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-lg inline-block"
          >
            Start Your Free Trial Today
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            PostPilot
          </div>
          <p className="text-gray-400 mb-6">
            AI-powered content creation for the modern creator
          </p>
          <div className="flex justify-center gap-8 text-gray-400">
            <Link to="/login" className="hover:text-white transition-colors">Sign In</Link>
            <Link to="/register" className="hover:text-white transition-colors">Sign Up</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
