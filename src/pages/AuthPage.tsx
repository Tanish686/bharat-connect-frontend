import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Mail, Lock, User, Phone } from 'lucide-react'

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement actual authentication
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-2xl">BC</span>
          </div>
          <h1 className="text-3xl font-display font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
            BHARAT CONNECT
          </h1>
          <p className="text-gray-600 mt-2">
            {isLogin ? 'Welcome back!' : 'Create your account'}
          </p>
        </div>

        <div className="card">
          <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 rounded-md font-semibold transition-all ${
                isLogin ? 'bg-white shadow-sm text-orange-600' : 'text-gray-600'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 rounded-md font-semibold transition-all ${
                !isLogin ? 'bg-white shadow-sm text-orange-600' : 'text-gray-600'
              }`}
            >
              Sign Up
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    className="input pl-10"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email or Phone
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  className="input pl-10"
                  placeholder="Enter email or phone number"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="password"
                  className="input pl-10"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

            {isLogin && (
              <div className="flex justify-between items-center text-sm">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-orange-600 hover:text-orange-700">
                  Forgot password?
                </a>
              </div>
            )}

            <button type="submit" className="btn-primary w-full">
              {isLogin ? 'Login' : 'Create Account'}
            </button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 mr-2" />
                Google
              </button>
              <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Phone className="w-5 h-5 mr-2 text-green-600" />
                OTP
              </button>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-gray-600 mt-6">
          By continuing, you agree to our{' '}
          <a href="#" className="text-orange-600 hover:text-orange-700">Terms of Service</a>
          {' '}and{' '}
          <a href="#" className="text-orange-600 hover:text-orange-700">Privacy Policy</a>
        </p>
      </div>
    </div>
  )
}