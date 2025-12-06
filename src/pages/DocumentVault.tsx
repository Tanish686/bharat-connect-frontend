export default function DocumentVault() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-display font-bold mb-8">Document Vault</h1>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card">
            <h3 className="text-xl font-bold mb-4">My Documents</h3>
            <p className="text-gray-600">All your files in one place</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Upload New</h3>
            <p className="text-gray-600">Add documents securely</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Shared Files</h3>
            <p className="text-gray-600">Files shared with you</p>
          </div>
        </div>
      </div>
    </div>
  )
}