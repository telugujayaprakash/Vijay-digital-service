import { useState, useEffect } from 'react';
import { TrendingUp, Users, Award, Target } from 'lucide-react';

const Stats = () => {
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    revenue: 0,
    experience: 0
  });

  const finalStats = {
    clients: 500,
    projects: 1200,
    revenue: 25,
    experience: 8
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = duration / steps;

    const timer = setInterval(() => {
      setCounters(prev => ({
        clients: Math.min(prev.clients + Math.ceil(finalStats.clients / steps), finalStats.clients),
        projects: Math.min(prev.projects + Math.ceil(finalStats.projects / steps), finalStats.projects),
        revenue: Math.min(prev.revenue + Math.ceil(finalStats.revenue / steps), finalStats.revenue),
        experience: Math.min(prev.experience + Math.ceil(finalStats.experience / steps), finalStats.experience)
      }));
    }, increment);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      icon: Users,
      value: counters.clients,
      suffix: '+',
      label: 'Happy Clients',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Target,
      value: counters.projects,
      suffix: '+',
      label: 'Projects Completed',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      value: counters.revenue,
      suffix: 'M+',
      label: 'Revenue Generated',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Award,
      value: counters.experience,
      suffix: '+',
      label: 'Years Experience',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-50/30 via-transparent to-blue-50/30"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 text-cyan-600 font-medium text-sm mb-4 shadow-lg shadow-cyan-400/20">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
            Numbers That Speak
          </h2>
          <p className="text-lg text-gray-600">
            Our track record speaks for itself. Here's what we've achieved together with our clients.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group text-center bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl p-8 border border-cyan-200/50 hover:border-cyan-400/70 shadow-lg hover:shadow-2xl hover:shadow-cyan-400/20 transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg shadow-cyan-400/20 group-hover:shadow-xl group-hover:shadow-cyan-400/30 group-hover:scale-110 transition-all duration-300`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="mb-2">
                <p className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.value}{stat.suffix}
                </p>
                <p className="text-gray-600 font-medium group-hover:text-cyan-600 transition-colors duration-300">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Achievements */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-200/50">
            <div className="text-3xl font-bold text-cyan-600 mb-2">98%</div>
            <div className="text-gray-700 font-medium">Client Satisfaction Rate</div>
          </div>
          <div className="text-center bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200/50">
            <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-gray-700 font-medium">Support Available</div>
          </div>
          <div className="text-center bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200/50">
            <div className="text-3xl font-bold text-green-600 mb-2">30 Days</div>
            <div className="text-gray-700 font-medium">Money Back Guarantee</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
