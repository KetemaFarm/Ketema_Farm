import { Form, Link, redirect, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../assets/logo.png";
import { customFetch } from "../utils";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const phone = formData.get("phone");
  const phoneRegex = /^\+251\d{7}(\d{2})?$/;

  const data = Object.fromEntries(formData);
  console.log(data)
  try {
    if (!phone || !phoneRegex.test(phone)) {
      throw {
        response: {
          data: {
            phone: [
              "Phone number must be in the format +251 followed by 9 digits.",
            ],
          },
        },
      };
    }

    const response = await customFetch.post("auth/register/", data);
    toast.success(response.data.message);
    return redirect("/login");
  } catch (error) {
    const errorMessage =
      error.response?.data?.phone?.[0] || "Registration failed";
    toast.error(errorMessage);
    return null;
  }
};

const Register = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState("+251");

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (value.startsWith("+251") && value.length <= 13) {
      setPhone(value);
    }
  };

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
              name="username"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 font-['Montserrat'] text-sm"
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
            <div className="relative">
              <input
                type="tel"
                id="phone"
                name="phone"
                value={phone}
                onChange={handlePhoneChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 font-['Montserrat'] text-sm pr-12"
                required
              />
              {phone.length > 5 && (
                <span className="absolute right-2 top-2 text-xs text-gray-500">
                  {phone.length - 4}/9
                </span>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1 font-['Kanit']"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 font-['Montserrat'] text-sm pr-10"
                required
                minLength="6"
              />
              <button
                type="button"
                className="absolute right-2 top-2 text-gray-500 hover:text-green-700"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <FaEyeSlash className="h-5 w-5" />
                ) : (
                  <FaEye className="h-5 w-5" />
                )}
              </button>
            </div>
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
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 font-['Rubik']"
            >
              <option value="BUYER">Buyer</option>
              <option value="STORE_OWNER">Store Owner</option>
              <option value="LANDOWNER">Landowner</option>
              <option value="FARMER">Farmer</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full font-['Rubik'] bg-green-800 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
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
                Registering...
              </span>
            ) : (
              "Register"
            )}
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
