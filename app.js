import React, { useState } from 'react';
import { BarChart3, Brain, Database, Github, Linkedin, Mail, Code, TrendingUp } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');

  const projects = [
    {
      title: "Customer Churn Prediction",
      description: "Built an ML model achieving 92% accuracy in predicting customer churn using XGBoost and feature engineering on 100k+ records.",
      tech: ["Python", "XGBoost", "Pandas", "Scikit-learn"],
      metrics: "92% Accuracy, 0.89 F1-Score"
    },
    {
      title: "Real-Time Sentiment Analysis",
      description: "Developed a streaming pipeline analyzing 50k tweets/day using BERT transformers and Apache Kafka for social media monitoring.",
      tech: ["Python", "BERT", "Kafka", "Docker"],
      metrics: "50k tweets/day processed"
    },
    {
      title: "Sales Forecasting Dashboard",
      description: "Created an interactive dashboard with time series models (ARIMA, Prophet) reducing forecast error by 35%.",
      tech: ["Python", "Prophet", "Plotly", "SQL"],
      metrics: "35% improvement in MAPE"
    }
  ];

  const skills = {
    "Programming": ["Python", "R", "SQL", "JavaScript"],
    "ML/AI": ["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost"],
    "Data Tools": ["Pandas", "NumPy", "Spark", "Airflow"],
    "Visualization": ["Tableau", "Power BI", "Plotly", "Seaborn"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-2xl font-bold text-white">
            <Brain className="text-purple-400" />
            <span>DS Portfolio</span>
          </div>
          <div className="flex gap-6">
            {['about', 'projects', 'skills', 'contact'].map(section => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`capitalize transition-colors ${
                  activeSection === section
                    ? 'text-purple-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-white mb-6">
              Data Scientist & ML Engineer
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Transforming complex data into actionable insights through advanced analytics,
              machine learning, and compelling visualizations.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
                View Projects
              </button>
              <button className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <BarChart3 className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Data Analysis</h3>
              <p className="text-gray-400">
                Expert in exploratory data analysis, statistical modeling, and deriving insights from complex datasets.
              </p>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <Brain className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Machine Learning</h3>
              <p className="text-gray-400">
                Building and deploying production-ready ML models for classification, regression, and NLP tasks.
              </p>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <TrendingUp className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Business Impact</h3>
              <p className="text-gray-400">
                Translating technical solutions into measurable business value and strategic recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>
          <div className="grid gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-slate-800/50 p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all hover:transform hover:scale-[1.02]"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                  <Code className="text-purple-400" />
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="text-purple-400 font-semibold">{project.metrics}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-slate-800/50 p-8 rounded-xl border border-purple-500/20">
                <h3 className="text-xl font-semibold text-purple-400 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-slate-700 text-gray-200 px-4 py-2 rounded-lg hover:bg-purple-600/30 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Let's Connect</h2>
          <p className="text-xl text-gray-300 mb-12">
            Interested in collaboration or have a project in mind? Reach out!
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:your.email@example.com"
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-all transform hover:scale-105"
            >
              <Mail size={20} />
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              className="flex items-center gap-2 border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-6 py-3 rounded-lg transition-all"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href="https://github.com/yourprofile"
              className="flex items-center gap-2 border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-6 py-3 rounded-lg transition-all"
            >
              <Github size={20} />
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
}