import ValueCard from './ValueCard';

const ValuesSection = () => {
  const values = [
    {
      icon: 'hand-holding-heart',
      title: 'Ethical Sourcing',
      description: 'We prioritize responsibly sourced ingredients, such as organic and fair-trade materials, to minimize impact on local communities and ecosystems.',
    },
    {
      icon: 'flask',
      title: 'Clean Formulations',
      description: 'Avoiding harmful chemicals like parabens, sulfates, and phthalates protects both our skin and the environment.',
      color: 'secondary' as const,
    },
    {
      icon: 'recycle',
      title: 'Packaging Innovation',
      description: 'Utilizing eco-friendly packaging materials, reducing plastic waste, and promoting recycling and refillable options.',
    },
    {
      icon: 'solar-panel',
      title: 'Renewable Energy',
      description: 'Embracing renewable energy sources and implementing energy-efficient manufacturing processes to reduce carbon emissions.',
      color: 'secondary' as const,
    },
    {
      icon: 'graduation-cap',
      title: 'Education & Transparency',
      description: 'Educating consumers about sustainable skincare and providing transparent information about our products environmental impact.',
    },
  ];

  return (
    <section className="section-padding py-16 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Our Core <span className="text-lskin-primary">Values</span>
          </h2>
          <p className="text-xl text-lskin-text/70 max-w-3xl mx-auto">
            LSKIN is focused on providing high quality skincare products while maintaining our commitment to sustainability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
              color={value.color}
            />
          ))}
          
          {/* Additional visual element */}
          <div className="md:col-span-2 lg:col-span-3 bg-gradient-to-r from-lskin-primary to-lskin-secondary rounded-2xl p-8 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h3 className="font-playfair text-2xl font-bold mb-2">Join Our Sustainable Mission</h3>
                <p>Be part of the skincare revolution that cares for you and the planet.</p>
              </div>
              <button className="btn-primary mt-4 md:mt-0 bg-white text-lskin-primary hover:bg-opacity-90">
                Learn More About Our Mission
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;