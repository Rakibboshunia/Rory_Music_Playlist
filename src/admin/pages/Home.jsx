import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import PageHeader from "../components/common/PageHeader";
import StatsCard from "../components/common/StatsCard";
import TableWrapper from "../components/common/TableWrapper";
import Table from "../components/common/Table";
import Badge from "../components/common/Badge";
import Pagination from "../components/common/Pagination";

import { getAdminDashboardApi } from "../../api/adminApi";

export default function Home() {
  const navigate = useNavigate();

  const [stats, setStats] = useState([]);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const res = await getAdminDashboardApi();
      const data = res?.data?.data;

      if (!data) return;

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

      const formattedActivities = data.recentActivity.map((item, index) => ({
        id: index,
        email: item.user,
        title: item.playlistTitle,
        type: item.type,
        date: new Date(item.date).toLocaleString(),
      }));

      setActivities(formattedActivities);
    } catch (error) {

    } finally {
      setLoading(false);
    }
  };

  const totalPages = Math.ceil(activities.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;

  const paginatedActivities = activities.slice(
    startIndex,
    startIndex + itemsPerPage
  );

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
          columns={["User", "Playlist Title", "Type", "Date"]}
          data={paginatedActivities}
          renderRow={(item) => (
            <>
              <td className="px-6 py-6">{item.email}</td>
              <td className="px-6 py-6">{item.title}</td>
              <td className="px-6 py-6">
                <Badge type={item.type} />
              </td>
              <td className="px-6 py-6 text-gray-500">{item.date}</td>
            </>
          )}
        />
      </TableWrapper>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
}