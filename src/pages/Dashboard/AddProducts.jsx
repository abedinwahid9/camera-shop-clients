import { useForm } from "react-hook-form";
import Button from "../../components/share/Button";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useUserData from "../../hooks/useUserData";
import { useContext } from "react";
import { DataContext } from "../../DataProvider/DataProvider";
import Swal from "sweetalert2";

const AddProducts = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  // const [images, setImages] = useState([]);
  const useAxios = useAxiosPublic();
  const userId = useUserData();
  const { refresh } = useContext(DataContext);

  const onSubmit = async (data) => {
    const brand = data.brand;
    const category = data.category;
    const description = data.description;
    const imageLink = data.imageLink;
    const name = data.name;
    const price = data.price;
    const stock = data.stock;
    const user = userId._id;

    const product = {
      brand,
      category,
      description,
      imageLink,
      name,
      price,
      stock,
    };

    const token = localStorage.getItem("access-token");

    const res = await useAxios.post(
      "/products",
      { ...product, user },
      { headers: { authorization: `Bearer ${token}` } }
    );
    console.log(res);

    if (res.status === 201) {
      Swal.fire(
        {
          title: "add product",
          icon: "success",
        },
        refresh(),
        reset()
      );
    }
    if (res.status === 203) {
      Swal.fire({
        title: "Please wait",
        text: `${res.data.message}`,
        icon: "warning",
      });
    }
  };

  // const handleImageChange = (e) => {
  //   setImages(Array.from(e.target.files));
  // };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 bg-white rounded-lg "
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Product</h2>
      <div className="flex flex-col md:flex-row gap-2">
        <div className="mb-4 md:w-3/5 w-full">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Product Name
          </label>
          <input
            id="name"
            {...register("name", { required: "Product name is required" })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.name && (
            <p className="text-red-500 text-xs italic">{errors.name.message}</p>
          )}
        </div>

        <div className="mb-4 md:w-2/5 w-full">
          <label
            htmlFor="category"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Category
          </label>
          <select
            id="category"
            {...register("category", { required: "Category is required" })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option disabled value="">
              Select a category
            </option>
            <option value="camera">Camera</option>
            <option value="tools">tools</option>
            <option value="accessories">accessories</option>
            {/* Add more categories as needed */}
          </select>
          {errors.category && (
            <p className="text-red-500 text-xs italic">
              {errors.category.message}
            </p>
          )}
        </div>
      </div>
      <div className="flex gap-2">
        <div className="mb-4 w-full">
          <label
            htmlFor="category"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Brand
          </label>
          <select
            id="brand"
            {...register("brand", { required: "Brand is required" })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option disabled value="all">
              Select a Brand
            </option>
            <option value="canon">Canon</option>
            <option value="nekon">Nekon</option>
            <option value="sony">Sony</option>
            {/* Add more categories as needed */}
          </select>
          {errors.brand && (
            <p className="text-red-500 text-xs italic">
              {errors.brand.message}
            </p>
          )}
        </div>
        <div className="mb-4  w-full">
          <label
            htmlFor="price"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Price
          </label>
          <input
            id="price"
            type="number"
            step="0.01"
            {...register("price", { required: "Price is required", min: 0 })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.price && (
            <p className="text-red-500 text-xs italic">
              {errors.price.message}
            </p>
          )}
        </div>
        <div className="mb-6  w-full">
          <label
            htmlFor="stock"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Stock
          </label>
          <input
            id="stock"
            type="number"
            {...register("stock", { required: "Stock is required", min: 0 })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.stock && (
            <p className="text-red-500 text-xs italic">
              {errors.stock.message}
            </p>
          )}
        </div>
      </div>
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Description
        </label>
        <textarea
          id="description"
          {...register("description", {
            required: "Description is required",
            maxLength: 255,
          })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20"
        ></textarea>
        {errors.description && (
          <p className="text-red-500 text-xs italic">
            {errors.description.message}
          </p>
        )}
        {errors.description?.type === "maxLength" && (
          <p className="text-red-500 text-xs italic">text length limit 255</p>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="images"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Images
        </label>
        <input
          {...register("imageLink", {
            required: "image link is required",
          })}
          id="images"
          type="text"
          multiple
          // onChange={handleImageChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.imageLink && (
          <p className="text-red-500 text-xs italic">
            {errors.imageLink.message}
          </p>
        )}
      </div>

      <div type="submit" className="flex items-center justify-center">
        {userId.status === "pending" ? (
          <p className="text-xl text-wrap text-red-600 font-semibold">
            user is pending. admin checking your profile. please wait...
          </p>
        ) : (
          <Button title="add product" />
        )}
      </div>
    </form>
  );
};

export default AddProducts;
