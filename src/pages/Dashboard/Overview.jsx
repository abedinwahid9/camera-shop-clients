import { useCallback, useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useUserData from "../../hooks/useUserData";
import useAuth from "../../hooks/useAuth";
import Loading from "../Loading/Loading";

const Overview = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [productData, setProductData] = useState([]);
  const [loadingData, setLoadingData] = useState(false);
  const { user: singleUser, loading } = useAuth();
  const useAxios = useAxiosPublic();
  const user = useUserData();

  const admin = user?.role === "admin";
  const seller = user?.role === "seller";
  const buyer = user?.role === "buyer";

  // Fetch users
  const fetchUsers = async () => {
    try {
      const res = await useAxios.get("/users");
      setUsers(res.data); // Assuming the API returns user data in res.data
    } catch (err) {
      setError(err.message);
    }
  };

  const refresh = useCallback(async () => {
    setLoadingData(true);
    try {
      const res = await useAxios.get(`/products/single/${singleUser.email}`);
      setProductData(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoadingData(false);
    }
  }, [useAxios, singleUser.email]);

  useEffect(() => {
    fetchUsers();
    refresh();
  }, [refresh]);

  if (loading) {
    return <Loading />;
  }
  if (loadingData) {
    return <Loading />;
  }

  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {!buyer && (
          <>
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
          </>
        )}

        {buyer && (
          <>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold text-gray-700 mb-2">
                Total Orders Purchase
              </h2>
              <p className="text-3xl font-bold text-green-600">0</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold text-gray-700 mb-2">
                Total Purchase Amount
              </h2>
              <p className="text-3xl font-bold text-green-600">0</p>
            </div>
          </>
        )}
        {admin && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              Total Users
            </h2>
            <p className="text-3xl font-bold text-purple-600">{users.length}</p>
          </div>
        )}
        {seller && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              Total Products
            </h2>
            <p className="text-3xl font-bold text-orange-600">
              {productData.length}
            </p>
          </div>
        )}
      </div>{" "}
      {user.status === "block" && (
        <p className="text-xl text-wrap text-red-600 font-semibold">
          your are temporary blocked. please contact with us.
        </p>
      )}
      {user.status === "pending" && (
        <p className="text-xl text-wrap text-red-600 font-semibold">
          user is pending. admin checking your profile. please wait...
        </p>
      )}
    </main>
  );
};

export default Overview;
