/**
 * AdminDashboard: Lists all applications with pagination, status update, delete, and detail view.
 * Uses usePersistedQuery to fetch GET /api/applications; PATCH/DELETE for status and delete.
 */
import { useState } from "react";
import { usePersistedQuery } from "../usePersistedQuery";
import ApplicantDetails from "./ApplicantDetails";
import PaginationSelection from "./PaginationSelection";

const AdminDashboard = () => {
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 8,
  });
  const [showDeletePopup, setShowDeletePopup] = useState(false); // Add delete popup state
  const [applicationToDelete, setApplicationToDelete] = useState(null); // Track which application to delete

  const apiBaseUrl =
    import.meta.env.MODE === "development"
      ? import.meta.env.VITE_API_BASE_URL_LOCAL // Local backend
      : import.meta.env.VITE_API_BASE_URL_RENDER; // Render backend

  // Fetch applications using usePersistedQuery
  const {
    data: applications = [],
    isLoading,
    refetch, // Add refetch function to manually refresh data
  } = usePersistedQuery({
    queryKey: ["applications"],
    queryFn: async () => {
      const response = await fetch(`${apiBaseUrl}/api/applications`);
      if (!response.ok) throw new Error("Failed to fetch applications");
      return response.json();
    },
    options: { staleTime: 1000 * 60 * 5 }, // Cache for 5 minutes
  });

  // Handle delete button click
  const handleDeleteClick = (application) => {
    setApplicationToDelete(application);
    setShowDeletePopup(true);
  };

  // Confirm delete
  const confirmDelete = async () => {
    try {
      await fetch(`${apiBaseUrl}/api/applications/${applicationToDelete.id}`, {
        method: "DELETE",
      });
      setShowDeletePopup(false);
      setApplicationToDelete(null);
      refetch(); // Refetch the applications to update the table
    } catch (error) {
      console.error("Error deleting application:", error);
    }
  };

  // Cancel delete
  const cancelDelete = () => {
    setShowDeletePopup(false);
    setApplicationToDelete(null);
  };

  // Handle status change
  const handleStatusChange = async (id, newStatus) => {
    try {
      const response = await fetch(
        `${apiBaseUrl}/api/applications/${id}/status`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: newStatus }),
        }
      );
      if (!response.ok) throw new Error("Failed to update status");
      refetch(); // Refetch the applications to update the table
    } catch (error) {
      console.error("Error updating application status:", error);
    }
  };

  // Client-side pagination: slice the full list by current page and page size
  const paginatedApplications = applications.slice(
    pagination.pageIndex * pagination.pageSize,
    (pagination.pageIndex + 1) * pagination.pageSize
  );

  return (
    <div className="container mx-auto py-24">
      <h2 className="text-2xl text-center font-bold mb-4">Application Lists</h2>

      {/* Row for Number of Applications and Pagination Selection */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-gray-600 text-sm">
          Number of Applicants: {applications.length}
        </div>
        <PaginationSelection
          pagination={pagination}
          setPagination={setPagination}
        />
      </div>

      {/* Skeleton Loading */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: pagination.pageSize }).map((_, index) => (
            <div
              key={index}
              className="h-12 bg-gray-200 animate-pulse rounded"
            ></div>
          ))}
        </div>
      ) : applications.length === 0 ? (
        // Empty State
        <div className="text-center text-gray-500 mt-8">
          Applicant Database Empty
        </div>
      ) : (
        <table className="w-full border-collapse border border-gray-300 text-center mt-4">
          <thead>
            <tr>
              <th className="border border-gray-300 p-1">Created Date</th>
              <th className="border border-gray-300 p-1">Full Name</th>
              <th className="border border-gray-300 p-1">Age</th>
              <th className="border border-gray-300 p-1">Gender</th>
              <th className="border border-gray-300 p-1">E-mail</th>
              <th className="border border-gray-300 p-1">Telephone</th>
              <th className="border border-gray-300 p-1">Status</th>
              <th className="border border-gray-300 p-1">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedApplications.map((app) => (
              <tr key={app.id}>
                <td className="border border-gray-300 p-1">
                  {new Date(app.createdAt).toLocaleDateString()}
                </td>
                <td className="border border-gray-300 p-1">
                  {app.firstName} {app.lastName}
                </td>
                <td className="border border-gray-300 p-1">
                  {new Date().getFullYear() -
                    new Date(app.birthDate).getFullYear()}
                </td>
                <td className="border border-gray-300 p-1">{app.gender}</td>
                <td className="border border-gray-300 p-1">{app.email}</td>
                <td className="border border-gray-300 p-1">{app.telephone}</td>
                <td className="border border-gray-300 p-1 text-center align-middle">
                  <div className="flex items-center justify-center h-full">
                    <span
                      className={`flex items-center justify-center w-24 h-8 rounded-3xl border-2 text-white ${
                        app.status === "Pending"
                          ? "bg-orange-500"
                          : app.status === "Approved"
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    >
                      {app.status}
                    </span>
                  </div>
                </td>
                <td className="border border-gray-300 p-2 flex justify-center gap-2">
                  <button
                    onClick={() => setSelectedApplication(app)}
                    className="bg-white text-secondary border-secondary rounded-xl border-2 hover:bg-secondary hover:text-white hover:border-slate-300 transition duration-300 flex items-center justify-center px-2 py-1"
                  >
                    Details
                  </button>
                  <button
                    onClick={() => handleDeleteClick(app)}
                    className="bg-white text-red-500 border-red-500 rounded-xl border-2 hover:bg-red-500 hover:text-white hover:border-slate-300 transition duration-300 flex items-center justify-center  px-2 py-1"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() =>
            setPagination((prev) => ({
              ...prev,
              pageIndex: Math.max(prev.pageIndex - 1, 0),
            }))
          }
          disabled={pagination.pageIndex === 0}
          className="bg-slate-300 px-4 py-2 rounded-xl disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-sm text-gray-500">
          Page {pagination.pageIndex + 1} of{" "}
          {Math.ceil(applications.length / pagination.pageSize)}
        </span>
        <button
          onClick={() =>
            setPagination((prev) => ({
              ...prev,
              pageIndex: Math.min(
                prev.pageIndex + 1,
                Math.ceil(applications.length / pagination.pageSize) - 1
              ),
            }))
          }
          disabled={
            pagination.pageIndex >=
            Math.ceil(applications.length / pagination.pageSize) - 1
          }
          className="bg-slate-300 px-4 py-2 rounded-xl disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* Use ApplicantDetails component for the popup */}
      <ApplicantDetails
        application={selectedApplication}
        onClose={() => setSelectedApplication(null)}
        onStatusChange={handleStatusChange} // Pass status change handler
      />

      {/* Delete Confirmation Popup */}
      {showDeletePopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <p className="text-lg font-medium mb-4">
              Are you sure you want to delete this applicant from your database?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={confirmDelete}
                className="bg-red-500 text-white rounded-xl border-2 hover:bg-white hover:text-red-500 hover:border-red-500 transition duration-300 flex items-center justify-center px-4 py-2"
              >
                Yes
              </button>
              <button
                onClick={cancelDelete}
                className="bg-slate-500 text-white rounded-xl border-2 hover:bg-white hover:text-slate-500 hover:border-slate-500 transition duration-300 flex items-center justify-center px-4 py-2"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
