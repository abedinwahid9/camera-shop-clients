const Overview = () => {
  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Total Sales
          </h2>
          <p className="text-3xl font-bold text-blue-600">$24,780</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Total Orders
          </h2>
          <p className="text-3xl font-bold text-green-600">1,284</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            New Customers
          </h2>
          <p className="text-3xl font-bold text-purple-600">38</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Inventory
          </h2>
          <p className="text-3xl font-bold text-orange-600">5,678</p>
        </div>
      </div>
    </main>
  );
};

export default Overview;
