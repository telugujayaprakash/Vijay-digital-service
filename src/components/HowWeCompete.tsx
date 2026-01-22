import { Link } from 'react-router-dom'
import { Award, Clock, Users, TrendingUp, Shield, Star, Target, Zap, Lightbulb, Crown, Rocket, Globe, ArrowRight } from 'lucide-react'

const HowWeCompete = () => {

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">


      <div className="container mx-auto px-6 relative z-10">

        {/* Market Position Summary */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl p-12 shadow-2xl border border-white/50">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Market Position</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Through strategic innovation and unwavering commitment to excellence, we maintain a dominant position in the digital marketplace
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Growing Market Share</h4>
              <p className="text-gray-600 text-sm">Expanding influence through strategic partnerships</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Industry Recognition</h4>
              <p className="text-gray-600 text-sm">Award-winning solutions and methodologies</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Client Loyalty</h4>
              <p className="text-gray-600 text-sm">Long-term partnerships with industry leaders</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Innovation Pipeline</h4>
              <p className="text-gray-600 text-sm">Continuous development of cutting-edge solutions</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-10 py-5 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
          >
            Join Our Success Story
            <ArrowRight className="inline-block w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HowWeCompete
