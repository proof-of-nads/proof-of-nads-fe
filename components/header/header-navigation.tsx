"use client";

import { cn } from "@/lib/utils";
import {} from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderNavigation({
  className,
}: {
  className?: string;
}) {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  const targetLinks = [
    { label: "Profile", href: "/profile" },
    { label: "Connections", href: "/connections" },
    { label: "Leaderboard", href: "/leaderboard" },
    { label: "Docs", href: "https://baeksu.gitbook.io/proof-of-nads" },
  ];

  return (
    <nav
      className={cn(
        "flex flex-col lg:flex-row gap-3  items-center text-lg font-medium",
        className
      )}
    >
      {targetLinks.map((link) => (
        <Link
          className={cn(
            "p-2",
            isActive(link.href)
              ? "text-primary"
              : "lg:hover:text-primary/60 transition-colors"
          )}
          href={link.href}
          key={link.href}
          target={link.href.startsWith("http") ? "_blank" : "_self"}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
