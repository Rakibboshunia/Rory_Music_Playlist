import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import PageHeader from "../components/common/PageHeader";
import SearchBar from "../components/common/SearchBar";
import TableWrapper from "../components/common/TableWrapper";
import Table from "../components/common/Table";
import Badge from "../components/common/Badge";
import DeleteAction from "../components/common/DeleteAction";
import FilterDropdown from "../components/common/FilterDropdown";
import Pagination from "../components/common/Pagination";

import {
  getAdminPlaylistsApi,
  deleteAdminPlaylistApi,
} from "../../api/adminApi";

export default function Playlists() {
  const [playlists, setPlaylists] = useState([]);
  const [search, setSearch] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [typeFilter, setTypeFilter] = useState("");
  const [loading, setLoading] = useState(true);

  // pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    fetchPlaylists();
  }, []);

  const fetchPlaylists = async () => {
    try {
      const res = await getAdminPlaylistsApi();

      const apiData = res?.data?.data || [];

      const formatted = apiData.map((p) => ({
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
      const res = await deleteAdminPlaylistApi(id);

      if (res?.data?.success) {
        toast.success(res.data.message || "Playlist deleted");

        setPlaylists((prev) => prev.filter((p) => p.id !== id));
      } else {
        toast.error(res?.data?.message || "Delete failed");
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

  // pagination logic
  const totalPages = Math.ceil(filteredPlaylists.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;

  const paginatedPlaylists = filteredPlaylists.slice(
    startIndex,
    startIndex + itemsPerPage
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
          onSearch={(value) => {
            setSearch(value);
            setCurrentPage(1);
          }}
          onFilterClick={() => setFilterOpen((prev) => !prev)}
        />

        <FilterDropdown
          open={filterOpen}
          onClose={() => setFilterOpen(false)}
          selected={typeFilter}
          onChange={(value) => {
            setTypeFilter(value);
            setCurrentPage(1);
          }}
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
            data={paginatedPlaylists}
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

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
}