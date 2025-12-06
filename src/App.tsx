import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Dashboard'
import AuthPage from './pages/AuthPage'
import HealthHub from './pages/HealthHub'
import SkillMarketplace from './pages/SkillMarketplace'
import DocumentVault from './pages/DocumentVault'
import BusinessHub from './pages/BusinessHub'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/health" element={<HealthHub />} />
          <Route path="/skills" element={<SkillMarketplace />} />
          <Route path="/documents" element={<DocumentVault />} />
          <Route path="/business" element={<BusinessHub />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  )
}

export default App