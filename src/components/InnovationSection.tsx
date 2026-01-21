const InnovationSection = () => {
  const innovations = [
    {
      title: 'Upcycling Ingredients',
      description: 'Utilizing byproducts from other industries or repurposing waste materials to reduce resource consumption.',
      icon: 'recycle',
    },
    {
      title: 'Plant-Based Alternatives',
      description: 'Developing skincare products that rely on plant-derived ingredients instead of synthetic chemicals.',
      icon: 'leaf',
    },
    {
      title: 'Waterless Formulations',
      description: 'Creating products that require little to no water to reduce strain on water resources.',
      icon: 'tint-slash',
    },
    {
      title: 'Biodegradable Packaging',
      description: 'Innovations in packaging materials, such as plant-based plastics or compostable materials.',
      icon: 'box-open',
    },
  ];

  return (
    <section className="section-padding py-16 bg-lskin-primary text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Sustainable <span className="text-lskin-bg">Innovations</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            We're at the forefront of sustainable skincare innovation, developing solutions that benefit both people and the planet.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {innovations.map((innovation, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 card-hover">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <i className={`fas fa-${innovation.icon} text-2xl`}></i>
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-2">{innovation.title}</h3>
              <p className="text-white/70">{innovation.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-lskin-secondary to-lskin-primary/80 rounded-2xl p-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-6 lg:mb-0">
              <h3 className="font-playfair text-2xl font-bold mb-2">Ready to Make a Difference?</h3>
              <p>Join us in revolutionizing the skincare industry with sustainable solutions.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary bg-white text-lskin-primary hover:bg-opacity-90">
                <i className="fas fa-shopping-bag mr-2"></i> Shop Sustainably
              </button>
              <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-lskin-primary transition-all duration-300">
                <i className="fas fa-lightbulb mr-2"></i> Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;