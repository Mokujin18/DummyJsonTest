import { FaUser } from "react-icons/fa";

export const LoginHeader = () => {
  return (
    <div className="text-center">
      <div className="mx-auto h-20 w-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
        <FaUser className="h-10 w-10 text-white" />
      </div>
      <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
        Login to DummyShop
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600">
        Your purchases are waiting for you
      </p>
    </div>
  );
};
