import { useState, type FormEvent } from "react";
import { useAuthStore } from "../../stores/authStore";
import { InputField } from "../UI/Form/InputField";
import { Button } from "../UI/Button";
import { ErrorMessage } from "../common/ErrorMessage";
import { TestCredentials } from "./components/TestCredentials";
import { FaLock, FaUser } from "react-icons/fa6";
import { FaSignInAlt } from "react-icons/fa";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, error, clearError } = useAuthStore();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    clearError();

    try {
      await login({ username, password });
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 p-6">
      <div className="bg-white rounded-3xl shadow-xl w-full max-w-md mx-auto">
        <div className="p-8 space-y-8">
          <TestCredentials />

          {error && <ErrorMessage error={error} className="mb-6" />}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-5 ">
              <InputField
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                label="Username"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={isLoading}
                icon={<FaUser />}
              />

              <InputField
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                label="Password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                icon={<FaLock />}
              />
            </div>

            <div className="pt-2">
              <Button
                disabled={!username || !password || isLoading}
                className="w-full"
                size="md"
                icon={!isLoading ? <FaSignInAlt /> : undefined}
              >
                {isLoading ? "Authorization..." : "Login"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
