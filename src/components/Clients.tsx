const clients = [
  { name: 'TechFlow', logo: 'TF' },
  { name: 'Quantum Labs', logo: 'QL' },
  { name: 'Nova Systems', logo: 'NS' },
  { name: 'Apex Digital', logo: 'AD' },
  { name: 'Spark Media', logo: 'SM' },
  { name: 'Pulse Tech', logo: 'PT' },
  { name: 'Orbit Solutions', logo: 'OS' },
  { name: 'Zenith Corp', logo: 'ZC' },
];

const Clients = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
            Trusted Partners
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Brands That <span className="gradient-text">Trust Us</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We've helped over 500 businesses achieve their digital marketing goals. 
            Join our growing family of successful clients.
          </p>
        </div>

        {/* Client Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {clients.map((client) => (
            <div
              key={client.name}
              className="group bg-card rounded-xl p-8 border border-border/50 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-muted flex items-center justify-center text-2xl font-bold text-primary group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                  {client.logo}
                </div>
                <p className="font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {client.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 bg-primary rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-accent mb-2">500+</p>
              <p className="text-primary-foreground/80">Happy Clients</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-accent mb-2">1200+</p>
              <p className="text-primary-foreground/80">Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-accent mb-2">50M+</p>
              <p className="text-primary-foreground/80">Revenue Generated</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-accent mb-2">15+</p>
              <p className="text-primary-foreground/80">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
