import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import PageHeader from "../components/common/PageHeader";
import SearchBar from "../components/common/SearchBar";
import TableWrapper from "../components/common/TableWrapper";
import Table from "../components/common/Table";
import Badge from "../components/common/Badge";
import DeleteAction from "../components/common/DeleteAction";
import FilterDropdown from "../components/common/FilterDropdown";

export default function Playlists() {
  const [playlists, setPlaylists] = useState([]);
  const [search, setSearch] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [typeFilter, setTypeFilter] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPlaylists();
  }, []);

  const fetchPlaylists = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/admin/playlists`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const apiData = res?.data?.data || [];

      const formatted = apiData.map((p, index) => ({
        id: p.playlistId,
        user: p.user,
        title: p.playlistTitle,
        type: p.type,
        date: new Date(p.date).toLocaleString(),
      }));

      setPlaylists(formatted);
    } catch (error) {
      console.error("Playlists Fetch Error:", error);
      toast.error("Failed to fetch playlists");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this playlist?"
    );

    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");

      const res = await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/admin/playlists/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res?.data?.success) {
        toast.success(res.data.message || "Playlist deleted");

        setPlaylists((prev) => prev.filter((p) => p.id !== id));
      } else {
        toast.error("Delete failed");
      }
    } catch (error) {
      console.error("Delete Playlist Error:", error);
      toast.error(
        error?.response?.data?.message || "Delete failed"
      );
    }
  };

  const filteredPlaylists = playlists.filter(
    (p) =>
      p.user.toLowerCase().includes(search.toLowerCase()) &&
      (typeFilter === "" || p.type === typeFilter)
  );

  return (
    <>
      <PageHeader
        title="Playlists"
        subtitle="View all generated playlists"
      />

      <div className="relative">
        <SearchBar
          placeholder="Search by email..."
          onSearch={setSearch}
          onFilterClick={() => setFilterOpen((prev) => !prev)}
        />

        <FilterDropdown
          open={filterOpen}
          onClose={() => setFilterOpen(false)}
          selected={typeFilter}
          onChange={setTypeFilter}
        />
      </div>

      <TableWrapper title="Playlists">
        {loading ? (
          <div className="p-6 text-center text-gray-500">
            Loading playlists...
          </div>
        ) : (
          <Table
            columns={["User", "Playlist Title", "Type", "Date", "Action"]}
            data={filteredPlaylists}
            renderRow={(p) => (
              <>
                <td className="px-6 py-6">{p.user}</td>
                <td className="px-6 py-6">{p.title}</td>
                <td className="px-6 py-6">
                  <Badge type={p.type} />
                </td>
                <td className="px-6 py-6">{p.date}</td>
                <td className="px-6 py-6">
                  <DeleteAction onDelete={() => handleDelete(p.id)} />
                </td>
              </>
            )}
          />
        )}
      </TableWrapper>
    </>
  );
}