import { MagnifyingGlassIcon, FunnelIcon, BellIcon } from "@heroicons/react/24/outline";

type TopBarProps = {
  search: string;
  setSearch: (value: string) => void;
};

export default function TopBar({ search, setSearch }: TopBarProps) {
  return (
    <div className="flex items-center justify-between px-8 py-4 bg-white shadow-sm sticky top-0 z-20 font-[Inter]">
      {/* Search */}
      <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-2 w-1/2 shadow-sm">
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search something here..."
          className="bg-transparent outline-none w-full font-medium text-gray-700"
          style={{ fontFamily: 'Inter, sans-serif' }}
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      {/* Actions */}
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-1 px-4 py-2 bg-[#5B2EEC] text-white rounded-lg hover:bg-[#6C3EFF] transition font-semibold shadow-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
          <FunnelIcon className="h-5 w-5" />
          <span>Filter</span>
        </button>
        <button className="flex items-center gap-1 px-4 py-2 bg-[#5B2EEC] text-white rounded-lg hover:bg-[#6C3EFF] transition font-semibold shadow-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
          <MagnifyingGlassIcon className="h-5 w-5" />
          <span>Find</span>
        </button>
        <BellIcon className="h-6 w-6 text-gray-400" />
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="User"
          className="w-10 h-10 rounded-full border-2 border-[#5B2EEC] shadow"
        />
      </div>
    </div>
  );
}