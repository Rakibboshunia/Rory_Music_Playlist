import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/common/PageHeader";
import StatsCard from "../components/common/StatsCard";
import TableWrapper from "../components/common/TableWrapper";
import Table from "../components/common/Table";
import Badge from "../components/common/Badge";
import DeleteAction from "../components/common/DeleteAction";

const stats = [
  { icon: "mdi:account-group", value: "2,847", label: "Total Users", trend: "+12%" },
  { icon: "mdi:music-note", value: "1,392", label: "Total Playlists", trend: "+8%" },
  { icon: "mdi:credit-card", value: "643", label: "Paid Users", trend: "+23%" },
  { icon: "mdi:account", value: "2,204", label: "Free Users", trend: "+5%" },
];

const initialActivities = [
  { id: 1, email: "rakibul@example.com", title: "Groovy Sunset Vibes", type: "Free", date: "15 mins ago" },
  { id: 2, email: "sarah@example.com", title: "Classic Jazz for Sunday", type: "Paid", date: "30 mins ago" },
  { id: 3, email: "david@example.com", title: "Energetic Workout Mix", type: "Free", date: "1 hour ago" },
  { id: 4, email: "emma@example.com", title: "Chill Vibes After Work", type: "Paid", date: "2 hours ago" },
];

export default function Home() {
  const navigate = useNavigate();
  const [activities, setActivities] = useState(initialActivities);

  const handleDelete = (id) => {
    setActivities((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <PageHeader
        title="Dashboard"
        subtitle="Overview of your playlist quiz platform"
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <StatsCard key={i} {...s} />
        ))}
      </div>

      <TableWrapper
        title="Recent Activity"
        actionSlot={
          <button
            onClick={() => navigate("/admin/playlists")}
            className="text-md font-bold text-blue-600 hover:underline cursor-pointer"
          >
            View All
          </button>
        }
      >
        <Table
          columns={["User", "Playlist Title", "Type", "Date", "Action"]}
          data={activities}
          renderRow={(item) => (
            <>
              <td className="px-6 py-6">{item.email}</td>
              <td className="px-6 py-6">{item.title}</td>
              <td className="px-6 py-6">
                <Badge type={item.type} />
              </td>
              <td className="px-6 py-6 text-gray-500">{item.date}</td>
              <td className="px-6 py-6">
                <DeleteAction onDelete={() => handleDelete(item.id)} />
              </td>
            </>
          )}
        />
      </TableWrapper>
    </>
  );
}