import { Alert } from "../UI/Alert/Alert";
import { Button } from "../UI/Button";

interface ErrorMessageProps {
  error: string;
  variant?: "simple" | "withClose" | "withRetry";
  onClose?: () => void;
  className?: string;
}

export const ErrorMessage = ({
  error,
  variant = "simple",
  onClose,
  className = "",
}: ErrorMessageProps) => {
  if (!error) return null;

  switch (variant) {
    case "withRetry":
      return (
        <div className="text-center py-12">
          <div className="max-w-md mx-auto">
            <Alert
              variant="error"
              title="An error occurred"
              className={className}
              action={
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => window.location.reload()}
                >
                  Try again
                </Button>
              }
            >
              {error}
            </Alert>
          </div>
        </div>
      );

    case "withClose":
      return (
        <Alert
          variant="error"
          title="Loading error"
          onClose={onClose}
          className={className}
        >
          {error}
        </Alert>
      );

    default:
      return (
        <Alert variant="error" className={className}>
          {error}
        </Alert>
      );
  }
};
