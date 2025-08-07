import { HomeIcon, MagnifyingGlassIcon, BriefcaseIcon, ChatBubbleLeftRightIcon, ChartBarIcon, NewspaperIcon } from "@heroicons/react/24/outline";

const navItems = [
  { label: "Dashboard", icon: <HomeIcon className="h-6 w-6" /> },
  { label: "Search Job", icon: <MagnifyingGlassIcon className="h-6 w-6" /> },
  { label: "Applications", icon: <BriefcaseIcon className="h-6 w-6" /> },
  { label: "Message", icon: <ChatBubbleLeftRightIcon className="h-6 w-6" /> },
  { label: "Statistics", icon: <ChartBarIcon className="h-6 w-6" /> },
  { label: "News", icon: <NewspaperIcon className="h-6 w-6" /> },
];

export default function SidebarNav() {
  return (
    <aside className="bg-[#5B2EEC] text-white w-64 min-h-screen flex flex-col items-center py-8 font-[Inter]">
      {/* Logo */}
      <div className="mb-10">
        <div className="flex items-center gap-2">
          <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
            <span className="text-[#5B2EEC] font-extrabold text-2xl" style={{ fontFamily: 'cursive' }}>J</span>
          </div>
          <span className="font-extrabold text-xl tracking-wide" style={{ fontFamily: 'cursive' }}>Jobie</span>
        </div>
      </div>
      {/* Nav Items */}
      <nav className="flex flex-col gap-6 w-full px-6">
        {navItems.map((item) => (
          <button
            key={item.label}
            className="flex items-center gap-3 py-2 px-4 rounded-lg hover:bg-[#6C3EFF] transition font-medium tracking-wide"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
      {/* Footer */}
      <div className="mt-auto text-xs text-center text-white/60 px-4 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
        <p>Jobie Job Portal Admin Dashboard</p>
        <p className="mt-1">© 2024 All Rights Reserved</p>
      </div>
    </aside>
  );
}