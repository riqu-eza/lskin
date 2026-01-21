const HeroSection = () => {
  return (
    <section className="section-padding py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Text */}
          <div className="space-y-6">
            <div className="inline-block bg-lskin-primary/10 px-4 py-2 rounded-full">
              <span className="text-lskin-primary font-medium">
                <i className="fas fa-leaf mr-2"></i> Sustainable Skincare
              </span>
            </div>
            
            <h1 className="font-playfair text-5xl md:text-6xl font-bold leading-tight">
              Revolutionizing <span className="text-lskin-primary">Organic</span> Skincare
            </h1>
            
            <p className="text-xl text-lskin-text/80">
              LSKIN is thrilled to present an exciting opportunity to invest in our organic skincare company. 
              With a shared commitment to sustainability and natural wellness, we are poised to revolutionize 
              the skincare industry.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="btn-primary">
                <i className="fas fa-seedling mr-2"></i> Shop Now
              </button>
              <button className="bg-white text-lskin-primary border border-lskin-primary px-6 py-3 rounded-full font-medium hover:bg-lskin-primary hover:text-white transition-all duration-300">
                <i className="fas fa-chart-line mr-2"></i> Invest With Us
              </button>
            </div>
          </div>
          
          {/* Hero Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-lskin-primary to-lskin-secondary h-96 lg:h-[500px] rounded-3xl flex items-center justify-center">
              <div className="text-center text-white p-8">
                <i className="fas fa-spa text-8xl mb-6 opacity-50"></i>
                <h3 className="font-playfair text-3xl font-bold mb-4">Pure & Sustainable</h3>
                <p className="text-white/80">Nature-inspired skincare for a healthier planet</p>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-lskin-bg border-4 border-white rounded-full flex items-center justify-center shadow-lg">
              <i className="fas fa-recycle text-lskin-primary text-3xl"></i>
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-lskin-bg border-4 border-white rounded-full flex items-center justify-center shadow-lg">
              <i className="fas fa-leaf text-lskin-secondary text-2xl"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;