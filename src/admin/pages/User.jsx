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
  getAdminUsersApi,
  deleteAdminUserApi,
} from "../../api/adminApi";

export default function User() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState("");
  const [loading, setLoading] = useState(true);

  // pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await getAdminUsersApi();

      const apiUsers = res?.data?.data || [];

      const formattedUsers = apiUsers.map((u) => ({
        id: u._id,
        email: u.email,
        date: u.quizCompletedAt
          ? new Date(u.quizCompletedAt).toLocaleString()
          : "N/A",
        playlists: u.playlistCount,
        status: u.status,
      }));

      setUsers(formattedUsers);
    } catch (error) {
      console.error("Users Fetch Error:", error);
      toast.error("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmDelete) return;

    try {
      const res = await deleteAdminUserApi(id);

      if (res?.data?.success) {
        toast.success(res.data.message || "User deleted successfully");

        setUsers((prev) => prev.filter((u) => u.id !== id));
      } else {
        toast.error(res?.data?.message || "Delete failed");
      }
    } catch (error) {
      console.error("Delete Error:", error);
      toast.error(
        error?.response?.data?.message || "Delete failed"
      );
    }
  };

  const filteredUsers = users.filter(
    (u) =>
      u.email.toLowerCase().includes(search.toLowerCase()) &&
      (statusFilter === "" || u.status === statusFilter)
  );

  // pagination logic
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;

  const paginatedUsers = filteredUsers.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <>
      <PageHeader
        title="Users"
        subtitle="Manage and view all platform users"
      />

      <div className="relative">
        <SearchBar
          placeholder="Search by email..."
          onSearch={(value) => {
            setSearch(value);
            setCurrentPage(1);
          }}
          onFilterClick={() => setFilterOpen((p) => !p)}
        />

        <FilterDropdown
          open={filterOpen}
          onClose={() => setFilterOpen(false)}
          selected={statusFilter}
          onChange={(value) => {
            setStatusFilter(value);
            setCurrentPage(1);
          }}
        />
      </div>

      <TableWrapper title="Users List">
        {loading ? (
          <div className="p-6 text-center text-gray-500">
            Loading users...
          </div>
        ) : (
          <Table
            columns={[
              "User Email",
              "Quiz Completed Date",
              "Create Playlist",
              "Status",
              "Actions",
            ]}
            data={paginatedUsers}
            renderRow={(u) => (
              <>
                <td className="px-6 py-6">{u.email}</td>
                <td className="px-6 py-6">{u.date}</td>
                <td className="px-6 py-6">{u.playlists}</td>
                <td className="px-6 py-6">
                  <Badge type={u.status} />
                </td>
                <td className="px-6 py-6">
                  <DeleteAction onDelete={() => handleDelete(u.id)} />
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