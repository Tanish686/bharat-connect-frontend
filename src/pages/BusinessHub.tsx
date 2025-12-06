export default function BusinessHub() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-display font-bold mb-8">Business Hub</h1>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Inventory</h3>
            <p className="text-gray-600">Manage your stock</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Billing</h3>
            <p className="text-gray-600">Create invoices & bills</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Customers</h3>
            <p className="text-gray-600">Manage customer relationships</p>
          </div>
        </div>
      </div>
    </div>
  )
}