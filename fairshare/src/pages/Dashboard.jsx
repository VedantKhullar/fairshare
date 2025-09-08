import React from "react";
import Card from "../components/Card";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-indigo-600">Dashboard</h1>

      {/* Groups */}
      <Card title="Your Groups">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((id) => (
            <div
              key={id}
              className="p-4 border rounded-xl bg-indigo-50 hover:bg-indigo-100 transition cursor-pointer"
            >
              <h3 className="font-medium text-indigo-700">Group {id}</h3>
              <p className="text-sm text-gray-500">3 members, 5 expenses</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Recent Expenses */}
      <Card title="Recent Expenses">
        <ul className="divide-y divide-gray-200">
          {["Dinner", "Movie Tickets", "Groceries"].map((item, index) => (
            <li key={index} className="flex justify-between py-3">
              <span className="text-gray-700">{item}</span>
              <span className="text-indigo-600 font-medium">
                ₹{(index + 1) * 250}
              </span>
            </li>
          ))}
        </ul>
      </Card>

      {/* Summary */}
      <Card title="Summary">
        <div className="flex gap-6">
          <div className="flex-1 bg-green-50 border border-green-200 p-4 rounded-xl">
            <p className="text-sm text-gray-600">You are owed</p>
            <p className="text-2xl font-bold text-green-700">₹1200</p>
          </div>
          <div className="flex-1 bg-red-50 border border-red-200 p-4 rounded-xl">
            <p className="text-sm text-gray-600">You owe</p>
            <p className="text-2xl font-bold text-red-600">₹800</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
