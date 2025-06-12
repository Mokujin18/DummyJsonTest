import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthGuard } from "../components/Auth/AuthGuard";
import { Header } from "../components/Layout/Header";
import { fetchProductById } from "../api/products";
import type { Product } from "../types";
import { ProductGallery } from "../components/Products/ProductGallery";
import { ProductInfo } from "../components/Products/ProductInfo";
import { ProductSpecs } from "../components/Products/ProductSpecs";
import { ProductAdditionalInfo } from "../components/Products/ProductAdditionalInfo";

export const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProduct = async () => {
      if (!id) return;

      try {
        setIsLoading(true);
        setError(null);
        const productData = await fetchProductById(Number(id));
        setProduct(productData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error loading product");
      } finally {
        setIsLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="text-center py-12">
          <div className="text-red-500 mb-4">{error}</div>
          <button
            onClick={() => window.history.back()}
            className="text-blue-500 hover:text-blue-700"
          >
            ← Back
          </button>
        </div>
      );
    }

    if (!product) {
      return (
        <div className="text-center py-12">
          <div className="text-gray-500 mb-4">Product not found</div>
          <button
            onClick={() => window.history.back()}
            className="text-blue-500 hover:text-blue-700"
          >
            ← Back
          </button>
        </div>
      );
    }

    return (
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProductGallery
            images={product.images}
            thumbnail={product.thumbnail}
            title={product.title}
          />

          <div className="space-y-6">
            <ProductInfo
              title={product.title}
              brand={product.brand}
              price={product.price}
              discountPercentage={product.discountPercentage}
              description={product.description}
            />

            <div className="space-y-4">
              <ProductSpecs
                category={product.category}
                rating={product.rating}
                stock={product.stock}
                sku={product.sku}
              />

              <ProductAdditionalInfo
                warrantyInformation={product.warrantyInformation}
                shippingInformation={product.shippingInformation}
                returnPolicy={product.returnPolicy}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <AuthGuard>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <Header />
        <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          {renderContent()}
        </main>
      </div>
    </AuthGuard>
  );
};
