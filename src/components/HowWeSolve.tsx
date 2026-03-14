import { Link } from 'react-router-dom'
import { CheckCircle, Target, Zap, Users, TrendingUp, Shield } from 'lucide-react'

const HowWeSolve = () => {
  const solutions = [
    {
      icon: Target,
      title: 'Strategy & Planning',
      description: 'Strategic analysis and customized roadmaps',
      steps: ['Market Analysis', 'Competitor Research', 'Custom Strategy'],
      colorClass: 'from-blue-600 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Implementation',
      description: 'Fast and efficient execution of solutions',
      steps: ['Agile Development', 'Quality Assurance', 'Rapid Deployment'],
      colorClass: 'from-purple-600 to-pink-500'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Cross-functional expertise working together',
      steps: ['Expert Teams', 'Regular Updates', 'Client Involvement'],
      colorClass: 'from-emerald-500 to-teal-500'
    },
    {
      icon: TrendingUp,
      title: 'Growth & Optimization',
      description: 'Continuous improvement and scaling',
      steps: ['Performance Monitoring', 'A/B Testing', 'Scale Solutions'],
      colorClass: 'from-amber-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control',
      steps: ['Security Audits', 'Performance Testing', 'Quality Checks'],
      colorClass: 'from-rose-500 to-red-500'
    }
  ]

  return (
    <section className="py-12 md:py-8 bg-background">
      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-8 md:mb-8 animate-slide-in">
          <div className="inline-flex items-center px-6 py-2 rounded-full bg-white border border-slate-200 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
            <span className="text-sm font-semibold text-slate-600">
              Our Approach
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 tracking-tight">
            How We Solve <span className="text-primary">Your Challenges</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg mb-8">
            Our proven methodology delivers results through strategic thinking and expert execution
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8 mb-8 md:mb-8 max-w-7xl mx-auto">
          {solutions.map((solution, index) => (
            <div key={index} className="card-soft p-6 text-center group/card min-w-0 relative overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Fill Animation Background sweeping from left */}
              <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${solution.colorClass} -translate-x-[101%] group-hover/card:translate-x-0 transition-transform duration-500 ease-out z-0 rounded-3xl`}></div>

              <div className="relative z-10 flex flex-col h-full">
                {/* Icon */}
                <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover/card:bg-white/20 group-hover/card:border-white/30 transition-all duration-300 shadow-sm">
                  <solution.icon className="w-8 h-8 text-slate-400 group-hover/card:text-white transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-3 text-slate-800 group-hover/card:text-white transition-colors duration-300 leading-tight">{solution.title}</h3>

                {/* Description */}
                <p className="text-slate-500 text-sm mb-6 group-hover/card:text-white/90 transition-colors duration-300 leading-relaxed">{solution.description}</p>

                {/* Steps */}
                <div className="space-y-2 mt-auto">
                  {solution.steps.map((step, i) => (
                    <div key={i} className="flex items-center justify-center text-xs text-slate-500 group-hover/card:text-white/80 transition-colors duration-300 leading-tight">
                      <CheckCircle className="w-3 h-3 text-primary group-hover/card:text-white mr-1.5 flex-shrink-0 transition-colors duration-300" />
                      <span className="text-center">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowWeSolve
