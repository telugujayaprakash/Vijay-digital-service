import { Link } from 'react-router-dom'
import { Award, Clock, Users, TrendingUp, Shield, Star, Target, Zap, Lightbulb, Crown, Rocket, Globe, ArrowRight } from 'lucide-react'

const HowWeCompete = () => {

  return (
    <section className="py-12 md:py-8 bg-slate-50 relative overflow-hidden text-slate-800">


      <div className="container mx-auto px-6 relative z-10">

        {/* Market Position Summary */}
        <div className="card-soft p-8 md:p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10 text-center mb-8 md:mb-8 animate-slide-in">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 tracking-tight">Our Market Position</h3>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Through strategic innovation and unwavering commitment to excellence, we maintain a dominant position in the digital marketplace
            </p>
          </div>

          <div className="relative z-10 grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:bg-primary/10 group-hover:scale-105 transition-all duration-300">
                <TrendingUp className="w-10 h-10 text-slate-400 group-hover:text-primary transition-colors duration-300" />
              </div>
              <h4 className="font-bold text-slate-800 mb-2">Growing Market Share</h4>
              <p className="text-slate-500 text-sm">Expanding influence through strategic partnerships</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:bg-primary/10 group-hover:scale-105 transition-all duration-300">
                <Award className="w-10 h-10 text-slate-400 group-hover:text-primary transition-colors duration-300" />
              </div>
              <h4 className="font-bold text-slate-800 mb-2">Industry Recognition</h4>
              <p className="text-slate-500 text-sm">Award-winning solutions and methodologies</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:bg-primary/10 group-hover:scale-105 transition-all duration-300">
                <Users className="w-10 h-10 text-slate-400 group-hover:text-primary transition-colors duration-300" />
              </div>
              <h4 className="font-bold text-slate-800 mb-2">Client Loyalty</h4>
              <p className="text-slate-500 text-sm">Long-term partnerships with industry leaders</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:bg-primary/10 group-hover:scale-105 transition-all duration-300">
                <Zap className="w-10 h-10 text-slate-400 group-hover:text-primary transition-colors duration-300" />
              </div>
              <h4 className="font-bold text-slate-800 mb-2">Innovation Pipeline</h4>
              <p className="text-slate-500 text-sm">Continuous development of cutting-edge solutions</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-6">
          <Link
            to="/contact"
            className="btn-primary-soft inline-flex items-center px-10 py-4 text-lg"
          >
            Join Our Success Story
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HowWeCompete
