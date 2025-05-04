import { Link, Form, redirect } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const action =
  (store) =>
  async ({ request }) => {
    const state = store.getState();
    const user = state.userState.user;
    // console.log(user.token);

    const formData = await request.formData();

    try {
      const response = await axios.post(
        "https://ketema-farm-backend.onrender.com/api/products/",
        formData, // Send FormData directly instead of converting to object
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "multipart/form-data", // This is crucial for file uploads
          },
        }
      );
      // console.log(response.data);
      toast.success("Product posted successfully.");
      return redirect("/");
    } catch (error) {
      console.error(
        "Error posting product:",
        error.response?.data || error.message
      );
      return error.response?.data || { error: error.message };
    }
  };

const PostProducts = () => {
  const [previewImage, setPreviewImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mt-10 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Post Agricultural Product
      </h2>

      <Form method="POST" encType="multipart/form-data">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Product Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            name="name"
            placeholder="e.g., Organic Fertilizer"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
            id="description"
            name="description"
            placeholder="Describe the product..."
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="category"
          >
            Category
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="category"
            name="category"
            required
          >
            <option value="">Select a category</option>
            <option value="VEGETABLES">Vegetables</option>
            {/* <option value="CEREALS">Fruits</option> */}
            <option value="FRUITS">Seedlings</option>
            <option value="FLOWERS">Flower</option>
            <option value="TOOLS">Mushrooms</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="city"
          >
            City
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="city"
            name="city"
            required
          >
            <option value="">Select your city</option>
            <option value="ADDIS_ABABA">Addis Ababa</option>
            <option value="ADAMA">Adama</option>
            <option value="BAHIR_DAR">Bahir Dar</option>
            <option value="GONDAR">Gondar</option>
            <option value="MEKELLE">Mekele</option>
            <option value="DIRE_DAWA">Dire Dawa</option>
            <option value="HAWASSA">Hawassa</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="size"
            >
              Size/Quantity
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="size"
              type="text"
              name="quantity"
              placeholder="e.g., 50kg bag"
              required
            />
          </div>

          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="price"
            >
              Price (Birr)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="price"
              type="number"
              name="price"
              placeholder="0.00"
              min="0"
              step="0.01"
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="image"
          >
            Product Image
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="image"
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
          {previewImage && (
            <div className="mt-4">
              <img
                src={previewImage}
                alt="Preview"
                className="h-40 rounded-md object-cover"
              />
            </div>
          )}
        </div>

        <div className="flex justify-end space-x-4">
          <Link
            to="/"
            type="button"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Post Product
          </button>
        </div>
      </Form>
    </div>
  );
};

export default PostProducts;
