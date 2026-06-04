export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}) {
  return (
    <div className="flex items-center justify-end gap-2 mt-4">
      <button
        className="px-3 py-2 border rounded"
        disabled={currentPage === 1}
        onClick={() =>
          onPageChange(currentPage - 1)
        }
      >
        Prev
      </button>

      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() =>
            onPageChange(index + 1)
          }
          className={`px-3 py-2 rounded ${
            currentPage === index + 1
              ? "bg-slate-700 text-white"
              : "border"
          }`}
        >
          {index + 1}
        </button>
      ))}

      <button
        className="px-3 py-2 border rounded"
        disabled={currentPage === totalPages}
        onClick={() =>
          onPageChange(currentPage + 1)
        }
      >
        Next
      </button>
    </div>
  );
}