import AdminLayout from "../layouts/AdminLayout";
import DataTable from "../components/DataTable";
import { useState } from "react";
import Pagination from "../components/Pagination";
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

  // Filter data users berdasarkan searchQuery
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
      <DataTable
        columns={columns}
        data={filteredUsers}
      />
      <Pagination
  currentPage={currentPage}
  totalPages={5}
  onPageChange={setCurrentPage}
/>
    </AdminLayout>
  );
}