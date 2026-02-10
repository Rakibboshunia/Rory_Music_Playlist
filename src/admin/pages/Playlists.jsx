import { useState } from "react";
import PageHeader from "../components/common/PageHeader";
import SearchBar from "../components/common/SearchBar";
import TableWrapper from "../components/common/TableWrapper";
import Table from "../components/common/Table";
import Badge from "../components/common/Badge";
import DeleteAction from "../components/common/DeleteAction";
import FilterDropdown from "../components/common/FilterDropdown";

const initialPlaylists = [
  { id: 1, user: "rakibul@example.com", title: "Groovy Sunset Vibes", type: "Free", date: "15 mins ago" },
  { id: 2, user: "sarah@example.com", title: "Classic Jazz for Sunday", type: "Paid", date: "30 mins ago" },
  { id: 3, user: "david@example.com", title: "Energetic Workout Mix", type: "Free", date: "1 hour ago" },
  { id: 4, user: "emma@example.com", title: "Chill Vibes After Work", type: "Paid", date: "2 hours ago" },
];

export default function Playlists() {
  const [playlists, setPlaylists] = useState(initialPlaylists);
  const [search, setSearch] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [typeFilter, setTypeFilter] = useState(""); // "", "Free", "Paid"

  // 🔍 search + filter combined
  const filteredPlaylists = playlists.filter(
    (p) =>
      p.user.toLowerCase().includes(search.toLowerCase()) &&
      (typeFilter === "" || p.type === typeFilter)
  );

  const handleDelete = (id) => {
    setPlaylists((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <>
      <PageHeader
        title="Playlists"
        subtitle="View all generated playlists"
      />

      {/* Search + Filter */}
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
      </TableWrapper>
    </>
  );
}