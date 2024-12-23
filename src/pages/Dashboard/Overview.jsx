import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useUserData from "../../hooks/useUserData";

const Overview = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const useAxios = useAxiosPublic();

  const user = useUserData();
  const admin = user?.role === "admin";

  // Fetch users
  const fetchUsers = async () => {
    try {
      const res = await useAxios.get("/users");
      setUsers(res.data); // Assuming the API returns user data in res.data
    } catch (err) {
      setError(err.message);
    }
  };
  console.log(users);
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Total Sales
          </h2>
          <p className="text-3xl font-bold text-blue-600">0</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Total Orders
          </h2>
          <p className="text-3xl font-bold text-green-600">0</p>
        </div>
        {admin && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              Total Users
            </h2>
            <p className="text-3xl font-bold text-purple-600">{users.length}</p>
          </div>
        )}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Total Products
          </h2>
          <p className="text-3xl font-bold text-orange-600">0</p>
        </div>
      </div>
    </main>
  );
};

export default Overview;
