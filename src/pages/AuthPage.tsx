import { useEffect } from "react";
import { useAuthStore } from "../stores/authStore";
import { LoginForm } from "../components/Auth/LoginForm";
import { useNavigate } from "react-router-dom";
import { URL } from "../constants/url";
export const AuthPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();

  useEffect(() => {
    if (isAuthenticated) {
      navigate(URL.PRODUCTS);
    }
  }, [isAuthenticated, navigate]);

  return <LoginForm />;
};
