export default function HealthHub() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-display font-bold mb-8">Health Hub</h1>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card">
            <h3 className="text-xl font-bold mb-4">My Health Records</h3>
            <p className="text-gray-600">Access your complete medical history</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Book Appointment</h3>
            <p className="text-gray-600">Consult with doctors online</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Medicine Tracker</h3>
            <p className="text-gray-600">Never miss your medications</p>
          </div>
        </div>
      </div>
    </div>
  )
}