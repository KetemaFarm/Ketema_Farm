import { Link, Form, redirect, useNavigation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import logo from "../assets/logo.png";
import { customFetch } from "../utils";

export const loader = (store) => async () => {
  // const user = store.getState().userState.user;

  // if (
  //   user.role === "FARMER" ||
  //   user.role === "BUYER" ||
  //   user.role === "LANDOWNER"
  // ) {
  //   toast.warn("Only you can post Lands");
  //   return redirect("/postLands");
  // }
  return null;
};

export const action =
  (store) =>
  async ({ request }) => {
    const state = store.getState();
    const user = state.userState.user;

    // Check if user is authenticated
    if (!user?.token) {
      toast.error("Please login to post land");
      return redirect("/login");
    }

    const formData = await request.formData();
    console.log(Object.fromEntries(formData));

    try {
      const response = await customFetch.post("/land/", formData, {
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Land posted successfully");
      return redirect("/");
    } catch (error) {
      let errorMessage = "Failed to post land";

      // Handle different error cases
      if (error.response) {
        // Server responded with error status (4xx/5xx)
        console.error("Server error:", error.response.data);
        errorMessage =
          error.response.data?.message ||
          error.response.data?.detail ||
          "Server rejected the request";
      } else if (error.request) {
        // Request was made but no response received
        console.error("Network error:", error.message);
        errorMessage = "Network error - backend might be down";
      } else {
        // Other setup errors
        console.error("Request setup error:", error.message);
      }

      toast.error(errorMessage);
      return null; // Stay on current page
    }
  };

const PostLands = () => {
  const [previewImage, setPreviewImage] = useState(null);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

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
    <div className="flex flex-row justify-center items-center bg-green-50">
      <div className="mt-10 max-w-md mx-3 rounded-xl shadow-md bg-white overflow-hidden p-6 md:max-w-2xl  border-1 border-green-950 flex flex-col gap-2 items-center justify-center">
        <img src={logo} alt="logo" className="w-35" />
        <h2 className=" font-bold text-green-800 mb-6 font-['Rubik'] text-md">
          Post Your Land
        </h2>

        <Form method="POST" encType="multipart/form-data">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 font-['Kanit']"
              htmlFor="title"
            >
              Land Name
            </label>
            <input
              className="shadow appearance-none border-1 border-gray-300 rounded w-full font-['Montserrat'] py-2 px-3 text-xs text-gray-700 leading-tight focus:outline-none "
              id="title"
              type="text"
              name="title"
              placeholder="e.g., Sunny Rooftop Patch"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2 font-['Rubik'] text-sm"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              className="shadow appearance-none text-xs rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 font-['Montserrat'] border-1 border-gray-300"
              id="description"
              name="description"
              placeholder="Describe the product..."
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 font-['Rubik']"
              htmlFor="city"
            >
              City
            </label>
            <select
              className="shadow appearance-none border-1 border-gray-300 font-['Montserrat'] text-xs rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                className="block text-gray-700 text-sm font-bold mb-2 font-[Rubik]"
                htmlFor="size"
              >
                Size
              </label>
              <input
                className=" border-1 border-gray-300 text-xs font-['Montserrat'] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                id="size"
                type="text"
                name="size"
                placeholder="e.g., 20arcs"
                required
              />
            </div>

            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2 font-['Kanit']"
                htmlFor="price"
              >
                Price (Birr)
              </label>
              <input
                className="border-1 border-gray-300 text-xs font-['Montserrat'] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
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
              className="block text-gray-700 text-sm font-bold mb-2 font-['Kanit']"
              htmlFor="image"
            >
              Land Image
            </label>
            <input
              className="rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none text-xs font-['Montserrat'] border-1 border-gray-300"
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
              className="font-['Rubik'] text-gray-600 text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className={`bg-green-900 font-['Rubik'] text-xs hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                isSubmitting ? "opacity-75 cursor-not-allowed" : ""
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Posting...
                </span>
              ) : (
                "Post Land"
              )}
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default PostLands;
