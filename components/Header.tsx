"use client";

import Link from "next/link";
import { Users, Activity, User, Home, Bell } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { RoutePaths } from "@/lib/routes";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: RoutePaths.HOME, label: "Home", icon: Home },
    { href: RoutePaths.FRIENDS, label: "Friends", icon: Users },
    { href: RoutePaths.ACTIVITY, label: "Activity", icon: Activity },
    { href: RoutePaths.ACCOUNT, label: "Account", icon: User },
    { href: RoutePaths.GROUPS, label: "Groups", icon: Users },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={RoutePaths.HOME} className="flex items-center space-x-2">
              <span className="text-xl font-bold text-foreground">Splito</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.filter(item => item.href !== RoutePaths.HOME).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side - Theme toggle */}
          <div className="flex items-center space-x-4">
            {/* Notification Bell with Badge */}
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="relative"
                onClick={() => {
                  // Handle notification click
                }}
              >
                <Bell className="h-5 w-5" />
                {/* Notification Badge */}
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </Button>
            </div>
            <ThemeToggle />
          </div>
        </div>



        {/* Mobile Bottom Navigation */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-border z-50">
          <nav className="flex justify-around items-center h-16">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex flex-col items-center justify-center space-y-1 p-2 min-w-0 flex-1 ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="text-xs font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}