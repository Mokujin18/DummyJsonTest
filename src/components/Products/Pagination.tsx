import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useProductStore } from "../../stores/productStore";
import { handlePageChange } from "../../utils/pagination";
import { getVisiblePages } from "../../utils/pagination";
import type { PaginationProps } from "./types";

export const Pagination = ({ className = "" }: PaginationProps) => {
  const { total, currentPage, itemsPerPage, setPage, isLoading } =
    useProductStore();

  const totalPages = Math.ceil(total / itemsPerPage);

  if (totalPages <= 1) {
    return null;
  }

  const visiblePages = getVisiblePages(currentPage, totalPages);

  return (
    <div className={`flex items-center justify-between ${className}`}>
      <div className="flex-1 flex justify-between sm:hidden">
        <button
          onClick={() =>
            handlePageChange(
              currentPage - 1,
              currentPage,
              totalPages,
              isLoading,
              setPage
            )
          }
          disabled={currentPage === 1 || isLoading}
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <button
          onClick={() =>
            handlePageChange(
              currentPage + 1,
              currentPage,
              totalPages,
              isLoading,
              setPage
            )
          }
          disabled={currentPage === totalPages || isLoading}
          className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>

      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing{" "}
            <span className="font-medium">
              {(currentPage - 1) * itemsPerPage + 1}
            </span>{" "}
            до{" "}
            <span className="font-medium">
              {Math.min(currentPage * itemsPerPage, total)}
            </span>{" "}
            of <span className="font-medium">{total}</span> results
          </p>
        </div>

        <div>
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
            <button
              onClick={() =>
                handlePageChange(
                  currentPage - 1,
                  currentPage,
                  totalPages,
                  isLoading,
                  setPage
                )
              }
              disabled={currentPage === 1 || isLoading}
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              <span className="sr-only">Previous</span>
              <FaArrowLeft />
            </button>

            {visiblePages.map((page, index) => {
              if (page === "...") {
                return (
                  <span
                    key={`dots-${index}`}
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"
                  >
                    ...
                  </span>
                );
              }

              const pageNumber = page as number;
              const isCurrentPage = pageNumber === currentPage;

              return (
                <button
                  key={pageNumber}
                  onClick={() =>
                    handlePageChange(
                      pageNumber,
                      currentPage,
                      totalPages,
                      isLoading,
                      setPage
                    )
                  }
                  disabled={isLoading}
                  className={`
                    relative inline-flex items-center px-4 py-2 border text-sm font-medium transition-colors duration-200
                    ${
                      isCurrentPage
                        ? "z-10 bg-blue-50 border-blue-500 text-blue-600"
                        : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50"
                    }
                    ${isLoading ? "opacity-50 cursor-not-allowed" : ""}
                  `}
                >
                  {pageNumber}
                </button>
              );
            })}

            <button
              onClick={() =>
                handlePageChange(
                  currentPage + 1,
                  currentPage,
                  totalPages,
                  isLoading,
                  setPage
                )
              }
              disabled={currentPage === totalPages || isLoading}
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              <span className="sr-only">Next</span>
              <FaArrowRight />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};
