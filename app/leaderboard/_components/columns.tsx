"use client";

import { AvatarFallback, Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { TrophyIcon } from "lucide-react";
import { ArrowUpDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export type UserRanker = {
  username: string;
  connectionCount: number;
  profilePicture?: string;
};

// const avatarRandomBg = [
//   "#FF5733",
//   "#33FF57",
//   "#3357FF",
//   "#FF33A1",
//   "#A133FF",
//   "#FFC300",
//   "#00FFC3",
//   "#C300FF",
//   "#FF00C3",
//   "#C3FF00",
//   "#00C3FF",
// ];

export const columns: ColumnDef<UserRanker>[] = [
  {
    accessorKey: "ranking",
    header: "Ranking",
    cell: ({ row }) => (
      <div className="flex gap-2 items-center">
        {row.index === 0 && <TrophyIcon className="w-6 h-6 fill-yellow-500" />}
        {row.index === 1 && <TrophyIcon className="w-6 h-6 fill-gray-300" />}
        {row.index === 2 && <TrophyIcon className="w-6 h-6 fill-amber-700" />}
        {row.index > 2 && <TrophyIcon className="w-6 h-6 fill-gray-500" />}
        {row.index + 1}
      </div>
    ),
  },
  {
    accessorKey: "username",
    header: "Username",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage
              src={row.original.profilePicture}
              alt={row.original.username}
            />
            <AvatarFallback className={cn("text-black bg-gray-200")}>
              {row.original.username.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="text-lg font-bold">{row.original.username}</div>
        </div>
      );
    },
  },
  {
    accessorKey: "connectionCount",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Connections
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div className="px-4">{row.original.connectionCount}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const userRanker = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Connections</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(userRanker.username)}
            >
              Copy user address
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(userRanker.username)}
            >
              Copy user handle
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View User</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Button className="h-6" size="sm">
                Ask to Connect
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
