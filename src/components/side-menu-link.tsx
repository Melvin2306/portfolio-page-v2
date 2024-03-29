"use client";

import { memo, ReactElement } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRightIcon, AtSignIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface NavigationLinkProps {
  href: string;
  label: string;
  icon?: ReactElement; // Optional icon prop, defaulting to AtSignIcon if not provided
  shortcutNumber?: number; // Optional shortcutNumber
}

export const NavigationLink = memo(function NavigationLink({
  href,
  label,
  icon,
  shortcutNumber,
}: NavigationLinkProps) {
  const pathname = usePathname();
  const iconCmp = icon ?? <AtSignIcon size={16} />;

  const isInternal = href.startsWith("/");
  if (!isInternal) {
    return (
      <a
        key={href}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between gap-2 rounded-lg p-2 hover:bg-emerald-400/10"
      >
        <span className="inline-flex items-center gap-4 font-medium">
          {iconCmp} {label}
        </span>
        <ArrowUpRightIcon size={16} />
      </a>
    );
  }

  let isActive = false;
  if (pathname?.length > 0) {
    const splittedPathname = pathname.split("/");
    const currentPathname = splittedPathname[1] ?? "";
    isActive = currentPathname === href.split("/")[1];
  }

  return (
    <Link
      key={href}
      href={href}
      className={cn(
        "group flex items-center justify-between rounded-lg p-2",
        isActive ? "bg-emerald-400/20" : "hover:bg-emerald-400/10",
      )}
    >
      <span className="flex items-center gap-3">
        {iconCmp}
        <span className={cn("font-medium", isActive && "")}>{label}</span>
      </span>
      {shortcutNumber && (
        <span
          className={cn(
            "hidden h-6 w-6 place-content-center rounded border border-gray-200 bg-gray-100 text-xs font-medium text-gray-500 transition-colors duration-200 group-hover:border-gray-300 lg:grid",
            isActive &&
              "border-gray-600 bg-gray-700 text-gray-200 group-hover:border-gray-600",
          )}
          title={`Shortcut key: ${shortcutNumber}`}
        >
          {shortcutNumber}
        </span>
      )}
    </Link>
  );
});
