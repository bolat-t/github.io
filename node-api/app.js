import React, { useState, useEffect } from 'react';

const Portfolio = () => {
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setActiveModal(null);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    document.body.style.overflow = activeModal ? 'hidden' : 'auto';
  }, [activeModal]);

  const ProjectCard = ({ title, description, tags, modalId }) => (
    <div 
      onClick={() => setActiveModal(modalId)}
      className="bg-slate-800/50 p-8 rounded-xl border border-purple-500/20 hover:scale-[1.02] hover:border-purple-400/40 transition-all cursor-pointer"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </div>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map(tag => (
          <span key={tag} className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">{tag}</span>
        ))}
      </div>
      <div className="text-purple-400 font-semibold">Click to learn more →</div>
    </div>
  );

  const Modal = ({ id, title, subtitle, overview, challenge, solution, results, technologies }) => (
    <div 
      className={`fixed inset-0 bg-black/85 z-50 items-center justify-center transition-opacity duration-300 ${
        activeModal === id ? 'flex opacity-100' : 'hidden opacity-0'
      }`}
      onClick={() => setActiveModal(null)}
    >
      <div 
        className={`bg-slate-800 max-w-4xl w-[90%] max-h-[90vh] overflow-y-auto rounded-2xl border border-purple-500/30 relative transition-transform duration-300 ${
          activeModal === id ? 'scale-100' : 'scale-75'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={() => setActiveModal(null)}
          className="absolute top-6 right-6 text-gray-400 hover:text-white text-4xl z-10"
        >
          &times;
        </button>
        
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-8 rounded-t-2xl">
          <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
          <p className="text-purple-200">{subtitle}</p>
        </div>
        
        <div className="p-8">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-purple-400 mb-3">Overview</h3>
            <p className="text-gray-300">{overview}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-purple-400 mb-3">Challenge</h3>
            <p className="text-gray-300">{challenge}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-purple-400 mb-3">Solution</h3>
            <p className="text-gray-300">{solution}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-purple-400 mb-3">Results</h3>
            <div className="grid grid-cols-3 gap-4">
              {results.map((result, i) => (
                <div key={i} className="bg-slate-900 p-4 rounded-lg border border-purple-500/30 text-center">
                  <div className="text-3xl font-bold text-purple-400">{result.value}</div>
                  <div className="text-gray-300 text-sm">{result.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-purple-400 mb-3">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map(tech => (
                <span key={tech} className="bg-purple-600/30 text-purple-300 px-3 py-2 rounded-lg">{tech}</span>
              ))}
            </div>
          </div>

          <a href="https://github.com/bolat-t" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg inline-block transition-all">
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-40 border-b border-purple-500/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-2xl font-bold text-white">
            <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <span>DS Portfolio</span>
          </div>
          <div className="flex gap-6">
            <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors">About</a>
            <a href="#projects" className="text-gray-300 hover:text-purple-400 transition-colors">Projects</a>
            <a href="#skills" className="text-gray-300 hover:text-purple-400 transition-colors">Skills</a>
            <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-white mb-6">Data Scientist & ML Engineer</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Transforming complex data into actionable insights through advanced analytics, machine learning, and compelling visualizations.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#projects" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
              View Projects
            </a>
            <a href="#contact" className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <svg className="w-12 h-12 text-purple-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <h3 className="text-xl font-semibold text-white mb-3">Data Analysis</h3>
              <p className="text-gray-400">Expert in exploratory data analysis, statistical modeling, and deriving insights from complex datasets.</p>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <svg className="w-12 h-12 text-purple-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <h3 className="text-xl font-semibold text-white mb-3">Machine Learning</h3>
              <p className="text-gray-400">Building and deploying production-ready ML models for classification, regression, and NLP tasks.</p>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <svg className="w-12 h-12 text-purple-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <h3 className="text-xl font-semibold text-white mb-3">Business Impact</h3>
              <p className="text-gray-400">Translating technical solutions into measurable business value and strategic recommendations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>
          <div className="grid gap-8">
            <ProjectCard
              title="Customer Churn Prediction"
              description="Built an ML model achieving 92% accuracy in predicting customer churn using XGBoost and feature engineering on 100k+ records."
              tags={['Python', 'XGBoost', 'Pandas', 'Scikit-learn']}
              modalId="modal1"
            />
            <ProjectCard
              title="Real-Time Sentiment Analysis"
              description="Developed a streaming pipeline analyzing 50k tweets/day using BERT transformers and Apache Kafka."
              tags={['Python', 'BERT', 'Kafka', 'Docker']}
              modalId="modal2"
            />
            <ProjectCard
              title="Sales Forecasting Dashboard"
              description="Created an interactive dashboard with time series models reducing forecast error by 35%."
              tags={['Python', 'Prophet', 'Plotly', 'SQL']}
              modalId="modal3"
            />
          </div>
        </div>
      </section>

      {/* Modals */}
      <Modal
        id="modal1"
        title="Customer Churn Prediction"
        subtitle="Machine Learning Classification"
        overview="Developed a comprehensive ML solution to predict customer churn for a telecommunications company, analyzing behavior patterns, usage metrics, and demographic data."
        challenge="Company losing 15% of customers annually. Needed proactive system to identify churn risks for retention team intervention."
        solution="Created 20+ engineered features, deployed XGBoost model with hyperparameter optimization, applied SMOTE for class imbalance."
        results={[
          { value: '92%', label: 'Accuracy' },
          { value: '0.89', label: 'F1-Score' },
          { value: '$2.3M', label: 'Revenue Retained' }
        ]}
        technologies={['Python', 'XGBoost', 'Scikit-learn', 'Pandas', 'NumPy', 'SMOTE']}
      />

      <Modal
        id="modal2"
        title="Real-Time Sentiment Analysis"
        subtitle="NLP & Streaming Pipeline"
        overview="Built scalable sentiment analysis system monitoring social media conversations, processing 50,000+ tweets daily with sub-second latency."
        challenge="Marketing teams needed real-time sentiment insights. Traditional batch processing too slow for crisis management."
        solution="Designed microservices architecture with Kafka queues, fine-tuned BERT model achieving 94% accuracy, created interactive dashboard."
        results={[
          { value: '50k+', label: 'Tweets/Day' },
          { value: '<1s', label: 'Latency' },
          { value: '8x', label: 'Faster Response' }
        ]}
        technologies={['Python', 'BERT', 'Transformers', 'Kafka', 'Docker', 'Plotly']}
      />

      <Modal
        id="modal3"
        title="Sales Forecasting Dashboard"
        subtitle="Time Series Analysis"
        overview="Created interactive forecasting dashboard combining ARIMA and Prophet models, providing multi-horizon forecasts with confidence intervals."
        challenge="Sales team relied on intuition-based forecasts leading to inventory issues. Needed automated accurate forecasting system."
        solution="Built ensemble model combining ARIMA and Prophet, created interactive dashboard with drill-downs, integrated with SQL database."
        results={[
          { value: '35%', label: 'Error Reduction' },
          { value: '$1.2M', label: 'Cost Savings' },
          { value: '40+', label: 'Daily Users' }
        ]}
        technologies={['Python', 'Prophet', 'ARIMA', 'Plotly', 'SQL', 'Pandas']}
      />

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 p-8 rounded-xl border border-purple-500/20">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Programming</h3>
              <div className="flex flex-wrap gap-3">
                {['Python', 'R', 'SQL', 'JavaScript'].map(skill => (
                  <span key={skill} className="bg-slate-700 text-gray-200 px-4 py-2 rounded-lg hover:bg-purple-600/30 transition-colors">{skill}</span>
                ))}
              </div>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-xl border border-purple-500/20">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">ML/AI</h3>
              <div className="flex flex-wrap gap-3">
                {['TensorFlow', 'PyTorch', 'Scikit-learn', 'XGBoost'].map(skill => (
                  <span key={skill} className="bg-slate-700 text-gray-200 px-4 py-2 rounded-lg hover:bg-purple-600/30 transition-colors">{skill}</span>
                ))}
              </div>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-xl border border-purple-500/20">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Data Tools</h3>
              <div className="flex flex-wrap gap-3">
                {['Pandas', 'NumPy', 'Spark', 'Airflow'].map(skill => (
                  <span key={skill} className="bg-slate-700 text-gray-200 px-4 py-2 rounded-lg hover:bg-purple-600/30 transition-colors">{skill}</span>
                ))}
              </div>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-xl border border-purple-500/20">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Visualization</h3>
              <div className="flex flex-wrap gap-3">
                {['Tableau', 'Power BI', 'Plotly', 'Seaborn'].map(skill => (
                  <span key={skill} className="bg-slate-700 text-gray-200 px-4 py-2 rounded-lg hover:bg-purple-600/30 transition-colors">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Education & Certifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 p-8 rounded-xl border border-purple-500/20">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Education
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="text-purple-400 font-semibold">M.S. in Data Science</div>
                  <div className="text-gray-300">University Name • 2018-2020</div>
                </div>
                <div>
                  <div className="text-purple-400 font-semibold">B.S. in Computer Science</div>
                  <div className="text-gray-300">University Name • 2014-2018</div>
                </div>
              </div>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-xl border border-purple-500/20">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                Certifications
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="text-purple-400 font-semibold">AWS Certified ML Specialty</div>
                  <div className="text-gray-300">Amazon Web Services • 2023</div>
                </div>
                <div>
                  <div className="text-purple-400 font-semibold">TensorFlow Developer Certificate</div>
                  <div className="text-gray-300">Google • 2022</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Let's Connect</h2>
          <p className="text-xl text-gray-300 mb-12">Interested in collaboration or have a project in mind? Reach out!</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="mailto:your.email@example.com" className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-all transform hover:scale-105">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Me
            </a>
            <a href="https://www.linkedin.com/in/bolat-t-801554284/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-6 py-3 rounded-lg transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </a>
            <a href="https://github.com/bolat-t" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-6 py-3 rounded-lg transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2025 Data Science Portfolio. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
