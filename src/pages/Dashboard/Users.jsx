import { useCallback, useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { MdDeleteForever } from "react-icons/md";
import Loading from "../Loading/Loading";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const useAxios = useAxiosPublic();

  // Fetch users
  const fetchUsers = useCallback(async () => {
    try {
      setLoading(true);
      const res = await useAxios.get("/users");
      setUsers(res.data); // Assuming the API returns user data in res.data
      setLoading(false);
    } catch (err) {
      setError(err.message);
    }
  }, [useAxios]);

  useEffect(() => {
    fetchUsers();
  }, []); // Empty dependency array to run only once on component mount

  if (loading) {
    return <Loading />;
  }

  const handleStatus = async (data, status) => {
    const res = await useAxios.patch(`/users/${data}`, { status });
    console.log(res);
    fetchUsers();
  };

  return (
    <div className="overflow-x-auto">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      {error && <p className="text-red-500">Error: {error}</p>}
      {users.length > 0 ? (
        <table className="table">
          {/* Table Head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>action</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <>
                    {user.role === "admin" ? (
                      <option value="buyer">Admin Approve</option>
                    ) : (
                      <select
                        onChange={(e) => {
                          handleStatus(user._id, e.target.value);
                        }}
                        className="select select-sm"
                      >
                        <option
                          value="pending"
                          selected={user.status === "pending"}
                        >
                          Pending
                        </option>
                        <option
                          value="approved"
                          selected={user.status === "approved"}
                        >
                          Approved
                        </option>
                        <option
                          value="block"
                          selected={user.status === "block"}
                        >
                          block
                        </option>
                      </select>
                    )}
                  </>
                </td>
                <td>
                  <button className="btn text-lg hover:bg-optional-color bg-red-600 text-white btn-sm">
                    <MdDeleteForever />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-500">No users found.</p>
      )}
    </div>
  );
};

export default Users;
