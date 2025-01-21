"use client";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Calendar, 
  Users, 
  Flag,
  LogOut,
} from "lucide-react";
import Image from "next/image";

const sidebarLinks = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard
  },
  {
    title: "Events",
    href: "/events",
    icon: Calendar
  },
  {
    title: "Registrations",
    href: "/registrations",
    icon: Users
  },
  {
    title: "Club Profile",
    href: "/profile",
    icon: Flag
  }
];

export default function ClubPortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-background">
      <aside className="group fixed top-0 left-0 h-screen bg-card border-r border-border transition-all duration-300 z-50 flex flex-col w-20 hover:w-64">
        {/* Top section */}
        <div className="flex items-center gap-3 p-4">
          <div className="w-10 h-10 relative flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Clustrix Logo"
              width={40}
              height={40}
              className="rounded-lg"
              priority
            />
          </div>
          <h1 className="font-bold text-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
            Clustrix
          </h1>
        </div>

        {/* Main navigation */}
        <nav className="mt-8 px-4 flex-1">
          {sidebarLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-accent/50 transition-colors",
                pathname === link.href ? "bg-accent text-accent-foreground" : "text-muted-foreground"
              )}>
              <link.icon size={20} className="flex-shrink-0" />
              <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                {link.title}
              </span>
            </Link>
          ))}
        </nav>

        {/* Bottom section */}
        <div className="border-t border-border p-4">
          <Link
            href="/profile-settings"
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-accent/50 transition-colors mb-2",
              pathname === "/profile" ? "bg-accent text-accent-foreground" : "text-muted-foreground"
            )}>
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
              PC
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
              <span className="text-sm font-medium">Photography Club</span>
              <span className="text-xs text-muted-foreground block">Edit details</span>
            </div>
          </Link>

          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-accent/50 transition-colors w-full text-muted-foreground"
          >
            <LogOut size={20} className="flex-shrink-0" />
            <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
              Logout
            </span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="transition-all duration-300 min-h-screen ml-20">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
