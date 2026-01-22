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
    <section className='py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/50 text-gray-900'>
      <div className='container mx-auto px-6'>
        {/* Header */}
        <div className='text-center mb-16'>
          <span className='inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold mb-4'>
            Meet Our Team
          </span>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Our Expert Team
          </h2>
          <p className='text-gray-900 max-w-2xl mx-auto'>
            Meet the talented professionals behind your success - experts in
            their fields with years of experience
          </p>
          <div className='w-20 h-1 bg-orange-500 mx-auto rounded-full mt-4' />
        </div>

        {/* Professional Team Grid Layout */}
        <div className='max-w-6xl mx-auto'>
          {/* Team Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8'>
            {team.map((member, index) => (
              <div key={member.name} className='group'>
                <div className='bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl hover:shadow-2xl hover:bg-white/10 transition-all duration-500 text-center bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300'>
                  {/* Profile Image */}
                  <div className='relative mb-4'>
                    <div className='w-24 h-24 mx-auto relative'>
                      {/* <img
                        src={member.image}
                        alt={member.name}
                        className='w-full h-full rounded-full object-cover border-4 border-orange-400 group-hover:border-orange-300 transition-all duration-300 shadow-lg'
                      /> */}
                      <div className='w-full h-full rounded-full object-cover border-4 border-orange-400 group-hover:border-orange-300 transition-all duration-300 shadow-lg flex items-center justify-center bg-gray-200'>
                        <member.image size={48} />
                      </div>
                      {/* Experience Badge */}
                      <div className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg whitespace-nowrap'>
                        {member.experience}
                      </div>
                    </div>
                  </div>

                  {/* Member Info */}
                  <div>
                    <h3 className='text-xl font-bold text-black mb-1'>
                      {member.name}
                    </h3>
                    <p className='text-black font-medium text-sm mb-3'>
                      {member.role}
                    </p>

                    {/* Decorative line */}
                    <div className='w-16 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto group-hover:via-purple-900 transition-all duration-300'></div>
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
