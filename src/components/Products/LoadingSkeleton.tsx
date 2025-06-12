export const LoadingSkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {Array.from({ length: 12 }).map((_, index) => (
      <div
        key={index}
        className="bg-white rounded-xl border border-gray-100 overflow-hidden animate-pulse"
      >
        <div className="h-48 sm:h-64 bg-gray-200" />

        <div className="p-4 space-y-3">
          <div className="flex justify-between">
            <div className="h-4 bg-gray-200 rounded w-16" />
            <div className="h-4 bg-gray-200 rounded w-12" />
          </div>
          <div className="h-6 bg-gray-200 rounded w-3/4" />
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-2/3" />
          <div className="flex items-center space-x-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-4 w-4 bg-gray-200 rounded" />
            ))}
          </div>
          <div className="h-6 bg-gray-200 rounded w-20" />
          <div className="h-10 bg-gray-200 rounded w-full" />
        </div>
      </div>
    ))}
  </div>
);
