import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const generatePages = () => {
    let pages = [];

    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPages, currentPage + 2);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pages = generatePages();

  return (
    <div className="flex items-center justify-center gap-2 mt-6">

      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-2 border rounded-lg disabled:opacity-40 text-red-500"
      >
        <FiChevronLeft />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded-lg border
            ${page === currentPage
              ? "bg-blue-300 text-white"
              : "bg-white text-blue-400"
            }
          `}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-2 border rounded-lg disabled:opacity-40 text-red-500"
      >
        <FiChevronRight />
      </button>
    </div>
  );
}