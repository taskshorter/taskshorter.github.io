import React from 'react';
import { Bot, Workflow, Zap, Brain, Settings, TrendingUp } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Bot className="h-12 w-12" />,
      title: 'Intelligent Chatbots',
      description: 'Deploy AI-powered chatbots that understand context, learn from interactions, and provide 24/7 customer support.',
      features: ['Natural Language Processing', 'Multi-platform Integration', 'Analytics Dashboard'],
    },
    {
      icon: <Workflow className="h-12 w-12" />,
      title: 'Process Automation',
      description: 'Streamline complex business processes with smart automation that adapts to your unique workflows.',
      features: ['Custom Workflow Design', 'API Integrations', 'Real-time Monitoring'],
    },
    {
      icon: <Brain className="h-12 w-12" />,
      title: 'Predictive Analytics',
      description: 'Harness the power of AI to predict trends, optimize operations, and make data-driven decisions.',
      features: ['Machine Learning Models', 'Data Visualization', 'Predictive Insights'],
    },
    {
      icon: <Settings className="h-12 w-12" />,
      title: 'Custom AI Solutions',
      description: 'Tailored AI solutions designed specifically for your industry and business requirements.',
      features: ['Bespoke Development', 'Industry Expertise', 'Scalable Architecture'],
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: 'Integration Services',
      description: 'Seamlessly integrate AI automation into your existing systems and workflows.',
      features: ['System Integration', 'Data Migration', 'Training & Support'],
    },
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: 'Performance Optimization',
      description: 'Continuously optimize your AI systems for maximum efficiency and return on investment.',
      features: ['Performance Analytics', 'Continuous Improvement', 'ROI Tracking'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Our <span className="font-semibold">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI automation solutions designed to transform your business operations
            and drive sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:transform hover:-translate-y-2 border border-gray-100 hover:border-blue-200"
            >
              <div className="mb-6">
                <div className="inline-flex p-3 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 text-blue-600 group-hover:from-blue-100 group-hover:to-purple-100 transition-colors duration-300">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3 text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;