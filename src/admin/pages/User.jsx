import { useState } from "react";
import PageHeader from "../components/common/PageHeader";
import SearchBar from "../components/common/SearchBar";
import TableWrapper from "../components/common/TableWrapper";
import Table from "../components/common/Table";
import Badge from "../components/common/Badge";
import DeleteAction from "../components/common/DeleteAction";
import FilterDropdown from "../components/common/FilterDropdown";

const initialUsers = [
  { id: 1, email: "sarah.johnson@email.com", date: "Jan 24, 2026", playlists: 3, status: "Paid" },
  { id: 2, email: "mike.chen@email.com", date: "Jan 24, 2026", playlists: 1, status: "Free" },
  { id: 3, email: "emma.williams@email.com", date: "Jan 23, 2026", playlists: 5, status: "Paid" },
  { id: 4, email: "john.doe@email.com", date: "Jan 22, 2026", playlists: 2, status: "Free" },
];

export default function User() {
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState("");

  const filteredUsers = users.filter(
    (u) =>
      u.email.toLowerCase().includes(search.toLowerCase()) &&
      (statusFilter === "" || u.status === statusFilter)
  );

  const handleDelete = (id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  return (
    <>
      <PageHeader
        title="Users"
        subtitle="Manage and view all platform users"
      />

      {/* Search + Filter */}
      <div className="relative">
        <SearchBar
          placeholder="Search by email..."
          onSearch={setSearch}
          onFilterClick={() => setFilterOpen((p) => !p)}
        />

        <FilterDropdown
          open={filterOpen}
          onClose={() => setFilterOpen(false)}
          selected={statusFilter}
          onChange={setStatusFilter}
        />
      </div>

      <TableWrapper title="Users List">
        <Table
          columns={[
            "User Email",
            "Quiz Completed Date",
            "Create Playlist",
            "Status",
            "Actions",
          ]}
          data={filteredUsers}
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
      </TableWrapper>
    </>
  );
}