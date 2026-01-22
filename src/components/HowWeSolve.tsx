import { Link } from 'react-router-dom'
import { CheckCircle, Target, Zap, Users, TrendingUp, Shield } from 'lucide-react'

const HowWeSolve = () => {
  const solutions = [
    {
      icon: Target,
      title: 'Strategy & Planning',
      description: 'Strategic analysis and customized roadmaps',
      steps: ['Market Analysis', 'Competitor Research', 'Custom Strategy']
    },
    {
      icon: Zap,
      title: 'Implementation',
      description: 'Fast and efficient execution of solutions',
      steps: ['Agile Development', 'Quality Assurance', 'Rapid Deployment']
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Cross-functional expertise working together',
      steps: ['Expert Teams', 'Regular Updates', 'Client Involvement']
    },
    {
      icon: TrendingUp,
      title: 'Growth & Optimization',
      description: 'Continuous improvement and scaling',
      steps: ['Performance Monitoring', 'A/B Testing', 'Scale Solutions']
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control',
      steps: ['Security Audits', 'Performance Testing', 'Quality Checks']
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
            Our Approach
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How We Solve Your Challenges
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our proven methodology delivers results through strategic thinking and expert execution
          </p>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8 mb-16 max-w-7xl mx-auto">
          {solutions.map((solution, index) => (
            <div key={index} className="text-center group min-w-0">
              {/* Icon */}
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 transition-colors duration-300">
                <solution.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2 leading-tight">{solution.title}</h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{solution.description}</p>

              {/* Steps */}
              <div className="space-y-1">
                {solution.steps.map((step, i) => (
                  <div key={i} className="flex items-center justify-center text-xs text-gray-500 leading-tight">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-1 flex-shrink-0" />
                    <span className="text-center">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowWeSolve
