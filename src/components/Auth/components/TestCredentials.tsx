import { FaInfoCircle } from "react-icons/fa";
import { Alert } from "../../UI/Alert/Alert";

export const TestCredentials = () => {
  return (
    <Alert
      variant="info"
      icon={<FaInfoCircle className="h-5 w-5 text-blue-600 mt-0.5" />}
      title="Credentials"
      className="mb-6"
    >
      <div className="space-y-1">
        <div>
          Login:{" "}
          <span className="font-mono bg-blue-100 px-2 py-1 rounded-lg">
            emilys
          </span>
        </div>
        <div>
          Password:
          <span className="font-mono bg-blue-100 px-2 py-1 rounded-lg">
            emilyspass
          </span>
        </div>
      </div>
    </Alert>
  );
};
