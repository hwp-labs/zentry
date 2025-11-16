import {
  BellDotIcon,
  BellIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "lucide-react";
//
import { Logo } from "@/components/atoms/logo";
import { SearchBar } from "./search-bar";
import { UserMenu } from "./user-menu";
import { COLOR } from "@/constants/COLOR";

export const Header: React.FC = () => {
  return (
    <section className="bg-white shadow-sm items-center flex">
      <div className="root-container w-full">
        <div className="flex items-center justify-between gap-8">
          <Logo withName />
          <SearchBar />
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 cursor-pointer _text-primary border-1 border-gray-100 p-2 rounded-md">
              <div className="relative">
                <BellIcon size={18} />

                <div className="absolute -top-0 right-0 bg-primary size-2 rounded-full"></div>
              </div>
              {/* <HeartIcon size={24} fill={COLOR.accentPink} stroke="" /> */}
              {/* <p className="font-semibold">Notifications</p> */}
            </div>
            <div className="flex items-center gap-2 cursor-pointer _text-primary border-1 border-gray-100 p-2 rounded-md relative">
              <ShoppingCartIcon size={18} />
              <div className="absolute -top-1 -right-1 size-4 rounded-full text-[10px] font-semibold text-white items-center justify-center flex" style={{ backgroundColor: COLOR.accentPink }}>
                15
              </div>
              {/* <p className="font-semibold">Cart</p> */}
            </div>
          </div>
          <UserMenu />
        </div>
      </div>
    </section>
  );
};
