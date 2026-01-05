const clients = [
  { name: 'TechFlow', logo: 'TF' },
  { name: 'Quantum Labs', logo: 'QL' },
  { name: 'Nova Systems', logo: 'NS' },
  { name: 'Apex Digital', logo: 'AD' },
  { name: 'Spark Media', logo: 'SM' },
  { name: 'Pulse Tech', logo: 'PT' },
  { name: 'Orbit Solutions', logo: 'OS' },
  { name: 'Zenith Corp', logo: 'ZC' }
]

const Clients = () => {
  return (
    <section className='py-24 bg-white relative overflow-hidden'>
      {/* Background decoration */}
      <div className='absolute inset-0 bg-gradient-to-r from-purple-50/50 via-transparent to-cyan-50/50'></div>
      <div className='absolute top-1/2 left-0 w-72 h-72 bg-purple-100/30 rounded-full blur-3xl'></div>
      <div className='absolute bottom-0 right-0 w-72 h-72 bg-cyan-100/30 rounded-full blur-3xl'></div>

      <div className='container mx-auto px-4 relative z-10'>
        {/* Header */}
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <span className='inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-400/30 text-purple-600 font-medium text-sm mb-4 shadow-lg shadow-purple-400/20'>
            Trusted Partners
          </span>
          <h2 className='text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-purple-600 to-cyan-600 bg-clip-text text-transparent'>
            Brands That Trust Us
          </h2>
          <p className='text-lg text-gray-600'>
            We've helped over 500 businesses achieve their digital marketing
            goals. Join our growing family of successful clients.
          </p>
        </div>

        {/* Client Logos */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
          {clients.map(client => (
            <div
              key={client.name}
              className='group bg-gradient-to-br from-white via-gray-50 to-white backdrop-blur-sm rounded-xl p-8 border border-cyan-200/50 hover:border-cyan-400/70 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-400/20'
            >
              <div className='flex flex-col items-center gap-4'>
                <div className='w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-cyan-400/30 group-hover:shadow-cyan-400/50 group-hover:scale-110 transition-all duration-300'>
                  {client.logo}
                </div>
                <p className='font-medium text-gray-700 group-hover:text-cyan-600 transition-colors duration-300'>
                  {client.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className='mt-16 bg-gradient-to-br from-white via-gray-50 to-white backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-cyan-200/50 shadow-2xl shadow-cyan-400/10 relative overflow-hidden'>
          {/* Background decoration for stats */}
          <div className='absolute inset-0 bg-gradient-to-r from-cyan-50/30 via-purple-50/20 to-blue-50/30 rounded-2xl'></div>
          <div className='absolute top-0 right-0 w-32 h-32 bg-cyan-100/40 rounded-full blur-2xl'></div>
          <div className='absolute bottom-0 left-0 w-32 h-32 bg-purple-100/40 rounded-full blur-2xl'></div>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10'>
            <div className='group'>
              <p className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300'>
                100+
              </p>
              <p className='text-cyan-600 font-medium'>Happy Clients</p>
            </div>
            <div className='group'>
              <p className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300'>
                200+
              </p>
              <p className='text-purple-600 font-medium'>Projects Completed</p>
            </div>
            <div className='group'>
              <p className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300'>
                10M+
              </p>
              <p className='text-green-600 font-medium'>Revenue Generated</p>
            </div>
            <div className='group'>
              <p className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300'>
                10+
              </p>
              <p className='text-orange-600 font-medium'>Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients
