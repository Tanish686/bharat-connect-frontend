export default function SkillMarketplace() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-display font-bold mb-8">Skill Marketplace</h1>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Learn Skills</h3>
            <p className="text-gray-600">Free courses in 12 languages</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Get Certified</h3>
            <p className="text-gray-600">Industry-recognized certificates</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Find Work</h3>
            <p className="text-gray-600">Freelance opportunities</p>
          </div>
        </div>
      </div>
    </div>
  )
}