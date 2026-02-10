export default function Badge({ type }) {
  const styles = {
    Free: "bg-blue-100 text-blue-600",
    Paid: "bg-green-100 text-green-600",
  };

  return (
    <span className={`px-5 py-2 rounded-full text-sm font-medium ${styles[type]}`}>
      {type}
    </span>
  );
}