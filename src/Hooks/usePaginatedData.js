import { useState, useMemo } from 'react';

export default function usePaginatedData(data = [], itemsPerPage = 6) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = useMemo(() => Math.ceil(data.length / itemsPerPage), [data, itemsPerPage]);
  const currentData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return data.slice(startIndex, startIndex + itemsPerPage);
  }, [data, currentPage, itemsPerPage]);

  return { currentPage, totalPages, currentData, setCurrentPage };
}
