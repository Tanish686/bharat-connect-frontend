import { Link } from 'react-router-dom'
import { 
  Heart, Briefcase, GraduationCap, FileText, 
  TrendingUp, Users, Shield, Zap, Globe, Award 
} from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-green-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">BC</span>
            </div>
            <span className="text-2xl font-display font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
              BHARAT CONNECT
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-700 hover:text-orange-600 font-medium">Features</a>
            <a href="#for-whom" className="text-gray-700 hover:text-orange-600 font-medium">For Whom</a>
            <a href="#pricing" className="text-gray-700 hover:text-orange-600 font-medium">Pricing</a>
          </nav>
          <Link to="/auth" className="btn-primary">
            Get Started
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-orange-600 via-red-600 to-green-600 bg-clip-text text-transparent">
            India's First True Super App
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            One platform for Health, Education, Work, Business & Government Services
          </p>
          <p className="text-lg text-gray-500 mb-12">
            Built for Doctors, Engineers, Students, Professionals, Businesses & Every Indian
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth" className="btn-primary text-lg px-8 py-4">
              Start Free Trial
            </Link>
            <a href="#features" className="bg-white text-orange-600 border-2 border-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200">
              Explore Features
            </a>
          </div>
          <div className="mt-12 flex justify-center items-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-green-600" />
              <span>100% Secure</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-orange-600" />
              <span>10M+ Users</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-blue-600" />
              <span>Trusted Platform</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-display font-bold text-center mb-4">
          Everything You Need in One App
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16">
          Powerful features designed for every Indian
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Health Hub */}
          <div className="card hover:shadow-2xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Health Hub</h3>
            <p className="text-gray-600 mb-4">
              Digital health records, doctor consultations, medicine tracking, lab reports in one place
            </p>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>✓ Lifetime health records</li>
              <li>✓ 24/7 doctor consultation</li>
              <li>✓ Medicine reminders</li>
              <li>✓ Lab test booking</li>
            </ul>
          </div>

          {/* Skill Marketplace */}
          <div className="card hover:shadow-2xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <GraduationCap className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Skill Marketplace</h3>
            <p className="text-gray-600 mb-4">
              Learn skills, get certified, find freelance work - all in one platform
            </p>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>✓ Free courses in 12 languages</li>
              <li>✓ Industry certifications</li>
              <li>✓ Freelance opportunities</li>
              <li>✓ Only 5% commission</li>
            </ul>
          </div>

          {/* Document Vault */}
          <div className="card hover:shadow-2xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Document Vault</h3>
            <p className="text-gray-600 mb-4">
              Store Aadhaar, PAN, certificates, bills - access anytime, anywhere
            </p>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>✓ Unlimited storage</li>
              <li>✓ AI-powered organization</li>
              <li>✓ Instant verification</li>
              <li>✓ Bank-level security</li>
            </ul>
          </div>

          {/* Business Hub */}
          <div className="card hover:shadow-2xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Briefcase className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Business Hub</h3>
            <p className="text-gray-600 mb-4">
              Manage inventory, billing, GST, customers - complete business solution
            </p>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>✓ Inventory management</li>
              <li>✓ GST invoicing</li>
              <li>✓ Customer CRM</li>
              <li>✓ Payment tracking</li>
            </ul>
          </div>

          {/* Financial Tools */}
          <div className="card hover:shadow-2xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-yellow-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Financial Tools</h3>
            <p className="text-gray-600 mb-4">
              UPI tracking, expense management, tax filing, investment guidance
            </p>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>✓ Automatic expense tracking</li>
              <li>✓ Tax optimization</li>
              <li>✓ Investment recommendations</li>
              <li>✓ Bill reminders</li>
            </ul>
          </div>

          {/* Government Services */}
          <div className="card hover:shadow-2xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Government Services</h3>
            <p className="text-gray-600 mb-4">
              Apply for PAN, Aadhaar, passport, licenses - all in one place
            </p>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>✓ DigiLocker integration</li>
              <li>✓ Instant applications</li>
              <li>✓ Status tracking</li>
              <li>✓ Document verification</li>
            </ul>
          </div>
        </div>
      </section>

      {/* For Whom Section */}
      <section id="for-whom" className="bg-gradient-to-r from-orange-600 to-green-600 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-display font-bold text-center text-white mb-16">
            Built for Every Indian
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Doctors', desc: 'Manage patients, prescriptions, appointments', icon: '🩺' },
              { title: 'Engineers', desc: 'Upskill, freelance, manage projects', icon: '⚙️' },
              { title: 'Students', desc: 'Learn, earn, prepare for exams', icon: '📚' },
              { title: 'Professionals', desc: 'Career growth, skill development', icon: '💼' },
              { title: 'Shop Owners', desc: 'Inventory, billing, customer management', icon: '🏪' },
              { title: 'Freelancers', desc: 'Find work, get paid, build portfolio', icon: '💻' },
              { title: 'Housewives', desc: 'Start home business, manage family', icon: '🏠' },
              { title: 'Job Seekers', desc: 'Find jobs, prepare interviews', icon: '🎯' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-white hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-display font-bold mb-6">
          Ready to Transform Your Life?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Join 10 million+ Indians already using BHARAT CONNECT
        </p>
        <Link to="/auth" className="btn-primary text-lg px-12 py-4 inline-block">
          Get Started for Free
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">BHARAT CONNECT</h3>
              <p className="text-gray-400">India's First True Super App</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Features</li>
                <li>Pricing</li>
                <li>Security</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BHARAT CONNECT. All rights reserved. Made with ❤️ in India</p>
          </div>
        </div>
      </footer>
    </div>
  )
}