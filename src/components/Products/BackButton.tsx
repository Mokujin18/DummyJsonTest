import { useNavigate } from "react-router-dom";
interface BackButtonProps {
  error?: string;
}

export const BackButton = ({
  error = "Error loading product",
}: BackButtonProps) => {
  const navigate = useNavigate();

  return (
    <div className="text-center py-12">
      <div className="text-red-500 mb-4">{error}</div>
      <button
        onClick={() => navigate(-1)}
        className="text-blue-500 hover:text-blue-700"
      >
        ← Back
      </button>
    </div>
  );
};
