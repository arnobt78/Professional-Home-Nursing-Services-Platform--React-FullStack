/** Dropdown to choose rows-per-page (4–30). Used in AdminDashboard; parent holds pageIndex and pageSize. */
import PropTypes from "prop-types";

const PaginationSelection = ({ pagination, setPagination }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-3">
      <div className="text-gray-500 text-sm">Rows per page</div>
      <select
        value={pagination.pageSize}
        onChange={(e) =>
          setPagination((prev) => ({
            ...prev,
            pageSize: Number(e.target.value),
          }))
        }
        className="border rounded-md px-2 w-full sm:w-14"
      >
        {[4, 6, 8, 10, 15, 20, 30].map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
    </div>
  );
};

PaginationSelection.propTypes = {
  pagination: PropTypes.shape({
    pageIndex: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
  }).isRequired,
  setPagination: PropTypes.func.isRequired,
};

export default PaginationSelection;
