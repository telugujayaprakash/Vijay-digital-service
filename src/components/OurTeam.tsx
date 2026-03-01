import { User } from 'lucide-react'

const OurTeam = () => {
  const team = [
    {
      name: 'Mani Ratnam',
      role: 'Content Creator',
      image: User,
      experience: '9+ years'
    },
    {
      name: 'Jayaprakash',
      role: 'Web & App Developer',
      image: User,
      experience: '1+ years'
    },
    {
      name: 'Sai Ganesh',
      role: 'Application Tester',
      image: User,
      experience: '1+ years'
    },
    {
      name: 'Ajay',
      role: 'Digital Marketing',
      image: User,
      experience: '1+ years'
    },
    {
      name: 'Ravi',
      role: 'Video Editor ',
      image: User,
      experience: '2+ years'
    }
  ]

  return (
    <section className='py-12 md:py-8 bg-slate-50 relative overflow-hidden text-slate-800'>
      <div className='container mx-auto px-6 relative z-10'>
        {/* Header */}
        <div className='text-center mb-8 md:mb-8 animate-slide-in'>
          <div className='inline-flex items-center px-6 py-2 rounded-full bg-white border border-slate-200 mb-6 shadow-sm'>
            <span className='w-2 h-2 rounded-full bg-primary mr-2'></span>
            <span className='text-sm font-semibold text-slate-600'>
              Meet Our Team
            </span>
          </div>
          <h2 className='text-3xl md:text-4xl font-bold mb-4 text-slate-800 tracking-tight'>
            Our <span className='text-primary'>Expert Team</span>
          </h2>
          <p className='text-slate-500 max-w-2xl mx-auto text-lg mb-8'>
            Meet the talented professionals behind your success - experts in
            their fields with years of experience
          </p>
        </div>

        {/* Professional Team Grid Layout */}
        <div className='max-w-6xl mx-auto'>
          {/* Team Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8'>
            {team.map((member, index) => (
              <div key={member.name} className='group' style={{ animationDelay: `${index * 0.1}s` }}>
                <div className='card-soft p-6 text-center hover:-translate-y-2 transition-transform duration-500'>
                  {/* Profile Image */}
                  <div className='relative mb-6'>
                    <div className='w-24 h-24 mx-auto relative'>
                      <div className='w-full h-full rounded-2xl flex items-center justify-center bg-slate-100 text-slate-400 group-hover:bg-primary/5 group-hover:text-primary transition-colors duration-300'>
                        <member.image size={40} />
                      </div>
                      {/* Experience Badge */}
                      <div className='absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-white border border-slate-100 text-primary text-xs px-3 py-1 rounded-full font-semibold shadow-sm whitespace-nowrap group-hover:bg-primary group-hover:text-white transition-colors duration-300'>
                        {member.experience}
                      </div>
                    </div>
                  </div>

                  {/* Member Info */}
                  <div>
                    <h3 className='text-lg font-bold text-slate-800 mb-1'>
                      {member.name}
                    </h3>
                    <p className='text-slate-500 font-medium text-sm'>
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurTeam
