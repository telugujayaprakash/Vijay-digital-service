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
    <section className='py-12 md:py-8 bg-background relative overflow-hidden'>
      {/* Background decoration */}
      <div className='absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2'></div>
      <div className='absolute bottom-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl'></div>

      <div className='container mx-auto px-4 relative z-10'>
        {/* Header */}
        <div className='text-center max-w-3xl mx-auto mb-8 md:mb-8'>
          <span className='inline-flex items-center px-6 py-2 rounded-full bg-white border border-slate-200 mb-6 shadow-sm'>
            <span className='w-2 h-2 rounded-full bg-primary mr-2'></span>
            <span className='text-sm font-semibold text-slate-600'>
              Trusted Partners
            </span>
          </span>
          <h2 className='text-3xl md:text-4xl font-bold mb-4 text-slate-800 tracking-tight'>
            Brands That <span className='text-primary'>Trust Us</span>
          </h2>
          <p className='text-lg text-slate-500'>
            We've helped over 500 businesses achieve their digital marketing
            goals. Join our growing family of successful clients.
          </p>
        </div>

        {/* Client Logos */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8 md:mb-8'>
          {clients.map((client, index) => (
            <div
              key={client.name}
              className='card-soft p-8 group flex items-center justify-center hover:-translate-y-1 transition-transform duration-500'
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className='flex flex-col items-center gap-4'>
                <div className='w-16 h-16 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-2xl font-bold text-slate-300 group-hover:bg-primary/5 group-hover:text-primary transition-all duration-300'>
                  {client.logo}
                </div>
                <p className='font-semibold text-slate-600 group-hover:text-slate-800 transition-colors duration-300'>
                  {client.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className='card-soft p-8 md:p-8 md:p-6 relative overflow-hidden'>
          {/* Background decoration for stats */}
          <div className='absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4'></div>
          <div className='absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4'></div>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10'>
            <div className='group'>
              <p className='text-4xl md:text-5xl font-bold text-primary mb-2 tracking-tight group-hover:scale-105 transition-transform duration-300'>
                100+
              </p>
              <p className='text-slate-500 font-medium'>Happy Clients</p>
            </div>
            <div className='group'>
              <p className='text-4xl md:text-5xl font-bold text-primary mb-2 tracking-tight group-hover:scale-105 transition-transform duration-300'>
                200+
              </p>
              <p className='text-slate-500 font-medium'>Projects Completed</p>
            </div>
            <div className='group'>
              <p className='text-4xl md:text-5xl font-bold text-primary mb-2 tracking-tight group-hover:scale-105 transition-transform duration-300'>
                10M+
              </p>
              <p className='text-slate-500 font-medium'>Revenue Generated</p>
            </div>
            <div className='group'>
              <p className='text-4xl md:text-5xl font-bold text-primary mb-2 tracking-tight group-hover:scale-105 transition-transform duration-300'>
                10+
              </p>
              <p className='text-slate-500 font-medium'>Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients
