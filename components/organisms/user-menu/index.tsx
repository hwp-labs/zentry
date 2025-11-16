"use client";

import {
  ChevronDownIcon,
  GemIcon,
  GiftIcon,
  HeadsetIcon,
  HeartHandshakeIcon,
  HeartIcon,
  LogOutIcon,
  ShoppingBagIcon,
  UserCogIcon,
} from "lucide-react";
//
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shadcn/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/shadcn/ui/dropdown-menu";
import { COLOR } from "@/constants/COLOR";

export const UserMenu: React.FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex items-center gap-3 cursor-pointer h-[60px] px-4 bg-gray-100">
          <Avatar>
            <AvatarImage src="https://github.com/2gbeh.png" />
            <AvatarFallback>ET</AvatarFallback>
          </Avatar>
          <p className="font-semibold">Hi, Sterling</p>
          <ChevronDownIcon size={16} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuItem>
          <UserCogIcon />
          My Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <ShoppingBagIcon />
          My Orders
        </DropdownMenuItem>
        <DropdownMenuItem>
          <HeartIcon />
          My Wishlist
        </DropdownMenuItem>
        <DropdownMenuItem>
          <GiftIcon />
          My Rewards
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <HeadsetIcon />
          Help Centre
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LogOutIcon stroke="red"/>
          <p style={{ color: "red" }}>Sign out</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
