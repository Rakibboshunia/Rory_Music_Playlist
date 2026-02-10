export default function PageHeader({ title, subtitle, rightSlot }) {
  return (
    <div className="flex justify-between items-start mb-10 py-6">
      <div>
        <h1 className="text-4xl font-semibold text-gray-900">{title}</h1>
        <p className="text-xl text-gray-500 mt-1">{subtitle}</p>
      </div>
      {rightSlot && <div>{rightSlot}</div>}
    </div>
  );
}