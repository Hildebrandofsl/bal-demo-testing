import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const endpoints = [
  {
    method: "GET",
    path: "/api/users",
    title: "Get All Users",
    description: "Retrieve a list of all users with pagination support",
    methodColor: "bg-green-500",
    response: `{
  "data": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "created_at": "2024-01-01T00:00:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 1
  }
}`
  },
  {
    method: "POST",
    path: "/api/users",
    title: "Create User",
    description: "Create a new user with validation",
    methodColor: "bg-blue-500",
    response: `{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "password": "securepassword"
}`
  },
  {
    method: "PUT",
    path: "/api/users/:id",
    title: "Update User",
    description: "Update an existing user by ID",
    methodColor: "bg-yellow-500",
    response: "id - User ID (integer)"
  },
  {
    method: "DELETE",
    path: "/api/users/:id",
    title: "Delete User",
    description: "Remove a user from the database",
    methodColor: "bg-red-500",
    response: `{
  "message": "User deleted successfully"
}`
  }
];

const schemaColumns = [
  { name: "id", type: "SERIAL", constraints: "PRIMARY KEY", description: "Unique user identifier" },
  { name: "name", type: "VARCHAR(100)", constraints: "NOT NULL", description: "User's full name" },
  { name: "email", type: "VARCHAR(255)", constraints: "UNIQUE, NOT NULL", description: "User's email address" },
  { name: "password_hash", type: "VARCHAR(255)", constraints: "NOT NULL", description: "Encrypted password" },
  { name: "created_at", type: "TIMESTAMP", constraints: "DEFAULT NOW()", description: "Record creation time" },
  { name: "updated_at", type: "TIMESTAMP", constraints: "DEFAULT NOW()", description: "Last update time" }
];

export default function ApiDocsSection() {
  return (
    <section id="api" className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">API Documentation</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            RESTful API endpoints with full CRUD functionality
          </p>
        </div>

        {/* API Endpoints */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {endpoints.map((endpoint, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b">
                <div className="flex items-center space-x-3">
                  <Badge className={`${endpoint.methodColor} text-white`}>
                    {endpoint.method}
                  </Badge>
                  <code className="text-gray-800 font-mono">{endpoint.path}</code>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{endpoint.title}</h3>
                <p className="text-gray-600 mb-4">{endpoint.description}</p>
                
                <h4 className="font-medium text-gray-900 mb-2">
                  {endpoint.method === "GET" || endpoint.method === "DELETE" ? "Response:" : "Request Body:"}
                </h4>
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-100 overflow-x-auto">
                  <pre>{endpoint.response}</pre>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Database Schema */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Database Schema</h3>
          <Card className="overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b">
              <h4 className="text-lg font-semibold text-gray-900">Users Table</h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Column</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Constraints</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {schemaColumns.map((column, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{column.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{column.type}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{column.constraints}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{column.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
