import AdminLayout from "../layouts/AdminLayout";
import StatCard from "../components/StatCard";

export default function Dashboard() {
  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">
        Welcome Back 👋
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Users"
          value="1,250"
        />

        <StatCard
          title="Orders"
          value="350"
        />

        <StatCard
          title="Revenue"
          value="$12,500"
        />

        <StatCard
          title="Products"
          value="87"
        />
      </div>
    </AdminLayout>
  );
}