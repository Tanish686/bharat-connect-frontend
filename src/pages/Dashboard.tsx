import { Link } from 'react-router-dom'
import { 
  Heart, Briefcase, GraduationCap, FileText, 
  TrendingUp, Bell, Search, Menu, User,
  Calendar, CheckCircle, Clock, DollarSign
} from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <button className="lg:hidden">
                <Menu className="w-6 h-6" />
              </button>
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">BC</span>
                </div>
                <span className="text-xl font-display font-bold hidden sm:block">BHARAT CONNECT</span>
              </Link>
            </div>

            <div className="flex-1 max-w-xl mx-8 hidden md:block">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search anything..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="relative">
                <Bell className="w-6 h-6 text-gray-600" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                  3
                </span>
              </button>
              <button className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-green-400 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-display font-bold mb-2">
            Welcome back, User! 👋
          </h1>
          <p className="text-gray-600">Here's what's happening with your account today</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-sm text-green-600 font-semibold">+12%</span>
            </div>
            <h3 className="text-2xl font-bold mb-1">8</h3>
            <p className="text-gray-600 text-sm">Upcoming Tasks</p>
          </div>

          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-sm text-green-600 font-semibold">+24%</span>
            </div>
            <h3 className="text-2xl font-bold mb-1">24</h3>
            <p className="text-gray-600 text-sm">Completed This Week</p>
          </div>

          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
              <span className="text-sm text-orange-600 font-semibold">2h saved</span>
            </div>
            <h3 className="text-2xl font-bold mb-1">18h</h3>
            <p className="text-gray-600 text-sm">Time Saved This Month</p>
          </div>

          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-purple-600" />
              </div>
              <span className="text-sm text-green-600 font-semibold">+₹5,000</span>
            </div>
            <h3 className="text-2xl font-bold mb-1">₹45,000</h3>
            <p className="text-gray-600 text-sm">Earnings This Month</p>
          </div>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link to="/health" className="card hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Heart className="w-7 h-7 text-red-600" />
              </div>
              <span className="text-xs bg-red-100 text-red-600 px-3 py-1 rounded-full font-semibold">
                2 New
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">Health Hub</h3>
            <p className="text-gray-600 mb-4">
              Manage health records, book appointments, track medications
            </p>
            <div className="flex items-center text-orange-600 font-semibold">
              Open Health Hub
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          <Link to="/skills" className="card hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <GraduationCap className="w-7 h-7 text-blue-600" />
              </div>
              <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-semibold">
                5 Courses
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">Skill Marketplace</h3>
            <p className="text-gray-600 mb-4">
              Learn new skills, get certified, find freelance work
            </p>
            <div className="flex items-center text-orange-600 font-semibold">
              Explore Skills
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          <Link to="/documents" className="card hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <FileText className="w-7 h-7 text-purple-600" />
              </div>
              <span className="text-xs bg-purple-100 text-purple-600 px-3 py-1 rounded-full font-semibold">
                24 Files
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">Document Vault</h3>
            <p className="text-gray-600 mb-4">
              Store and organize all your important documents securely
            </p>
            <div className="flex items-center text-orange-600 font-semibold">
              View Documents
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          <Link to="/business" className="card hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Briefcase className="w-7 h-7 text-green-600" />
              </div>
              <span className="text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full font-semibold">
                Active
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">Business Hub</h3>
            <p className="text-gray-600 mb-4">
              Manage inventory, billing, customers, and GST compliance
            </p>
            <div className="flex items-center text-orange-600 font-semibold">
              Manage Business
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          <div className="card hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <TrendingUp className="w-7 h-7 text-yellow-600" />
              </div>
              <span className="text-xs bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full font-semibold">
                ₹45K
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">Financial Tools</h3>
            <p className="text-gray-600 mb-4">
              Track expenses, manage investments, file taxes easily
            </p>
            <div className="flex items-center text-orange-600 font-semibold">
              View Finances
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          <div className="card bg-gradient-to-br from-orange-500 to-green-500 text-white hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold mb-2">Upgrade to Premium</h3>
            <p className="mb-4 text-white/90">
              Unlock all features and get unlimited access
            </p>
            <ul className="space-y-2 mb-4 text-sm">
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Unlimited storage
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Priority support
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Advanced AI features
              </li>
            </ul>
            <button className="bg-white text-orange-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors w-full">
              Upgrade Now - ₹199/mo
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}