import type { ReactNode } from "react";
import { useAuthStore } from "../../stores/authStore";
import { FaXmark } from "react-icons/fa6";
import { FaSignInAlt } from "react-icons/fa";
import { Button } from "../UI/Button";
import { useNavigate } from "react-router-dom";
import { URL } from "../../constants/url";
interface AuthGuardProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export const AuthGuard = ({ children, fallback }: AuthGuardProps) => {
  const { isAuthenticated } = useAuthStore();
  const navigate = useNavigate();
  if (!isAuthenticated) {
    return (
      fallback || (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 -right-32 w-64 h-64 rounded-full bg-gradient-to-br from-red-400 to-orange-600 opacity-20 animate-pulse"></div>
            <div className="absolute bottom-1/4 -left-32 w-64 h-64 rounded-full bg-gradient-to-br from-orange-400 to-yellow-600 opacity-20 animate-pulse"></div>
          </div>

          <div className="relative max-w-md w-full space-y-8 text-center">
            <div className="mx-auto h-24 w-24 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-2xl ">
              <FaXmark className="h-12 w-12 text-white" />
            </div>

            <div className="bg-white/90 backdrop-blur-sm shadow-2xl rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                    Access restricted
                  </h2>
                  <p className="mt-3 text-gray-600 text-lg">
                    Please login to view this page
                  </p>
                </div>

                <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-6">
                  <div className="flex items-center">
                    <FaXmark className="h-6 w-6 text-amber-600 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-amber-800">
                        Authorization required
                      </p>
                      <p className="text-xs text-amber-700 mt-1">
                        Please login to continue
                      </p>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={() => navigate(URL.LOGIN)}
                  className="w-full flex justify-center items-center py-3 px-6 border border-transparent rounded-xl shadow-lg text-sm font-medium text-white bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <FaSignInAlt className="h-5 w-5 mr-2" />
                  Go to login
                </Button>
              </div>
            </div>
          </div>
        </div>
      )
    );
  }

  return <>{children}</>;
};
