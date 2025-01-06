import { Link, useNavigate } from "react-router-dom"; // For navigation
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import Button from "../../components/share/Button";
import useDataFetch from "../../hooks/useDataFetch";
import Loading from "../Loading/Loading";
import useUserData from "../../hooks/useUserData";

const Wishlist = () => {
  const navigate = useNavigate();

  const user = useUserData();
  const { data: cartItems, loading } = useDataFetch(`/wishlist/${user?.email}`);

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    // const updatedCart = cartItems.filter((item) => item._id !== itemId);
    // setCart(updatedCart);
  };

  // Function to calculate the total price
  const calculateTotal = () => {
    // return cartItems.reduce(
    //   (total, item) => total + item.price * item.quantity,
    //   0
    // );
  };

  const handleCheckout = () => {
    // Swal.fire("order place done");
    // setCart([]);
    // navigate("/");
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container h-screen mx-auto px-4 py-6 ">
      <div className="h-3/4 overflow-y-scroll">
        {" "}
        <h2 className="text-3xl font-bold mb-4">Your Wishlist</h2>
        {cartItems.length === 0 ? (
          <p className="text-lg text-gray-600">
            Your wishlist is empty. Add some items to your wishlist.
          </p>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 border border-gray-300 rounded-lg shadow-md"
              >
                <div className="flex items-center">
                  <img
                    src={item.imageLink}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-md mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500">
                      Price: {item.price} tk
                    </p>
                    <p className="text-sm text-gray-500">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item._id)}
                  className="text-red-600 hover:text-red-800 flex items-center justify-center"
                >
                  <FaTrash className="mr-2" />
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="h-1/4">
        {cartItems.length > 0 && (
          <div className="mt-6">
            <p className="text-xl font-semibold">
              {/* Total: ${calculateTotal().toFixed(2)} */}
            </p>

            <div className="mt-4 flex gap-4">
              <Link
                onClick={handleCheckout}
                //  to="/checkout"
              >
                <Button title="Proceed to Checkout" />
              </Link>
              <button
                // onClick={() =>} // Clear cart
                className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600"
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
