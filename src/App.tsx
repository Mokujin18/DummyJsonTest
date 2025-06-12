import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthPage } from "./pages/AuthPage";
import { ProductsPage } from "./pages/ProductsPage";
import { ProductPage } from "./pages/ProductPage";
import { useAuthStore } from "./stores/authStore";
import "./App.css";
import { URL } from "./constants/url";
import { Header } from "./components/Layout/Header";
function App() {
  const { isAuthenticated } = useAuthStore();
  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route path={URL.LOGIN} element={<AuthPage />} />
          <Route path={URL.PRODUCTS} element={<ProductsPage />} />
          <Route path={URL.PRODUCT} element={<ProductPage />} />
          <Route
            path={URL.ROOT}
            element={
              <Navigate
                to={isAuthenticated ? URL.PRODUCTS : URL.LOGIN}
                replace
              />
            }
          />
          <Route
            path="*"
            element={
              <Navigate
                to={isAuthenticated ? URL.PRODUCTS : URL.LOGIN}
                replace
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
