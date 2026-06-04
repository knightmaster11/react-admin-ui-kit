import AdminLayout from "../layouts/AdminLayout";
import DataTable from "../components/DataTable";

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
  />
</div>
      <DataTable
        columns={columns}
        data={users}
      />
    </AdminLayout>
  );
}