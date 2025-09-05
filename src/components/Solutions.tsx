import React from 'react';

const Solutions: React.FC = () => {
  const solutions = [
    {
      title: 'Enterprise Automation',
      description: 'Large-scale automation solutions for enterprise organizations',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Scalable Infrastructure', 'Enterprise Security', 'Custom Development'],
      stats: { improvement: '75%', metric: 'Efficiency Gain' },
    },
    {
      title: 'Small Business AI',
      description: 'Affordable AI automation solutions tailored for growing businesses',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Quick Setup', 'Affordable Pricing', 'Easy Integration'],
      stats: { improvement: '60%', metric: 'Cost Reduction' },
    },
    {
      title: 'Industry-Specific Solutions',
      description: 'Specialized automation for healthcare, finance, retail, and more',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Industry Compliance', 'Specialized Models', 'Expert Consultation'],
      stats: { improvement: '90%', metric: 'Accuracy Rate' },
    },
  ];

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Tailored <span className="font-semibold">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From startups to Fortune 500 companies, we deliver AI automation solutions
            that scale with your business needs.
          </p>
        </div>

        <div className="space-y-20">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } items-center gap-12 lg:gap-16`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative group">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-lg group-hover:shadow-2xl transition-shadow duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                  
                  {/* Stats overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-gray-900">{solution.stats.improvement}</div>
                      <div className="text-sm text-gray-600">{solution.stats.metric}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <h3 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
                  {solution.title}
                </h3>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {solution.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  {solution.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors duration-200"
                    >
                      <div className="text-sm font-medium text-gray-900">{feature}</div>
                    </div>
                  ))}
                </div>

                <button className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors duration-200 inline-flex items-center gap-2 group">
                  Learn More
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;