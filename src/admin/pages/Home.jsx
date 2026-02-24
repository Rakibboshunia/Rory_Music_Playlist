import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PageHeader from "../components/common/PageHeader";
import StatsCard from "../components/common/StatsCard";
import TableWrapper from "../components/common/TableWrapper";
import Table from "../components/common/Table";
import Badge from "../components/common/Badge";
import DeleteAction from "../components/common/DeleteAction";

export default function Home() {
  const navigate = useNavigate();

  const [stats, setStats] = useState([]);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/admin/dashboard`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = res?.data?.data;

      if (!data) return;

      // Map stats
      setStats([
        {
          icon: "mdi:account-group",
          value: data.totals.totalUsers,
          label: "Total Users",
        },
        {
          icon: "mdi:music-note",
          value: data.totals.totalPlaylists,
          label: "Total Playlists",
        },
        {
          icon: "mdi:credit-card",
          value: data.totals.paidUsers,
          label: "Paid Users",
        },
        {
          icon: "mdi:account",
          value: data.totals.freeUsers,
          label: "Free Users",
        },
      ]);

      // Map activities
      const formattedActivities = data.recentActivity.map((item, index) => ({
        id: index,
        email: item.user,
        title: item.playlistTitle,
        type: item.type,
        date: new Date(item.date).toLocaleString(),
      }));

      setActivities(formattedActivities);
    } catch (error) {
      console.error("Dashboard Error:", error);
    } finally {
      setLoading(false);
    }
  };

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