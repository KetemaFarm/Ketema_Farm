import axios from "axios";
import { Form, Link, redirect } from "react-router-dom";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const phone = formData.get("phone");
  // Regex: starts with +251, followed by 9 digits
  const phoneRegex = /^\+251\d{7}(\d{2})?$/;

  const data = Object.fromEntries(formData);
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/auth/register/",
      data
    );
    if (!phone || !phoneRegex.test(phone)) {
      throw "Phone number must be in the format +251 followed by 9 digits.";
    }
    // console.log(data);
    toast.success(response.data.message);
    console.log(response)
    return redirect("/login");
  } catch (error) {
    toast.error(error);
    return null;
  }
};

const Register = () => {
  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
          Organic Food Registration
        </h2>
        <Form method="POST" className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              defaultValue="+251"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
              minLength="6"
            />
          </div>

          <div>
            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Role
            </label>
            <select
              id="role"
              name="role"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="BUYER">Buyer</option>
              <option value="STORE_OWNER">Store Owner</option>
              <option value="LANDOWNER">Landowner</option>
              <option value="FARMER">Farmer</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
          >
            Register
          </button>
        </Form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?
          <Link to="/login" className="text-green-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
