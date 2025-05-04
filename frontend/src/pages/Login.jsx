import axios from "axios";
import { Form, Link, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../features/user/userSlice";
import logo from "../assets/logo.png";
export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const phone = formData.get("phone");
    // Regex: starts with +251, followed by 9 digits
    const phoneRegex = /^\+251\d{7}(\d{2})?$/;

    const data = Object.fromEntries(formData);
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/auth/login/",
        data
      );
      if (!phone || !phoneRegex.test(phone)) {
        throw "Phone number must be in the format +251 followed by 9 digits.";
      }
      console.log(response.data);
      store.dispatch(loginUser(response.data));
      toast.success("Logged in successfully");
      return redirect("/");
    } catch (error) {
      toast.error("Invalid credentials");
      return null;
    }
  };

const Login = () => {
  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-2">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className=" mb-6 flex flex-col items-center">
          <img className="w-30 sm:w-40" src={logo} alt="logo" />
          <p className="text-gray-600 mt-2 font-['Rubik'] text-xs">
            Log in to your organic food account
          </p>
        </div>
        <Form method="POST" className="space-y-4">
          <div>
            <label
              htmlFor="phone"
              className="block text-sm sm:text-md font-medium text-gray-700 mb-1 font-['Kanit']"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              defaultValue="+251"
              className="w-full sm:text-md px-3 py-2 border-1 border-gray-500 rounded-md text-[10px] font-['Montserrat'] focus:outline-none"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm text-md font-medium text-gray-700 mb-1 font-['Kanit']"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full sm:text-md px-3 py-2 border-1 border-gray-500 rounded-md text-[10px] font-['Montserrat'] focus:outline-none"
              placeholder="Enter your password"
              required
              minLength="6"
            />
          </div>

          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row gap-2 mt-1 sm:mt-2 items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="size-3 sm:size-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className=" block text-[10px] sm:text-xs font-['Montserrat'] text-gray-700"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link
                to="/forgot-password"
                className="font-medium text-green-800 hover:text-green-600 font-['Montserrat'] text-[10px] sm:text-xs"
              >
                Forgot password?
              </Link>
            </div>
          </div>

          <button
            type="submit"
            className="w-full font-['Montserrat'] flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-800 hover:bg-green-700 focus:outline-none sm:mt-4"
          >
            Sign in
          </button>
        </Form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500 font-['Kanit']">
                New to ketemaFarm ?
              </span>
            </div>
          </div>

          <div className="mt-4">
            <Link
              to="/register"
              className="w-full font-['Rubik'] flex justify-center py-2 px-4 border-1 border-green-800 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none "
            >
              Create your account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
