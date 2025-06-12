export const getVisiblePages = (currentPage: number, totalPages: number) => {
  const delta = 2;
  const range = [];
  const rangeWithDots = [];

  for (
    let i = Math.max(2, currentPage - delta);
    i <= Math.min(totalPages - 1, currentPage + delta);
    i++
  ) {
    range.push(i);
  }

  if (currentPage - delta > 2) {
    rangeWithDots.push(1, "...");
  } else {
    rangeWithDots.push(1);
  }

  rangeWithDots.push(...range);

  if (currentPage + delta < totalPages - 1) {
    rangeWithDots.push("...", totalPages);
  } else {
    if (totalPages > 1) {
      rangeWithDots.push(totalPages);
    }
  }

  return rangeWithDots;
};

export const handlePageChange = (
  page: number,
  currentPage: number,
  totalPages: number,
  isLoading: boolean,
  setPage: (page: number) => void
) => {
  if (page >= 1 && page <= totalPages && page !== currentPage && !isLoading) {
    setPage(page);
  }
};
