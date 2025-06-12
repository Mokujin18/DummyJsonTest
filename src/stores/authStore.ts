import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { AuthState, LoginCredentials, User } from "../types";
import { loginUser, setupAuthInterceptor } from "../api/auth";
import { ERRORS } from "../constants/errors";

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => {
      setupAuthInterceptor(() => get().token);

      return {
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,

        login: async (credentials: LoginCredentials) => {
          set({ isLoading: true, error: null });

          try {
            const response = await loginUser(credentials);

            const user: User = {
              id: response.id,
              username: response.username,
              email: response.email,
              firstName: response.firstName,
              lastName: response.lastName,
              gender: response.gender,
              image: response.image,
              token: response.accessToken,
              refreshToken: response.refreshToken,
            };

            set({
              user,
              token: response.accessToken,
              isAuthenticated: true,
              isLoading: false,
              error: null,
            });
          } catch (error) {
            set({
              user: null,
              token: null,
              isAuthenticated: false,
              isLoading: false,
              error:
                error instanceof Error
                  ? error.message
                  : ERRORS.AUTH.ERROR_AUTHORIZATION,
            });
            throw error;
          }
        },
        logout: () => {
          set({
            user: null,
            token: null,
            isAuthenticated: false,
            isLoading: false,
            error: null,
          });
        },

        clearError: () => {
          set({ error: null });
        },
      };
    },
    {
      name: "auth-storage",
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
