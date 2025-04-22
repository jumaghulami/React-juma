import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ChartBarIcon,
  UsersIcon,
  InboxIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Dashbord = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // شبیه‌سازی API Call
      setTimeout(() => {
        setStats({
          users: 2453,
          orders: 1289,
          messages: 56,
          revenue: 45234,
        });
        setUsers(mockUsers);
        setIsLoading(false);
      }, 2000);
    };
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        {/* Sidebar */}
        <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg">
          <div className="p-6 text-xl font-bold text-gray-700">Admin Panel</div>
          <nav className="mt-6">
            {[
              { name: "Users", icon: UsersIcon },
              { name: "Orders", icon: ShoppingCartIcon },
              { name: "Messages", icon: InboxIcon },
            ].map((item) => (
              <button
                key={item.name}
                className="flex items-center w-full px-6 py-3 text-gray-600 hover:bg-gray-50"
              >
                <item.icon className="h-5 w-5 mr-3" />
                {item.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="ml-64 p-8">
          {isLoading ? (
            <div className="flex justify-center items-center h-screen">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <>
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatsCard
                  title="Total Users"
                  value={stats.users}
                  icon={UsersIcon}
                  color="bg-blue-100"
                />
                <StatsCard
                  title="Total Orders"
                  value={stats.orders}
                  icon={ShoppingCartIcon}
                  color="bg-green-100"
                />
                <StatsCard
                  title="Messages"
                  value={stats.messages}
                  icon={InboxIcon}
                  color="bg-purple-100"
                />
                <StatsCard
                  title="Revenue"
                  value={`$${stats.revenue}`}
                  icon={ChartBarIcon}
                  color="bg-yellow-100"
                />
              </div>

              {/* Chart */}
              <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <h2 className="text-xl font-semibold mb-4">Orders Overview</h2>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="uv"
                        stroke="#3B82F6"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Data Table */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Email
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {user.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {user.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${
                              user.status === "Active"
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {user.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </div>
    </BrowserRouter>
  );
};

const StatsCard = ({ title, value, icon: Icon, color }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-bold mt-2">{value}</p>
      </div>
      <div className={`${color} p-4 rounded-full`}>
        <Icon className="h-6 w-6 text-gray-700" />
      </div>
    </div>
  </div>
);

// داده‌های نمونه
const chartData = [
  { name: "Jan", uv: 4000 },
  { name: "Feb", uv: 3000 },
  { name: "Mar", uv: 5000 },
  { name: "Apr", uv: 2780 },
  { name: "May", uv: 1890 },
];

const mockUsers = [
  { id: 1, name: "John Doe", email: "john@example.com", status: "Active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Inactive" },
  // ... سایر داده‌ها
];

export default Dashbord;
