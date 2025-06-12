import { FaXmark } from "react-icons/fa6";
import { Alert } from "../../UI/Alert/Alert";

interface ErrorMessageProps {
  error: string;
}

export const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return (
    <Alert
      variant="error"
      icon={<FaXmark className="h-5 w-5 text-red-500 animate-pulse" />}
      className="mb-6"
    >
      <p className="font-medium">{error}</p>
    </Alert>
  );
};
