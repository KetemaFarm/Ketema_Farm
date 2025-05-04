import axios from "axios";
import { Form, Link, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../assets/logo.png";
export const action = async ({ request }) => {
  const formData = await request.formData();
  const phone = formData.get("phone");
  // Regex: starts with +251, followed by 9 digits
  const phoneRegex = /^\+251\d{7}(\d{2})?$/;

  const data = Object.fromEntries(formData);
  try {
    const response = await axios.post(
      "https://ketema-farm-backend.onrender.com/api/auth/register/",
      data
    );
    if (!phone || !phoneRegex.test(phone)) {
      throw "Phone number must be in the format +251 followed by 9 digits.";
    }
    console.log(data);
    toast.success(response.data.message);
    console.log(response);
    return redirect("/login");
  } catch (error) {
    toast.error(error.message);
    return null;
  }
};

const Register = () => {
  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex flex-col items-center justify-center gap-2">
          <img className="w-30" src={logo} alt="logo" />
          <h2 className="text-2xl font-bold text-green-700 mb-6 text-center font-['Rubik']">
            Registration
          </h2>
        </div>
        <Form method="POST" className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1 font-['Kanit']"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-1 border border-gray-300 rounded-md focus:outline-none  font-['Montserrat'] text-sm"
              required
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1 font-['Kanit']"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              defaultValue="+251"
              className="w-full p-1 border font-['Montserrat'] text-sm border-gray-300 rounded-md focus:outline-none "
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1 font-['Kanit']"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-1 font-['Montserrat'] border-1 border-gray-300 rounded-md focus:outline-none "
              required
              minLength="6"
            />
          </div>

          <div>
            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-700 mb-1 font-['Kanit']"
            >
              Role
            </label>
            <select
              id="role"
              name="role"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none font-['Rubik']"
            >
              <option
                className="font-['Rubik'] hover:bg-green-800"
                value="BUYER"
              >
                Buyer
              </option>
              <option
                className="font-['Rubik'] hover:bg-green-800"
                value="STORE_OWNER"
              >
                Store Owner
              </option>
              <option
                className="font-['Rubik'] hover:bg-green-800"
                value="LANDOWNER"
              >
                Landowner
              </option>
              <option
                className="font-['Rubik'] hover:bg-green-800"
                value="FARMER"
              >
                Farmer
              </option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full font-['Rubik'] bg-green-800 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
          >
            Register
          </button>
        </Form>

        <div className="mt-4 text-center text-sm text-gray-600 flex flex-row justify-center items-center gap-1">
          <p className="font-['Kanit']">Already have an account?</p>
          <Link
            to="/login"
            className="text-green-600 hover:underline font-['Kanit']"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
