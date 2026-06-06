import AdminLayout from "../layouts/AdminLayout";
import DataTable from "../components/DataTable";
import { useState,useEffect } from "react";
import Pagination from "../components/Pagination";
import Modal from "../components/Modal";
import Toast from "../components/Toast";

const columns = [
  {
    key: "id",
    label: "ID",
  },
  {
    key: "name",
    label: "Name",
  },
  {
    key: "email",
    label: "Email",
  },
];

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@mail.com",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane@mail.com",
  },
];

export default function Users() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] =
  useState(false);
const [showToast, setShowToast] =
  useState(false);

useEffect(() => {
  if (!isModalOpen) return;

  const handleEsc = (e) => {
    if (e.key === "Escape") {
      setIsModalOpen(false);
    }
  };

  window.addEventListener("keydown", handleEsc);

  return () => {
    window.removeEventListener("keydown", handleEsc);
  };
}, [isModalOpen]);

  // Filter data users berdasarkan searchQuery
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSave = () => {
  setIsModalOpen(false);
  setShowToast(true);
};
  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">
        Users
      </h1>
<div className="mb-4">
  <input
    type="text"
    placeholder="Search users..."
    className="border rounded-lg px-4 py-2"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
  />
</div>
<button onClick={() => setIsModalOpen(true)}
  className="bg-slate-700 text-white px-4 py-2 rounded"
>
  + Add User
</button>
      <DataTable
        columns={columns}
        data={filteredUsers}
      />
      <div className="mt-4 text-sm text-gray-500">
  Showing 1 to 10 of 50 entries
</div>
      <Pagination
  currentPage={currentPage}
  totalPages={5}
  onPageChange={setCurrentPage}
/>
<Modal
  isOpen={isModalOpen}
  title="Add New User"
  onClose={() => setIsModalOpen(false)}
>
  <div className="space-y-4">
    <input
      type="text"
      placeholder="Name"
      className="w-full border rounded px-3 py-2"
    />

    <input
      type="email"
      placeholder="Email"
      className="w-full border rounded px-3 py-2"
    />

    <div className="flex justify-end gap-2">
      <button
        className="border px-4 py-2 rounded"
        onClick={() => setIsModalOpen(false)}
      >
        Cancel
      </button>

     <button
  onClick={handleSave}
  className="bg-slate-700 text-white px-4 py-2 rounded-lg"
>
  Save
</button>
    </div>
  </div>
</Modal>
<Toast
  show={showToast}
  message="User Added Successfully"
  type="success"
  onClose={() => setShowToast(false)}
/>
    </AdminLayout>
  );
}