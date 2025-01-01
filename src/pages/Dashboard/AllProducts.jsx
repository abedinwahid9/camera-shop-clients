import { MdDeleteForever } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useCallback, useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const AllProducts = () => {
  const [productData, setProductData] = useState([]);
  const [loadingD, setLoading] = useState(false);
  const useAxios = useAxiosPublic();
  const { user, loading } = useAuth();

  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      const res = await useAxios.get(`/products/single/${user.email}`);
      setProductData(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, [useAxios, user.email]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  if (loading) {
    return <Loading />;
  }
  if (loadingD) {
    return <Loading />;
  }

  const handleDelete = async (e) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: `Your products ${e} has been deleted.`,
          icon: "success",
        });
        const res = await useAxios.delete(`/products/${e}`);
        if (res.status) {
          refresh();
        }
      }
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>ID</th>
            <th>Pname</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {productData.length === 0 ? (
            <div className="w-full flex justify-center py-10">
              <p className="text-2xl  font-bold uppercase  ">no products</p>
            </div>
          ) : (
            productData?.map((data, i) => {
              return (
                <tr key={data._id}>
                  <td>
                    <p>{i + 1}</p>
                  </td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={data?.imageLink}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{data.name}</div>
                        <div className="text-sm opacity-50">
                          {data?.description.slice(0, 25)}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{data?.brand}</td>
                  <td>{data?.category}</td>
                  <td>{data?.price}</td>
                  <td>{data?.stock}</td>
                  <td className="flex flex-col">
                    <Link
                      to={`/dashboard/edit-product/${data?._id}`}
                      className="btn text-lg hover:bg-optional-color bg-secondary-color text-white btn-sm"
                    >
                      <RiEdit2Fill />
                    </Link>
                    <button
                      onClick={() => {
                        handleDelete(data._id);
                      }}
                      className="btn text-lg hover:bg-optional-color bg-red-600 text-white btn-sm"
                    >
                      <MdDeleteForever />
                    </button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            <th>ID</th>
            <th>Pname</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default AllProducts;
