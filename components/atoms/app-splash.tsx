import Image from "next/image";
import { APP } from "@/constants/APP";
import { COLOR } from "@/constants/COLOR";

export const AppSplash: React.FC = () => {
  return (
    <div className="flex-center-center bg-brand h-screen">
      <main
        className="flex-center-center -mt-[100px] rounded-full p-3"
        style={{ backgroundColor: COLOR.brand_40 }}
      >
        <div
          className="flex-center-center rounded-full p-3"
          style={{ backgroundColor: COLOR.brand_30 }}
        >
          <div
            className="flex-center-center rounded-full p-3"
            style={{ backgroundColor: COLOR.brand_20 }}
          >
          {/*  */}
            <Image
              src="/logo.png"
              alt=""
              width={100}
              height={100}
              className="rounded-full"
              priority
            />
          </div>
        </div>
      </main>
      {/*  */}
      <footer className="flex-center-center fixed bottom-6 flex-col gap-1">
        <h1
          className="text-3xl font-bold tracking-wide"
          style={{ color: COLOR.white }}
        >
          {APP.name}
        </h1>
        <p
          className="font-light tracking-wider"
          style={{ color: COLOR.brand_10 }}
        >
          {APP.owner}
        </p>
      </footer>
    </div>
  );
};
