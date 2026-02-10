export default function Table({ columns, data, renderRow }) {
  return (
    <table className="w-full text-md">
      <thead className="text-gray-500 border-b border-gray-200">
        <tr>
          {columns.map((col) => (
            <th
              key={col}
              className="text-left px-6 py-6 text-lg font-medium"
            >
              {col}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((item, i) => (
          <tr
            key={i}
            className="border-b border-gray-200 last:border-0"
          >
            {/* enforce row height via td wrapper */}
            {renderRow(item).map
              ? renderRow(item).map((cell, idx) => (
                  <td
                    key={idx}
                    className="px-6 py-6 text-lg align-middle"
                  >
                    {cell}
                  </td>
                ))
              : renderRow(item)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}