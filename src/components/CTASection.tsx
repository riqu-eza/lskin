const CTASection = () => {
  return (
    <section className="section-padding py-20">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-lskin-primary/10 to-lskin-secondary/10 rounded-3xl p-8 md:p-12">
          <div className="text-center">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              Invest in <span className="text-lskin-primary">Sustainable Beauty</span>
            </h2>
            <p className="text-xl text-lskin-text/80 max-w-3xl mx-auto mb-10">
              LSKIN presents an exciting investment opportunity in our organic skincare company. 
              With a shared commitment to sustainability and natural wellness, we are poised to 
              revolutionize the skincare industry.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="btn-primary px-8 py-4 text-lg">
                <i className="fas fa-chart-line mr-2"></i> View Investment Details
              </button>
              <button className="bg-white text-lskin-primary border-2 border-lskin-primary px-8 py-4 rounded-full font-medium text-lg hover:bg-lskin-primary hover:text-white transition-all duration-300">
                <i className="fas fa-envelope mr-2"></i> Contact Our Team
              </button>
            </div>
            
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-lskin-primary">100%</div>
                <div className="text-lskin-text/70">Organic Ingredients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-lskin-primary">0%</div>
                <div className="text-lskin-text/70">Harmful Chemicals</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-lskin-primary">80%</div>
                <div className="text-lskin-text/70">Less Plastic Waste</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-lskin-primary">100%</div>
                <div className="text-lskin-text/70">Carbon Neutral Goal</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;