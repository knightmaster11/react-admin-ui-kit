export default function DataTable({
  columns,
  data,
}) {

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className="px-4 py-3 text-left"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.length === 0 && (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center py-10"
              >
                No data available
              </td>
            </tr>
          )}
          {data.map((row, index) => (
            <tr
              key={row.id || index}
              className="border-t"
            >
              {columns.map((column) => (
                <td
                  key={column.key}
                  className="px-4 py-3"
                >
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}